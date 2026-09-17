

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


describe('AuditEntryTypeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.AuditEntryType()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'audit_entry_type.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"description","req":true,"short":"Description of the audit entry type.","type":"`$STRING`","index$":0},{"active":true,"name":"type","req":true,"short":"The audit entry type.","type":"`$STRING`","index$":1}],"name":"audit_entry_type","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"POST auditEntryTypes","json":"{\"field\":{\"args\":[],\"deprecated\":false,\"desc\":\"List of audit entry types.\",\"gqltype\":\"[AuditEntryType!]!\",\"list\":true,\"name\":\"auditEntryTypes\",\"reqd\":true,\"type\":\"AuditEntryType\"},\"invocation\":{\"doc\":\"query AuditEntryTypeList { auditEntryTypes { ...AuditEntryTypeFields } } fragment AuditEntryTypeFields on AuditEntryType { description type }\",\"field\":\"auditEntryTypes\",\"optype\":\"query\",\"vars\":[]},\"protocol\":\"graphql\",\"types\":{},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"query AuditEntryTypeList { auditEntryTypes { ...AuditEntryTypeFields } } fragment AuditEntryTypeFields on AuditEntryType { description type }","field":"auditEntryTypes","optype":"query","vars":[]},"kind":"graphql","method":"POST","orig":"auditEntryTypes","segments":[],"select":{},"transform":{"req":"`reqdata`","res":"`body.data.auditEntryTypes`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"audit_entry_type","name__orig":"audit_entry_type","Name":"AuditEntryType","name_":"audit_entry_type","name-":"audit-entry-type","NAME":"AUDIT_ENTRY_TYPE","index$":8}, {"active":true,"entity":"audit_entry_type","key$":"BasicAuditEntryTypeFlow","kind":"basic","name":"BasicAuditEntryTypeFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"audit_entry_type_ref01"}}],"index$":0}]}, 'AuditEntryType')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let audit_entry_type_ref01_data = Object.values(setup.data.existing.audit_entry_type)[0] as any

    // LIST
    const audit_entry_type_ref01_ent = client.AuditEntryType()
    const audit_entry_type_ref01_match: any = {}

    const audit_entry_type_ref01_list = (await audit_entry_type_ref01_ent.list(audit_entry_type_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/audit_entry_type/AuditEntryTypeTestData.json')

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
    ['audit_entry_type01','audit_entry_type02','audit_entry_type03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_AUDIT_ENTRY_TYPE_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_AUDIT_ENTRY_TYPE_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_AUDIT_ENTRY_TYPE_ENTID']
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
  
