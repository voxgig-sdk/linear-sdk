

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


describe('ViewPreferenceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.ViewPreference()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'view_preference.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":0},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":2},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"The type of view preferences: \"organization\" for workspace-wide defaults or \"user\" for personal overrides.","t":"`$STRING`","key$":"type","index$":3},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":4},"viewType":{"a":true,"h":"View Type","n":"viewType","r":true,"sh":"The type of view these preferences apply to, such as board, cycle, project, customView, myIssues, etc.","t":"`$STRING`","key$":"viewType","index$":5}},"id":{"field":"id","name":"id"},"name":"view_preference","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST viewPreferencesCreate","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation ViewPreferenceCreate($input: ViewPreferencesCreateInput!) { viewPreferencesCreate(input: $input) { viewPreferences { ...ViewPreferenceFields } success } } fragment ViewPreferenceFields on ViewPreferences { archivedAt createdAt id type updatedAt viewType }","field":"viewPreferencesCreate","optype":"mutation","vars":[{"from":"","gqltype":"ViewPreferencesCreateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"viewPreferencesCreate","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.viewPreferencesCreate.viewPreferences`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST userViewPreferences","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"view_type","or":"view_type","r":true,"t":"`$ANY`","index$":0}]},"gq":{"doc":"query ViewPreferenceLoad($viewType: ViewType!) { userViewPreferences(viewType: $viewType) { ...ViewPreferenceFields } } fragment ViewPreferenceFields on ViewPreferences { archivedAt createdAt id type updatedAt viewType }","field":"userViewPreferences","optype":"query","vars":[{"from":"viewType","gqltype":"ViewType!","name":"viewType"}]},"k":"graphql","m":"POST","o":"userViewPreferences","q":{"exist":["view_type"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.userViewPreferences`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"POST viewPreferencesDelete","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation ViewPreferenceRemove($id: String!) { viewPreferencesDelete(id: $id) { entityId lastSyncId success } }","field":"viewPreferencesDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"viewPreferencesDelete","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.viewPreferencesDelete`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"POST viewPreferencesUpdate","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation ViewPreferenceUpdate($id: String!, $input: ViewPreferencesUpdateInput!) { viewPreferencesUpdate(id: $id, input: $input) { viewPreferences { ...ViewPreferenceFields } success } } fragment ViewPreferenceFields on ViewPreferences { archivedAt createdAt id type updatedAt viewType }","field":"viewPreferencesUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"ViewPreferencesUpdateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"viewPreferencesUpdate","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.viewPreferencesUpdate.viewPreferences`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"view_preference","name__orig":"view_preference","Name":"ViewPreference","name_":"view_preference","name-":"view-preference","NAME":"VIEW_PREFERENCE","index$":83}, {"active":true,"entity":"view_preference","key$":"BasicViewPreferenceFlow","kind":"basic","name":"BasicViewPreferenceFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"view_preference_ref01"},"m":{"view_type":"view_type01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"view_preference_ref01","srcdatavar":"view_preference_ref01_data","suffix":"_up0","textfield":"type"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-view_preference_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"view_preference_ref01","srcdatavar":"view_preference_ref01_data","suffix":"_dt0"},"m":{"view_type":"view_type01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-view_preference_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"view_preference_ref01","suffix":"_rm0"},"m":{"id":"view_preference01"},"o":"remove","s":[],"v":[],"index$":3}]}, 'ViewPreference', {"POST viewPreferencesCreate":{"protocol":"graphql"},"POST userViewPreferences":{"protocol":"graphql"},"POST viewPreferencesDelete":{"protocol":"graphql"},"POST viewPreferencesUpdate":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const view_preference_ref01_ent = client.ViewPreference()
    let view_preference_ref01_data = setup.data.new.view_preference['view_preference_ref01']
    view_preference_ref01_data['view_type'] = setup.idmap['view_type01']

    view_preference_ref01_data = (await view_preference_ref01_ent.create(view_preference_ref01_data)).data()
    assert(null != view_preference_ref01_data.id)


    // UPDATE
    const view_preference_ref01_data_up0: any = {}
    view_preference_ref01_data_up0.id = view_preference_ref01_data.id

    const view_preference_ref01_markdef_up0 = { name: 'type', value: 'Mark01-view_preference_ref01_' + setup.now }
    ;(view_preference_ref01_data_up0 as any)[view_preference_ref01_markdef_up0.name] = view_preference_ref01_markdef_up0.value

    const view_preference_ref01_resdata_up0 = (await view_preference_ref01_ent.update(view_preference_ref01_data_up0)).data()
    assert(view_preference_ref01_resdata_up0.id === view_preference_ref01_data_up0.id)

    assert((view_preference_ref01_resdata_up0 as any)[view_preference_ref01_markdef_up0.name] === view_preference_ref01_markdef_up0.value)


    // LOAD
    const view_preference_ref01_match_dt0: any = {}
    view_preference_ref01_match_dt0.id = view_preference_ref01_data.id
    const view_preference_ref01_data_dt0 = (await view_preference_ref01_ent.load(view_preference_ref01_match_dt0)).data()
    assert(view_preference_ref01_data_dt0.id === view_preference_ref01_data.id)


    // REMOVE
    const view_preference_ref01_match_rm0: any = { id: view_preference_ref01_data.id }
    await view_preference_ref01_ent.remove(view_preference_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/view_preference/ViewPreferenceTestData.json')

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
    ['view_preference01','view_preference02','view_preference03','view_type01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_VIEW_PREFERENCE_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_VIEW_PREFERENCE_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_VIEW_PREFERENCE_ENTID']
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
  
