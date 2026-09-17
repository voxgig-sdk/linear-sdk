

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


describe('DocumentSearchResultEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.DocumentSearchResult()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'document_search_result.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"archivedAt","req":false,"short":"The time at which the entity was archived.","type":"`$ANY`","index$":0},{"active":true,"name":"color","req":false,"short":"The hex color of the document icon.","type":"`$STRING`","index$":1},{"active":true,"name":"content","req":false,"short":"The document's content in markdown format.","type":"`$STRING`","index$":2},{"active":true,"name":"contentState","req":false,"short":"[Internal] The document's content as a base64-encoded Yjs state update.","type":"`$STRING`","index$":3},{"active":true,"name":"createdAt","req":true,"short":"The time at which the entity was created.","type":"`$ANY`","index$":4},{"active":true,"name":"creator","req":false,"short":"The user who created the document.","type":"`$OBJECT`","index$":5},{"active":true,"name":"cycle","req":false,"short":"[Internal] The cycle that the document is associated with.","type":"`$OBJECT`","index$":6},{"active":true,"name":"documentContentId","req":false,"short":"The ID of the document content associated with the document.","type":"`$STRING`","index$":7},{"active":true,"name":"hiddenAt","req":false,"short":"The time at which the document was hidden from the default view.","type":"`$ANY`","index$":8},{"active":true,"name":"icon","req":false,"short":"The icon of the document, either a decorative icon type or an emoji string.","type":"`$STRING`","index$":9},{"active":true,"name":"id","req":true,"short":"The unique identifier of the entity.","type":"`$STRING`","index$":10},{"active":true,"name":"initiative","req":false,"short":"The initiative that the document is associated with.","type":"`$OBJECT`","index$":11},{"active":true,"name":"issue","req":false,"short":"The issue that the document is associated with.","type":"`$OBJECT`","index$":12},{"active":true,"name":"lastAppliedTemplate","req":false,"short":"The last template that was applied to this document.","type":"`$OBJECT`","index$":13},{"active":true,"name":"metadata","req":true,"short":"Metadata related to search result.","type":"`$ANY`","index$":14},{"active":true,"name":"owner","req":false,"short":"The owner of the document.","type":"`$OBJECT`","index$":15},{"active":true,"name":"project","req":false,"short":"The project that the document is associated with.","type":"`$OBJECT`","index$":16},{"active":true,"name":"release","req":false,"short":"The release that the document is associated with.","type":"`$OBJECT`","index$":17},{"active":true,"name":"slugId","req":true,"short":"The document's unique URL slug, used to construct human-readable URLs.","type":"`$STRING`","index$":18},{"active":true,"name":"sortOrder","req":true,"short":"The sort order of the document in its parent entity's resources list.","type":"`$NUMBER`","index$":19},{"active":true,"name":"summary","req":false,"short":"[Internal] A one-sentence AI-generated summary of the document content.","type":"`$STRING`","index$":20},{"active":true,"name":"team","req":false,"short":"[Internal] The team that the document is associated with.","type":"`$OBJECT`","index$":21},{"active":true,"name":"title","req":true,"short":"The title of the document.","type":"`$STRING`","index$":22},{"active":true,"name":"trashed","req":false,"short":"A flag that indicates whether the document is in the trash bin.","type":"`$BOOLEAN`","index$":23},{"active":true,"name":"updatedAt","req":true,"short":"The last time at which the entity was meaningfully updated.","type":"`$ANY`","index$":24},{"active":true,"name":"updatedBy","req":false,"short":"The user who last updated the document.","type":"`$OBJECT`","index$":25},{"active":true,"name":"url","req":true,"short":"The canonical url for the document.","type":"`$STRING`","index$":26}],"id":{"field":"id","name":"id"},"name":"document_search_result","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"after","orig":"after","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"before","orig":"before","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"param","name":"first","orig":"first","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"kind":"param","name":"include_archived","orig":"include_archived","reqd":false,"type":"`$BOOLEAN`","index$":3},{"active":true,"kind":"param","name":"include_comment","orig":"include_comment","reqd":false,"type":"`$BOOLEAN`","index$":4},{"active":true,"kind":"param","name":"last","orig":"last","reqd":false,"type":"`$INTEGER`","index$":5},{"active":true,"kind":"param","name":"order_by","orig":"order_by","reqd":false,"type":"`$ANY`","index$":6},{"active":true,"kind":"param","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":7},{"active":true,"kind":"param","name":"term","orig":"term","reqd":true,"type":"`$STRING`","index$":8}]},"contract":{"id":"POST searchDocuments","json":"{\"field\":{\"args\":[{\"gqltype\":\"String\",\"name\":\"after\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"String\",\"name\":\"before\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"Int\",\"name\":\"first\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"Boolean\",\"name\":\"includeArchived\",\"reqd\":false,\"type\":\"Boolean\"},{\"gqltype\":\"Boolean\",\"name\":\"includeComments\",\"reqd\":false,\"type\":\"Boolean\"},{\"gqltype\":\"Int\",\"name\":\"last\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\",\"reqd\":false,\"type\":\"PaginationOrderBy\"},{\"gqltype\":\"String\",\"name\":\"teamId\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"String!\",\"name\":\"term\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Search documents by text query using full-text and vector search. Results are ranked by relevance unless an orderBy parameter is specified. Rate-limited to 30 requests per minute.\",\"gqltype\":\"DocumentSearchPayload!\",\"list\":false,\"name\":\"searchDocuments\",\"reqd\":true,\"type\":\"DocumentSearchPayload\"},\"invocation\":{\"doc\":\"query DocumentSearchResultList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $includeComments: Boolean, $last: Int, $orderBy: PaginationOrderBy, $teamId: String, $term: String!) { searchDocuments(after: $after, before: $before, first: $first, includeArchived: $includeArchived, includeComments: $includeComments, last: $last, orderBy: $orderBy, teamId: $teamId, term: $term) { nodes { ...DocumentSearchResultFields } pageInfo { endCursor hasNextPage } } } fragment DocumentSearchResultFields on DocumentSearchResult { archivedAt color content contentState createdAt creator { id } cycle { id } documentContentId hiddenAt icon id initiative { id } issue { id } lastAppliedTemplate { id } metadata owner { id } project { id } release { id } slugId sortOrder summary team { id } title trashed updatedAt updatedBy { id } url }\",\"field\":\"searchDocuments\",\"optype\":\"query\",\"page\":{\"cursor\":\"pageInfo.endCursor\",\"more\":\"pageInfo.hasNextPage\",\"nodes\":\"nodes\",\"style\":\"relay\"},\"vars\":[{\"from\":\"after\",\"gqltype\":\"String\",\"name\":\"after\"},{\"from\":\"before\",\"gqltype\":\"String\",\"name\":\"before\"},{\"from\":\"first\",\"gqltype\":\"Int\",\"name\":\"first\"},{\"from\":\"includeArchived\",\"gqltype\":\"Boolean\",\"name\":\"includeArchived\"},{\"from\":\"includeComments\",\"gqltype\":\"Boolean\",\"name\":\"includeComments\"},{\"from\":\"last\",\"gqltype\":\"Int\",\"name\":\"last\"},{\"from\":\"orderBy\",\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\"},{\"from\":\"teamId\",\"gqltype\":\"String\",\"name\":\"teamId\"},{\"from\":\"term\",\"gqltype\":\"String!\",\"name\":\"term\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"Int\":{\"desc\":\"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Int\"},\"PaginationOrderBy\":{\"desc\":\"By which field should the pagination order by\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"PaginationOrderBy\",\"values\":[\"createdAt\",\"updatedAt\"]},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"query DocumentSearchResultList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $includeComments: Boolean, $last: Int, $orderBy: PaginationOrderBy, $teamId: String, $term: String!) { searchDocuments(after: $after, before: $before, first: $first, includeArchived: $includeArchived, includeComments: $includeComments, last: $last, orderBy: $orderBy, teamId: $teamId, term: $term) { nodes { ...DocumentSearchResultFields } pageInfo { endCursor hasNextPage } } } fragment DocumentSearchResultFields on DocumentSearchResult { archivedAt color content contentState createdAt creator { id } cycle { id } documentContentId hiddenAt icon id initiative { id } issue { id } lastAppliedTemplate { id } metadata owner { id } project { id } release { id } slugId sortOrder summary team { id } title trashed updatedAt updatedBy { id } url }","field":"searchDocuments","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"includeComments","gqltype":"Boolean","name":"includeComments"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"},{"from":"teamId","gqltype":"String","name":"teamId"},{"from":"term","gqltype":"String!","name":"term"}]},"kind":"graphql","method":"POST","orig":"searchDocuments","segments":[],"select":{"exist":["term"]},"transform":{"req":"`reqdata`","res":"`body.data.searchDocuments.nodes`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"document_search_result","name__orig":"document_search_result","Name":"DocumentSearchResult","name_":"document_search_result","name-":"document-search-result","NAME":"DOCUMENT_SEARCH_RESULT","index$":21}, {"active":true,"entity":"document_search_result","key$":"BasicDocumentSearchResultFlow","kind":"basic","name":"BasicDocumentSearchResultFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","include_comment":"include_comment01","last":"last01","order_by":"order_by01","team_id":"team01","term":"term01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"document_search_result_ref01"}}],"index$":0}]}, 'DocumentSearchResult')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let document_search_result_ref01_data = Object.values(setup.data.existing.document_search_result)[0] as any

    // LIST
    const document_search_result_ref01_ent = client.DocumentSearchResult()
    const document_search_result_ref01_match: any = {}
    document_search_result_ref01_match['after'] = setup.idmap['after01']
    document_search_result_ref01_match['before'] = setup.idmap['before01']
    document_search_result_ref01_match['first'] = setup.idmap['first01']
    document_search_result_ref01_match['include_archived'] = setup.idmap['include_archived01']
    document_search_result_ref01_match['include_comment'] = setup.idmap['include_comment01']
    document_search_result_ref01_match['last'] = setup.idmap['last01']
    document_search_result_ref01_match['order_by'] = setup.idmap['order_by01']
    document_search_result_ref01_match['team_id'] = setup.idmap['team01']
    document_search_result_ref01_match['term'] = setup.idmap['term01']

    const document_search_result_ref01_list = (await document_search_result_ref01_ent.list(document_search_result_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/document_search_result/DocumentSearchResultTestData.json')

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
    ['document_search_result01','document_search_result02','document_search_result03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_DOCUMENT_SEARCH_RESULT_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_DOCUMENT_SEARCH_RESULT_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_DOCUMENT_SEARCH_RESULT_ENTID']
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
  
