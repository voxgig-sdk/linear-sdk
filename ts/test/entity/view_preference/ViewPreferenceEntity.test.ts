

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


describe('ViewPreferenceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.ViewPreference()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'view_preference.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"archivedAt","req":false,"short":"The time at which the entity was archived.","type":"`$ANY`","index$":0},{"active":true,"name":"createdAt","req":true,"short":"The time at which the entity was created.","type":"`$ANY`","index$":1},{"active":true,"name":"id","req":true,"short":"The unique identifier of the entity.","type":"`$STRING`","index$":2},{"active":true,"name":"type","req":true,"short":"The type of view preferences: \"organization\" for workspace-wide defaults or \"user\" for personal overrides.","type":"`$STRING`","index$":3},{"active":true,"name":"updatedAt","req":true,"short":"The last time at which the entity was meaningfully updated.","type":"`$ANY`","index$":4},{"active":true,"name":"viewType","req":true,"short":"The type of view these preferences apply to, such as board, cycle, project, customView, myIssues, etc.","type":"`$STRING`","index$":5}],"id":{"field":"id","name":"id"},"name":"view_preference","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST viewPreferencesCreate","json":"{\"field\":{\"args\":[{\"gqltype\":\"ViewPreferencesCreateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"ViewPreferencesCreateInput\"}],\"deprecated\":false,\"desc\":\"Creates a new view preferences object. If conflicting preferences already exist for the same view type and scope, the existing preferences are replaced.\",\"gqltype\":\"ViewPreferencesPayload!\",\"list\":false,\"name\":\"viewPreferencesCreate\",\"reqd\":true,\"type\":\"ViewPreferencesPayload\"},\"invocation\":{\"doc\":\"mutation ViewPreferenceCreate($input: ViewPreferencesCreateInput!) { viewPreferencesCreate(input: $input) { viewPreferences { ...ViewPreferenceFields } success } } fragment ViewPreferenceFields on ViewPreferences { archivedAt createdAt id type updatedAt viewType }\",\"field\":\"viewPreferencesCreate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"\",\"gqltype\":\"ViewPreferencesCreateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"JSONObject\":{\"desc\":\"The `JSONObject` scalar type represents arbitrary values as *embedded* JSON\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"JSONObject\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"},\"ViewPreferencesCreateInput\":{\"desc\":\"Input for creating view preferences.\",\"fields\":{\"customViewId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The custom view these view preferences are associated with.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"customViewId\",\"reqd\":false,\"type\":\"String\"},\"id\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier in UUID v4 format. If none is provided, the backend will generate one.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"id\",\"reqd\":false,\"type\":\"String\"},\"initiativeId\":{\"args\":[],\"deprecated\":false,\"desc\":\"[Internal] The initiative these view preferences are associated with.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"initiativeId\",\"reqd\":false,\"type\":\"String\"},\"initiativeLabelId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The initiative label these view preferences are associated with.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"initiativeLabelId\",\"reqd\":false,\"type\":\"String\"},\"insights\":{\"args\":[],\"deprecated\":false,\"desc\":\"The default parameters for the insight on that view.\",\"gqltype\":\"JSONObject\",\"list\":false,\"name\":\"insights\",\"reqd\":false,\"type\":\"JSONObject\"},\"labelId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The label these view preferences are associated with.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"labelId\",\"reqd\":false,\"type\":\"String\"},\"preferences\":{\"args\":[],\"deprecated\":false,\"desc\":\"View preferences object.\",\"gqltype\":\"JSONObject!\",\"list\":false,\"name\":\"preferences\",\"reqd\":true,\"type\":\"JSONObject\"},\"projectId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The project these view preferences are associated with.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"projectId\",\"reqd\":false,\"type\":\"String\"},\"projectLabelId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The project label these view preferences are associated with.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"projectLabelId\",\"reqd\":false,\"type\":\"String\"},\"releasePipelineId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The release pipeline these view preferences are associated with.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"releasePipelineId\",\"reqd\":false,\"type\":\"String\"},\"teamId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The team these view preferences are associated with.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"teamId\",\"reqd\":false,\"type\":\"String\"},\"type\":{\"args\":[],\"deprecated\":false,\"desc\":\"The type of view preferences (either user or workspace level preferences).\",\"gqltype\":\"ViewPreferencesType!\",\"list\":false,\"name\":\"type\",\"reqd\":true,\"type\":\"ViewPreferencesType\"},\"userId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The user profile these view preferences are associated with.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"userId\",\"reqd\":false,\"type\":\"String\"},\"viewType\":{\"args\":[],\"deprecated\":false,\"desc\":\"The view type of the view preferences are associated with.\",\"gqltype\":\"ViewType!\",\"list\":false,\"name\":\"viewType\",\"reqd\":true,\"type\":\"ViewType\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"ViewPreferencesCreateInput\"},\"ViewPreferencesType\":{\"desc\":\"The type of view preferences (either user or workspace level preferences).\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"ViewPreferencesType\",\"values\":[\"organization\",\"user\"]},\"ViewType\":{\"desc\":\"The client view this custom view is targeting.\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"ViewType\",\"values\":[\"activeIssues\",\"agents\",\"allIssues\",\"archive\",\"automationRunHistory\",\"automations\",\"backlog\",\"board\",\"completedCycle\",\"continuousPipelineReleases\",\"createdReviews\",\"customView\",\"customViews\",\"customer\",\"customers\",\"cycle\",\"dashboards\",\"embeddedCustomerNeeds\",\"feedAll\",\"feedCreated\",\"feedFollowing\",\"feedPopular\",\"focus\",\"inbox\",\"inboxOther\",\"inboxPriority\",\"initiative\",\"initiativeLabel\",\"initiativeOverview\",\"initiativeOverviewSubInitiatives\",\"initiatives\",\"initiativesAll\",\"initiativesCanceled\",\"initiativesCompleted\",\"initiativesPlanned\",\"initiativesProposed\",\"issueIdentifiers\",\"label\",\"myIssues\",\"myIssuesActivity\",\"myIssuesCreatedByMe\",\"myIssuesSharedWithMe\",\"myIssuesSubscribedTo\",\"myReviews\",\"project\",\"projectCustomerNeeds\",\"projectDocuments\",\"projectLabel\",\"projects\",\"projectsAll\",\"projectsBacklog\",\"projectsClosed\",\"quickView\",\"release\",\"releaseOverviewIssues\",\"releasePipelines\",\"reviews\",\"roadmap\",\"roadmapAll\",\"roadmapBacklog\",\"roadmapClosed\",\"roadmaps\",\"scheduledPipelineReleases\",\"search\",\"splitSearch\",\"subIssues\",\"teams\",\"triage\",\"userProfile\",\"userProfileCreatedByUser\",\"workspaceMembers\"]}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation ViewPreferenceCreate($input: ViewPreferencesCreateInput!) { viewPreferencesCreate(input: $input) { viewPreferences { ...ViewPreferenceFields } success } } fragment ViewPreferenceFields on ViewPreferences { archivedAt createdAt id type updatedAt viewType }","field":"viewPreferencesCreate","optype":"mutation","vars":[{"from":"","gqltype":"ViewPreferencesCreateInput!","name":"input"}]},"kind":"graphql","method":"POST","orig":"viewPreferencesCreate","segments":[],"select":{},"transform":{"req":"`reqdata`","res":"`body.data.viewPreferencesCreate.viewPreferences`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"view_type","orig":"view_type","reqd":true,"type":"`$ANY`","index$":0}]},"contract":{"id":"POST userViewPreferences","json":"{\"field\":{\"args\":[{\"gqltype\":\"ViewType!\",\"name\":\"viewType\",\"reqd\":true,\"type\":\"ViewType\"}],\"deprecated\":false,\"desc\":\"The authenticated user's workspace-level view display preferences for a view type. Returns the user-type preferences that are not scoped to a team, project, or other entity. Null if the user has not customized the view.\",\"gqltype\":\"ViewPreferences\",\"list\":false,\"name\":\"userViewPreferences\",\"reqd\":false,\"type\":\"ViewPreferences\"},\"invocation\":{\"doc\":\"query ViewPreferenceLoad($viewType: ViewType!) { userViewPreferences(viewType: $viewType) { ...ViewPreferenceFields } } fragment ViewPreferenceFields on ViewPreferences { archivedAt createdAt id type updatedAt viewType }\",\"field\":\"userViewPreferences\",\"optype\":\"query\",\"vars\":[{\"from\":\"viewType\",\"gqltype\":\"ViewType!\",\"name\":\"viewType\"}]},\"protocol\":\"graphql\",\"types\":{\"ViewType\":{\"desc\":\"The client view this custom view is targeting.\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"ViewType\",\"values\":[\"activeIssues\",\"agents\",\"allIssues\",\"archive\",\"automationRunHistory\",\"automations\",\"backlog\",\"board\",\"completedCycle\",\"continuousPipelineReleases\",\"createdReviews\",\"customView\",\"customViews\",\"customer\",\"customers\",\"cycle\",\"dashboards\",\"embeddedCustomerNeeds\",\"feedAll\",\"feedCreated\",\"feedFollowing\",\"feedPopular\",\"focus\",\"inbox\",\"inboxOther\",\"inboxPriority\",\"initiative\",\"initiativeLabel\",\"initiativeOverview\",\"initiativeOverviewSubInitiatives\",\"initiatives\",\"initiativesAll\",\"initiativesCanceled\",\"initiativesCompleted\",\"initiativesPlanned\",\"initiativesProposed\",\"issueIdentifiers\",\"label\",\"myIssues\",\"myIssuesActivity\",\"myIssuesCreatedByMe\",\"myIssuesSharedWithMe\",\"myIssuesSubscribedTo\",\"myReviews\",\"project\",\"projectCustomerNeeds\",\"projectDocuments\",\"projectLabel\",\"projects\",\"projectsAll\",\"projectsBacklog\",\"projectsClosed\",\"quickView\",\"release\",\"releaseOverviewIssues\",\"releasePipelines\",\"reviews\",\"roadmap\",\"roadmapAll\",\"roadmapBacklog\",\"roadmapClosed\",\"roadmaps\",\"scheduledPipelineReleases\",\"search\",\"splitSearch\",\"subIssues\",\"teams\",\"triage\",\"userProfile\",\"userProfileCreatedByUser\",\"workspaceMembers\"]}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"query ViewPreferenceLoad($viewType: ViewType!) { userViewPreferences(viewType: $viewType) { ...ViewPreferenceFields } } fragment ViewPreferenceFields on ViewPreferences { archivedAt createdAt id type updatedAt viewType }","field":"userViewPreferences","optype":"query","vars":[{"from":"viewType","gqltype":"ViewType!","name":"viewType"}]},"kind":"graphql","method":"POST","orig":"userViewPreferences","segments":[],"select":{"exist":["view_type"]},"transform":{"req":"`reqdata`","res":"`body.data.userViewPreferences`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST viewPreferencesDelete","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Deletes a view preferences object. If the preferences do not exist, the operation is treated as a successful idempotent deletion.\",\"gqltype\":\"DeletePayload!\",\"list\":false,\"name\":\"viewPreferencesDelete\",\"reqd\":true,\"type\":\"DeletePayload\"},\"invocation\":{\"doc\":\"mutation ViewPreferenceRemove($id: String!) { viewPreferencesDelete(id: $id) { entityId lastSyncId success } }\",\"field\":\"viewPreferencesDelete\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation ViewPreferenceRemove($id: String!) { viewPreferencesDelete(id: $id) { entityId lastSyncId success } }","field":"viewPreferencesDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"kind":"graphql","method":"POST","orig":"viewPreferencesDelete","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.viewPreferencesDelete`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST viewPreferencesUpdate","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"},{\"gqltype\":\"ViewPreferencesUpdateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"ViewPreferencesUpdateInput\"}],\"deprecated\":false,\"desc\":\"Updates an existing view preferences object. For user-type preferences, only the owning user can update them.\",\"gqltype\":\"ViewPreferencesPayload!\",\"list\":false,\"name\":\"viewPreferencesUpdate\",\"reqd\":true,\"type\":\"ViewPreferencesPayload\"},\"invocation\":{\"doc\":\"mutation ViewPreferenceUpdate($id: String!, $input: ViewPreferencesUpdateInput!) { viewPreferencesUpdate(id: $id, input: $input) { viewPreferences { ...ViewPreferenceFields } success } } fragment ViewPreferenceFields on ViewPreferences { archivedAt createdAt id type updatedAt viewType }\",\"field\":\"viewPreferencesUpdate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"},{\"from\":\"\",\"gqltype\":\"ViewPreferencesUpdateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"JSONObject\":{\"desc\":\"The `JSONObject` scalar type represents arbitrary values as *embedded* JSON\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"JSONObject\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"},\"ViewPreferencesUpdateInput\":{\"desc\":\"Input for updating view preferences.\",\"fields\":{\"insights\":{\"args\":[],\"deprecated\":false,\"desc\":\"The default parameters for the insight on that view.\",\"gqltype\":\"JSONObject\",\"list\":false,\"name\":\"insights\",\"reqd\":false,\"type\":\"JSONObject\"},\"preferences\":{\"args\":[],\"deprecated\":false,\"desc\":\"View preferences.\",\"gqltype\":\"JSONObject\",\"list\":false,\"name\":\"preferences\",\"reqd\":false,\"type\":\"JSONObject\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"ViewPreferencesUpdateInput\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation ViewPreferenceUpdate($id: String!, $input: ViewPreferencesUpdateInput!) { viewPreferencesUpdate(id: $id, input: $input) { viewPreferences { ...ViewPreferenceFields } success } } fragment ViewPreferenceFields on ViewPreferences { archivedAt createdAt id type updatedAt viewType }","field":"viewPreferencesUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"ViewPreferencesUpdateInput!","name":"input"}]},"kind":"graphql","method":"POST","orig":"viewPreferencesUpdate","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.viewPreferencesUpdate.viewPreferences`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"view_preference","name__orig":"view_preference","Name":"ViewPreference","name_":"view_preference","name-":"view-preference","NAME":"VIEW_PREFERENCE","index$":83}, {"active":true,"entity":"view_preference","key$":"BasicViewPreferenceFlow","kind":"basic","name":"BasicViewPreferenceFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"view_preference_ref01"},"match":{"view_type":"view_type01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"view_preference_ref01","srcdatavar":"view_preference_ref01_data","suffix":"_up0","textfield":"type"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-view_preference_ref01"}}],"valid":[],"index$":1},{"active":true,"data":{},"input":{"ref":"view_preference_ref01","srcdatavar":"view_preference_ref01_data","suffix":"_dt0"},"match":{"view_type":"view_type01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-view_preference_ref01"}}],"index$":2},{"active":true,"data":{},"input":{"ref":"view_preference_ref01","suffix":"_rm0"},"match":{"id":"view_preference01"},"op":"remove","spec":[],"valid":[],"index$":3}]}, 'ViewPreference')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const view_preference_ref01_ent = client.ViewPreference()
    let view_preference_ref01_data = setup.data.new.view_preference['view_preference_ref01']
    view_preference_ref01_data['view_type'] = setup.idmap['view_type01']

    view_preference_ref01_data = (await view_preference_ref01_ent.create(view_preference_ref01_data)).data()
    assert(null != view_preference_ref01_data.id)


    // UPDATE
    const view_preference_ref01_data_up0: any = {}
    view_preference_ref01_data_up0.id = view_preference_ref01_data.id

    const view_preference_ref01_markdef_up0 = { name: 'type', value: 'Mark01-view_preference_ref01_' + setup.now }
    ;(view_preference_ref01_data_up0 as any)[view_preference_ref01_markdef_up0.name] = view_preference_ref01_markdef_up0.value

    const view_preference_ref01_resdata_up0 = (await view_preference_ref01_ent.update(view_preference_ref01_data_up0)).data()
    assert(view_preference_ref01_resdata_up0.id === view_preference_ref01_data_up0.id)

    assert((view_preference_ref01_resdata_up0 as any)[view_preference_ref01_markdef_up0.name] === view_preference_ref01_markdef_up0.value)


    // LOAD
    const view_preference_ref01_match_dt0: any = {}
    view_preference_ref01_match_dt0.id = view_preference_ref01_data.id
    const view_preference_ref01_data_dt0 = (await view_preference_ref01_ent.load(view_preference_ref01_match_dt0)).data()
    assert(view_preference_ref01_data_dt0.id === view_preference_ref01_data.id)


    // REMOVE
    const view_preference_ref01_match_rm0: any = { id: view_preference_ref01_data.id }
    await view_preference_ref01_ent.remove(view_preference_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/view_preference/ViewPreferenceTestData.json')

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
    ['view_preference01','view_preference02','view_preference03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_VIEW_PREFERENCE_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_VIEW_PREFERENCE_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_VIEW_PREFERENCE_ENTID']
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
  
