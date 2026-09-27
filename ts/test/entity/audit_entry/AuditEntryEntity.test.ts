

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


describe('AuditEntryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.AuditEntry()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'audit_entry.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"actor":{"a":true,"h":"Actor","n":"actor","r":false,"sh":"The user that caused the audit entry to be created.","t":"`$OBJECT`","key$":"actor","index$":0},"actorId":{"a":true,"h":"Actor Id","n":"actorId","r":false,"sh":"The ID of the user that caused the audit entry to be created.","t":"`$STRING`","key$":"actorId","index$":1},"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":2},"countryCode":{"a":true,"h":"Country Code","n":"countryCode","r":false,"sh":"The ISO 3166-1 alpha-2 country code derived from the request IP address.","t":"`$STRING`","key$":"countryCode","index$":3},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":4},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":5},"ip":{"a":true,"h":"Ip","n":"ip","r":false,"sh":"The IP address of the actor at the time the audited action was performed.","t":"`$STRING`","key$":"ip","index$":6},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"sh":"Additional metadata related to the audit entry.","t":"`$ANY`","key$":"metadata","index$":7},"organization":{"a":true,"h":"Organization","n":"organization","r":false,"sh":"The workspace the audit log belongs to.","t":"`$OBJECT`","key$":"organization","index$":8},"requestInformation":{"a":true,"h":"Request Information","n":"requestInformation","r":false,"sh":"Additional information related to the request which performed the action.","t":"`$ANY`","key$":"requestInformation","index$":9},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"The type of audited action (e.g., user authentication, permission change, data export, setting modification).","t":"`$STRING`","key$":"type","index$":10},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":11}},"id":{"field":"id","name":"id"},"name":"audit_entry","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"POST auditEntries","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"first","or":"first","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"param","n":"include_archived","or":"include_archived","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"param","n":"last","or":"last","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"param","n":"order_by","or":"order_by","r":false,"t":"`$ANY`","index$":5}]},"gq":{"doc":"query AuditEntryList($after: String, $before: String, $filter: AuditEntryFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { auditEntries(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...AuditEntryFields } pageInfo { endCursor hasNextPage } } } fragment AuditEntryFields on AuditEntry { actor { id } actorId archivedAt countryCode createdAt id ip metadata organization { id } requestInformation type updatedAt }","field":"auditEntries","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"","gqltype":"AuditEntryFilter","name":"filter"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"}]},"k":"graphql","m":"POST","o":"auditEntries","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.auditEntries.nodes`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"audit_entry","name__orig":"audit_entry","Name":"AuditEntry","name_":"audit_entry","name-":"audit-entry","NAME":"AUDIT_ENTRY","index$":7}, {"active":true,"entity":"audit_entry","key$":"BasicAuditEntryFlow","kind":"basic","name":"BasicAuditEntryFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"audit_entry_ref01"}}],"index$":0}]}, 'AuditEntry', {"POST auditEntries":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let audit_entry_ref01_data = Object.values(setup.data.existing.audit_entry)[0] as any

    // LIST
    const audit_entry_ref01_ent = client.AuditEntry()
    const audit_entry_ref01_match: any = {}
    audit_entry_ref01_match['after'] = setup.idmap['after01']
    audit_entry_ref01_match['before'] = setup.idmap['before01']
    audit_entry_ref01_match['first'] = setup.idmap['first01']
    audit_entry_ref01_match['include_archived'] = setup.idmap['include_archived01']
    audit_entry_ref01_match['last'] = setup.idmap['last01']
    audit_entry_ref01_match['order_by'] = setup.idmap['order_by01']

    const audit_entry_ref01_list = (await audit_entry_ref01_ent.list(audit_entry_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/audit_entry/AuditEntryTestData.json')

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
    ['audit_entry01','audit_entry02','audit_entry03','after01','before01','first01','include_archived01','last01','order_by01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_AUDIT_ENTRY_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_AUDIT_ENTRY_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_AUDIT_ENTRY_ENTID']
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
  
