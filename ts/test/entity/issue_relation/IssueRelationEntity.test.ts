

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


describe('IssueRelationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.IssueRelation()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'issue_relation.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"archivedAt","req":false,"short":"The time at which the entity was archived.","type":"`$ANY`","index$":0},{"active":true,"name":"createdAt","req":true,"short":"The time at which the entity was created.","type":"`$ANY`","index$":1},{"active":true,"name":"id","req":true,"short":"The unique identifier of the entity.","type":"`$STRING`","index$":2},{"active":true,"name":"issue","req":false,"short":"The source issue whose relationship is being described.","type":"`$OBJECT`","index$":3},{"active":true,"name":"relatedIssue","req":false,"short":"The target issue that the source issue is related to.","type":"`$OBJECT`","index$":4},{"active":true,"name":"type","req":true,"short":"The type of relationship between the source issue and the related issue.","type":"`$STRING`","index$":5},{"active":true,"name":"updatedAt","req":true,"short":"The last time at which the entity was meaningfully updated.","type":"`$ANY`","index$":6}],"id":{"field":"id","name":"id"},"name":"issue_relation","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"override_created_at","orig":"override_created_at","reqd":false,"type":"`$ANY`","index$":0}]},"contract":{"id":"POST issueRelationCreate","json":"{\"field\":{\"args\":[{\"gqltype\":\"IssueRelationCreateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"IssueRelationCreateInput\"},{\"gqltype\":\"DateTime\",\"name\":\"overrideCreatedAt\",\"reqd\":false,\"type\":\"DateTime\"}],\"deprecated\":false,\"desc\":\"Creates a new issue relation.\",\"gqltype\":\"IssueRelationPayload!\",\"list\":false,\"name\":\"issueRelationCreate\",\"reqd\":true,\"type\":\"IssueRelationPayload\"},\"invocation\":{\"doc\":\"mutation IssueRelationCreate($input: IssueRelationCreateInput!, $overrideCreatedAt: DateTime) { issueRelationCreate(input: $input, overrideCreatedAt: $overrideCreatedAt) { issueRelation { ...IssueRelationFields } success } } fragment IssueRelationFields on IssueRelation { archivedAt createdAt id issue { id } relatedIssue { id } type updatedAt }\",\"field\":\"issueRelationCreate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"\",\"gqltype\":\"IssueRelationCreateInput!\",\"name\":\"input\"},{\"from\":\"overrideCreatedAt\",\"gqltype\":\"DateTime\",\"name\":\"overrideCreatedAt\"}]},\"protocol\":\"graphql\",\"types\":{\"DateTime\":{\"desc\":\"Represents a date and time in ISO 8601 format. Accepts shortcuts like `2021` to represent midnight Fri Jan 01 2021. Also accepts ISO 8601 durations strings which are added to the current date to create the represented date (e.g '-P2W1D' represents the date that was two weeks and 1 day ago)\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"DateTime\"},\"IssueRelationCreateInput\":{\"desc\":\"Input for creating a new issue relation between two issues. Both the source issue and related issue must be specified along with the relationship type.\",\"fields\":{\"id\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier in UUID v4 format. If none is provided, the backend will generate one.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"id\",\"reqd\":false,\"type\":\"String\"},\"issueId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the issue that is related to another issue. Can be a UUID or issue identifier (e.g., 'LIN-123').\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"issueId\",\"reqd\":true,\"type\":\"String\"},\"relatedIssueId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the related issue. Can be a UUID or issue identifier (e.g., 'LIN-123').\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"relatedIssueId\",\"reqd\":true,\"type\":\"String\"},\"type\":{\"args\":[],\"deprecated\":false,\"desc\":\"The type of relation of the issue to the related issue.\",\"gqltype\":\"IssueRelationType!\",\"list\":false,\"name\":\"type\",\"reqd\":true,\"type\":\"IssueRelationType\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"IssueRelationCreateInput\"},\"IssueRelationType\":{\"desc\":\"The type of the issue relation.\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"IssueRelationType\",\"values\":[\"blocks\",\"duplicate\",\"related\",\"similar\"]},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation IssueRelationCreate($input: IssueRelationCreateInput!, $overrideCreatedAt: DateTime) { issueRelationCreate(input: $input, overrideCreatedAt: $overrideCreatedAt) { issueRelation { ...IssueRelationFields } success } } fragment IssueRelationFields on IssueRelation { archivedAt createdAt id issue { id } relatedIssue { id } type updatedAt }","field":"issueRelationCreate","optype":"mutation","vars":[{"from":"","gqltype":"IssueRelationCreateInput!","name":"input"},{"from":"overrideCreatedAt","gqltype":"DateTime","name":"overrideCreatedAt"}]},"kind":"graphql","method":"POST","orig":"issueRelationCreate","segments":[],"select":{},"transform":{"req":"`reqdata`","res":"`body.data.issueRelationCreate.issueRelation`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"after","orig":"after","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"before","orig":"before","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"param","name":"first","orig":"first","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"kind":"param","name":"include_archived","orig":"include_archived","reqd":false,"type":"`$BOOLEAN`","index$":3},{"active":true,"kind":"param","name":"last","orig":"last","reqd":false,"type":"`$INTEGER`","index$":4},{"active":true,"kind":"param","name":"order_by","orig":"order_by","reqd":false,"type":"`$ANY`","index$":5}]},"contract":{"id":"POST issueRelations","json":"{\"field\":{\"args\":[{\"gqltype\":\"String\",\"name\":\"after\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"String\",\"name\":\"before\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"Int\",\"name\":\"first\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"Boolean\",\"name\":\"includeArchived\",\"reqd\":false,\"type\":\"Boolean\"},{\"gqltype\":\"Int\",\"name\":\"last\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\",\"reqd\":false,\"type\":\"PaginationOrderBy\"}],\"deprecated\":false,\"desc\":\"All issue relations. Returns a paginated list of all issue relations (blocks, blocked by, relates to, duplicates) visible to the authenticated user.\",\"gqltype\":\"IssueRelationConnection!\",\"list\":false,\"name\":\"issueRelations\",\"reqd\":true,\"type\":\"IssueRelationConnection\"},\"invocation\":{\"doc\":\"query IssueRelationList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { issueRelations(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...IssueRelationFields } pageInfo { endCursor hasNextPage } } } fragment IssueRelationFields on IssueRelation { archivedAt createdAt id issue { id } relatedIssue { id } type updatedAt }\",\"field\":\"issueRelations\",\"optype\":\"query\",\"page\":{\"cursor\":\"pageInfo.endCursor\",\"more\":\"pageInfo.hasNextPage\",\"nodes\":\"nodes\",\"style\":\"relay\"},\"vars\":[{\"from\":\"after\",\"gqltype\":\"String\",\"name\":\"after\"},{\"from\":\"before\",\"gqltype\":\"String\",\"name\":\"before\"},{\"from\":\"first\",\"gqltype\":\"Int\",\"name\":\"first\"},{\"from\":\"includeArchived\",\"gqltype\":\"Boolean\",\"name\":\"includeArchived\"},{\"from\":\"last\",\"gqltype\":\"Int\",\"name\":\"last\"},{\"from\":\"orderBy\",\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"Int\":{\"desc\":\"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Int\"},\"PaginationOrderBy\":{\"desc\":\"By which field should the pagination order by\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"PaginationOrderBy\",\"values\":[\"createdAt\",\"updatedAt\"]},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"query IssueRelationList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { issueRelations(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...IssueRelationFields } pageInfo { endCursor hasNextPage } } } fragment IssueRelationFields on IssueRelation { archivedAt createdAt id issue { id } relatedIssue { id } type updatedAt }","field":"issueRelations","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"}]},"kind":"graphql","method":"POST","orig":"issueRelations","segments":[],"select":{},"transform":{"req":"`reqdata`","res":"`body.data.issueRelations.nodes`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST issueRelation","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"One specific issue relation, looked up by its unique identifier.\",\"gqltype\":\"IssueRelation!\",\"list\":false,\"name\":\"issueRelation\",\"reqd\":true,\"type\":\"IssueRelation\"},\"invocation\":{\"doc\":\"query IssueRelationLoad($id: String!) { issueRelation(id: $id) { ...IssueRelationFields } } fragment IssueRelationFields on IssueRelation { archivedAt createdAt id issue { id } relatedIssue { id } type updatedAt }\",\"field\":\"issueRelation\",\"optype\":\"query\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"query IssueRelationLoad($id: String!) { issueRelation(id: $id) { ...IssueRelationFields } } fragment IssueRelationFields on IssueRelation { archivedAt createdAt id issue { id } relatedIssue { id } type updatedAt }","field":"issueRelation","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"kind":"graphql","method":"POST","orig":"issueRelation","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.issueRelation`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST issueRelationDelete","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Deletes an issue relation.\",\"gqltype\":\"DeletePayload!\",\"list\":false,\"name\":\"issueRelationDelete\",\"reqd\":true,\"type\":\"DeletePayload\"},\"invocation\":{\"doc\":\"mutation IssueRelationRemove($id: String!) { issueRelationDelete(id: $id) { entityId lastSyncId success } }\",\"field\":\"issueRelationDelete\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation IssueRelationRemove($id: String!) { issueRelationDelete(id: $id) { entityId lastSyncId success } }","field":"issueRelationDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"kind":"graphql","method":"POST","orig":"issueRelationDelete","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.issueRelationDelete`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST issueRelationUpdate","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"},{\"gqltype\":\"IssueRelationUpdateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"IssueRelationUpdateInput\"}],\"deprecated\":false,\"desc\":\"Updates an issue relation.\",\"gqltype\":\"IssueRelationPayload!\",\"list\":false,\"name\":\"issueRelationUpdate\",\"reqd\":true,\"type\":\"IssueRelationPayload\"},\"invocation\":{\"doc\":\"mutation IssueRelationUpdate($id: String!, $input: IssueRelationUpdateInput!) { issueRelationUpdate(id: $id, input: $input) { issueRelation { ...IssueRelationFields } success } } fragment IssueRelationFields on IssueRelation { archivedAt createdAt id issue { id } relatedIssue { id } type updatedAt }\",\"field\":\"issueRelationUpdate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"},{\"from\":\"\",\"gqltype\":\"IssueRelationUpdateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"IssueRelationUpdateInput\":{\"desc\":\"Input for updating an existing issue relation. All fields are optional; only provided fields will be updated.\",\"fields\":{\"issueId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the issue that is related to another issue. Can be a UUID or issue identifier (e.g., 'LIN-123').\",\"gqltype\":\"String\",\"list\":false,\"name\":\"issueId\",\"reqd\":false,\"type\":\"String\"},\"relatedIssueId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the related issue. Can be a UUID or issue identifier (e.g., 'LIN-123').\",\"gqltype\":\"String\",\"list\":false,\"name\":\"relatedIssueId\",\"reqd\":false,\"type\":\"String\"},\"type\":{\"args\":[],\"deprecated\":false,\"desc\":\"The type of relation of the issue to the related issue.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"type\",\"reqd\":false,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"IssueRelationUpdateInput\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation IssueRelationUpdate($id: String!, $input: IssueRelationUpdateInput!) { issueRelationUpdate(id: $id, input: $input) { issueRelation { ...IssueRelationFields } success } } fragment IssueRelationFields on IssueRelation { archivedAt createdAt id issue { id } relatedIssue { id } type updatedAt }","field":"issueRelationUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"IssueRelationUpdateInput!","name":"input"}]},"kind":"graphql","method":"POST","orig":"issueRelationUpdate","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.issueRelationUpdate.issueRelation`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"issue_relation","name__orig":"issue_relation","Name":"IssueRelation","name_":"issue_relation","name-":"issue-relation","NAME":"ISSUE_RELATION","index$":44}, {"active":true,"entity":"issue_relation","key$":"BasicIssueRelationFlow","kind":"basic","name":"BasicIssueRelationFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"issue_relation_ref01"},"match":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01","override_created_at":"override_created_at01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"issue_relation_ref01"}}],"index$":1},{"active":true,"data":{},"input":{"ref":"issue_relation_ref01","srcdatavar":"issue_relation_ref01_data","suffix":"_up0","textfield":"type"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-issue_relation_ref01"}}],"valid":[],"index$":2},{"active":true,"data":{},"input":{"ref":"issue_relation_ref01","srcdatavar":"issue_relation_ref01_data","suffix":"_dt0"},"match":{"id":"issue_relation01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-issue_relation_ref01"}}],"index$":3},{"active":true,"data":{},"input":{"ref":"issue_relation_ref01","suffix":"_rm0"},"match":{"id":"issue_relation01"},"op":"remove","spec":[],"valid":[],"index$":4},{"active":true,"data":{},"input":{"suffix":"_rt0"},"match":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"op":"list","spec":[],"valid":[{"apply":"ItemNotExists","def":{"ref":"issue_relation_ref01"}}],"index$":5}]}, 'IssueRelation')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const issue_relation_ref01_ent = client.IssueRelation()
    let issue_relation_ref01_data = setup.data.new.issue_relation['issue_relation_ref01']
    issue_relation_ref01_data['after'] = setup.idmap['after01']
    issue_relation_ref01_data['before'] = setup.idmap['before01']
    issue_relation_ref01_data['first'] = setup.idmap['first01']
    issue_relation_ref01_data['include_archived'] = setup.idmap['include_archived01']
    issue_relation_ref01_data['last'] = setup.idmap['last01']
    issue_relation_ref01_data['order_by'] = setup.idmap['order_by01']
    issue_relation_ref01_data['override_created_at'] = setup.idmap['override_created_at01']

    issue_relation_ref01_data = (await issue_relation_ref01_ent.create(issue_relation_ref01_data)).data()
    assert(null != issue_relation_ref01_data.id)


    // LIST
    const issue_relation_ref01_match: any = {}
    issue_relation_ref01_match['after'] = setup.idmap['after01']
    issue_relation_ref01_match['before'] = setup.idmap['before01']
    issue_relation_ref01_match['first'] = setup.idmap['first01']
    issue_relation_ref01_match['include_archived'] = setup.idmap['include_archived01']
    issue_relation_ref01_match['last'] = setup.idmap['last01']
    issue_relation_ref01_match['order_by'] = setup.idmap['order_by01']

    const issue_relation_ref01_list = (await issue_relation_ref01_ent.list(issue_relation_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(issue_relation_ref01_list, { id: issue_relation_ref01_data.id })))


    // UPDATE
    const issue_relation_ref01_data_up0: any = {}
    issue_relation_ref01_data_up0.id = issue_relation_ref01_data.id

    const issue_relation_ref01_markdef_up0 = { name: 'type', value: 'Mark01-issue_relation_ref01_' + setup.now }
    ;(issue_relation_ref01_data_up0 as any)[issue_relation_ref01_markdef_up0.name] = issue_relation_ref01_markdef_up0.value

    const issue_relation_ref01_resdata_up0 = (await issue_relation_ref01_ent.update(issue_relation_ref01_data_up0)).data()
    assert(issue_relation_ref01_resdata_up0.id === issue_relation_ref01_data_up0.id)

    assert((issue_relation_ref01_resdata_up0 as any)[issue_relation_ref01_markdef_up0.name] === issue_relation_ref01_markdef_up0.value)


    // LOAD
    const issue_relation_ref01_match_dt0: any = {}
    issue_relation_ref01_match_dt0.id = issue_relation_ref01_data.id
    const issue_relation_ref01_data_dt0 = (await issue_relation_ref01_ent.load(issue_relation_ref01_match_dt0)).data()
    assert(issue_relation_ref01_data_dt0.id === issue_relation_ref01_data.id)


    // REMOVE
    const issue_relation_ref01_match_rm0: any = { id: issue_relation_ref01_data.id }
    await issue_relation_ref01_ent.remove(issue_relation_ref01_match_rm0)
  

    // LIST
    const issue_relation_ref01_match_rt0: any = {}
    issue_relation_ref01_match_rt0['after'] = setup.idmap['after01']
    issue_relation_ref01_match_rt0['before'] = setup.idmap['before01']
    issue_relation_ref01_match_rt0['first'] = setup.idmap['first01']
    issue_relation_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01']
    issue_relation_ref01_match_rt0['last'] = setup.idmap['last01']
    issue_relation_ref01_match_rt0['order_by'] = setup.idmap['order_by01']

    const issue_relation_ref01_list_rt0 = (await issue_relation_ref01_ent.list(issue_relation_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(issue_relation_ref01_list_rt0, { id: issue_relation_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/issue_relation/IssueRelationTestData.json')

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
    ['issue_relation01','issue_relation02','issue_relation03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_ISSUE_RELATION_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_ISSUE_RELATION_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_ISSUE_RELATION_ENTID']
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
  
