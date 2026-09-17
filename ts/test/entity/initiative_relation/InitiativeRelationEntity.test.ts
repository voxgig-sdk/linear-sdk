

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


describe('InitiativeRelationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.InitiativeRelation()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'initiative_relation.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"archivedAt","req":false,"short":"The time at which the entity was archived.","type":"`$ANY`","index$":0},{"active":true,"name":"createdAt","req":true,"short":"The time at which the entity was created.","type":"`$ANY`","index$":1},{"active":true,"name":"id","req":true,"short":"The unique identifier of the entity.","type":"`$STRING`","index$":2},{"active":true,"name":"initiative","req":false,"short":"The parent initiative in this hierarchical relation.","type":"`$OBJECT`","index$":3},{"active":true,"name":"relatedInitiative","req":false,"short":"The child initiative in this hierarchical relation.","type":"`$OBJECT`","index$":4},{"active":true,"name":"sortOrder","req":true,"short":"The sort order of the child initiative within its parent initiative.","type":"`$NUMBER`","index$":5},{"active":true,"name":"updatedAt","req":true,"short":"The last time at which the entity was meaningfully updated.","type":"`$ANY`","index$":6},{"active":true,"name":"user","req":false,"short":"The user who last created or modified the relation.","type":"`$OBJECT`","index$":7}],"id":{"field":"id","name":"id"},"name":"initiative_relation","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST initiativeRelationCreate","json":"{\"field\":{\"args\":[{\"gqltype\":\"InitiativeRelationCreateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"InitiativeRelationCreateInput\"}],\"deprecated\":false,\"desc\":\"Creates a new parent-child relation between two initiatives. The relation cannot create cycles or exceed maximum nesting depth.\",\"gqltype\":\"InitiativeRelationPayload!\",\"list\":false,\"name\":\"initiativeRelationCreate\",\"reqd\":true,\"type\":\"InitiativeRelationPayload\"},\"invocation\":{\"doc\":\"mutation InitiativeRelationCreate($input: InitiativeRelationCreateInput!) { initiativeRelationCreate(input: $input) { initiativeRelation { ...InitiativeRelationFields } success } } fragment InitiativeRelationFields on InitiativeRelation { archivedAt createdAt id initiative { id } relatedInitiative { id } sortOrder updatedAt user { id } }\",\"field\":\"initiativeRelationCreate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"\",\"gqltype\":\"InitiativeRelationCreateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"Float\":{\"desc\":\"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Float\"},\"InitiativeRelationCreateInput\":{\"desc\":\"Input for creating a parent-child relationship between two initiatives. The initiativeId is the parent and the relatedInitiativeId is the child.\",\"fields\":{\"id\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier in UUID v4 format. If none is provided, the backend will generate one.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"id\",\"reqd\":false,\"type\":\"String\"},\"initiativeId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the parent initiative in the hierarchy.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"initiativeId\",\"reqd\":true,\"type\":\"String\"},\"relatedInitiativeId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the child initiative in the hierarchy.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"relatedInitiativeId\",\"reqd\":true,\"type\":\"String\"},\"sortOrder\":{\"args\":[],\"deprecated\":false,\"desc\":\"The sort order of the child initiative within its parent.\",\"gqltype\":\"Float\",\"list\":false,\"name\":\"sortOrder\",\"reqd\":false,\"type\":\"Float\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"InitiativeRelationCreateInput\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation InitiativeRelationCreate($input: InitiativeRelationCreateInput!) { initiativeRelationCreate(input: $input) { initiativeRelation { ...InitiativeRelationFields } success } } fragment InitiativeRelationFields on InitiativeRelation { archivedAt createdAt id initiative { id } relatedInitiative { id } sortOrder updatedAt user { id } }","field":"initiativeRelationCreate","optype":"mutation","vars":[{"from":"","gqltype":"InitiativeRelationCreateInput!","name":"input"}]},"kind":"graphql","method":"POST","orig":"initiativeRelationCreate","segments":[],"select":{},"transform":{"req":"`reqdata`","res":"`body.data.initiativeRelationCreate.initiativeRelation`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"after","orig":"after","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"before","orig":"before","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"param","name":"first","orig":"first","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"kind":"param","name":"include_archived","orig":"include_archived","reqd":false,"type":"`$BOOLEAN`","index$":3},{"active":true,"kind":"param","name":"last","orig":"last","reqd":false,"type":"`$INTEGER`","index$":4},{"active":true,"kind":"param","name":"order_by","orig":"order_by","reqd":false,"type":"`$ANY`","index$":5}]},"contract":{"id":"POST initiativeRelations","json":"{\"field\":{\"args\":[{\"gqltype\":\"String\",\"name\":\"after\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"String\",\"name\":\"before\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"Int\",\"name\":\"first\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"Boolean\",\"name\":\"includeArchived\",\"reqd\":false,\"type\":\"Boolean\"},{\"gqltype\":\"Int\",\"name\":\"last\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\",\"reqd\":false,\"type\":\"PaginationOrderBy\"}],\"deprecated\":false,\"desc\":\"Returns all initiative parent-child relations in the workspace.\",\"gqltype\":\"InitiativeRelationConnection!\",\"list\":false,\"name\":\"initiativeRelations\",\"reqd\":true,\"type\":\"InitiativeRelationConnection\"},\"invocation\":{\"doc\":\"query InitiativeRelationList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { initiativeRelations(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...InitiativeRelationFields } pageInfo { endCursor hasNextPage } } } fragment InitiativeRelationFields on InitiativeRelation { archivedAt createdAt id initiative { id } relatedInitiative { id } sortOrder updatedAt user { id } }\",\"field\":\"initiativeRelations\",\"optype\":\"query\",\"page\":{\"cursor\":\"pageInfo.endCursor\",\"more\":\"pageInfo.hasNextPage\",\"nodes\":\"nodes\",\"style\":\"relay\"},\"vars\":[{\"from\":\"after\",\"gqltype\":\"String\",\"name\":\"after\"},{\"from\":\"before\",\"gqltype\":\"String\",\"name\":\"before\"},{\"from\":\"first\",\"gqltype\":\"Int\",\"name\":\"first\"},{\"from\":\"includeArchived\",\"gqltype\":\"Boolean\",\"name\":\"includeArchived\"},{\"from\":\"last\",\"gqltype\":\"Int\",\"name\":\"last\"},{\"from\":\"orderBy\",\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"Int\":{\"desc\":\"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Int\"},\"PaginationOrderBy\":{\"desc\":\"By which field should the pagination order by\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"PaginationOrderBy\",\"values\":[\"createdAt\",\"updatedAt\"]},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"query InitiativeRelationList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { initiativeRelations(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...InitiativeRelationFields } pageInfo { endCursor hasNextPage } } } fragment InitiativeRelationFields on InitiativeRelation { archivedAt createdAt id initiative { id } relatedInitiative { id } sortOrder updatedAt user { id } }","field":"initiativeRelations","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"}]},"kind":"graphql","method":"POST","orig":"initiativeRelations","segments":[],"select":{},"transform":{"req":"`reqdata`","res":"`body.data.initiativeRelations.nodes`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST initiativeRelation","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Returns a single initiative relation by its identifier.\",\"gqltype\":\"InitiativeRelation!\",\"list\":false,\"name\":\"initiativeRelation\",\"reqd\":true,\"type\":\"InitiativeRelation\"},\"invocation\":{\"doc\":\"query InitiativeRelationLoad($id: String!) { initiativeRelation(id: $id) { ...InitiativeRelationFields } } fragment InitiativeRelationFields on InitiativeRelation { archivedAt createdAt id initiative { id } relatedInitiative { id } sortOrder updatedAt user { id } }\",\"field\":\"initiativeRelation\",\"optype\":\"query\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"query InitiativeRelationLoad($id: String!) { initiativeRelation(id: $id) { ...InitiativeRelationFields } } fragment InitiativeRelationFields on InitiativeRelation { archivedAt createdAt id initiative { id } relatedInitiative { id } sortOrder updatedAt user { id } }","field":"initiativeRelation","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"kind":"graphql","method":"POST","orig":"initiativeRelation","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.initiativeRelation`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST initiativeRelationDelete","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Deletes an initiative relation.\",\"gqltype\":\"DeletePayload!\",\"list\":false,\"name\":\"initiativeRelationDelete\",\"reqd\":true,\"type\":\"DeletePayload\"},\"invocation\":{\"doc\":\"mutation InitiativeRelationRemove($id: String!) { initiativeRelationDelete(id: $id) { entityId lastSyncId success } }\",\"field\":\"initiativeRelationDelete\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation InitiativeRelationRemove($id: String!) { initiativeRelationDelete(id: $id) { entityId lastSyncId success } }","field":"initiativeRelationDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"kind":"graphql","method":"POST","orig":"initiativeRelationDelete","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.initiativeRelationDelete`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST initiativeRelationUpdate","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"},{\"gqltype\":\"InitiativeRelationUpdateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"InitiativeRelationUpdateInput\"}],\"deprecated\":false,\"desc\":\"Updates an initiative relation.\",\"gqltype\":\"InitiativeRelationPayload!\",\"list\":false,\"name\":\"initiativeRelationUpdate\",\"reqd\":true,\"type\":\"InitiativeRelationPayload\"},\"invocation\":{\"doc\":\"mutation InitiativeRelationUpdate($id: String!, $input: InitiativeRelationUpdateInput!) { initiativeRelationUpdate(id: $id, input: $input) { initiativeRelation { ...InitiativeRelationFields } success } } fragment InitiativeRelationFields on InitiativeRelation { archivedAt createdAt id initiative { id } relatedInitiative { id } sortOrder updatedAt user { id } }\",\"field\":\"initiativeRelationUpdate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"},{\"from\":\"\",\"gqltype\":\"InitiativeRelationUpdateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"Float\":{\"desc\":\"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Float\"},\"InitiativeRelationUpdateInput\":{\"desc\":\"The properties of the initiative relation to update.\",\"fields\":{\"sortOrder\":{\"args\":[],\"deprecated\":false,\"desc\":\"The sort order of the child initiative within its parent.\",\"gqltype\":\"Float\",\"list\":false,\"name\":\"sortOrder\",\"reqd\":false,\"type\":\"Float\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"InitiativeRelationUpdateInput\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation InitiativeRelationUpdate($id: String!, $input: InitiativeRelationUpdateInput!) { initiativeRelationUpdate(id: $id, input: $input) { initiativeRelation { ...InitiativeRelationFields } success } } fragment InitiativeRelationFields on InitiativeRelation { archivedAt createdAt id initiative { id } relatedInitiative { id } sortOrder updatedAt user { id } }","field":"initiativeRelationUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"InitiativeRelationUpdateInput!","name":"input"}]},"kind":"graphql","method":"POST","orig":"initiativeRelationUpdate","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.initiativeRelationUpdate.initiativeRelation`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"initiative_relation","name__orig":"initiative_relation","Name":"InitiativeRelation","name_":"initiative_relation","name-":"initiative-relation","NAME":"INITIATIVE_RELATION","index$":34}, {"active":true,"entity":"initiative_relation","key$":"BasicInitiativeRelationFlow","kind":"basic","name":"BasicInitiativeRelationFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"initiative_relation_ref01"},"match":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"initiative_relation_ref01"}}],"index$":1},{"active":true,"data":{},"input":{"ref":"initiative_relation_ref01","srcdatavar":"initiative_relation_ref01_data","suffix":"_up0"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-initiative_relation_ref01"}}],"valid":[],"index$":2},{"active":true,"data":{},"input":{"ref":"initiative_relation_ref01","srcdatavar":"initiative_relation_ref01_data","suffix":"_dt0"},"match":{"id":"initiative_relation01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-initiative_relation_ref01"}}],"index$":3},{"active":true,"data":{},"input":{"ref":"initiative_relation_ref01","suffix":"_rm0"},"match":{"id":"initiative_relation01"},"op":"remove","spec":[],"valid":[],"index$":4},{"active":true,"data":{},"input":{"suffix":"_rt0"},"match":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"op":"list","spec":[],"valid":[{"apply":"ItemNotExists","def":{"ref":"initiative_relation_ref01"}}],"index$":5}]}, 'InitiativeRelation')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const initiative_relation_ref01_ent = client.InitiativeRelation()
    let initiative_relation_ref01_data = setup.data.new.initiative_relation['initiative_relation_ref01']
    initiative_relation_ref01_data['after'] = setup.idmap['after01']
    initiative_relation_ref01_data['before'] = setup.idmap['before01']
    initiative_relation_ref01_data['first'] = setup.idmap['first01']
    initiative_relation_ref01_data['include_archived'] = setup.idmap['include_archived01']
    initiative_relation_ref01_data['last'] = setup.idmap['last01']
    initiative_relation_ref01_data['order_by'] = setup.idmap['order_by01']

    initiative_relation_ref01_data = (await initiative_relation_ref01_ent.create(initiative_relation_ref01_data)).data()
    assert(null != initiative_relation_ref01_data.id)


    // LIST
    const initiative_relation_ref01_match: any = {}
    initiative_relation_ref01_match['after'] = setup.idmap['after01']
    initiative_relation_ref01_match['before'] = setup.idmap['before01']
    initiative_relation_ref01_match['first'] = setup.idmap['first01']
    initiative_relation_ref01_match['include_archived'] = setup.idmap['include_archived01']
    initiative_relation_ref01_match['last'] = setup.idmap['last01']
    initiative_relation_ref01_match['order_by'] = setup.idmap['order_by01']

    const initiative_relation_ref01_list = (await initiative_relation_ref01_ent.list(initiative_relation_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(initiative_relation_ref01_list, { id: initiative_relation_ref01_data.id })))


    // UPDATE
    const initiative_relation_ref01_data_up0: any = {}
    initiative_relation_ref01_data_up0.id = initiative_relation_ref01_data.id

    const initiative_relation_ref01_resdata_up0 = (await initiative_relation_ref01_ent.update(initiative_relation_ref01_data_up0)).data()
    assert(initiative_relation_ref01_resdata_up0.id === initiative_relation_ref01_data_up0.id)


    // LOAD
    const initiative_relation_ref01_match_dt0: any = {}
    initiative_relation_ref01_match_dt0.id = initiative_relation_ref01_data.id
    const initiative_relation_ref01_data_dt0 = (await initiative_relation_ref01_ent.load(initiative_relation_ref01_match_dt0)).data()
    assert(initiative_relation_ref01_data_dt0.id === initiative_relation_ref01_data.id)


    // REMOVE
    const initiative_relation_ref01_match_rm0: any = { id: initiative_relation_ref01_data.id }
    await initiative_relation_ref01_ent.remove(initiative_relation_ref01_match_rm0)
  

    // LIST
    const initiative_relation_ref01_match_rt0: any = {}
    initiative_relation_ref01_match_rt0['after'] = setup.idmap['after01']
    initiative_relation_ref01_match_rt0['before'] = setup.idmap['before01']
    initiative_relation_ref01_match_rt0['first'] = setup.idmap['first01']
    initiative_relation_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01']
    initiative_relation_ref01_match_rt0['last'] = setup.idmap['last01']
    initiative_relation_ref01_match_rt0['order_by'] = setup.idmap['order_by01']

    const initiative_relation_ref01_list_rt0 = (await initiative_relation_ref01_ent.list(initiative_relation_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(initiative_relation_ref01_list_rt0, { id: initiative_relation_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/initiative_relation/InitiativeRelationTestData.json')

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
    ['initiative_relation01','initiative_relation02','initiative_relation03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_INITIATIVE_RELATION_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_INITIATIVE_RELATION_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_INITIATIVE_RELATION_ENTID']
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
  
