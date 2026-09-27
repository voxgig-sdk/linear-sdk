

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


describe('IssuePriorityValueEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.IssuePriorityValue()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'issue_priority_value.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"label":{"a":true,"h":"Label","n":"label","r":true,"sh":"Priority's label.","t":"`$STRING`","key$":"label","index$":0},"priority":{"a":true,"h":"Priority","n":"priority","r":true,"sh":"Priority's number value.","t":"`$INTEGER`","key$":"priority","index$":1}},"name":"issue_priority_value","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"POST issuePriorityValues","source":"graphql","version":2},"g":{},"gq":{"doc":"query IssuePriorityValueList { issuePriorityValues { ...IssuePriorityValueFields } } fragment IssuePriorityValueFields on IssuePriorityValue { label priority }","field":"issuePriorityValues","optype":"query","vars":[]},"k":"graphql","m":"POST","o":"issuePriorityValues","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.issuePriorityValues`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"issue_priority_value","name__orig":"issue_priority_value","Name":"IssuePriorityValue","name_":"issue_priority_value","name-":"issue-priority-value","NAME":"ISSUE_PRIORITY_VALUE","index$":43}, {"active":true,"entity":"issue_priority_value","key$":"BasicIssuePriorityValueFlow","kind":"basic","name":"BasicIssuePriorityValueFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"issue_priority_value_ref01"}}],"index$":0}]}, 'IssuePriorityValue', {"POST issuePriorityValues":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let issue_priority_value_ref01_data = Object.values(setup.data.existing.issue_priority_value)[0] as any

    // LIST
    const issue_priority_value_ref01_ent = client.IssuePriorityValue()
    const issue_priority_value_ref01_match: any = {}

    const issue_priority_value_ref01_list = (await issue_priority_value_ref01_ent.list(issue_priority_value_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/issue_priority_value/IssuePriorityValueTestData.json')

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
    ['issue_priority_value01','issue_priority_value02','issue_priority_value03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_ISSUE_PRIORITY_VALUE_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_ISSUE_PRIORITY_VALUE_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_ISSUE_PRIORITY_VALUE_ENTID']
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
  
