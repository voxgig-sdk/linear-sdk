

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


describe('OrganizationMetaEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.OrganizationMeta()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'organization_meta.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"allowedAuthServices":{"a":true,"h":"Allowed Auth Services","n":"allowedAuthServices","r":true,"sh":"Allowed authentication providers, empty array means all are allowed.","t":"`$STRING`","key$":"allowedAuthServices","index$":0},"region":{"a":true,"h":"Region","n":"region","r":true,"sh":"The region the workspace is hosted in.","t":"`$STRING`","key$":"region","index$":1}},"name":"organization_meta","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST organizationMeta","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"url_key","or":"url_key","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"query OrganizationMetaLoad($urlKey: String!) { organizationMeta(urlKey: $urlKey) { ...OrganizationMetaFields } } fragment OrganizationMetaFields on OrganizationMeta { allowedAuthServices region }","field":"organizationMeta","optype":"query","vars":[{"from":"urlKey","gqltype":"String!","name":"urlKey"}]},"k":"graphql","m":"POST","o":"organizationMeta","q":{"exist":["url_key"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.organizationMeta`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"organization_meta","name__orig":"organization_meta","Name":"OrganizationMeta","name_":"organization_meta","name-":"organization-meta","NAME":"ORGANIZATION_META","index$":54}, {"active":true,"entity":"organization_meta","key$":"BasicOrganizationMetaFlow","kind":"basic","name":"BasicOrganizationMetaFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"organization_meta_ref01","srcdatavar":"organization_meta_ref01_data","suffix":"_dt0"},"m":{"url_key":"url_key01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-organization_meta_ref01"}}],"index$":0}]}, 'OrganizationMeta', {"POST organizationMeta":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let organization_meta_ref01_data = Object.values(setup.data.existing.organization_meta)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const organization_meta_ref01_ent = client.OrganizationMeta()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/organization_meta/OrganizationMetaTestData.json')

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
    ['organization_meta01','organization_meta02','organization_meta03','url_key01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_ORGANIZATION_META_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_ORGANIZATION_META_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_ORGANIZATION_META_ENTID']
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
  
