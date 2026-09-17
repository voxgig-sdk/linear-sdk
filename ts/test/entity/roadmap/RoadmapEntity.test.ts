

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


describe('RoadmapEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.Roadmap()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'roadmap.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"archivedAt","req":false,"short":"The time at which the entity was archived.","type":"`$ANY`","index$":0},{"active":true,"name":"color","req":false,"short":"The roadmap's color.","type":"`$STRING`","index$":1},{"active":true,"name":"createdAt","req":true,"short":"The time at which the entity was created.","type":"`$ANY`","index$":2},{"active":true,"name":"creator","req":false,"short":"The user who created the roadmap.","type":"`$OBJECT`","index$":3},{"active":true,"name":"description","req":false,"short":"The description of the roadmap.","type":"`$STRING`","index$":4},{"active":true,"name":"id","req":true,"short":"The unique identifier of the entity.","type":"`$STRING`","index$":5},{"active":true,"name":"name","req":true,"short":"The name of the roadmap.","type":"`$STRING`","index$":6},{"active":true,"name":"organization","req":false,"short":"The workspace of the roadmap.","type":"`$OBJECT`","index$":7},{"active":true,"name":"owner","req":false,"short":"The user who owns the roadmap.","type":"`$OBJECT`","index$":8},{"active":true,"name":"slugId","req":true,"short":"The roadmap's unique URL slug.","type":"`$STRING`","index$":9},{"active":true,"name":"sortOrder","req":true,"short":"The sort order of the roadmap within the workspace.","type":"`$NUMBER`","index$":10},{"active":true,"name":"updatedAt","req":true,"short":"The last time at which the entity was meaningfully updated.","type":"`$ANY`","index$":11},{"active":true,"name":"url","req":true,"short":"The canonical url for the roadmap.","type":"`$STRING`","index$":12}],"id":{"field":"id","name":"id"},"name":"roadmap","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST roadmapCreate","json":"{\"field\":{\"args\":[{\"gqltype\":\"RoadmapCreateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"RoadmapCreateInput\"}],\"deprecated\":true,\"desc\":\"Creates a new roadmap.\",\"gqltype\":\"RoadmapPayload!\",\"list\":false,\"name\":\"roadmapCreate\",\"reqd\":true,\"type\":\"RoadmapPayload\"},\"invocation\":{\"doc\":\"mutation RoadmapCreate($input: RoadmapCreateInput!) { roadmapCreate(input: $input) { roadmap { ...RoadmapFields } success } } fragment RoadmapFields on Roadmap { archivedAt color createdAt creator { id } description id name organization { id } owner { id } slugId sortOrder updatedAt url }\",\"field\":\"roadmapCreate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"\",\"gqltype\":\"RoadmapCreateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"Float\":{\"desc\":\"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Float\"},\"RoadmapCreateInput\":{\"desc\":\"Input for creating a new roadmap.\",\"fields\":{\"color\":{\"args\":[],\"deprecated\":false,\"desc\":\"The roadmap's color.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"color\",\"reqd\":false,\"type\":\"String\"},\"description\":{\"args\":[],\"deprecated\":false,\"desc\":\"The description of the roadmap.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"description\",\"reqd\":false,\"type\":\"String\"},\"id\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier in UUID v4 format. If none is provided, the backend will generate one.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"id\",\"reqd\":false,\"type\":\"String\"},\"name\":{\"args\":[],\"deprecated\":false,\"desc\":\"The name of the roadmap.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"name\",\"reqd\":true,\"type\":\"String\"},\"ownerId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The owner of the roadmap.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"ownerId\",\"reqd\":false,\"type\":\"String\"},\"sortOrder\":{\"args\":[],\"deprecated\":false,\"desc\":\"The sort order of the roadmap within the workspace.\",\"gqltype\":\"Float\",\"list\":false,\"name\":\"sortOrder\",\"reqd\":false,\"type\":\"Float\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"RoadmapCreateInput\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation RoadmapCreate($input: RoadmapCreateInput!) { roadmapCreate(input: $input) { roadmap { ...RoadmapFields } success } } fragment RoadmapFields on Roadmap { archivedAt color createdAt creator { id } description id name organization { id } owner { id } slugId sortOrder updatedAt url }","field":"roadmapCreate","optype":"mutation","vars":[{"from":"","gqltype":"RoadmapCreateInput!","name":"input"}]},"kind":"graphql","method":"POST","orig":"roadmapCreate","segments":[],"select":{},"transform":{"req":"`reqdata`","res":"`body.data.roadmapCreate.roadmap`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"after","orig":"after","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"before","orig":"before","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"param","name":"first","orig":"first","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"kind":"param","name":"include_archived","orig":"include_archived","reqd":false,"type":"`$BOOLEAN`","index$":3},{"active":true,"kind":"param","name":"last","orig":"last","reqd":false,"type":"`$INTEGER`","index$":4},{"active":true,"kind":"param","name":"order_by","orig":"order_by","reqd":false,"type":"`$ANY`","index$":5}]},"contract":{"id":"POST roadmaps","json":"{\"field\":{\"args\":[{\"gqltype\":\"String\",\"name\":\"after\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"String\",\"name\":\"before\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"Int\",\"name\":\"first\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"Boolean\",\"name\":\"includeArchived\",\"reqd\":false,\"type\":\"Boolean\"},{\"gqltype\":\"Int\",\"name\":\"last\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\",\"reqd\":false,\"type\":\"PaginationOrderBy\"}],\"deprecated\":true,\"desc\":\"[Deprecated] Returns all roadmaps in the workspace. Use initiatives instead.\",\"gqltype\":\"RoadmapConnection!\",\"list\":false,\"name\":\"roadmaps\",\"reqd\":true,\"type\":\"RoadmapConnection\"},\"invocation\":{\"doc\":\"query RoadmapList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { roadmaps(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...RoadmapFields } pageInfo { endCursor hasNextPage } } } fragment RoadmapFields on Roadmap { archivedAt color createdAt creator { id } description id name organization { id } owner { id } slugId sortOrder updatedAt url }\",\"field\":\"roadmaps\",\"optype\":\"query\",\"page\":{\"cursor\":\"pageInfo.endCursor\",\"more\":\"pageInfo.hasNextPage\",\"nodes\":\"nodes\",\"style\":\"relay\"},\"vars\":[{\"from\":\"after\",\"gqltype\":\"String\",\"name\":\"after\"},{\"from\":\"before\",\"gqltype\":\"String\",\"name\":\"before\"},{\"from\":\"first\",\"gqltype\":\"Int\",\"name\":\"first\"},{\"from\":\"includeArchived\",\"gqltype\":\"Boolean\",\"name\":\"includeArchived\"},{\"from\":\"last\",\"gqltype\":\"Int\",\"name\":\"last\"},{\"from\":\"orderBy\",\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"Int\":{\"desc\":\"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Int\"},\"PaginationOrderBy\":{\"desc\":\"By which field should the pagination order by\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"PaginationOrderBy\",\"values\":[\"createdAt\",\"updatedAt\"]},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"query RoadmapList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { roadmaps(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...RoadmapFields } pageInfo { endCursor hasNextPage } } } fragment RoadmapFields on Roadmap { archivedAt color createdAt creator { id } description id name organization { id } owner { id } slugId sortOrder updatedAt url }","field":"roadmaps","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"}]},"kind":"graphql","method":"POST","orig":"roadmaps","segments":[],"select":{},"transform":{"req":"`reqdata`","res":"`body.data.roadmaps.nodes`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST roadmap","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":true,\"desc\":\"[Deprecated] Returns a single roadmap by its identifier. Use initiatives instead.\",\"gqltype\":\"Roadmap!\",\"list\":false,\"name\":\"roadmap\",\"reqd\":true,\"type\":\"Roadmap\"},\"invocation\":{\"doc\":\"query RoadmapLoad($id: String!) { roadmap(id: $id) { ...RoadmapFields } } fragment RoadmapFields on Roadmap { archivedAt color createdAt creator { id } description id name organization { id } owner { id } slugId sortOrder updatedAt url }\",\"field\":\"roadmap\",\"optype\":\"query\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"query RoadmapLoad($id: String!) { roadmap(id: $id) { ...RoadmapFields } } fragment RoadmapFields on Roadmap { archivedAt color createdAt creator { id } description id name organization { id } owner { id } slugId sortOrder updatedAt url }","field":"roadmap","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"kind":"graphql","method":"POST","orig":"roadmap","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.roadmap`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST roadmapDelete","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":true,\"desc\":\"Deletes a roadmap.\",\"gqltype\":\"DeletePayload!\",\"list\":false,\"name\":\"roadmapDelete\",\"reqd\":true,\"type\":\"DeletePayload\"},\"invocation\":{\"doc\":\"mutation RoadmapRemove($id: String!) { roadmapDelete(id: $id) { entityId lastSyncId success } }\",\"field\":\"roadmapDelete\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation RoadmapRemove($id: String!) { roadmapDelete(id: $id) { entityId lastSyncId success } }","field":"roadmapDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"kind":"graphql","method":"POST","orig":"roadmapDelete","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.roadmapDelete`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`"}]},"contract":{"id":"POST roadmapArchive","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":true,\"desc\":\"Archives a roadmap.\",\"gqltype\":\"RoadmapArchivePayload!\",\"list\":false,\"name\":\"roadmapArchive\",\"reqd\":true,\"type\":\"RoadmapArchivePayload\"},\"invocation\":{\"doc\":\"mutation RoadmapUpdateArchive($id: String!) { roadmapArchive(id: $id) { entity { ...RoadmapFields } success } } fragment RoadmapFields on Roadmap { archivedAt color createdAt creator { id } description id name organization { id } owner { id } slugId sortOrder updatedAt url }\",\"field\":\"roadmapArchive\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation RoadmapUpdateArchive($id: String!) { roadmapArchive(id: $id) { entity { ...RoadmapFields } success } } fragment RoadmapFields on Roadmap { archivedAt color createdAt creator { id } description id name organization { id } owner { id } slugId sortOrder updatedAt url }","field":"roadmapArchive","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"kind":"graphql","method":"POST","orig":"roadmapArchive","segments":[],"select":{"$action":"archive","exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.roadmapArchive.entity`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`"}]},"contract":{"id":"POST roadmapUnarchive","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":true,\"desc\":\"Unarchives a roadmap.\",\"gqltype\":\"RoadmapArchivePayload!\",\"list\":false,\"name\":\"roadmapUnarchive\",\"reqd\":true,\"type\":\"RoadmapArchivePayload\"},\"invocation\":{\"doc\":\"mutation RoadmapUpdateUnarchive($id: String!) { roadmapUnarchive(id: $id) { entity { ...RoadmapFields } success } } fragment RoadmapFields on Roadmap { archivedAt color createdAt creator { id } description id name organization { id } owner { id } slugId sortOrder updatedAt url }\",\"field\":\"roadmapUnarchive\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation RoadmapUpdateUnarchive($id: String!) { roadmapUnarchive(id: $id) { entity { ...RoadmapFields } success } } fragment RoadmapFields on Roadmap { archivedAt color createdAt creator { id } description id name organization { id } owner { id } slugId sortOrder updatedAt url }","field":"roadmapUnarchive","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"kind":"graphql","method":"POST","orig":"roadmapUnarchive","segments":[],"select":{"$action":"unarchive","exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.roadmapUnarchive.entity`"},"index$":1},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST roadmapUpdate","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"},{\"gqltype\":\"RoadmapUpdateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"RoadmapUpdateInput\"}],\"deprecated\":true,\"desc\":\"Updates a roadmap.\",\"gqltype\":\"RoadmapPayload!\",\"list\":false,\"name\":\"roadmapUpdate\",\"reqd\":true,\"type\":\"RoadmapPayload\"},\"invocation\":{\"doc\":\"mutation RoadmapUpdate($id: String!, $input: RoadmapUpdateInput!) { roadmapUpdate(id: $id, input: $input) { roadmap { ...RoadmapFields } success } } fragment RoadmapFields on Roadmap { archivedAt color createdAt creator { id } description id name organization { id } owner { id } slugId sortOrder updatedAt url }\",\"field\":\"roadmapUpdate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"},{\"from\":\"\",\"gqltype\":\"RoadmapUpdateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"Float\":{\"desc\":\"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Float\"},\"RoadmapUpdateInput\":{\"desc\":\"Input for updating an existing roadmap.\",\"fields\":{\"color\":{\"args\":[],\"deprecated\":false,\"desc\":\"The roadmap's color.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"color\",\"reqd\":false,\"type\":\"String\"},\"description\":{\"args\":[],\"deprecated\":false,\"desc\":\"The description of the roadmap.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"description\",\"reqd\":false,\"type\":\"String\"},\"name\":{\"args\":[],\"deprecated\":false,\"desc\":\"The name of the roadmap.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"name\",\"reqd\":false,\"type\":\"String\"},\"ownerId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The owner of the roadmap.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"ownerId\",\"reqd\":false,\"type\":\"String\"},\"sortOrder\":{\"args\":[],\"deprecated\":false,\"desc\":\"The sort order of the roadmap within the workspace.\",\"gqltype\":\"Float\",\"list\":false,\"name\":\"sortOrder\",\"reqd\":false,\"type\":\"Float\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"RoadmapUpdateInput\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation RoadmapUpdate($id: String!, $input: RoadmapUpdateInput!) { roadmapUpdate(id: $id, input: $input) { roadmap { ...RoadmapFields } success } } fragment RoadmapFields on Roadmap { archivedAt color createdAt creator { id } description id name organization { id } owner { id } slugId sortOrder updatedAt url }","field":"roadmapUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"RoadmapUpdateInput!","name":"input"}]},"kind":"graphql","method":"POST","orig":"roadmapUpdate","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.roadmapUpdate.roadmap`"},"index$":2}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"roadmap","name__orig":"roadmap","Name":"Roadmap","name_":"roadmap","name-":"roadmap","NAME":"ROADMAP","index$":70}, {"active":true,"entity":"roadmap","key$":"BasicRoadmapFlow","kind":"basic","name":"BasicRoadmapFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"roadmap_ref01"},"match":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"roadmap_ref01"}}],"index$":1},{"active":true,"data":{},"input":{"ref":"roadmap_ref01","srcdatavar":"roadmap_ref01_data","suffix":"_up0","textfield":"color"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-roadmap_ref01"}}],"valid":[],"index$":2},{"active":true,"data":{},"input":{"ref":"roadmap_ref01","srcdatavar":"roadmap_ref01_data","suffix":"_dt0"},"match":{"id":"roadmap01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-roadmap_ref01"}}],"index$":3},{"active":true,"data":{},"input":{"ref":"roadmap_ref01","suffix":"_rm0"},"match":{"id":"roadmap01"},"op":"remove","spec":[],"valid":[],"index$":4},{"active":true,"data":{},"input":{"suffix":"_rt0"},"match":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"op":"list","spec":[],"valid":[{"apply":"ItemNotExists","def":{"ref":"roadmap_ref01"}}],"index$":5}]}, 'Roadmap')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const roadmap_ref01_ent = client.Roadmap()
    let roadmap_ref01_data = setup.data.new.roadmap['roadmap_ref01']
    roadmap_ref01_data['after'] = setup.idmap['after01']
    roadmap_ref01_data['before'] = setup.idmap['before01']
    roadmap_ref01_data['first'] = setup.idmap['first01']
    roadmap_ref01_data['include_archived'] = setup.idmap['include_archived01']
    roadmap_ref01_data['last'] = setup.idmap['last01']
    roadmap_ref01_data['order_by'] = setup.idmap['order_by01']

    roadmap_ref01_data = (await roadmap_ref01_ent.create(roadmap_ref01_data)).data()
    assert(null != roadmap_ref01_data.id)


    // LIST
    const roadmap_ref01_match: any = {}
    roadmap_ref01_match['after'] = setup.idmap['after01']
    roadmap_ref01_match['before'] = setup.idmap['before01']
    roadmap_ref01_match['first'] = setup.idmap['first01']
    roadmap_ref01_match['include_archived'] = setup.idmap['include_archived01']
    roadmap_ref01_match['last'] = setup.idmap['last01']
    roadmap_ref01_match['order_by'] = setup.idmap['order_by01']

    const roadmap_ref01_list = (await roadmap_ref01_ent.list(roadmap_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(roadmap_ref01_list, { id: roadmap_ref01_data.id })))


    // UPDATE
    const roadmap_ref01_data_up0: any = {}
    roadmap_ref01_data_up0.id = roadmap_ref01_data.id

    const roadmap_ref01_markdef_up0 = { name: 'color', value: 'Mark01-roadmap_ref01_' + setup.now }
    ;(roadmap_ref01_data_up0 as any)[roadmap_ref01_markdef_up0.name] = roadmap_ref01_markdef_up0.value

    const roadmap_ref01_resdata_up0 = (await roadmap_ref01_ent.update(roadmap_ref01_data_up0)).data()
    assert(roadmap_ref01_resdata_up0.id === roadmap_ref01_data_up0.id)

    assert((roadmap_ref01_resdata_up0 as any)[roadmap_ref01_markdef_up0.name] === roadmap_ref01_markdef_up0.value)


    // LOAD
    const roadmap_ref01_match_dt0: any = {}
    roadmap_ref01_match_dt0.id = roadmap_ref01_data.id
    const roadmap_ref01_data_dt0 = (await roadmap_ref01_ent.load(roadmap_ref01_match_dt0)).data()
    assert(roadmap_ref01_data_dt0.id === roadmap_ref01_data.id)


    // REMOVE
    const roadmap_ref01_match_rm0: any = { id: roadmap_ref01_data.id }
    await roadmap_ref01_ent.remove(roadmap_ref01_match_rm0)
  

    // LIST
    const roadmap_ref01_match_rt0: any = {}
    roadmap_ref01_match_rt0['after'] = setup.idmap['after01']
    roadmap_ref01_match_rt0['before'] = setup.idmap['before01']
    roadmap_ref01_match_rt0['first'] = setup.idmap['first01']
    roadmap_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01']
    roadmap_ref01_match_rt0['last'] = setup.idmap['last01']
    roadmap_ref01_match_rt0['order_by'] = setup.idmap['order_by01']

    const roadmap_ref01_list_rt0 = (await roadmap_ref01_ent.list(roadmap_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(roadmap_ref01_list_rt0, { id: roadmap_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/roadmap/RoadmapTestData.json')

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
    ['roadmap01','roadmap02','roadmap03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_ROADMAP_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_ROADMAP_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_ROADMAP_ENTID']
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
  
