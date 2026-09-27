

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


describe('CustomViewEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.CustomView()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'custom_view.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":0},"color":{"a":true,"h":"Color","n":"color","r":false,"sh":"The hex color code of the custom view icon.","t":"`$STRING`","key$":"color","index$":1},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":2},"creator":{"a":true,"h":"Creator","n":"creator","r":false,"sh":"The user who originally created the custom view.","t":"`$OBJECT`","key$":"creator","index$":3},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"The description of the custom view.","t":"`$STRING`","key$":"description","index$":4},"facet":{"a":true,"h":"Facet","n":"facet","r":false,"sh":"[INTERNAL] The facet that links this custom view to its parent entity (project, initiative, team page, etc.).","t":"`$OBJECT`","key$":"facet","index$":5},"feedItemFilterData":{"a":true,"h":"Feed Item Filter Data","n":"feedItemFilterData","r":false,"sh":"The filter applied to feed items in the custom view.","t":"`$ANY`","key$":"feedItemFilterData","index$":6},"filterData":{"a":true,"h":"Filter Data","n":"filterData","r":true,"sh":"The structured filter applied to issues in the custom view.","t":"`$ANY`","key$":"filterData","index$":7},"icon":{"a":true,"h":"Icon","n":"icon","r":false,"sh":"The icon of the custom view.","t":"`$STRING`","key$":"icon","index$":8},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":9},"initiativeFilterData":{"a":true,"h":"Initiative Filter Data","n":"initiativeFilterData","r":false,"sh":"The filter applied to initiatives in the custom view.","t":"`$ANY`","key$":"initiativeFilterData","index$":10},"modelName":{"a":true,"h":"Model Name","n":"modelName","r":true,"sh":"The entity type this view displays.","t":"`$STRING`","key$":"modelName","index$":11},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of the custom view, displayed in the sidebar and navigation.","t":"`$STRING`","key$":"name","index$":12},"organization":{"a":true,"h":"Organization","n":"organization","r":false,"sh":"The workspace of the custom view.","t":"`$OBJECT`","key$":"organization","index$":13},"organizationViewPreferences":{"a":true,"h":"Organization View Preferences","n":"organizationViewPreferences","r":false,"sh":"The workspace-level default view preferences for this custom view, if any have been set.","t":"`$OBJECT`","key$":"organizationViewPreferences","index$":14},"owner":{"a":true,"h":"Owner","n":"owner","r":false,"sh":"The user who owns the custom view.","t":"`$OBJECT`","key$":"owner","index$":15},"projectFilterData":{"a":true,"h":"Project Filter Data","n":"projectFilterData","r":false,"sh":"The filter applied to projects in the custom view.","t":"`$ANY`","key$":"projectFilterData","index$":16},"shared":{"a":true,"h":"Shared","n":"shared","r":true,"sh":"Whether the custom view is shared with everyone in the organization.","t":"`$BOOLEAN`","key$":"shared","index$":17},"slugId":{"a":true,"h":"Slug Id","n":"slugId","r":true,"sh":"The custom view's unique URL slug, used to construct human-readable URLs.","t":"`$STRING`","key$":"slugId","index$":18},"team":{"a":true,"h":"Team","n":"team","r":false,"sh":"The team that the custom view is scoped to.","t":"`$OBJECT`","key$":"team","index$":19},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":20},"updatedBy":{"a":true,"h":"Updated By","n":"updatedBy","r":false,"sh":"The user who last updated the custom view.","t":"`$OBJECT`","key$":"updatedBy","index$":21},"userViewPreferences":{"a":true,"h":"User View Preferences","n":"userViewPreferences","r":false,"sh":"The current user's personal view preferences for this custom view, if they have set any.","t":"`$OBJECT`","key$":"userViewPreferences","index$":22}},"id":{"field":"id","name":"id"},"name":"custom_view","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST customViewCreate","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation CustomViewCreate($input: CustomViewCreateInput!) { customViewCreate(input: $input) { customView { ...CustomViewFields } success } } fragment CustomViewFields on CustomView { archivedAt color createdAt creator { id } description facet { id } feedItemFilterData filterData icon id initiativeFilterData modelName name organization { id } organizationViewPreferences { id } owner { id } projectFilterData shared slugId team { id } updatedAt updatedBy { id } userViewPreferences { id } }","field":"customViewCreate","optype":"mutation","vars":[{"from":"","gqltype":"CustomViewCreateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"customViewCreate","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.customViewCreate.customView`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"POST customViews","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"first","or":"first","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"param","n":"include_archived","or":"include_archived","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"param","n":"last","or":"last","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"param","n":"order_by","or":"order_by","r":false,"t":"`$ANY`","index$":5}]},"gq":{"doc":"query CustomViewList($after: String, $before: String, $filter: CustomViewFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy, $sort: [CustomViewSortInput!]) { customViews(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy, sort: $sort) { nodes { ...CustomViewFields } pageInfo { endCursor hasNextPage } } } fragment CustomViewFields on CustomView { archivedAt color createdAt creator { id } description facet { id } feedItemFilterData filterData icon id initiativeFilterData modelName name organization { id } organizationViewPreferences { id } owner { id } projectFilterData shared slugId team { id } updatedAt updatedBy { id } userViewPreferences { id } }","field":"customViews","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"filter","gqltype":"CustomViewFilter","name":"filter"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"},{"from":"sort","gqltype":"[CustomViewSortInput!]","name":"sort"}]},"k":"graphql","m":"POST","o":"customViews","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.customViews.nodes`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST customView","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"query CustomViewLoad($id: String!) { customView(id: $id) { ...CustomViewFields } } fragment CustomViewFields on CustomView { archivedAt color createdAt creator { id } description facet { id } feedItemFilterData filterData icon id initiativeFilterData modelName name organization { id } organizationViewPreferences { id } owner { id } projectFilterData shared slugId team { id } updatedAt updatedBy { id } userViewPreferences { id } }","field":"customView","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"customView","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.customView`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"POST customViewDelete","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation CustomViewRemove($id: String!) { customViewDelete(id: $id) { entityId lastSyncId success } }","field":"customViewDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"customViewDelete","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.customViewDelete`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"POST customViewUpdate","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation CustomViewUpdate($id: String!, $input: CustomViewUpdateInput!) { customViewUpdate(id: $id, input: $input) { customView { ...CustomViewFields } success } } fragment CustomViewFields on CustomView { archivedAt color createdAt creator { id } description facet { id } feedItemFilterData filterData icon id initiativeFilterData modelName name organization { id } organizationViewPreferences { id } owner { id } projectFilterData shared slugId team { id } updatedAt updatedBy { id } userViewPreferences { id } }","field":"customViewUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"CustomViewUpdateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"customViewUpdate","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.customViewUpdate.customView`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"custom_view","name__orig":"custom_view","Name":"CustomView","name_":"custom_view","name-":"custom-view","NAME":"CUSTOM_VIEW","index$":13}, {"active":true,"entity":"custom_view","key$":"BasicCustomViewFlow","kind":"basic","name":"BasicCustomViewFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"custom_view_ref01"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"custom_view_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"custom_view_ref01","srcdatavar":"custom_view_ref01_data","suffix":"_up0","textfield":"color"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-custom_view_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"custom_view_ref01","srcdatavar":"custom_view_ref01_data","suffix":"_dt0"},"m":{"id":"custom_view01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-custom_view_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"custom_view_ref01","suffix":"_rm0"},"m":{"id":"custom_view01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"custom_view_ref01"}}],"index$":5}]}, 'CustomView', {"POST customViewCreate":{"protocol":"graphql"},"POST customViews":{"protocol":"graphql"},"POST customView":{"protocol":"graphql"},"POST customViewDelete":{"protocol":"graphql"},"POST customViewUpdate":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const custom_view_ref01_ent = client.CustomView()
    let custom_view_ref01_data = setup.data.new.custom_view['custom_view_ref01']
    custom_view_ref01_data['after'] = setup.idmap['after01']
    custom_view_ref01_data['before'] = setup.idmap['before01']
    custom_view_ref01_data['first'] = setup.idmap['first01']
    custom_view_ref01_data['include_archived'] = setup.idmap['include_archived01']
    custom_view_ref01_data['last'] = setup.idmap['last01']
    custom_view_ref01_data['order_by'] = setup.idmap['order_by01']

    custom_view_ref01_data = (await custom_view_ref01_ent.create(custom_view_ref01_data)).data()
    assert(null != custom_view_ref01_data.id)


    // LIST
    const custom_view_ref01_match: any = {}
    custom_view_ref01_match['after'] = setup.idmap['after01']
    custom_view_ref01_match['before'] = setup.idmap['before01']
    custom_view_ref01_match['first'] = setup.idmap['first01']
    custom_view_ref01_match['include_archived'] = setup.idmap['include_archived01']
    custom_view_ref01_match['last'] = setup.idmap['last01']
    custom_view_ref01_match['order_by'] = setup.idmap['order_by01']

    const custom_view_ref01_list = (await custom_view_ref01_ent.list(custom_view_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(custom_view_ref01_list, { id: custom_view_ref01_data.id })))


    // UPDATE
    const custom_view_ref01_data_up0: any = {}
    custom_view_ref01_data_up0.id = custom_view_ref01_data.id

    const custom_view_ref01_markdef_up0 = { name: 'color', value: 'Mark01-custom_view_ref01_' + setup.now }
    ;(custom_view_ref01_data_up0 as any)[custom_view_ref01_markdef_up0.name] = custom_view_ref01_markdef_up0.value

    const custom_view_ref01_resdata_up0 = (await custom_view_ref01_ent.update(custom_view_ref01_data_up0)).data()
    assert(custom_view_ref01_resdata_up0.id === custom_view_ref01_data_up0.id)

    assert((custom_view_ref01_resdata_up0 as any)[custom_view_ref01_markdef_up0.name] === custom_view_ref01_markdef_up0.value)


    // LOAD
    const custom_view_ref01_match_dt0: any = {}
    custom_view_ref01_match_dt0.id = custom_view_ref01_data.id
    const custom_view_ref01_data_dt0 = (await custom_view_ref01_ent.load(custom_view_ref01_match_dt0)).data()
    assert(custom_view_ref01_data_dt0.id === custom_view_ref01_data.id)


    // REMOVE
    const custom_view_ref01_match_rm0: any = { id: custom_view_ref01_data.id }
    await custom_view_ref01_ent.remove(custom_view_ref01_match_rm0)
  

    // LIST
    const custom_view_ref01_match_rt0: any = {}
    custom_view_ref01_match_rt0['after'] = setup.idmap['after01']
    custom_view_ref01_match_rt0['before'] = setup.idmap['before01']
    custom_view_ref01_match_rt0['first'] = setup.idmap['first01']
    custom_view_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01']
    custom_view_ref01_match_rt0['last'] = setup.idmap['last01']
    custom_view_ref01_match_rt0['order_by'] = setup.idmap['order_by01']

    const custom_view_ref01_list_rt0 = (await custom_view_ref01_ent.list(custom_view_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(custom_view_ref01_list_rt0, { id: custom_view_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/custom_view/CustomViewTestData.json')

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
    ['custom_view01','custom_view02','custom_view03','after01','before01','first01','include_archived01','last01','order_by01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_CUSTOM_VIEW_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_CUSTOM_VIEW_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_CUSTOM_VIEW_ENTID']
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
  
