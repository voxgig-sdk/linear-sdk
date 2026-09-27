

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":0},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":1},"creator":{"a":true,"h":"Creator","n":"creator","r":false,"sh":"The user who created the link.","t":"`$OBJECT`","key$":"creator","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":3},"initiative":{"a":true,"h":"Initiative","n":"initiative","r":false,"sh":"The initiative that the link is associated with.","t":"`$OBJECT`","key$":"initiative","index$":4},"label":{"a":true,"h":"Label","n":"label","r":true,"sh":"The link's label.","t":"`$STRING`","key$":"label","index$":5},"project":{"a":true,"h":"Project","n":"project","r":false,"sh":"The project that the link is associated with.","t":"`$OBJECT`","key$":"project","index$":6},"sortOrder":{"a":true,"h":"Sort Order","n":"sortOrder","r":true,"sh":"The sort order of this link within the parent entity's resources list.","t":"`$NUMBER`","key$":"sortOrder","index$":7},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":8},"url":{"a":true,"h":"Url","n":"url","r":true,"sh":"The link's URL.","t":"`$STRING`","key$":"url","index$":9}},"id":{"field":"id","name":"id"},"name":"entity_external_link","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST entityExternalLinkCreate","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation EntityExternalLinkCreate($input: EntityExternalLinkCreateInput!) { entityExternalLinkCreate(input: $input) { entityExternalLink { ...EntityExternalLinkFields } success } } fragment EntityExternalLinkFields on EntityExternalLink { archivedAt createdAt creator { id } id initiative { id } label project { id } sortOrder updatedAt url }","field":"entityExternalLinkCreate","optype":"mutation","vars":[{"from":"","gqltype":"EntityExternalLinkCreateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"entityExternalLinkCreate","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.entityExternalLinkCreate.entityExternalLink`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST entityExternalLink","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"query EntityExternalLinkLoad($id: String!) { entityExternalLink(id: $id) { ...EntityExternalLinkFields } } fragment EntityExternalLinkFields on EntityExternalLink { archivedAt createdAt creator { id } id initiative { id } label project { id } sortOrder updatedAt url }","field":"entityExternalLink","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"entityExternalLink","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.entityExternalLink`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"POST entityExternalLinkDelete","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation EntityExternalLinkRemove($id: String!) { entityExternalLinkDelete(id: $id) { entityId lastSyncId success } }","field":"entityExternalLinkDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"entityExternalLinkDelete","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.entityExternalLinkDelete`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"POST entityExternalLinkUpdate","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation EntityExternalLinkUpdate($id: String!, $input: EntityExternalLinkUpdateInput!) { entityExternalLinkUpdate(id: $id, input: $input) { entityExternalLink { ...EntityExternalLinkFields } success } } fragment EntityExternalLinkFields on EntityExternalLink { archivedAt createdAt creator { id } id initiative { id } label project { id } sortOrder updatedAt url }","field":"entityExternalLinkUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"EntityExternalLinkUpdateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"entityExternalLinkUpdate","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.entityExternalLinkUpdate.entityExternalLink`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"entity_external_link","name__orig":"entity_external_link","Name":"EntityExternalLink","name_":"entity_external_link","name-":"entity-external-link","NAME":"ENTITY_EXTERNAL_LINK","index$":25}, {"active":true,"entity":"entity_external_link","key$":"BasicEntityExternalLinkFlow","kind":"basic","name":"BasicEntityExternalLinkFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"entity_external_link_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"entity_external_link_ref01","srcdatavar":"entity_external_link_ref01_data","suffix":"_up0","textfield":"label"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-entity_external_link_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"entity_external_link_ref01","srcdatavar":"entity_external_link_ref01_data","suffix":"_dt0"},"m":{"id":"entity_external_link01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-entity_external_link_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"entity_external_link_ref01","suffix":"_rm0"},"m":{"id":"entity_external_link01"},"o":"remove","s":[],"v":[],"index$":3}]}, 'EntityExternalLink', {"POST entityExternalLinkCreate":{"protocol":"graphql"},"POST entityExternalLink":{"protocol":"graphql"},"POST entityExternalLinkDelete":{"protocol":"graphql"},"POST entityExternalLinkUpdate":{"protocol":"graphql"}})
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
  
