

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


describe('SlaConfigurationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.SlaConfiguration()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'sla_configuration.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"conditions":{"a":true,"h":"Conditions","n":"conditions","r":true,"sh":"The workflow conditions that determine when this SLA rule applies.","t":"`$ANY`","key$":"conditions","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The identifier of the SLA rule.","t":"`$STRING`","key$":"id","index$":1},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of the SLA rule.","t":"`$STRING`","key$":"name","index$":2},"removesSla":{"a":true,"h":"Removes Sla","n":"removesSla","r":true,"sh":"Whether the rule removes an SLA instead of setting one.","t":"`$BOOLEAN`","key$":"removesSla","index$":3},"sla":{"a":true,"h":"Sla","n":"sla","r":false,"sh":"The SLA value configured by the rule, expressed in milliseconds or business days depending on the day-count type.","t":"`$NUMBER`","key$":"sla","index$":4},"slaType":{"a":true,"h":"Sla Type","n":"slaType","r":false,"sh":"The SLA type used when the rule sets an SLA.","t":"`$STRING`","key$":"slaType","index$":5},"startMode":{"a":true,"h":"Start Mode","n":"startMode","r":false,"sh":"When SLA timing begins.","t":"`$STRING`","key$":"startMode","index$":6}},"id":{"field":"id","name":"id"},"name":"sla_configuration","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"POST slaConfigurations","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"team_id","or":"team_id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"query SlaConfigurationList($teamId: String!) { slaConfigurations(teamId: $teamId) { ...SlaConfigurationFields } } fragment SlaConfigurationFields on SlaConfiguration { conditions id name removesSla sla slaType startMode }","field":"slaConfigurations","optype":"query","vars":[{"from":"teamId","gqltype":"String!","name":"teamId"}]},"k":"graphql","m":"POST","o":"slaConfigurations","q":{"exist":["team_id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.slaConfigurations`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"sla_configuration","name__orig":"sla_configuration","Name":"SlaConfiguration","name_":"sla_configuration","name-":"sla-configuration","NAME":"SLA_CONFIGURATION","index$":72}, {"active":true,"entity":"sla_configuration","key$":"BasicSlaConfigurationFlow","kind":"basic","name":"BasicSlaConfigurationFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"team_id":"team01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"sla_configuration_ref01"}}],"index$":0}]}, 'SlaConfiguration', {"POST slaConfigurations":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let sla_configuration_ref01_data = Object.values(setup.data.existing.sla_configuration)[0] as any

    // LIST
    const sla_configuration_ref01_ent = client.SlaConfiguration()
    const sla_configuration_ref01_match: any = {}
    sla_configuration_ref01_match['team_id'] = setup.idmap['team01']

    const sla_configuration_ref01_list = (await sla_configuration_ref01_ent.list(sla_configuration_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/sla_configuration/SlaConfigurationTestData.json')

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
    ['sla_configuration01','sla_configuration02','sla_configuration03','team01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_SLA_CONFIGURATION_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_SLA_CONFIGURATION_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_SLA_CONFIGURATION_ENTID']
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
  
