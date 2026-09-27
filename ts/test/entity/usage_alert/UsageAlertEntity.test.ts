

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


describe('UsageAlertEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.UsageAlert()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'usage_alert.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":0},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":2},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":true,"sh":"Type-specific snapshot captured when the alert was triggered, keyed by the alert type — for example the credit balance and threshold for a lowBalance alert.","t":"`$ANY`","key$":"metadata","index$":3},"resolvedAt":{"a":true,"h":"Resolved At","n":"resolvedAt","r":false,"sh":"The time when the usage alert was resolved or archived.","t":"`$ANY`","key$":"resolvedAt","index$":4},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"The kind of usage alert that was triggered.","t":"`$STRING`","key$":"type","index$":5},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":6}},"id":{"field":"id","name":"id"},"name":"usage_alert","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"POST usageAlerts","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"first","or":"first","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"param","n":"include_archived","or":"include_archived","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"param","n":"last","or":"last","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"param","n":"order_by","or":"order_by","r":false,"t":"`$ANY`","index$":5}]},"gq":{"doc":"query UsageAlertList($after: String, $before: String, $filter: UsageAlertFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { usageAlerts(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...UsageAlertFields } pageInfo { endCursor hasNextPage } } } fragment UsageAlertFields on UsageAlert { archivedAt createdAt id metadata resolvedAt type updatedAt }","field":"usageAlerts","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"","gqltype":"UsageAlertFilter","name":"filter"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"}]},"k":"graphql","m":"POST","o":"usageAlerts","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.usageAlerts.nodes`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST usageAlert","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"query UsageAlertLoad($id: String!) { usageAlert(id: $id) { ...UsageAlertFields } } fragment UsageAlertFields on UsageAlert { archivedAt createdAt id metadata resolvedAt type updatedAt }","field":"usageAlert","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"usageAlert","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.usageAlert`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"usage_alert","name__orig":"usage_alert","Name":"UsageAlert","name_":"usage_alert","name-":"usage-alert","NAME":"USAGE_ALERT","index$":80}, {"active":true,"entity":"usage_alert","key$":"BasicUsageAlertFlow","kind":"basic","name":"BasicUsageAlertFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"usage_alert_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"usage_alert_ref01","srcdatavar":"usage_alert_ref01_data","suffix":"_dt0"},"m":{"id":"usage_alert01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-usage_alert_ref01"}}],"index$":1}]}, 'UsageAlert', {"POST usageAlerts":{"protocol":"graphql"},"POST usageAlert":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let usage_alert_ref01_data = Object.values(setup.data.existing.usage_alert)[0] as any

    // LIST
    const usage_alert_ref01_ent = client.UsageAlert()
    const usage_alert_ref01_match: any = {}
    usage_alert_ref01_match['after'] = setup.idmap['after01']
    usage_alert_ref01_match['before'] = setup.idmap['before01']
    usage_alert_ref01_match['first'] = setup.idmap['first01']
    usage_alert_ref01_match['include_archived'] = setup.idmap['include_archived01']
    usage_alert_ref01_match['last'] = setup.idmap['last01']
    usage_alert_ref01_match['order_by'] = setup.idmap['order_by01']

    const usage_alert_ref01_list = (await usage_alert_ref01_ent.list(usage_alert_ref01_match)).map((e: any) => e.data())


    // LOAD
    const usage_alert_ref01_match_dt0: any = {}
    usage_alert_ref01_match_dt0.id = usage_alert_ref01_data.id
    const usage_alert_ref01_data_dt0 = (await usage_alert_ref01_ent.load(usage_alert_ref01_match_dt0)).data()
    assert(usage_alert_ref01_data_dt0.id === usage_alert_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/usage_alert/UsageAlertTestData.json')

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
    ['usage_alert01','usage_alert02','usage_alert03','after01','before01','first01','include_archived01','last01','order_by01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_USAGE_ALERT_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_USAGE_ALERT_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_USAGE_ALERT_ENTID']
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
  
