

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":0},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":2},"issue":{"a":true,"h":"Issue","n":"issue","r":false,"sh":"The source issue whose relationship is being described.","t":"`$OBJECT`","key$":"issue","index$":3},"relatedIssue":{"a":true,"h":"Related Issue","n":"relatedIssue","r":false,"sh":"The target issue that the source issue is related to.","t":"`$OBJECT`","key$":"relatedIssue","index$":4},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"The type of relationship between the source issue and the related issue.","t":"`$STRING`","key$":"type","index$":5},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":6}},"id":{"field":"id","name":"id"},"name":"issue_relation","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST issueRelationCreate","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"override_created_at","or":"override_created_at","r":false,"t":"`$ANY`","index$":0}]},"gq":{"doc":"mutation IssueRelationCreate($input: IssueRelationCreateInput!, $overrideCreatedAt: DateTime) { issueRelationCreate(input: $input, overrideCreatedAt: $overrideCreatedAt) { issueRelation { ...IssueRelationFields } success } } fragment IssueRelationFields on IssueRelation { archivedAt createdAt id issue { id } relatedIssue { id } type updatedAt }","field":"issueRelationCreate","optype":"mutation","vars":[{"from":"","gqltype":"IssueRelationCreateInput!","name":"input"},{"from":"overrideCreatedAt","gqltype":"DateTime","name":"overrideCreatedAt"}]},"k":"graphql","m":"POST","o":"issueRelationCreate","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.issueRelationCreate.issueRelation`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"POST issueRelations","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"first","or":"first","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"param","n":"include_archived","or":"include_archived","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"param","n":"last","or":"last","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"param","n":"order_by","or":"order_by","r":false,"t":"`$ANY`","index$":5}]},"gq":{"doc":"query IssueRelationList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { issueRelations(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...IssueRelationFields } pageInfo { endCursor hasNextPage } } } fragment IssueRelationFields on IssueRelation { archivedAt createdAt id issue { id } relatedIssue { id } type updatedAt }","field":"issueRelations","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"}]},"k":"graphql","m":"POST","o":"issueRelations","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.issueRelations.nodes`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST issueRelation","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"query IssueRelationLoad($id: String!) { issueRelation(id: $id) { ...IssueRelationFields } } fragment IssueRelationFields on IssueRelation { archivedAt createdAt id issue { id } relatedIssue { id } type updatedAt }","field":"issueRelation","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"issueRelation","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.issueRelation`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"POST issueRelationDelete","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation IssueRelationRemove($id: String!) { issueRelationDelete(id: $id) { entityId lastSyncId success } }","field":"issueRelationDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"issueRelationDelete","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.issueRelationDelete`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"POST issueRelationUpdate","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation IssueRelationUpdate($id: String!, $input: IssueRelationUpdateInput!) { issueRelationUpdate(id: $id, input: $input) { issueRelation { ...IssueRelationFields } success } } fragment IssueRelationFields on IssueRelation { archivedAt createdAt id issue { id } relatedIssue { id } type updatedAt }","field":"issueRelationUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"IssueRelationUpdateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"issueRelationUpdate","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.issueRelationUpdate.issueRelation`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"issue_relation","name__orig":"issue_relation","Name":"IssueRelation","name_":"issue_relation","name-":"issue-relation","NAME":"ISSUE_RELATION","index$":44}, {"active":true,"entity":"issue_relation","key$":"BasicIssueRelationFlow","kind":"basic","name":"BasicIssueRelationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"issue_relation_ref01"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01","override_created_at":"override_created_at01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"issue_relation_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"issue_relation_ref01","srcdatavar":"issue_relation_ref01_data","suffix":"_up0","textfield":"type"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-issue_relation_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"issue_relation_ref01","srcdatavar":"issue_relation_ref01_data","suffix":"_dt0"},"m":{"id":"issue_relation01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-issue_relation_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"issue_relation_ref01","suffix":"_rm0"},"m":{"id":"issue_relation01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"issue_relation_ref01"}}],"index$":5}]}, 'IssueRelation', {"POST issueRelationCreate":{"protocol":"graphql"},"POST issueRelations":{"protocol":"graphql"},"POST issueRelation":{"protocol":"graphql"},"POST issueRelationDelete":{"protocol":"graphql"},"POST issueRelationUpdate":{"protocol":"graphql"}})
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
    ['issue_relation01','issue_relation02','issue_relation03','after01','before01','first01','include_archived01','last01','order_by01','override_created_at01'],
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
  
