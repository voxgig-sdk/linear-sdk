

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


describe('OAuthApplicationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.OAuthApplication()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'o_auth_application.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"clientId":{"a":true,"h":"Client Id","n":"clientId","r":true,"sh":"The client ID used during OAuth authorization flows.","t":"`$STRING`","key$":"clientId","index$":0},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the OAuth application was created.","t":"`$ANY`","key$":"createdAt","index$":1},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"User-facing description of the OAuth application.","t":"`$STRING`","key$":"description","index$":2},"developer":{"a":true,"h":"Developer","n":"developer","r":true,"sh":"Name of the developer or company that built the OAuth application.","t":"`$STRING`","key$":"developer","index$":3},"developerUrl":{"a":true,"h":"Developer Url","n":"developerUrl","r":true,"sh":"URL of the developer's website, homepage, or documentation.","t":"`$STRING`","key$":"developerUrl","index$":4},"distribution":{"a":true,"h":"Distribution","n":"distribution","r":true,"sh":"Distribution setting for the OAuth application.","t":"`$STRING`","key$":"distribution","index$":5},"grantTypes":{"a":true,"h":"Grant Types","n":"grantTypes","r":true,"sh":"OAuth grant types supported by this application.","t":"`$STRING`","key$":"grantTypes","index$":6},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the OAuth application.","t":"`$STRING`","key$":"id","index$":7},"imageUrl":{"a":true,"h":"Image Url","n":"imageUrl","r":false,"sh":"URL of the OAuth application's icon.","t":"`$STRING`","key$":"imageUrl","index$":8},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The human-readable name of the OAuth application.","t":"`$STRING`","key$":"name","index$":9},"redirectUris":{"a":true,"h":"Redirect Uris","n":"redirectUris","r":true,"sh":"Allowed redirect URIs for OAuth authorization flows.","t":"`$STRING`","key$":"redirectUris","index$":10},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The time at which the OAuth application was last updated.","t":"`$ANY`","key$":"updatedAt","index$":11},"webhookEnabled":{"a":true,"h":"Webhook Enabled","n":"webhookEnabled","r":true,"sh":"Whether webhook delivery is enabled for this OAuth application.","t":"`$BOOLEAN`","key$":"webhookEnabled","index$":12},"webhookResourceTypes":{"a":true,"h":"Webhook Resource Types","n":"webhookResourceTypes","r":true,"sh":"Resource types the OAuth application's webhooks subscribe to.","t":"`$STRING`","key$":"webhookResourceTypes","index$":13},"webhookUrl":{"a":true,"h":"Webhook Url","n":"webhookUrl","r":false,"sh":"Webhook URL used for delivering webhook payloads.","t":"`$STRING`","key$":"webhookUrl","index$":14}},"id":{"field":"id","name":"id"},"name":"o_auth_application","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST oauthApplicationCreate","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation OAuthApplicationCreate($input: OAuthApplicationCreateInput!) { oauthApplicationCreate(input: $input) { application { ...OAuthApplicationFields } success } } fragment OAuthApplicationFields on OAuthApplication { clientId createdAt description developer developerUrl distribution grantTypes id imageUrl name redirectUris updatedAt webhookEnabled webhookResourceTypes webhookUrl }","field":"oauthApplicationCreate","optype":"mutation","vars":[{"from":"","gqltype":"OAuthApplicationCreateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"oauthApplicationCreate","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.oauthApplicationCreate.application`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"POST oauthApplications","source":"graphql","version":2},"g":{},"gq":{"doc":"query OAuthApplicationList { oauthApplications { ...OAuthApplicationFields } } fragment OAuthApplicationFields on OAuthApplication { clientId createdAt description developer developerUrl distribution grantTypes id imageUrl name redirectUris updatedAt webhookEnabled webhookResourceTypes webhookUrl }","field":"oauthApplications","optype":"query","vars":[]},"k":"graphql","m":"POST","o":"oauthApplications","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.oauthApplications`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST oauthApplication","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"query OAuthApplicationLoad($id: String!) { oauthApplication(id: $id) { ...OAuthApplicationFields } } fragment OAuthApplicationFields on OAuthApplication { clientId createdAt description developer developerUrl distribution grantTypes id imageUrl name redirectUris updatedAt webhookEnabled webhookResourceTypes webhookUrl }","field":"oauthApplication","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"oauthApplication","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.oauthApplication`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"POST oauthApplicationUpdate","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation OAuthApplicationUpdate($id: String!, $input: OAuthApplicationUpdateInput!) { oauthApplicationUpdate(id: $id, input: $input) { application { ...OAuthApplicationFields } success } } fragment OAuthApplicationFields on OAuthApplication { clientId createdAt description developer developerUrl distribution grantTypes id imageUrl name redirectUris updatedAt webhookEnabled webhookResourceTypes webhookUrl }","field":"oauthApplicationUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"OAuthApplicationUpdateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"oauthApplicationUpdate","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.oauthApplicationUpdate.application`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"o_auth_application","name__orig":"o_auth_application","Name":"OAuthApplication","name_":"o_auth_application","name-":"o-auth-application","NAME":"O_AUTH_APPLICATION","index$":50}, {"active":true,"entity":"o_auth_application","key$":"BasicOAuthApplicationFlow","kind":"basic","name":"BasicOAuthApplicationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"o_auth_application_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"o_auth_application_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"o_auth_application_ref01","srcdatavar":"o_auth_application_ref01_data","suffix":"_up0","textfield":"clientId"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-o_auth_application_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"o_auth_application_ref01","srcdatavar":"o_auth_application_ref01_data","suffix":"_dt0"},"m":{"id":"o_auth_application01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-o_auth_application_ref01"}}],"index$":3}]}, 'OAuthApplication', {"POST oauthApplicationCreate":{"protocol":"graphql"},"POST oauthApplications":{"protocol":"graphql"},"POST oauthApplication":{"protocol":"graphql"},"POST oauthApplicationUpdate":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const o_auth_application_ref01_ent = client.OAuthApplication()
    let o_auth_application_ref01_data = setup.data.new.o_auth_application['o_auth_application_ref01']

    o_auth_application_ref01_data = (await o_auth_application_ref01_ent.create(o_auth_application_ref01_data)).data()
    assert(null != o_auth_application_ref01_data.id)


    // LIST
    const o_auth_application_ref01_match: any = {}

    const o_auth_application_ref01_list = (await o_auth_application_ref01_ent.list(o_auth_application_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(o_auth_application_ref01_list, { id: o_auth_application_ref01_data.id })))


    // UPDATE
    const o_auth_application_ref01_data_up0: any = {}
    o_auth_application_ref01_data_up0.id = o_auth_application_ref01_data.id

    const o_auth_application_ref01_markdef_up0 = { name: 'clientId', value: 'Mark01-o_auth_application_ref01_' + setup.now }
    ;(o_auth_application_ref01_data_up0 as any)[o_auth_application_ref01_markdef_up0.name] = o_auth_application_ref01_markdef_up0.value

    const o_auth_application_ref01_resdata_up0 = (await o_auth_application_ref01_ent.update(o_auth_application_ref01_data_up0)).data()
    assert(o_auth_application_ref01_resdata_up0.id === o_auth_application_ref01_data_up0.id)

    assert((o_auth_application_ref01_resdata_up0 as any)[o_auth_application_ref01_markdef_up0.name] === o_auth_application_ref01_markdef_up0.value)


    // LOAD
    const o_auth_application_ref01_match_dt0: any = {}
    o_auth_application_ref01_match_dt0.id = o_auth_application_ref01_data.id
    const o_auth_application_ref01_data_dt0 = (await o_auth_application_ref01_ent.load(o_auth_application_ref01_match_dt0)).data()
    assert(o_auth_application_ref01_data_dt0.id === o_auth_application_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/o_auth_application/OAuthApplicationTestData.json')

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
    ['o_auth_application01','o_auth_application02','o_auth_application03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_O_AUTH_APPLICATION_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_O_AUTH_APPLICATION_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_O_AUTH_APPLICATION_ENTID']
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
  
