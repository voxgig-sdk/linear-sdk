

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


describe('InitiativeLeadTeamChangeImpactEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.InitiativeLeadTeamChangeImpact()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'initiative_lead_team_change_impact.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"affectedDescendantCount":{"a":true,"h":"Affected Descendant Count","n":"affectedDescendantCount","r":true,"sh":"The number of editable matching sub-initiatives whose lead team would change if the update is applied to descendants.","t":"`$INTEGER`","key$":"affectedDescendantCount","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"visibilityMayChange":{"a":true,"h":"Visibility May Change","n":"visibilityMayChange","r":true,"sh":"Whether the changed initiatives may gain or lose access restrictions because the current or next lead team is not public.","t":"`$BOOLEAN`","key$":"visibilityMayChange","index$":2}},"id":{"field":"id","name":"id"},"name":"initiative_lead_team_change_impact","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST initiativeLeadTeamChangeImpact","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"lead_team_id","or":"lead_team_id","r":false,"t":"`$STRING`","index$":1}]},"gq":{"doc":"query InitiativeLeadTeamChangeImpactLoad($id: String!, $leadTeamId: String) { initiativeLeadTeamChangeImpact(id: $id, leadTeamId: $leadTeamId) { ...InitiativeLeadTeamChangeImpactFields } } fragment InitiativeLeadTeamChangeImpactFields on InitiativeLeadTeamChangeImpact { affectedDescendantCount visibilityMayChange }","field":"initiativeLeadTeamChangeImpact","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"leadTeamId","gqltype":"String","name":"leadTeamId"}]},"k":"graphql","m":"POST","o":"initiativeLeadTeamChangeImpact","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.initiativeLeadTeamChangeImpact`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"initiative_lead_team_change_impact","name__orig":"initiative_lead_team_change_impact","Name":"InitiativeLeadTeamChangeImpact","name_":"initiative_lead_team_change_impact","name-":"initiative-lead-team-change-impact","NAME":"INITIATIVE_LEAD_TEAM_CHANGE_IMPACT","index$":33}, {"active":true,"entity":"initiative_lead_team_change_impact","key$":"BasicInitiativeLeadTeamChangeImpactFlow","kind":"basic","name":"BasicInitiativeLeadTeamChangeImpactFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"initiative_lead_team_change_impact_ref01","srcdatavar":"initiative_lead_team_change_impact_ref01_data","suffix":"_dt0"},"m":{"id":"initiative_lead_team_change_impact01","lead_team_id":"lead_team01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-initiative_lead_team_change_impact_ref01"}}],"index$":0}]}, 'InitiativeLeadTeamChangeImpact', {"POST initiativeLeadTeamChangeImpact":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let initiative_lead_team_change_impact_ref01_data = Object.values(setup.data.existing.initiative_lead_team_change_impact)[0] as any

    // LOAD
    const initiative_lead_team_change_impact_ref01_ent = client.InitiativeLeadTeamChangeImpact()
    const initiative_lead_team_change_impact_ref01_match_dt0: any = {}
    initiative_lead_team_change_impact_ref01_match_dt0.id = initiative_lead_team_change_impact_ref01_data.id
    const initiative_lead_team_change_impact_ref01_data_dt0 = (await initiative_lead_team_change_impact_ref01_ent.load(initiative_lead_team_change_impact_ref01_match_dt0)).data()
    assert(initiative_lead_team_change_impact_ref01_data_dt0.id === initiative_lead_team_change_impact_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/initiative_lead_team_change_impact/InitiativeLeadTeamChangeImpactTestData.json')

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
    ['initiative_lead_team_change_impact01','initiative_lead_team_change_impact02','initiative_lead_team_change_impact03','lead_team01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_INITIATIVE_LEAD_TEAM_CHANGE_IMPACT_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_INITIATIVE_LEAD_TEAM_CHANGE_IMPACT_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_INITIATIVE_LEAD_TEAM_CHANGE_IMPACT_ENTID']
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
  
