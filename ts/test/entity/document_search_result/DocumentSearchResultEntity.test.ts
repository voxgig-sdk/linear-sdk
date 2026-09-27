

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":0},"color":{"a":true,"h":"Color","n":"color","r":false,"sh":"The hex color of the document icon.","t":"`$STRING`","key$":"color","index$":1},"content":{"a":true,"h":"Content","n":"content","r":false,"sh":"The document's content in markdown format.","t":"`$STRING`","key$":"content","index$":2},"contentState":{"a":true,"h":"Content State","n":"contentState","r":false,"sh":"[Internal] The document's content as a base64-encoded Yjs state update.","t":"`$STRING`","key$":"contentState","index$":3},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":4},"creator":{"a":true,"h":"Creator","n":"creator","r":false,"sh":"The user who created the document.","t":"`$OBJECT`","key$":"creator","index$":5},"cycle":{"a":true,"h":"Cycle","n":"cycle","r":false,"sh":"[Internal] The cycle that the document is associated with.","t":"`$OBJECT`","key$":"cycle","index$":6},"documentContentId":{"a":true,"h":"Document Content Id","n":"documentContentId","r":false,"sh":"The ID of the document content associated with the document.","t":"`$STRING`","key$":"documentContentId","index$":7},"hiddenAt":{"a":true,"h":"Hidden At","n":"hiddenAt","r":false,"sh":"The time at which the document was hidden from the default view.","t":"`$ANY`","key$":"hiddenAt","index$":8},"icon":{"a":true,"h":"Icon","n":"icon","r":false,"sh":"The icon of the document, either a decorative icon type or an emoji string.","t":"`$STRING`","key$":"icon","index$":9},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":10},"initiative":{"a":true,"h":"Initiative","n":"initiative","r":false,"sh":"The initiative that the document is associated with.","t":"`$OBJECT`","key$":"initiative","index$":11},"issue":{"a":true,"h":"Issue","n":"issue","r":false,"sh":"The issue that the document is associated with.","t":"`$OBJECT`","key$":"issue","index$":12},"lastAppliedTemplate":{"a":true,"h":"Last Applied Template","n":"lastAppliedTemplate","r":false,"sh":"The last template that was applied to this document.","t":"`$OBJECT`","key$":"lastAppliedTemplate","index$":13},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":true,"sh":"Metadata related to search result.","t":"`$ANY`","key$":"metadata","index$":14},"owner":{"a":true,"h":"Owner","n":"owner","r":false,"sh":"The owner of the document.","t":"`$OBJECT`","key$":"owner","index$":15},"project":{"a":true,"h":"Project","n":"project","r":false,"sh":"The project that the document is associated with.","t":"`$OBJECT`","key$":"project","index$":16},"release":{"a":true,"h":"Release","n":"release","r":false,"sh":"The release that the document is associated with.","t":"`$OBJECT`","key$":"release","index$":17},"slugId":{"a":true,"h":"Slug Id","n":"slugId","r":true,"sh":"The document's unique URL slug, used to construct human-readable URLs.","t":"`$STRING`","key$":"slugId","index$":18},"sortOrder":{"a":true,"h":"Sort Order","n":"sortOrder","r":true,"sh":"The sort order of the document in its parent entity's resources list.","t":"`$NUMBER`","key$":"sortOrder","index$":19},"summary":{"a":true,"h":"Summary","n":"summary","r":false,"sh":"[Internal] A one-sentence AI-generated summary of the document content.","t":"`$STRING`","key$":"summary","index$":20},"team":{"a":true,"h":"Team","n":"team","r":false,"sh":"[Internal] The team that the document is associated with.","t":"`$OBJECT`","key$":"team","index$":21},"title":{"a":true,"h":"Title","n":"title","r":true,"sh":"The title of the document.","t":"`$STRING`","key$":"title","index$":22},"trashed":{"a":true,"h":"Trashed","n":"trashed","r":false,"sh":"A flag that indicates whether the document is in the trash bin.","t":"`$BOOLEAN`","key$":"trashed","index$":23},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":24},"updatedBy":{"a":true,"h":"Updated By","n":"updatedBy","r":false,"sh":"The user who last updated the document.","t":"`$OBJECT`","key$":"updatedBy","index$":25},"url":{"a":true,"h":"Url","n":"url","r":true,"sh":"The canonical url for the document.","t":"`$STRING`","key$":"url","index$":26}},"id":{"field":"id","name":"id"},"name":"document_search_result","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"POST searchDocuments","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"first","or":"first","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"param","n":"include_archived","or":"include_archived","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"param","n":"include_comment","or":"include_comment","r":false,"t":"`$BOOLEAN`","index$":4},{"a":true,"k":"param","n":"last","or":"last","r":false,"t":"`$INTEGER`","index$":5},{"a":true,"k":"param","n":"order_by","or":"order_by","r":false,"t":"`$ANY`","index$":6},{"a":true,"k":"param","n":"team_id","or":"team_id","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"param","n":"term","or":"term","r":true,"t":"`$STRING`","index$":8}]},"gq":{"doc":"query DocumentSearchResultList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $includeComments: Boolean, $last: Int, $orderBy: PaginationOrderBy, $teamId: String, $term: String!) { searchDocuments(after: $after, before: $before, first: $first, includeArchived: $includeArchived, includeComments: $includeComments, last: $last, orderBy: $orderBy, teamId: $teamId, term: $term) { nodes { ...DocumentSearchResultFields } pageInfo { endCursor hasNextPage } } } fragment DocumentSearchResultFields on DocumentSearchResult { archivedAt color content contentState createdAt creator { id } cycle { id } documentContentId hiddenAt icon id initiative { id } issue { id } lastAppliedTemplate { id } metadata owner { id } project { id } release { id } slugId sortOrder summary team { id } title trashed updatedAt updatedBy { id } url }","field":"searchDocuments","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"includeComments","gqltype":"Boolean","name":"includeComments"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"},{"from":"teamId","gqltype":"String","name":"teamId"},{"from":"term","gqltype":"String!","name":"term"}]},"k":"graphql","m":"POST","o":"searchDocuments","q":{"exist":["term"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.searchDocuments.nodes`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"document_search_result","name__orig":"document_search_result","Name":"DocumentSearchResult","name_":"document_search_result","name-":"document-search-result","NAME":"DOCUMENT_SEARCH_RESULT","index$":21}, {"active":true,"entity":"document_search_result","key$":"BasicDocumentSearchResultFlow","kind":"basic","name":"BasicDocumentSearchResultFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","include_comment":"include_comment01","last":"last01","order_by":"order_by01","team_id":"team01","term":"term01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"document_search_result_ref01"}}],"index$":0}]}, 'DocumentSearchResult', {"POST searchDocuments":{"protocol":"graphql"}})
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
    ['document_search_result01','document_search_result02','document_search_result03','after01','before01','first01','include_archived01','include_comment01','last01','order_by01','team01','term01'],
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
  
