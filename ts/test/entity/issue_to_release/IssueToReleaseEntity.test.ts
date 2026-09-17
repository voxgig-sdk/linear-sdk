

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


describe('IssueToReleaseEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.IssueToRelease()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'list', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'issue_to_release.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"archivedAt","req":false,"short":"The time at which the entity was archived.","type":"`$ANY`","index$":0},{"active":true,"name":"createdAt","req":true,"short":"The time at which the entity was created.","type":"`$ANY`","index$":1},{"active":true,"name":"id","req":true,"short":"The unique identifier of the entity.","type":"`$STRING`","index$":2},{"active":true,"name":"issue","req":false,"short":"The issue that is linked to the release.","type":"`$OBJECT`","index$":3},{"active":true,"name":"release","req":false,"short":"The release that the issue is linked to.","type":"`$OBJECT`","index$":4},{"active":true,"name":"updatedAt","req":true,"short":"The last time at which the entity was meaningfully updated.","type":"`$ANY`","index$":5}],"id":{"field":"id","name":"id"},"name":"issue_to_release","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST issueToReleaseCreate","json":"{\"field\":{\"args\":[{\"gqltype\":\"IssueToReleaseCreateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"IssueToReleaseCreateInput\"}],\"deprecated\":false,\"desc\":\"Creates a new association between an issue and a release, linking the issue to the release for tracking purposes.\",\"gqltype\":\"IssueToReleasePayload!\",\"list\":false,\"name\":\"issueToReleaseCreate\",\"reqd\":true,\"type\":\"IssueToReleasePayload\"},\"invocation\":{\"doc\":\"mutation IssueToReleaseCreate($input: IssueToReleaseCreateInput!) { issueToReleaseCreate(input: $input) { issueToRelease { ...IssueToReleaseFields } success } } fragment IssueToReleaseFields on IssueToRelease { archivedAt createdAt id issue { id } release { id } updatedAt }\",\"field\":\"issueToReleaseCreate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"\",\"gqltype\":\"IssueToReleaseCreateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"IssueToReleaseCreateInput\":{\"desc\":\"Input for creating a new association between an issue and a release. Both an issue identifier and a release identifier must be provided.\",\"fields\":{\"id\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier in UUID v4 format. If none is provided, the backend will generate one.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"id\",\"reqd\":false,\"type\":\"String\"},\"issueId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the issue. Can be a UUID or issue identifier (e.g., 'LIN-123').\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"issueId\",\"reqd\":true,\"type\":\"String\"},\"releaseId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the release.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"releaseId\",\"reqd\":true,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"IssueToReleaseCreateInput\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation IssueToReleaseCreate($input: IssueToReleaseCreateInput!) { issueToReleaseCreate(input: $input) { issueToRelease { ...IssueToReleaseFields } success } } fragment IssueToReleaseFields on IssueToRelease { archivedAt createdAt id issue { id } release { id } updatedAt }","field":"issueToReleaseCreate","optype":"mutation","vars":[{"from":"","gqltype":"IssueToReleaseCreateInput!","name":"input"}]},"kind":"graphql","method":"POST","orig":"issueToReleaseCreate","segments":[],"select":{},"transform":{"req":"`reqdata`","res":"`body.data.issueToReleaseCreate.issueToRelease`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"after","orig":"after","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"before","orig":"before","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"param","name":"first","orig":"first","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"kind":"param","name":"include_archived","orig":"include_archived","reqd":false,"type":"`$BOOLEAN`","index$":3},{"active":true,"kind":"param","name":"last","orig":"last","reqd":false,"type":"`$INTEGER`","index$":4},{"active":true,"kind":"param","name":"order_by","orig":"order_by","reqd":false,"type":"`$ANY`","index$":5}]},"contract":{"id":"POST issueToReleases","json":"{\"field\":{\"args\":[{\"gqltype\":\"String\",\"name\":\"after\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"String\",\"name\":\"before\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"Int\",\"name\":\"first\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"Boolean\",\"name\":\"includeArchived\",\"reqd\":false,\"type\":\"Boolean\"},{\"gqltype\":\"Int\",\"name\":\"last\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\",\"reqd\":false,\"type\":\"PaginationOrderBy\"}],\"deprecated\":false,\"desc\":\"All issue-to-release associations. Returns a paginated list of all issue-to-release links visible to the authenticated user.\",\"gqltype\":\"IssueToReleaseConnection!\",\"list\":false,\"name\":\"issueToReleases\",\"reqd\":true,\"type\":\"IssueToReleaseConnection\"},\"invocation\":{\"doc\":\"query IssueToReleaseList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { issueToReleases(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...IssueToReleaseFields } pageInfo { endCursor hasNextPage } } } fragment IssueToReleaseFields on IssueToRelease { archivedAt createdAt id issue { id } release { id } updatedAt }\",\"field\":\"issueToReleases\",\"optype\":\"query\",\"page\":{\"cursor\":\"pageInfo.endCursor\",\"more\":\"pageInfo.hasNextPage\",\"nodes\":\"nodes\",\"style\":\"relay\"},\"vars\":[{\"from\":\"after\",\"gqltype\":\"String\",\"name\":\"after\"},{\"from\":\"before\",\"gqltype\":\"String\",\"name\":\"before\"},{\"from\":\"first\",\"gqltype\":\"Int\",\"name\":\"first\"},{\"from\":\"includeArchived\",\"gqltype\":\"Boolean\",\"name\":\"includeArchived\"},{\"from\":\"last\",\"gqltype\":\"Int\",\"name\":\"last\"},{\"from\":\"orderBy\",\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"Int\":{\"desc\":\"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Int\"},\"PaginationOrderBy\":{\"desc\":\"By which field should the pagination order by\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"PaginationOrderBy\",\"values\":[\"createdAt\",\"updatedAt\"]},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"query IssueToReleaseList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { issueToReleases(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...IssueToReleaseFields } pageInfo { endCursor hasNextPage } } } fragment IssueToReleaseFields on IssueToRelease { archivedAt createdAt id issue { id } release { id } updatedAt }","field":"issueToReleases","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"}]},"kind":"graphql","method":"POST","orig":"issueToReleases","segments":[],"select":{},"transform":{"req":"`reqdata`","res":"`body.data.issueToReleases.nodes`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST issueToRelease","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"One specific issue-to-release association, looked up by its unique identifier.\",\"gqltype\":\"IssueToRelease!\",\"list\":false,\"name\":\"issueToRelease\",\"reqd\":true,\"type\":\"IssueToRelease\"},\"invocation\":{\"doc\":\"query IssueToReleaseLoad($id: String!) { issueToRelease(id: $id) { ...IssueToReleaseFields } } fragment IssueToReleaseFields on IssueToRelease { archivedAt createdAt id issue { id } release { id } updatedAt }\",\"field\":\"issueToRelease\",\"optype\":\"query\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"query IssueToReleaseLoad($id: String!) { issueToRelease(id: $id) { ...IssueToReleaseFields } } fragment IssueToReleaseFields on IssueToRelease { archivedAt createdAt id issue { id } release { id } updatedAt }","field":"issueToRelease","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"kind":"graphql","method":"POST","orig":"issueToRelease","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.issueToRelease`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST issueToReleaseDelete","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Deletes an issue-to-release association by its identifier, removing the issue from the release.\",\"gqltype\":\"DeletePayload!\",\"list\":false,\"name\":\"issueToReleaseDelete\",\"reqd\":true,\"type\":\"DeletePayload\"},\"invocation\":{\"doc\":\"mutation IssueToReleaseRemove($id: String!) { issueToReleaseDelete(id: $id) { entityId lastSyncId success } }\",\"field\":\"issueToReleaseDelete\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation IssueToReleaseRemove($id: String!) { issueToReleaseDelete(id: $id) { entityId lastSyncId success } }","field":"issueToReleaseDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"kind":"graphql","method":"POST","orig":"issueToReleaseDelete","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.issueToReleaseDelete`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"issue_to_release","name__orig":"issue_to_release","Name":"IssueToRelease","name_":"issue_to_release","name-":"issue-to-release","NAME":"ISSUE_TO_RELEASE","index$":46}, {"active":true,"entity":"issue_to_release","key$":"BasicIssueToReleaseFlow","kind":"basic","name":"BasicIssueToReleaseFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"issue_to_release_ref01"},"match":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"issue_to_release_ref01"}}],"index$":1},{"active":true,"data":{},"input":{"ref":"issue_to_release_ref01","srcdatavar":"issue_to_release_ref01_data","suffix":"_dt0"},"match":{"id":"issue_to_release01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-issue_to_release_ref01"}}],"index$":2},{"active":true,"data":{},"input":{"ref":"issue_to_release_ref01","suffix":"_rm0"},"match":{"id":"issue_to_release01"},"op":"remove","spec":[],"valid":[],"index$":3},{"active":true,"data":{},"input":{"suffix":"_rt0"},"match":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"op":"list","spec":[],"valid":[{"apply":"ItemNotExists","def":{"ref":"issue_to_release_ref01"}}],"index$":4}]}, 'IssueToRelease')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const issue_to_release_ref01_ent = client.IssueToRelease()
    let issue_to_release_ref01_data = setup.data.new.issue_to_release['issue_to_release_ref01']
    issue_to_release_ref01_data['after'] = setup.idmap['after01']
    issue_to_release_ref01_data['before'] = setup.idmap['before01']
    issue_to_release_ref01_data['first'] = setup.idmap['first01']
    issue_to_release_ref01_data['include_archived'] = setup.idmap['include_archived01']
    issue_to_release_ref01_data['last'] = setup.idmap['last01']
    issue_to_release_ref01_data['order_by'] = setup.idmap['order_by01']

    issue_to_release_ref01_data = (await issue_to_release_ref01_ent.create(issue_to_release_ref01_data)).data()
    assert(null != issue_to_release_ref01_data.id)


    // LIST
    const issue_to_release_ref01_match: any = {}
    issue_to_release_ref01_match['after'] = setup.idmap['after01']
    issue_to_release_ref01_match['before'] = setup.idmap['before01']
    issue_to_release_ref01_match['first'] = setup.idmap['first01']
    issue_to_release_ref01_match['include_archived'] = setup.idmap['include_archived01']
    issue_to_release_ref01_match['last'] = setup.idmap['last01']
    issue_to_release_ref01_match['order_by'] = setup.idmap['order_by01']

    const issue_to_release_ref01_list = (await issue_to_release_ref01_ent.list(issue_to_release_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(issue_to_release_ref01_list, { id: issue_to_release_ref01_data.id })))


    // LOAD
    const issue_to_release_ref01_match_dt0: any = {}
    issue_to_release_ref01_match_dt0.id = issue_to_release_ref01_data.id
    const issue_to_release_ref01_data_dt0 = (await issue_to_release_ref01_ent.load(issue_to_release_ref01_match_dt0)).data()
    assert(issue_to_release_ref01_data_dt0.id === issue_to_release_ref01_data.id)


    // REMOVE
    const issue_to_release_ref01_match_rm0: any = { id: issue_to_release_ref01_data.id }
    await issue_to_release_ref01_ent.remove(issue_to_release_ref01_match_rm0)
  

    // LIST
    const issue_to_release_ref01_match_rt0: any = {}
    issue_to_release_ref01_match_rt0['after'] = setup.idmap['after01']
    issue_to_release_ref01_match_rt0['before'] = setup.idmap['before01']
    issue_to_release_ref01_match_rt0['first'] = setup.idmap['first01']
    issue_to_release_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01']
    issue_to_release_ref01_match_rt0['last'] = setup.idmap['last01']
    issue_to_release_ref01_match_rt0['order_by'] = setup.idmap['order_by01']

    const issue_to_release_ref01_list_rt0 = (await issue_to_release_ref01_ent.list(issue_to_release_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(issue_to_release_ref01_list_rt0, { id: issue_to_release_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/issue_to_release/IssueToReleaseTestData.json')

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
    ['issue_to_release01','issue_to_release02','issue_to_release03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_ISSUE_TO_RELEASE_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_ISSUE_TO_RELEASE_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_ISSUE_TO_RELEASE_ENTID']
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
  
