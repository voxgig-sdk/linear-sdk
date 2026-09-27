

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


describe('AgentActivityEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.AgentActivity()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'agent_activity.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"agentSession":{"a":true,"h":"Agent Session","n":"agentSession","r":false,"sh":"The agent session this activity belongs to.","t":"`$OBJECT`","key$":"agentSession","index$":0},"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":1},"contextualMetadata":{"a":true,"h":"Contextual Metadata","n":"contextualMetadata","r":false,"sh":"[Internal] Metadata about user-provided contextual information for this agent activity.","t":"`$ANY`","key$":"contextualMetadata","index$":2},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":3},"ephemeral":{"a":true,"h":"Ephemeral","n":"ephemeral","r":true,"sh":"Whether the activity is ephemeral, and should disappear after the next agent activity.","t":"`$BOOLEAN`","key$":"ephemeral","index$":4},"executionSkippedReason":{"a":true,"h":"Execution Skipped Reason","n":"executionSkippedReason","r":false,"sh":"[Internal] The reason this activity was persisted without being sent to the agent runtime.","t":"`$STRING`","key$":"executionSkippedReason","index$":5},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":6},"queued":{"a":true,"h":"Queued","n":"queued","r":true,"sh":"[Internal] Whether this activity is queued for later processing.","t":"`$BOOLEAN`","key$":"queued","index$":7},"sentAt":{"a":true,"h":"Sent At","n":"sentAt","r":false,"sh":"[Internal] The time at which the prompt actually entered the conversation.","t":"`$ANY`","key$":"sentAt","index$":8},"signal":{"a":true,"h":"Signal","n":"signal","r":false,"sh":"An optional modifier that provides additional instructions on how the activity should be interpreted.","t":"`$STRING`","key$":"signal","index$":9},"signalMetadata":{"a":true,"h":"Signal Metadata","n":"signalMetadata","r":false,"sh":"Metadata about this agent activity's signal.","t":"`$ANY`","key$":"signalMetadata","index$":10},"sourceComment":{"a":true,"h":"Source Comment","n":"sourceComment","r":false,"sh":"The source comment this activity is linked to.","t":"`$OBJECT`","key$":"sourceComment","index$":11},"sourceMetadata":{"a":true,"h":"Source Metadata","n":"sourceMetadata","r":false,"sh":"Metadata about the external source that created this agent activity.","t":"`$ANY`","key$":"sourceMetadata","index$":12},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":13},"user":{"a":true,"h":"User","n":"user","r":false,"sh":"The user who created this agent activity.","t":"`$OBJECT`","key$":"user","index$":14}},"id":{"field":"id","name":"id"},"name":"agent_activity","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST agentActivityCreate","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation AgentActivityCreate($input: AgentActivityCreateInput!) { agentActivityCreate(input: $input) { agentActivity { ...AgentActivityFields } success } } fragment AgentActivityFields on AgentActivity { agentSession { id } archivedAt contextualMetadata createdAt ephemeral executionSkippedReason id queued sentAt signal signalMetadata sourceComment { id } sourceMetadata updatedAt user { id } }","field":"agentActivityCreate","optype":"mutation","vars":[{"from":"","gqltype":"AgentActivityCreateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"agentActivityCreate","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.agentActivityCreate.agentActivity`"},"index$":0},{"a":true,"co":{"id":"POST agentActivityCreatePrompt","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation AgentActivityCreateCreatePrompt($input: AgentActivityCreatePromptInput!) { agentActivityCreatePrompt(input: $input) { agentActivity { ...AgentActivityFields } success } } fragment AgentActivityFields on AgentActivity { agentSession { id } archivedAt contextualMetadata createdAt ephemeral executionSkippedReason id queued sentAt signal signalMetadata sourceComment { id } sourceMetadata updatedAt user { id } }","field":"agentActivityCreatePrompt","optype":"mutation","vars":[{"from":"","gqltype":"AgentActivityCreatePromptInput!","name":"input"}]},"k":"graphql","m":"POST","o":"agentActivityCreatePrompt","q":{"$action":"create_prompt"},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.agentActivityCreatePrompt.agentActivity`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"POST agentActivities","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"first","or":"first","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"param","n":"include_archived","or":"include_archived","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"param","n":"last","or":"last","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"param","n":"order_by","or":"order_by","r":false,"t":"`$ANY`","index$":5}]},"gq":{"doc":"query AgentActivityList($after: String, $before: String, $filter: AgentActivityFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { agentActivities(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...AgentActivityFields } pageInfo { endCursor hasNextPage } } } fragment AgentActivityFields on AgentActivity { agentSession { id } archivedAt contextualMetadata createdAt ephemeral executionSkippedReason id queued sentAt signal signalMetadata sourceComment { id } sourceMetadata updatedAt user { id } }","field":"agentActivities","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"","gqltype":"AgentActivityFilter","name":"filter"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"}]},"k":"graphql","m":"POST","o":"agentActivities","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.agentActivities.nodes`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST agentActivity","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"query AgentActivityLoad($id: String!) { agentActivity(id: $id) { ...AgentActivityFields } } fragment AgentActivityFields on AgentActivity { agentSession { id } archivedAt contextualMetadata createdAt ephemeral executionSkippedReason id queued sentAt signal signalMetadata sourceComment { id } sourceMetadata updatedAt user { id } }","field":"agentActivity","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"agentActivity","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.agentActivity`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"POST agentActivityDeleteQueued","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation AgentActivityUpdateDeleteQueued($id: String!) { agentActivityDeleteQueued(id: $id) { agentActivity { ...AgentActivityFields } success } } fragment AgentActivityFields on AgentActivity { agentSession { id } archivedAt contextualMetadata createdAt ephemeral executionSkippedReason id queued sentAt signal signalMetadata sourceComment { id } sourceMetadata updatedAt user { id } }","field":"agentActivityDeleteQueued","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"agentActivityDeleteQueued","q":{"$action":"delete_queued","exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.agentActivityDeleteQueued.agentActivity`"},"index$":0},{"a":true,"co":{"id":"POST agentActivitySendQueued","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation AgentActivityUpdateSendQueued($id: String!) { agentActivitySendQueued(id: $id) { agentActivity { ...AgentActivityFields } success } } fragment AgentActivityFields on AgentActivity { agentSession { id } archivedAt contextualMetadata createdAt ephemeral executionSkippedReason id queued sentAt signal signalMetadata sourceComment { id } sourceMetadata updatedAt user { id } }","field":"agentActivitySendQueued","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"agentActivitySendQueued","q":{"$action":"send_queued","exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.agentActivitySendQueued.agentActivity`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"agent_activity","name__orig":"agent_activity","Name":"AgentActivity","name_":"agent_activity","name-":"agent-activity","NAME":"AGENT_ACTIVITY","index$":2}, {"active":true,"entity":"agent_activity","key$":"BasicAgentActivityFlow","kind":"basic","name":"BasicAgentActivityFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"agent_activity_ref01"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"agent_activity_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"agent_activity_ref01","srcdatavar":"agent_activity_ref01_data","suffix":"_up0","textfield":"executionSkippedReason"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-agent_activity_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"agent_activity_ref01","srcdatavar":"agent_activity_ref01_data","suffix":"_dt0"},"m":{"id":"agent_activity01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-agent_activity_ref01"}}],"index$":3}]}, 'AgentActivity', {"POST agentActivityCreate":{"protocol":"graphql"},"POST agentActivityCreatePrompt":{"protocol":"graphql"},"POST agentActivities":{"protocol":"graphql"},"POST agentActivity":{"protocol":"graphql"},"POST agentActivityDeleteQueued":{"protocol":"graphql"},"POST agentActivitySendQueued":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const agent_activity_ref01_ent = client.AgentActivity()
    let agent_activity_ref01_data = setup.data.new.agent_activity['agent_activity_ref01']
    agent_activity_ref01_data['after'] = setup.idmap['after01']
    agent_activity_ref01_data['before'] = setup.idmap['before01']
    agent_activity_ref01_data['first'] = setup.idmap['first01']
    agent_activity_ref01_data['include_archived'] = setup.idmap['include_archived01']
    agent_activity_ref01_data['last'] = setup.idmap['last01']
    agent_activity_ref01_data['order_by'] = setup.idmap['order_by01']

    agent_activity_ref01_data = (await agent_activity_ref01_ent.create(agent_activity_ref01_data)).data()
    assert(null != agent_activity_ref01_data.id)


    // LIST
    const agent_activity_ref01_match: any = {}
    agent_activity_ref01_match['after'] = setup.idmap['after01']
    agent_activity_ref01_match['before'] = setup.idmap['before01']
    agent_activity_ref01_match['first'] = setup.idmap['first01']
    agent_activity_ref01_match['include_archived'] = setup.idmap['include_archived01']
    agent_activity_ref01_match['last'] = setup.idmap['last01']
    agent_activity_ref01_match['order_by'] = setup.idmap['order_by01']

    const agent_activity_ref01_list = (await agent_activity_ref01_ent.list(agent_activity_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(agent_activity_ref01_list, { id: agent_activity_ref01_data.id })))


    // UPDATE
    const agent_activity_ref01_data_up0: any = {}
    agent_activity_ref01_data_up0.id = agent_activity_ref01_data.id

    const agent_activity_ref01_markdef_up0 = { name: 'executionSkippedReason', value: 'Mark01-agent_activity_ref01_' + setup.now }
    ;(agent_activity_ref01_data_up0 as any)[agent_activity_ref01_markdef_up0.name] = agent_activity_ref01_markdef_up0.value

    const agent_activity_ref01_resdata_up0 = (await agent_activity_ref01_ent.update(agent_activity_ref01_data_up0)).data()
    assert(agent_activity_ref01_resdata_up0.id === agent_activity_ref01_data_up0.id)

    assert((agent_activity_ref01_resdata_up0 as any)[agent_activity_ref01_markdef_up0.name] === agent_activity_ref01_markdef_up0.value)


    // LOAD
    const agent_activity_ref01_match_dt0: any = {}
    agent_activity_ref01_match_dt0.id = agent_activity_ref01_data.id
    const agent_activity_ref01_data_dt0 = (await agent_activity_ref01_ent.load(agent_activity_ref01_match_dt0)).data()
    assert(agent_activity_ref01_data_dt0.id === agent_activity_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/agent_activity/AgentActivityTestData.json')

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
    ['agent_activity01','agent_activity02','agent_activity03','after01','before01','first01','include_archived01','last01','order_by01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_AGENT_ACTIVITY_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_AGENT_ACTIVITY_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_AGENT_ACTIVITY_ENTID']
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
  
