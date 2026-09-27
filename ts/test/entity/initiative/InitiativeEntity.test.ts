

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


describe('InitiativeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.Initiative()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'initiative.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":0},"canceledAt":{"a":true,"h":"Canceled At","n":"canceledAt","r":false,"sh":"[Internal] The time at which the initiative was moved into Canceled status.","t":"`$ANY`","key$":"canceledAt","index$":1},"color":{"a":true,"h":"Color","n":"color","r":false,"sh":"The initiative's color.","t":"`$STRING`","key$":"color","index$":2},"completedAt":{"a":true,"h":"Completed At","n":"completedAt","r":false,"sh":"The time at which the initiative was moved into Completed status.","t":"`$ANY`","key$":"completedAt","index$":3},"content":{"a":true,"h":"Content","n":"content","r":false,"sh":"The initiative's content in markdown format.","t":"`$STRING`","key$":"content","index$":4},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":5},"creator":{"a":true,"h":"Creator","n":"creator","r":false,"sh":"The user who created the initiative.","t":"`$OBJECT`","key$":"creator","index$":6},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"The description of the initiative.","t":"`$STRING`","key$":"description","index$":7},"documentContent":{"a":true,"h":"Document Content","n":"documentContent","r":false,"sh":"The content of the initiative description.","t":"`$OBJECT`","key$":"documentContent","index$":8},"frequencyResolution":{"a":true,"h":"Frequency Resolution","n":"frequencyResolution","r":true,"sh":"The resolution of the reminder frequency.","t":"`$STRING`","key$":"frequencyResolution","index$":9},"health":{"a":true,"h":"Health","n":"health","r":false,"sh":"The overall health of the initiative, derived from the most recent initiative update.","t":"`$STRING`","key$":"health","index$":10},"healthUpdatedAt":{"a":true,"h":"Health Updated At","n":"healthUpdatedAt","r":false,"sh":"The time at which the initiative health was last updated, typically when a new initiative update is posted.","t":"`$ANY`","key$":"healthUpdatedAt","index$":11},"icon":{"a":true,"h":"Icon","n":"icon","r":false,"sh":"The icon of the initiative.","t":"`$STRING`","key$":"icon","index$":12},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":13},"identifier":{"a":true,"h":"Identifier","n":"identifier","r":false,"sh":"[Internal] The human-readable identifier of the initiative.","t":"`$STRING`","key$":"identifier","index$":14},"integrationsSettings":{"a":true,"h":"Integrations Settings","n":"integrationsSettings","r":false,"sh":"Settings for all integrations associated with that initiative.","t":"`$OBJECT`","key$":"integrationsSettings","index$":15},"labelIds":{"a":true,"h":"Label Ids","n":"labelIds","r":true,"sh":"The IDs of the initiative labels associated with this initiative.","t":"`$STRING`","key$":"labelIds","index$":16},"lastUpdate":{"a":true,"h":"Last Update","n":"lastUpdate","r":false,"sh":"The most recent status update posted for this initiative.","t":"`$OBJECT`","key$":"lastUpdate","index$":17},"leadTeam":{"a":true,"h":"Lead Team","n":"leadTeam","r":false,"sh":"The team that leads the initiative.","t":"`$OBJECT`","key$":"leadTeam","index$":18},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of the initiative.","t":"`$STRING`","key$":"name","index$":19},"organization":{"a":true,"h":"Organization","n":"organization","r":false,"sh":"The workspace of the initiative.","t":"`$OBJECT`","key$":"organization","index$":20},"owner":{"a":true,"h":"Owner","n":"owner","r":false,"sh":"The user who owns the initiative.","t":"`$OBJECT`","key$":"owner","index$":21},"parentInitiative":{"a":true,"h":"Parent Initiative","n":"parentInitiative","r":false,"sh":"Parent initiative associated with the initiative.","t":"`$OBJECT`","key$":"parentInitiative","index$":22},"previousIdentifiers":{"a":true,"h":"Previous Identifiers","n":"previousIdentifiers","r":true,"sh":"[Internal] Identifiers (default and custom) that this initiative has previously held.","t":"`$STRING`","key$":"previousIdentifiers","index$":23},"priority":{"a":true,"h":"Priority","n":"priority","r":true,"sh":"The priority of the initiative.","t":"`$INTEGER`","key$":"priority","index$":24},"prioritySortOrder":{"a":true,"h":"Priority Sort Order","n":"prioritySortOrder","r":true,"sh":"The sort order of the initiative within the workspace when ordered by priority.","t":"`$NUMBER`","key$":"prioritySortOrder","index$":25},"slugId":{"a":true,"h":"Slug Id","n":"slugId","r":true,"sh":"The initiative's unique URL slug, used to construct human-readable URLs.","t":"`$STRING`","key$":"slugId","index$":26},"sortOrder":{"a":true,"h":"Sort Order","n":"sortOrder","r":true,"sh":"The sort order of the initiative within the workspace.","t":"`$NUMBER`","key$":"sortOrder","index$":27},"startedAt":{"a":true,"h":"Started At","n":"startedAt","r":false,"sh":"The time at which the initiative was moved into Active status.","t":"`$ANY`","key$":"startedAt","index$":28},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"The lifecycle status of the initiative.","t":"`$STRING`","key$":"status","index$":29},"targetDate":{"a":true,"h":"Target Date","n":"targetDate","r":false,"sh":"The estimated completion date of the initiative.","t":"`$ANY`","key$":"targetDate","index$":30},"targetDateResolution":{"a":true,"h":"Target Date Resolution","n":"targetDateResolution","r":false,"sh":"The resolution of the initiative's estimated completion date, indicating whether it refers to a specific day, week, month, quarter, or year.","t":"`$STRING`","key$":"targetDateResolution","index$":31},"trashed":{"a":true,"h":"Trashed","n":"trashed","r":false,"sh":"A flag that indicates whether the initiative is in the trash bin.","t":"`$BOOLEAN`","key$":"trashed","index$":32},"updateReminderFrequency":{"a":true,"h":"Update Reminder Frequency","n":"updateReminderFrequency","r":false,"sh":"The frequency at which to prompt for updates.","t":"`$NUMBER`","key$":"updateReminderFrequency","index$":33},"updateReminderFrequencyInWeeks":{"a":true,"h":"Update Reminder Frequency In Weeks","n":"updateReminderFrequencyInWeeks","r":false,"sh":"The n-weekly frequency at which to prompt for updates.","t":"`$NUMBER`","key$":"updateReminderFrequencyInWeeks","index$":34},"updateRemindersDay":{"a":true,"h":"Update Reminders Day","n":"updateRemindersDay","r":false,"sh":"The day at which to prompt for updates.","t":"`$STRING`","key$":"updateRemindersDay","index$":35},"updateRemindersHour":{"a":true,"h":"Update Reminders Hour","n":"updateRemindersHour","r":false,"sh":"The hour at which to prompt for updates.","t":"`$NUMBER`","key$":"updateRemindersHour","index$":36},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":37},"url":{"a":true,"h":"Url","n":"url","r":true,"sh":"Initiative URL.","t":"`$STRING`","key$":"url","index$":38},"visibility":{"a":true,"h":"Visibility","n":"visibility","r":true,"sh":"The visibility of the initiative, derived from its lead team.","t":"`$STRING`","key$":"visibility","index$":39}},"id":{"field":"id","name":"id"},"name":"initiative","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST initiativeCreate","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation InitiativeCreate($input: InitiativeCreateInput!) { initiativeCreate(input: $input) { initiative { ...InitiativeFields } success } } fragment InitiativeFields on Initiative { archivedAt canceledAt color completedAt content createdAt creator { id } description documentContent { id } frequencyResolution health healthUpdatedAt icon id identifier integrationsSettings { id } labelIds lastUpdate { id } leadTeam { id } name organization { id } owner { id } parentInitiative { id } previousIdentifiers priority prioritySortOrder slugId sortOrder startedAt status targetDate targetDateResolution trashed updateReminderFrequency updateReminderFrequencyInWeeks updateRemindersDay updateRemindersHour updatedAt url visibility }","field":"initiativeCreate","optype":"mutation","vars":[{"from":"","gqltype":"InitiativeCreateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"initiativeCreate","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.initiativeCreate.initiative`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"POST initiatives","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"first","or":"first","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"param","n":"include_archived","or":"include_archived","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"param","n":"last","or":"last","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"param","n":"order_by","or":"order_by","r":false,"t":"`$ANY`","index$":5}]},"gq":{"doc":"query InitiativeList($after: String, $before: String, $filter: InitiativeFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy, $sort: [InitiativeSortInput!]) { initiatives(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy, sort: $sort) { nodes { ...InitiativeFields } pageInfo { endCursor hasNextPage } } } fragment InitiativeFields on Initiative { archivedAt canceledAt color completedAt content createdAt creator { id } description documentContent { id } frequencyResolution health healthUpdatedAt icon id identifier integrationsSettings { id } labelIds lastUpdate { id } leadTeam { id } name organization { id } owner { id } parentInitiative { id } previousIdentifiers priority prioritySortOrder slugId sortOrder startedAt status targetDate targetDateResolution trashed updateReminderFrequency updateReminderFrequencyInWeeks updateRemindersDay updateRemindersHour updatedAt url visibility }","field":"initiatives","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"filter","gqltype":"InitiativeFilter","name":"filter"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"},{"from":"sort","gqltype":"[InitiativeSortInput!]","name":"sort"}]},"k":"graphql","m":"POST","o":"initiatives","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.initiatives.nodes`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST initiative","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"query InitiativeLoad($id: String!) { initiative(id: $id) { ...InitiativeFields } } fragment InitiativeFields on Initiative { archivedAt canceledAt color completedAt content createdAt creator { id } description documentContent { id } frequencyResolution health healthUpdatedAt icon id identifier integrationsSettings { id } labelIds lastUpdate { id } leadTeam { id } name organization { id } owner { id } parentInitiative { id } previousIdentifiers priority prioritySortOrder slugId sortOrder startedAt status targetDate targetDateResolution trashed updateReminderFrequency updateReminderFrequencyInWeeks updateRemindersDay updateRemindersHour updatedAt url visibility }","field":"initiative","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"initiative","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.initiative`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"POST initiativeDelete","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation InitiativeRemove($id: String!) { initiativeDelete(id: $id) { entityId lastSyncId success } }","field":"initiativeDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"initiativeDelete","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.initiativeDelete`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"POST initiativeAddLabel","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"label_id","or":"label_id","r":true,"t":"`$STRING`","index$":1}]},"gq":{"doc":"mutation InitiativeUpdateAddLabel($id: String!, $labelId: String!) { initiativeAddLabel(id: $id, labelId: $labelId) { initiative { ...InitiativeFields } success } } fragment InitiativeFields on Initiative { archivedAt canceledAt color completedAt content createdAt creator { id } description documentContent { id } frequencyResolution health healthUpdatedAt icon id identifier integrationsSettings { id } labelIds lastUpdate { id } leadTeam { id } name organization { id } owner { id } parentInitiative { id } previousIdentifiers priority prioritySortOrder slugId sortOrder startedAt status targetDate targetDateResolution trashed updateReminderFrequency updateReminderFrequencyInWeeks updateRemindersDay updateRemindersHour updatedAt url visibility }","field":"initiativeAddLabel","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"labelId","gqltype":"String!","name":"labelId"}]},"k":"graphql","m":"POST","o":"initiativeAddLabel","q":{"$action":"add_label","exist":["id","label_id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.initiativeAddLabel.initiative`"},"index$":0},{"a":true,"co":{"id":"POST initiativeRemoveLabel","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"label_id","or":"label_id","r":true,"t":"`$STRING`","index$":1}]},"gq":{"doc":"mutation InitiativeUpdateRemoveLabel($id: String!, $labelId: String!) { initiativeRemoveLabel(id: $id, labelId: $labelId) { initiative { ...InitiativeFields } success } } fragment InitiativeFields on Initiative { archivedAt canceledAt color completedAt content createdAt creator { id } description documentContent { id } frequencyResolution health healthUpdatedAt icon id identifier integrationsSettings { id } labelIds lastUpdate { id } leadTeam { id } name organization { id } owner { id } parentInitiative { id } previousIdentifiers priority prioritySortOrder slugId sortOrder startedAt status targetDate targetDateResolution trashed updateReminderFrequency updateReminderFrequencyInWeeks updateRemindersDay updateRemindersHour updatedAt url visibility }","field":"initiativeRemoveLabel","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"labelId","gqltype":"String!","name":"labelId"}]},"k":"graphql","m":"POST","o":"initiativeRemoveLabel","q":{"$action":"remove_label","exist":["id","label_id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.initiativeRemoveLabel.initiative`"},"index$":1},{"a":true,"co":{"id":"POST initiativeArchive","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation InitiativeUpdateArchive($id: String!) { initiativeArchive(id: $id) { entity { ...InitiativeFields } success } } fragment InitiativeFields on Initiative { archivedAt canceledAt color completedAt content createdAt creator { id } description documentContent { id } frequencyResolution health healthUpdatedAt icon id identifier integrationsSettings { id } labelIds lastUpdate { id } leadTeam { id } name organization { id } owner { id } parentInitiative { id } previousIdentifiers priority prioritySortOrder slugId sortOrder startedAt status targetDate targetDateResolution trashed updateReminderFrequency updateReminderFrequencyInWeeks updateRemindersDay updateRemindersHour updatedAt url visibility }","field":"initiativeArchive","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"initiativeArchive","q":{"$action":"archive","exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.initiativeArchive.entity`"},"index$":2},{"a":true,"co":{"id":"POST initiativeLeadTeamUpdate","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"lead_team_id","or":"lead_team_id","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"mode","or":"mode","r":false,"t":"`$ANY`","index$":2}]},"gq":{"doc":"mutation InitiativeUpdateLeadTeamUpdate($id: String!, $leadTeamId: String, $mode: InitiativeLeadTeamChangeMode) { initiativeLeadTeamUpdate(id: $id, leadTeamId: $leadTeamId, mode: $mode) { initiative { ...InitiativeFields } success } } fragment InitiativeFields on Initiative { archivedAt canceledAt color completedAt content createdAt creator { id } description documentContent { id } frequencyResolution health healthUpdatedAt icon id identifier integrationsSettings { id } labelIds lastUpdate { id } leadTeam { id } name organization { id } owner { id } parentInitiative { id } previousIdentifiers priority prioritySortOrder slugId sortOrder startedAt status targetDate targetDateResolution trashed updateReminderFrequency updateReminderFrequencyInWeeks updateRemindersDay updateRemindersHour updatedAt url visibility }","field":"initiativeLeadTeamUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"leadTeamId","gqltype":"String","name":"leadTeamId"},{"from":"mode","gqltype":"InitiativeLeadTeamChangeMode","name":"mode"}]},"k":"graphql","m":"POST","o":"initiativeLeadTeamUpdate","q":{"$action":"lead_team_update","exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.initiativeLeadTeamUpdate.initiative`"},"index$":3},{"a":true,"co":{"id":"POST initiativeUnarchive","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation InitiativeUpdateUnarchive($id: String!) { initiativeUnarchive(id: $id) { entity { ...InitiativeFields } success } } fragment InitiativeFields on Initiative { archivedAt canceledAt color completedAt content createdAt creator { id } description documentContent { id } frequencyResolution health healthUpdatedAt icon id identifier integrationsSettings { id } labelIds lastUpdate { id } leadTeam { id } name organization { id } owner { id } parentInitiative { id } previousIdentifiers priority prioritySortOrder slugId sortOrder startedAt status targetDate targetDateResolution trashed updateReminderFrequency updateReminderFrequencyInWeeks updateRemindersDay updateRemindersHour updatedAt url visibility }","field":"initiativeUnarchive","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"initiativeUnarchive","q":{"$action":"unarchive","exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.initiativeUnarchive.entity`"},"index$":4},{"a":true,"co":{"id":"POST initiativeUpdate","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation InitiativeUpdate($id: String!, $input: InitiativeUpdateInput!) { initiativeUpdate(id: $id, input: $input) { initiative { ...InitiativeFields } success } } fragment InitiativeFields on Initiative { archivedAt canceledAt color completedAt content createdAt creator { id } description documentContent { id } frequencyResolution health healthUpdatedAt icon id identifier integrationsSettings { id } labelIds lastUpdate { id } leadTeam { id } name organization { id } owner { id } parentInitiative { id } previousIdentifiers priority prioritySortOrder slugId sortOrder startedAt status targetDate targetDateResolution trashed updateReminderFrequency updateReminderFrequencyInWeeks updateRemindersDay updateRemindersHour updatedAt url visibility }","field":"initiativeUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"InitiativeUpdateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"initiativeUpdate","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.initiativeUpdate.initiative`"},"index$":5}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"initiative","name__orig":"initiative","Name":"Initiative","name_":"initiative","name-":"initiative","NAME":"INITIATIVE","index$":31}, {"active":true,"entity":"initiative","key$":"BasicInitiativeFlow","kind":"basic","name":"BasicInitiativeFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"initiative_ref01"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","label_id":"label01","last":"last01","lead_team_id":"lead_team01","mode":"mode01","order_by":"order_by01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"initiative_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"initiative_ref01","srcdatavar":"initiative_ref01_data","suffix":"_up0","textfield":"color"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-initiative_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"initiative_ref01","srcdatavar":"initiative_ref01_data","suffix":"_dt0"},"m":{"id":"initiative01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-initiative_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"initiative_ref01","suffix":"_rm0"},"m":{"id":"initiative01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"initiative_ref01"}}],"index$":5}]}, 'Initiative', {"POST initiativeCreate":{"protocol":"graphql"},"POST initiatives":{"protocol":"graphql"},"POST initiative":{"protocol":"graphql"},"POST initiativeDelete":{"protocol":"graphql"},"POST initiativeAddLabel":{"protocol":"graphql"},"POST initiativeRemoveLabel":{"protocol":"graphql"},"POST initiativeArchive":{"protocol":"graphql"},"POST initiativeLeadTeamUpdate":{"protocol":"graphql"},"POST initiativeUnarchive":{"protocol":"graphql"},"POST initiativeUpdate":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const initiative_ref01_ent = client.Initiative()
    let initiative_ref01_data = setup.data.new.initiative['initiative_ref01']
    initiative_ref01_data['after'] = setup.idmap['after01']
    initiative_ref01_data['before'] = setup.idmap['before01']
    initiative_ref01_data['first'] = setup.idmap['first01']
    initiative_ref01_data['include_archived'] = setup.idmap['include_archived01']
    initiative_ref01_data['label_id'] = setup.idmap['label01']
    initiative_ref01_data['last'] = setup.idmap['last01']
    initiative_ref01_data['lead_team_id'] = setup.idmap['lead_team01']
    initiative_ref01_data['mode'] = setup.idmap['mode01']
    initiative_ref01_data['order_by'] = setup.idmap['order_by01']

    initiative_ref01_data = (await initiative_ref01_ent.create(initiative_ref01_data)).data()
    assert(null != initiative_ref01_data.id)


    // LIST
    const initiative_ref01_match: any = {}
    initiative_ref01_match['after'] = setup.idmap['after01']
    initiative_ref01_match['before'] = setup.idmap['before01']
    initiative_ref01_match['first'] = setup.idmap['first01']
    initiative_ref01_match['include_archived'] = setup.idmap['include_archived01']
    initiative_ref01_match['last'] = setup.idmap['last01']
    initiative_ref01_match['order_by'] = setup.idmap['order_by01']

    const initiative_ref01_list = (await initiative_ref01_ent.list(initiative_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(initiative_ref01_list, { id: initiative_ref01_data.id })))


    // UPDATE
    const initiative_ref01_data_up0: any = {}
    initiative_ref01_data_up0.id = initiative_ref01_data.id

    const initiative_ref01_markdef_up0 = { name: 'color', value: 'Mark01-initiative_ref01_' + setup.now }
    ;(initiative_ref01_data_up0 as any)[initiative_ref01_markdef_up0.name] = initiative_ref01_markdef_up0.value

    const initiative_ref01_resdata_up0 = (await initiative_ref01_ent.update(initiative_ref01_data_up0)).data()
    assert(initiative_ref01_resdata_up0.id === initiative_ref01_data_up0.id)

    assert((initiative_ref01_resdata_up0 as any)[initiative_ref01_markdef_up0.name] === initiative_ref01_markdef_up0.value)


    // LOAD
    const initiative_ref01_match_dt0: any = {}
    initiative_ref01_match_dt0.id = initiative_ref01_data.id
    const initiative_ref01_data_dt0 = (await initiative_ref01_ent.load(initiative_ref01_match_dt0)).data()
    assert(initiative_ref01_data_dt0.id === initiative_ref01_data.id)


    // REMOVE
    const initiative_ref01_match_rm0: any = { id: initiative_ref01_data.id }
    await initiative_ref01_ent.remove(initiative_ref01_match_rm0)
  

    // LIST
    const initiative_ref01_match_rt0: any = {}
    initiative_ref01_match_rt0['after'] = setup.idmap['after01']
    initiative_ref01_match_rt0['before'] = setup.idmap['before01']
    initiative_ref01_match_rt0['first'] = setup.idmap['first01']
    initiative_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01']
    initiative_ref01_match_rt0['last'] = setup.idmap['last01']
    initiative_ref01_match_rt0['order_by'] = setup.idmap['order_by01']

    const initiative_ref01_list_rt0 = (await initiative_ref01_ent.list(initiative_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(initiative_ref01_list_rt0, { id: initiative_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/initiative/InitiativeTestData.json')

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
    ['initiative01','initiative02','initiative03','after01','before01','first01','include_archived01','label01','last01','lead_team01','mode01','order_by01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_INITIATIVE_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_INITIATIVE_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_INITIATIVE_ENTID']
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
  
