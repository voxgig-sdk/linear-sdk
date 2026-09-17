

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


describe('TeamMembershipEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.TeamMembership()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'team_membership.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"archivedAt","req":false,"short":"The time at which the entity was archived.","type":"`$ANY`","index$":0},{"active":true,"name":"createdAt","req":true,"short":"The time at which the entity was created.","type":"`$ANY`","index$":1},{"active":true,"name":"id","req":true,"short":"The unique identifier of the entity.","type":"`$STRING`","index$":2},{"active":true,"name":"owner","req":true,"short":"Whether the user is an owner of the team.","type":"`$BOOLEAN`","index$":3},{"active":true,"name":"sortOrder","req":true,"short":"The sort order of this team in the user's personal team list.","type":"`$NUMBER`","index$":4},{"active":true,"name":"team","req":false,"short":"The team that the membership is associated with.","type":"`$OBJECT`","index$":5},{"active":true,"name":"updatedAt","req":true,"short":"The last time at which the entity was meaningfully updated.","type":"`$ANY`","index$":6},{"active":true,"name":"user","req":false,"short":"The user that the membership is associated with.","type":"`$OBJECT`","index$":7}],"id":{"field":"id","name":"id"},"name":"team_membership","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST teamMembershipCreate","json":"{\"field\":{\"args\":[{\"gqltype\":\"TeamMembershipCreateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"TeamMembershipCreateInput\"}],\"deprecated\":false,\"desc\":\"Creates a new team membership, adding a user to a team. Validates that the user is not already a member, the team is not archived or retired, and the requesting user has permission to add members.\",\"gqltype\":\"TeamMembershipPayload!\",\"list\":false,\"name\":\"teamMembershipCreate\",\"reqd\":true,\"type\":\"TeamMembershipPayload\"},\"invocation\":{\"doc\":\"mutation TeamMembershipCreate($input: TeamMembershipCreateInput!) { teamMembershipCreate(input: $input) { teamMembership { ...TeamMembershipFields } success } } fragment TeamMembershipFields on TeamMembership { archivedAt createdAt id owner sortOrder team { id } updatedAt user { id } }\",\"field\":\"teamMembershipCreate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"\",\"gqltype\":\"TeamMembershipCreateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"Float\":{\"desc\":\"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Float\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"},\"TeamMembershipCreateInput\":{\"desc\":\"Input for creating a new team membership.\",\"fields\":{\"id\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier in UUID v4 format. If none is provided, the backend will generate one.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"id\",\"reqd\":false,\"type\":\"String\"},\"owner\":{\"args\":[],\"deprecated\":false,\"desc\":\"Internal. Whether the user is the owner of the team.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"owner\",\"reqd\":false,\"type\":\"Boolean\"},\"sortOrder\":{\"args\":[],\"deprecated\":false,\"desc\":\"The position of the item in the users list.\",\"gqltype\":\"Float\",\"list\":false,\"name\":\"sortOrder\",\"reqd\":false,\"type\":\"Float\"},\"teamId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the team associated with the membership.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"teamId\",\"reqd\":true,\"type\":\"String\"},\"userId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the user associated with the membership.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"userId\",\"reqd\":true,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"TeamMembershipCreateInput\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation TeamMembershipCreate($input: TeamMembershipCreateInput!) { teamMembershipCreate(input: $input) { teamMembership { ...TeamMembershipFields } success } } fragment TeamMembershipFields on TeamMembership { archivedAt createdAt id owner sortOrder team { id } updatedAt user { id } }","field":"teamMembershipCreate","optype":"mutation","vars":[{"from":"","gqltype":"TeamMembershipCreateInput!","name":"input"}]},"kind":"graphql","method":"POST","orig":"teamMembershipCreate","segments":[],"select":{},"transform":{"req":"`reqdata`","res":"`body.data.teamMembershipCreate.teamMembership`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"after","orig":"after","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"before","orig":"before","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"param","name":"first","orig":"first","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"kind":"param","name":"include_archived","orig":"include_archived","reqd":false,"type":"`$BOOLEAN`","index$":3},{"active":true,"kind":"param","name":"last","orig":"last","reqd":false,"type":"`$INTEGER`","index$":4},{"active":true,"kind":"param","name":"order_by","orig":"order_by","reqd":false,"type":"`$ANY`","index$":5}]},"contract":{"id":"POST teamMemberships","json":"{\"field\":{\"args\":[{\"gqltype\":\"String\",\"name\":\"after\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"String\",\"name\":\"before\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"Int\",\"name\":\"first\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"Boolean\",\"name\":\"includeArchived\",\"reqd\":false,\"type\":\"Boolean\"},{\"gqltype\":\"Int\",\"name\":\"last\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\",\"reqd\":false,\"type\":\"PaginationOrderBy\"}],\"deprecated\":false,\"desc\":\"All team memberships in the workspace.\",\"gqltype\":\"TeamMembershipConnection!\",\"list\":false,\"name\":\"teamMemberships\",\"reqd\":true,\"type\":\"TeamMembershipConnection\"},\"invocation\":{\"doc\":\"query TeamMembershipList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { teamMemberships(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...TeamMembershipFields } pageInfo { endCursor hasNextPage } } } fragment TeamMembershipFields on TeamMembership { archivedAt createdAt id owner sortOrder team { id } updatedAt user { id } }\",\"field\":\"teamMemberships\",\"optype\":\"query\",\"page\":{\"cursor\":\"pageInfo.endCursor\",\"more\":\"pageInfo.hasNextPage\",\"nodes\":\"nodes\",\"style\":\"relay\"},\"vars\":[{\"from\":\"after\",\"gqltype\":\"String\",\"name\":\"after\"},{\"from\":\"before\",\"gqltype\":\"String\",\"name\":\"before\"},{\"from\":\"first\",\"gqltype\":\"Int\",\"name\":\"first\"},{\"from\":\"includeArchived\",\"gqltype\":\"Boolean\",\"name\":\"includeArchived\"},{\"from\":\"last\",\"gqltype\":\"Int\",\"name\":\"last\"},{\"from\":\"orderBy\",\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"Int\":{\"desc\":\"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Int\"},\"PaginationOrderBy\":{\"desc\":\"By which field should the pagination order by\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"PaginationOrderBy\",\"values\":[\"createdAt\",\"updatedAt\"]},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"query TeamMembershipList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { teamMemberships(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...TeamMembershipFields } pageInfo { endCursor hasNextPage } } } fragment TeamMembershipFields on TeamMembership { archivedAt createdAt id owner sortOrder team { id } updatedAt user { id } }","field":"teamMemberships","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"}]},"kind":"graphql","method":"POST","orig":"teamMemberships","segments":[],"select":{},"transform":{"req":"`reqdata`","res":"`body.data.teamMemberships.nodes`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST teamMembership","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Fetches a specific team membership by its ID.\",\"gqltype\":\"TeamMembership!\",\"list\":false,\"name\":\"teamMembership\",\"reqd\":true,\"type\":\"TeamMembership\"},\"invocation\":{\"doc\":\"query TeamMembershipLoad($id: String!) { teamMembership(id: $id) { ...TeamMembershipFields } } fragment TeamMembershipFields on TeamMembership { archivedAt createdAt id owner sortOrder team { id } updatedAt user { id } }\",\"field\":\"teamMembership\",\"optype\":\"query\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"query TeamMembershipLoad($id: String!) { teamMembership(id: $id) { ...TeamMembershipFields } } fragment TeamMembershipFields on TeamMembership { archivedAt createdAt id owner sortOrder team { id } updatedAt user { id } }","field":"teamMembership","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"kind":"graphql","method":"POST","orig":"teamMembership","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.teamMembership`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"also_leave_parent_team","orig":"also_leave_parent_team","reqd":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"POST teamMembershipDelete","json":"{\"field\":{\"args\":[{\"gqltype\":\"Boolean\",\"name\":\"alsoLeaveParentTeams\",\"reqd\":false,\"type\":\"Boolean\"},{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Deletes a team membership, removing the user from the team. Users can remove their own membership, or team owners and workspace admins can remove other members.\",\"gqltype\":\"DeletePayload!\",\"list\":false,\"name\":\"teamMembershipDelete\",\"reqd\":true,\"type\":\"DeletePayload\"},\"invocation\":{\"doc\":\"mutation TeamMembershipRemove($alsoLeaveParentTeams: Boolean, $id: String!) { teamMembershipDelete(alsoLeaveParentTeams: $alsoLeaveParentTeams, id: $id) { entityId lastSyncId success } }\",\"field\":\"teamMembershipDelete\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"alsoLeaveParentTeams\",\"gqltype\":\"Boolean\",\"name\":\"alsoLeaveParentTeams\"},{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation TeamMembershipRemove($alsoLeaveParentTeams: Boolean, $id: String!) { teamMembershipDelete(alsoLeaveParentTeams: $alsoLeaveParentTeams, id: $id) { entityId lastSyncId success } }","field":"teamMembershipDelete","optype":"mutation","vars":[{"from":"alsoLeaveParentTeams","gqltype":"Boolean","name":"alsoLeaveParentTeams"},{"from":"id","gqltype":"String!","name":"id"}]},"kind":"graphql","method":"POST","orig":"teamMembershipDelete","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.teamMembershipDelete`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST teamMembershipUpdate","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"},{\"gqltype\":\"TeamMembershipUpdateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"TeamMembershipUpdateInput\"}],\"deprecated\":false,\"desc\":\"Updates a team membership, such as changing ownership status or sort order.\",\"gqltype\":\"TeamMembershipPayload!\",\"list\":false,\"name\":\"teamMembershipUpdate\",\"reqd\":true,\"type\":\"TeamMembershipPayload\"},\"invocation\":{\"doc\":\"mutation TeamMembershipUpdate($id: String!, $input: TeamMembershipUpdateInput!) { teamMembershipUpdate(id: $id, input: $input) { teamMembership { ...TeamMembershipFields } success } } fragment TeamMembershipFields on TeamMembership { archivedAt createdAt id owner sortOrder team { id } updatedAt user { id } }\",\"field\":\"teamMembershipUpdate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"},{\"from\":\"\",\"gqltype\":\"TeamMembershipUpdateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"Float\":{\"desc\":\"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Float\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"},\"TeamMembershipUpdateInput\":{\"desc\":\"Input for updating an existing team membership.\",\"fields\":{\"owner\":{\"args\":[],\"deprecated\":false,\"desc\":\"Internal. Whether the user is the owner of the team.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"owner\",\"reqd\":false,\"type\":\"Boolean\"},\"sortOrder\":{\"args\":[],\"deprecated\":false,\"desc\":\"The position of the item in the users list.\",\"gqltype\":\"Float\",\"list\":false,\"name\":\"sortOrder\",\"reqd\":false,\"type\":\"Float\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"TeamMembershipUpdateInput\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation TeamMembershipUpdate($id: String!, $input: TeamMembershipUpdateInput!) { teamMembershipUpdate(id: $id, input: $input) { teamMembership { ...TeamMembershipFields } success } } fragment TeamMembershipFields on TeamMembership { archivedAt createdAt id owner sortOrder team { id } updatedAt user { id } }","field":"teamMembershipUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"TeamMembershipUpdateInput!","name":"input"}]},"kind":"graphql","method":"POST","orig":"teamMembershipUpdate","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.teamMembershipUpdate.teamMembership`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"team_membership","name__orig":"team_membership","Name":"TeamMembership","name_":"team_membership","name-":"team-membership","NAME":"TEAM_MEMBERSHIP","index$":75}, {"active":true,"entity":"team_membership","key$":"BasicTeamMembershipFlow","kind":"basic","name":"BasicTeamMembershipFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"team_membership_ref01"},"match":{"after":"after01","also_leave_parent_team":"also_leave_parent_team01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"team_membership_ref01"}}],"index$":1},{"active":true,"data":{},"input":{"ref":"team_membership_ref01","srcdatavar":"team_membership_ref01_data","suffix":"_up0"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-team_membership_ref01"}}],"valid":[],"index$":2},{"active":true,"data":{},"input":{"ref":"team_membership_ref01","srcdatavar":"team_membership_ref01_data","suffix":"_dt0"},"match":{"id":"team_membership01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-team_membership_ref01"}}],"index$":3},{"active":true,"data":{},"input":{"ref":"team_membership_ref01","suffix":"_rm0"},"match":{"also_leave_parent_team":"also_leave_parent_team01","id":"team_membership01"},"op":"remove","spec":[],"valid":[],"index$":4},{"active":true,"data":{},"input":{"suffix":"_rt0"},"match":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"op":"list","spec":[],"valid":[{"apply":"ItemNotExists","def":{"ref":"team_membership_ref01"}}],"index$":5}]}, 'TeamMembership')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const team_membership_ref01_ent = client.TeamMembership()
    let team_membership_ref01_data = setup.data.new.team_membership['team_membership_ref01']
    team_membership_ref01_data['after'] = setup.idmap['after01']
    team_membership_ref01_data['also_leave_parent_team'] = setup.idmap['also_leave_parent_team01']
    team_membership_ref01_data['before'] = setup.idmap['before01']
    team_membership_ref01_data['first'] = setup.idmap['first01']
    team_membership_ref01_data['include_archived'] = setup.idmap['include_archived01']
    team_membership_ref01_data['last'] = setup.idmap['last01']
    team_membership_ref01_data['order_by'] = setup.idmap['order_by01']

    team_membership_ref01_data = (await team_membership_ref01_ent.create(team_membership_ref01_data)).data()
    assert(null != team_membership_ref01_data.id)


    // LIST
    const team_membership_ref01_match: any = {}
    team_membership_ref01_match['after'] = setup.idmap['after01']
    team_membership_ref01_match['before'] = setup.idmap['before01']
    team_membership_ref01_match['first'] = setup.idmap['first01']
    team_membership_ref01_match['include_archived'] = setup.idmap['include_archived01']
    team_membership_ref01_match['last'] = setup.idmap['last01']
    team_membership_ref01_match['order_by'] = setup.idmap['order_by01']

    const team_membership_ref01_list = (await team_membership_ref01_ent.list(team_membership_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(team_membership_ref01_list, { id: team_membership_ref01_data.id })))


    // UPDATE
    const team_membership_ref01_data_up0: any = {}
    team_membership_ref01_data_up0.id = team_membership_ref01_data.id

    const team_membership_ref01_resdata_up0 = (await team_membership_ref01_ent.update(team_membership_ref01_data_up0)).data()
    assert(team_membership_ref01_resdata_up0.id === team_membership_ref01_data_up0.id)


    // LOAD
    const team_membership_ref01_match_dt0: any = {}
    team_membership_ref01_match_dt0.id = team_membership_ref01_data.id
    const team_membership_ref01_data_dt0 = (await team_membership_ref01_ent.load(team_membership_ref01_match_dt0)).data()
    assert(team_membership_ref01_data_dt0.id === team_membership_ref01_data.id)


    // REMOVE
    const team_membership_ref01_match_rm0: any = { id: team_membership_ref01_data.id }
    await team_membership_ref01_ent.remove(team_membership_ref01_match_rm0)
  

    // LIST
    const team_membership_ref01_match_rt0: any = {}
    team_membership_ref01_match_rt0['after'] = setup.idmap['after01']
    team_membership_ref01_match_rt0['before'] = setup.idmap['before01']
    team_membership_ref01_match_rt0['first'] = setup.idmap['first01']
    team_membership_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01']
    team_membership_ref01_match_rt0['last'] = setup.idmap['last01']
    team_membership_ref01_match_rt0['order_by'] = setup.idmap['order_by01']

    const team_membership_ref01_list_rt0 = (await team_membership_ref01_ent.list(team_membership_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(team_membership_ref01_list_rt0, { id: team_membership_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/team_membership/TeamMembershipTestData.json')

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
    ['team_membership01','team_membership02','team_membership03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_TEAM_MEMBERSHIP_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_TEAM_MEMBERSHIP_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_TEAM_MEMBERSHIP_ENTID']
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
  
