

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


describe('EntityExternalLinkEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.EntityExternalLink()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'entity_external_link.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"archivedAt","req":false,"short":"The time at which the entity was archived.","type":"`$ANY`","index$":0},{"active":true,"name":"createdAt","req":true,"short":"The time at which the entity was created.","type":"`$ANY`","index$":1},{"active":true,"name":"creator","req":false,"short":"The user who created the link.","type":"`$OBJECT`","index$":2},{"active":true,"name":"id","req":true,"short":"The unique identifier of the entity.","type":"`$STRING`","index$":3},{"active":true,"name":"initiative","req":false,"short":"The initiative that the link is associated with.","type":"`$OBJECT`","index$":4},{"active":true,"name":"label","req":true,"short":"The link's label.","type":"`$STRING`","index$":5},{"active":true,"name":"project","req":false,"short":"The project that the link is associated with.","type":"`$OBJECT`","index$":6},{"active":true,"name":"sortOrder","req":true,"short":"The sort order of this link within the parent entity's resources list.","type":"`$NUMBER`","index$":7},{"active":true,"name":"updatedAt","req":true,"short":"The last time at which the entity was meaningfully updated.","type":"`$ANY`","index$":8},{"active":true,"name":"url","req":true,"short":"The link's URL.","type":"`$STRING`","index$":9}],"id":{"field":"id","name":"id"},"name":"entity_external_link","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST entityExternalLinkCreate","json":"{\"field\":{\"args\":[{\"gqltype\":\"EntityExternalLinkCreateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"EntityExternalLinkCreateInput\"}],\"deprecated\":false,\"desc\":\"Creates a new external link on an initiative, project, team, release, or cycle.\",\"gqltype\":\"EntityExternalLinkPayload!\",\"list\":false,\"name\":\"entityExternalLinkCreate\",\"reqd\":true,\"type\":\"EntityExternalLinkPayload\"},\"invocation\":{\"doc\":\"mutation EntityExternalLinkCreate($input: EntityExternalLinkCreateInput!) { entityExternalLinkCreate(input: $input) { entityExternalLink { ...EntityExternalLinkFields } success } } fragment EntityExternalLinkFields on EntityExternalLink { archivedAt createdAt creator { id } id initiative { id } label project { id } sortOrder updatedAt url }\",\"field\":\"entityExternalLinkCreate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"\",\"gqltype\":\"EntityExternalLinkCreateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"EntityExternalLinkCreateInput\":{\"desc\":\"Input for creating a new external link on an entity. A URL, label, and exactly one parent entity (initiative, project, team, release, or cycle) are required.\",\"fields\":{\"cycleId\":{\"args\":[],\"deprecated\":false,\"desc\":\"[Internal] The cycle associated with the link.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"cycleId\",\"reqd\":false,\"type\":\"String\"},\"id\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier in UUID v4 format. If none is provided, the backend will generate one.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"id\",\"reqd\":false,\"type\":\"String\"},\"initiativeId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The initiative associated with the link.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"initiativeId\",\"reqd\":false,\"type\":\"String\"},\"label\":{\"args\":[],\"deprecated\":false,\"desc\":\"The label for the link.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"label\",\"reqd\":true,\"type\":\"String\"},\"projectId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The project associated with the link.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"projectId\",\"reqd\":false,\"type\":\"String\"},\"releaseId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The release associated with the link.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"releaseId\",\"reqd\":false,\"type\":\"String\"},\"resourceFolderId\":{\"args\":[],\"deprecated\":false,\"desc\":\"[Internal] The resource folder containing the link.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"resourceFolderId\",\"reqd\":false,\"type\":\"String\"},\"sortOrder\":{\"args\":[],\"deprecated\":false,\"desc\":\"The order of the item in the entities resources list.\",\"gqltype\":\"Float\",\"list\":false,\"name\":\"sortOrder\",\"reqd\":false,\"type\":\"Float\"},\"teamId\":{\"args\":[],\"deprecated\":false,\"desc\":\"[Internal] The team associated with the link.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"teamId\",\"reqd\":false,\"type\":\"String\"},\"url\":{\"args\":[],\"deprecated\":false,\"desc\":\"The URL of the link.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"url\",\"reqd\":true,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"EntityExternalLinkCreateInput\"},\"Float\":{\"desc\":\"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Float\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation EntityExternalLinkCreate($input: EntityExternalLinkCreateInput!) { entityExternalLinkCreate(input: $input) { entityExternalLink { ...EntityExternalLinkFields } success } } fragment EntityExternalLinkFields on EntityExternalLink { archivedAt createdAt creator { id } id initiative { id } label project { id } sortOrder updatedAt url }","field":"entityExternalLinkCreate","optype":"mutation","vars":[{"from":"","gqltype":"EntityExternalLinkCreateInput!","name":"input"}]},"kind":"graphql","method":"POST","orig":"entityExternalLinkCreate","segments":[],"select":{},"transform":{"req":"`reqdata`","res":"`body.data.entityExternalLinkCreate.entityExternalLink`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST entityExternalLink","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Retrieves a single entity external link by its identifier.\",\"gqltype\":\"EntityExternalLink!\",\"list\":false,\"name\":\"entityExternalLink\",\"reqd\":true,\"type\":\"EntityExternalLink\"},\"invocation\":{\"doc\":\"query EntityExternalLinkLoad($id: String!) { entityExternalLink(id: $id) { ...EntityExternalLinkFields } } fragment EntityExternalLinkFields on EntityExternalLink { archivedAt createdAt creator { id } id initiative { id } label project { id } sortOrder updatedAt url }\",\"field\":\"entityExternalLink\",\"optype\":\"query\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"query EntityExternalLinkLoad($id: String!) { entityExternalLink(id: $id) { ...EntityExternalLinkFields } } fragment EntityExternalLinkFields on EntityExternalLink { archivedAt createdAt creator { id } id initiative { id } label project { id } sortOrder updatedAt url }","field":"entityExternalLink","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"kind":"graphql","method":"POST","orig":"entityExternalLink","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.entityExternalLink`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST entityExternalLinkDelete","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Deletes an entity external link.\",\"gqltype\":\"DeletePayload!\",\"list\":false,\"name\":\"entityExternalLinkDelete\",\"reqd\":true,\"type\":\"DeletePayload\"},\"invocation\":{\"doc\":\"mutation EntityExternalLinkRemove($id: String!) { entityExternalLinkDelete(id: $id) { entityId lastSyncId success } }\",\"field\":\"entityExternalLinkDelete\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation EntityExternalLinkRemove($id: String!) { entityExternalLinkDelete(id: $id) { entityId lastSyncId success } }","field":"entityExternalLinkDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"kind":"graphql","method":"POST","orig":"entityExternalLinkDelete","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.entityExternalLinkDelete`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST entityExternalLinkUpdate","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"},{\"gqltype\":\"EntityExternalLinkUpdateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"EntityExternalLinkUpdateInput\"}],\"deprecated\":false,\"desc\":\"Updates an existing entity external link's URL, label, or sort order.\",\"gqltype\":\"EntityExternalLinkPayload!\",\"list\":false,\"name\":\"entityExternalLinkUpdate\",\"reqd\":true,\"type\":\"EntityExternalLinkPayload\"},\"invocation\":{\"doc\":\"mutation EntityExternalLinkUpdate($id: String!, $input: EntityExternalLinkUpdateInput!) { entityExternalLinkUpdate(id: $id, input: $input) { entityExternalLink { ...EntityExternalLinkFields } success } } fragment EntityExternalLinkFields on EntityExternalLink { archivedAt createdAt creator { id } id initiative { id } label project { id } sortOrder updatedAt url }\",\"field\":\"entityExternalLinkUpdate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"},{\"from\":\"\",\"gqltype\":\"EntityExternalLinkUpdateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"EntityExternalLinkUpdateInput\":{\"desc\":\"Input for updating an existing external link. All fields are optional; only provided fields will be updated.\",\"fields\":{\"label\":{\"args\":[],\"deprecated\":false,\"desc\":\"The label for the link.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"label\",\"reqd\":false,\"type\":\"String\"},\"resourceFolderId\":{\"args\":[],\"deprecated\":false,\"desc\":\"[Internal] The resource folder containing the link.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"resourceFolderId\",\"reqd\":false,\"type\":\"String\"},\"sortOrder\":{\"args\":[],\"deprecated\":false,\"desc\":\"The order of the item in the entities resources list.\",\"gqltype\":\"Float\",\"list\":false,\"name\":\"sortOrder\",\"reqd\":false,\"type\":\"Float\"},\"url\":{\"args\":[],\"deprecated\":false,\"desc\":\"The URL of the link.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"url\",\"reqd\":false,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"EntityExternalLinkUpdateInput\"},\"Float\":{\"desc\":\"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Float\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation EntityExternalLinkUpdate($id: String!, $input: EntityExternalLinkUpdateInput!) { entityExternalLinkUpdate(id: $id, input: $input) { entityExternalLink { ...EntityExternalLinkFields } success } } fragment EntityExternalLinkFields on EntityExternalLink { archivedAt createdAt creator { id } id initiative { id } label project { id } sortOrder updatedAt url }","field":"entityExternalLinkUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"EntityExternalLinkUpdateInput!","name":"input"}]},"kind":"graphql","method":"POST","orig":"entityExternalLinkUpdate","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.entityExternalLinkUpdate.entityExternalLink`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"entity_external_link","name__orig":"entity_external_link","Name":"EntityExternalLink","name_":"entity_external_link","name-":"entity-external-link","NAME":"ENTITY_EXTERNAL_LINK","index$":25}, {"active":true,"entity":"entity_external_link","key$":"BasicEntityExternalLinkFlow","kind":"basic","name":"BasicEntityExternalLinkFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"entity_external_link_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"entity_external_link_ref01","srcdatavar":"entity_external_link_ref01_data","suffix":"_up0","textfield":"label"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-entity_external_link_ref01"}}],"valid":[],"index$":1},{"active":true,"data":{},"input":{"ref":"entity_external_link_ref01","srcdatavar":"entity_external_link_ref01_data","suffix":"_dt0"},"match":{"id":"entity_external_link01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-entity_external_link_ref01"}}],"index$":2},{"active":true,"data":{},"input":{"ref":"entity_external_link_ref01","suffix":"_rm0"},"match":{"id":"entity_external_link01"},"op":"remove","spec":[],"valid":[],"index$":3}]}, 'EntityExternalLink')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const entity_external_link_ref01_ent = client.EntityExternalLink()
    let entity_external_link_ref01_data = setup.data.new.entity_external_link['entity_external_link_ref01']

    entity_external_link_ref01_data = (await entity_external_link_ref01_ent.create(entity_external_link_ref01_data)).data()
    assert(null != entity_external_link_ref01_data.id)


    // UPDATE
    const entity_external_link_ref01_data_up0: any = {}
    entity_external_link_ref01_data_up0.id = entity_external_link_ref01_data.id

    const entity_external_link_ref01_markdef_up0 = { name: 'label', value: 'Mark01-entity_external_link_ref01_' + setup.now }
    ;(entity_external_link_ref01_data_up0 as any)[entity_external_link_ref01_markdef_up0.name] = entity_external_link_ref01_markdef_up0.value

    const entity_external_link_ref01_resdata_up0 = (await entity_external_link_ref01_ent.update(entity_external_link_ref01_data_up0)).data()
    assert(entity_external_link_ref01_resdata_up0.id === entity_external_link_ref01_data_up0.id)

    assert((entity_external_link_ref01_resdata_up0 as any)[entity_external_link_ref01_markdef_up0.name] === entity_external_link_ref01_markdef_up0.value)


    // LOAD
    const entity_external_link_ref01_match_dt0: any = {}
    entity_external_link_ref01_match_dt0.id = entity_external_link_ref01_data.id
    const entity_external_link_ref01_data_dt0 = (await entity_external_link_ref01_ent.load(entity_external_link_ref01_match_dt0)).data()
    assert(entity_external_link_ref01_data_dt0.id === entity_external_link_ref01_data.id)


    // REMOVE
    const entity_external_link_ref01_match_rm0: any = { id: entity_external_link_ref01_data.id }
    await entity_external_link_ref01_ent.remove(entity_external_link_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/entity_external_link/EntityExternalLinkTestData.json')

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
    ['entity_external_link01','entity_external_link02','entity_external_link03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_ENTITY_EXTERNAL_LINK_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_ENTITY_EXTERNAL_LINK_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_ENTITY_EXTERNAL_LINK_ENTID']
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
  
