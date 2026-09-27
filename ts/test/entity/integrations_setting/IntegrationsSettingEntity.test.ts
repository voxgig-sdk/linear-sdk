

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


describe('IntegrationsSettingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.IntegrationsSetting()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'integrations_setting.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":0},"contextViewType":{"a":true,"h":"Context View Type","n":"contextViewType","r":false,"sh":"The type of view to which the integration settings context is associated with.","t":"`$STRING`","key$":"contextViewType","index$":1},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":3},"initiative":{"a":true,"h":"Initiative","n":"initiative","r":false,"sh":"Initiative which those settings apply to.","t":"`$OBJECT`","key$":"initiative","index$":4},"microsoftTeamsProjectUpdateCreated":{"a":true,"h":"Microsoft Teams Project Update Created","n":"microsoftTeamsProjectUpdateCreated","r":false,"sh":"Whether to send a Microsoft Teams message when a project update is created.","t":"`$BOOLEAN`","key$":"microsoftTeamsProjectUpdateCreated","index$":5},"project":{"a":true,"h":"Project","n":"project","r":false,"sh":"Project which those settings apply to.","t":"`$OBJECT`","key$":"project","index$":6},"slackInitiativeUpdateCreated":{"a":true,"h":"Slack Initiative Update Created","n":"slackInitiativeUpdateCreated","r":false,"sh":"Whether to send a Slack message when an initiative update is created.","t":"`$BOOLEAN`","key$":"slackInitiativeUpdateCreated","index$":7},"slackIssueAddedToTriage":{"a":true,"h":"Slack Issue Added To Triage","n":"slackIssueAddedToTriage","r":false,"sh":"Whether to send a Slack message when a new issue is added to triage.","t":"`$BOOLEAN`","key$":"slackIssueAddedToTriage","index$":8},"slackIssueAddedToView":{"a":true,"h":"Slack Issue Added To View","n":"slackIssueAddedToView","r":false,"sh":"Whether to send a Slack message when an issue is added to the custom view.","t":"`$BOOLEAN`","key$":"slackIssueAddedToView","index$":9},"slackIssueNewComment":{"a":true,"h":"Slack Issue New Comment","n":"slackIssueNewComment","r":false,"sh":"Whether to send a Slack message when a comment is created on any of the project or team's issues.","t":"`$BOOLEAN`","key$":"slackIssueNewComment","index$":10},"slackIssueSlaBreached":{"a":true,"h":"Slack Issue Sla Breached","n":"slackIssueSlaBreached","r":false,"sh":"Whether to send a Slack message when an SLA is breached.","t":"`$BOOLEAN`","key$":"slackIssueSlaBreached","index$":11},"slackIssueSlaHighRisk":{"a":true,"h":"Slack Issue Sla High Risk","n":"slackIssueSlaHighRisk","r":false,"sh":"Whether to send a Slack message when an SLA is at high risk.","t":"`$BOOLEAN`","key$":"slackIssueSlaHighRisk","index$":12},"slackIssueStatusChangedAll":{"a":true,"h":"Slack Issue Status Changed All","n":"slackIssueStatusChangedAll","r":false,"sh":"Whether to send a Slack message when any of the project or team's issues has a change in status.","t":"`$BOOLEAN`","key$":"slackIssueStatusChangedAll","index$":13},"slackIssueStatusChangedDone":{"a":true,"h":"Slack Issue Status Changed Done","n":"slackIssueStatusChangedDone","r":false,"sh":"Whether to send a Slack message when any of the project or team's issues change to completed or canceled.","t":"`$BOOLEAN`","key$":"slackIssueStatusChangedDone","index$":14},"slackProjectUpdateCreated":{"a":true,"h":"Slack Project Update Created","n":"slackProjectUpdateCreated","r":false,"sh":"Whether to send a Slack message when a project update is created.","t":"`$BOOLEAN`","key$":"slackProjectUpdateCreated","index$":15},"slackProjectUpdateCreatedToTeam":{"a":true,"h":"Slack Project Update Created To Team","n":"slackProjectUpdateCreatedToTeam","r":false,"sh":"Whether to send a new project update to team Slack channels.","t":"`$BOOLEAN`","key$":"slackProjectUpdateCreatedToTeam","index$":16},"slackProjectUpdateCreatedToWorkspace":{"a":true,"h":"Slack Project Update Created To Workspace","n":"slackProjectUpdateCreatedToWorkspace","r":false,"sh":"Whether to send a new project update to workspace Slack channel.","t":"`$BOOLEAN`","key$":"slackProjectUpdateCreatedToWorkspace","index$":17},"team":{"a":true,"h":"Team","n":"team","r":false,"sh":"Team which those settings apply to.","t":"`$OBJECT`","key$":"team","index$":18},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":19}},"id":{"field":"id","name":"id"},"name":"integrations_setting","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST integrationsSettingsCreate","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation IntegrationsSettingCreate($input: IntegrationsSettingsCreateInput!) { integrationsSettingsCreate(input: $input) { integrationsSettings { ...IntegrationsSettingFields } success } } fragment IntegrationsSettingFields on IntegrationsSettings { archivedAt contextViewType createdAt id initiative { id } microsoftTeamsProjectUpdateCreated project { id } slackInitiativeUpdateCreated slackIssueAddedToTriage slackIssueAddedToView slackIssueNewComment slackIssueSlaBreached slackIssueSlaHighRisk slackIssueStatusChangedAll slackIssueStatusChangedDone slackProjectUpdateCreated slackProjectUpdateCreatedToTeam slackProjectUpdateCreatedToWorkspace team { id } updatedAt }","field":"integrationsSettingsCreate","optype":"mutation","vars":[{"from":"","gqltype":"IntegrationsSettingsCreateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"integrationsSettingsCreate","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.integrationsSettingsCreate.integrationsSettings`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST integrationsSettings","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"query IntegrationsSettingLoad($id: String!) { integrationsSettings(id: $id) { ...IntegrationsSettingFields } } fragment IntegrationsSettingFields on IntegrationsSettings { archivedAt contextViewType createdAt id initiative { id } microsoftTeamsProjectUpdateCreated project { id } slackInitiativeUpdateCreated slackIssueAddedToTriage slackIssueAddedToView slackIssueNewComment slackIssueSlaBreached slackIssueSlaHighRisk slackIssueStatusChangedAll slackIssueStatusChangedDone slackProjectUpdateCreated slackProjectUpdateCreatedToTeam slackProjectUpdateCreatedToWorkspace team { id } updatedAt }","field":"integrationsSettings","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"integrationsSettings","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.integrationsSettings`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"POST integrationsSettingsUpdate","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation IntegrationsSettingUpdate($id: String!, $input: IntegrationsSettingsUpdateInput!) { integrationsSettingsUpdate(id: $id, input: $input) { integrationsSettings { ...IntegrationsSettingFields } success } } fragment IntegrationsSettingFields on IntegrationsSettings { archivedAt contextViewType createdAt id initiative { id } microsoftTeamsProjectUpdateCreated project { id } slackInitiativeUpdateCreated slackIssueAddedToTriage slackIssueAddedToView slackIssueNewComment slackIssueSlaBreached slackIssueSlaHighRisk slackIssueStatusChangedAll slackIssueStatusChangedDone slackProjectUpdateCreated slackProjectUpdateCreatedToTeam slackProjectUpdateCreatedToWorkspace team { id } updatedAt }","field":"integrationsSettingsUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"IntegrationsSettingsUpdateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"integrationsSettingsUpdate","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.integrationsSettingsUpdate.integrationsSettings`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"integrations_setting","name__orig":"integrations_setting","Name":"IntegrationsSetting","name_":"integrations_setting","name-":"integrations-setting","NAME":"INTEGRATIONS_SETTING","index$":39}, {"active":true,"entity":"integrations_setting","key$":"BasicIntegrationsSettingFlow","kind":"basic","name":"BasicIntegrationsSettingFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"integrations_setting_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"integrations_setting_ref01","srcdatavar":"integrations_setting_ref01_data","suffix":"_up0","textfield":"contextViewType"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-integrations_setting_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"integrations_setting_ref01","srcdatavar":"integrations_setting_ref01_data","suffix":"_dt0"},"m":{"id":"integrations_setting01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-integrations_setting_ref01"}}],"index$":2}]}, 'IntegrationsSetting', {"POST integrationsSettingsCreate":{"protocol":"graphql"},"POST integrationsSettings":{"protocol":"graphql"},"POST integrationsSettingsUpdate":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const integrations_setting_ref01_ent = client.IntegrationsSetting()
    let integrations_setting_ref01_data = setup.data.new.integrations_setting['integrations_setting_ref01']

    integrations_setting_ref01_data = (await integrations_setting_ref01_ent.create(integrations_setting_ref01_data)).data()
    assert(null != integrations_setting_ref01_data.id)


    // UPDATE
    const integrations_setting_ref01_data_up0: any = {}
    integrations_setting_ref01_data_up0.id = integrations_setting_ref01_data.id

    const integrations_setting_ref01_markdef_up0 = { name: 'contextViewType', value: 'Mark01-integrations_setting_ref01_' + setup.now }
    ;(integrations_setting_ref01_data_up0 as any)[integrations_setting_ref01_markdef_up0.name] = integrations_setting_ref01_markdef_up0.value

    const integrations_setting_ref01_resdata_up0 = (await integrations_setting_ref01_ent.update(integrations_setting_ref01_data_up0)).data()
    assert(integrations_setting_ref01_resdata_up0.id === integrations_setting_ref01_data_up0.id)

    assert((integrations_setting_ref01_resdata_up0 as any)[integrations_setting_ref01_markdef_up0.name] === integrations_setting_ref01_markdef_up0.value)


    // LOAD
    const integrations_setting_ref01_match_dt0: any = {}
    integrations_setting_ref01_match_dt0.id = integrations_setting_ref01_data.id
    const integrations_setting_ref01_data_dt0 = (await integrations_setting_ref01_ent.load(integrations_setting_ref01_match_dt0)).data()
    assert(integrations_setting_ref01_data_dt0.id === integrations_setting_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/integrations_setting/IntegrationsSettingTestData.json')

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
    ['integrations_setting01','integrations_setting02','integrations_setting03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_INTEGRATIONS_SETTING_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_INTEGRATIONS_SETTING_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_INTEGRATIONS_SETTING_ENTID']
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
  
