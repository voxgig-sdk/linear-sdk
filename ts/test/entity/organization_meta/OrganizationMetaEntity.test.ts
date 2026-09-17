

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"allowedAuthServices","req":true,"short":"Allowed authentication providers, empty array means all are allowed.","type":"`$STRING`","index$":0},{"active":true,"name":"region","req":true,"short":"The region the workspace is hosted in.","type":"`$STRING`","index$":1}],"name":"organization_meta","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"url_key","orig":"url_key","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST organizationMeta","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"urlKey\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"[INTERNAL] Get workspace metadata by URL key or workspace ID.\",\"gqltype\":\"OrganizationMeta\",\"list\":false,\"name\":\"organizationMeta\",\"reqd\":false,\"type\":\"OrganizationMeta\"},\"invocation\":{\"doc\":\"query OrganizationMetaLoad($urlKey: String!) { organizationMeta(urlKey: $urlKey) { ...OrganizationMetaFields } } fragment OrganizationMetaFields on OrganizationMeta { allowedAuthServices region }\",\"field\":\"organizationMeta\",\"optype\":\"query\",\"vars\":[{\"from\":\"urlKey\",\"gqltype\":\"String!\",\"name\":\"urlKey\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"query OrganizationMetaLoad($urlKey: String!) { organizationMeta(urlKey: $urlKey) { ...OrganizationMetaFields } } fragment OrganizationMetaFields on OrganizationMeta { allowedAuthServices region }","field":"organizationMeta","optype":"query","vars":[{"from":"urlKey","gqltype":"String!","name":"urlKey"}]},"kind":"graphql","method":"POST","orig":"organizationMeta","segments":[],"select":{"exist":["url_key"]},"transform":{"req":"`reqdata`","res":"`body.data.organizationMeta`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"organization_meta","name__orig":"organization_meta","Name":"OrganizationMeta","name_":"organization_meta","name-":"organization-meta","NAME":"ORGANIZATION_META","index$":54}, {"active":true,"entity":"organization_meta","key$":"BasicOrganizationMetaFlow","kind":"basic","name":"BasicOrganizationMetaFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"organization_meta_ref01","srcdatavar":"organization_meta_ref01_data","suffix":"_dt0"},"match":{"url_key":"url_key01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-organization_meta_ref01"}}],"index$":0}]}, 'OrganizationMeta')
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
    ['organization_meta01','organization_meta02','organization_meta03'],
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
  
