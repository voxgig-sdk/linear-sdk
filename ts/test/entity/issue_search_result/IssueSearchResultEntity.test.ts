

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


describe('IssueSearchResultEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.IssueSearchResult()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'issue_search_result.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"activitySummary":{"a":true,"h":"Activity Summary","n":"activitySummary","r":false,"sh":"[Internal] The activity summary information for this issue.","t":"`$ANY`","key$":"activitySummary","index$":0},"addedToCycleAt":{"a":true,"h":"Added To Cycle At","n":"addedToCycleAt","r":false,"sh":"The time at which the issue was added to a cycle.","t":"`$ANY`","key$":"addedToCycleAt","index$":1},"addedToProjectAt":{"a":true,"h":"Added To Project At","n":"addedToProjectAt","r":false,"sh":"The time at which the issue was added to a project.","t":"`$ANY`","key$":"addedToProjectAt","index$":2},"addedToTeamAt":{"a":true,"h":"Added To Team At","n":"addedToTeamAt","r":false,"sh":"The time at which the issue was added to a team.","t":"`$ANY`","key$":"addedToTeamAt","index$":3},"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":4},"asksExternalUserRequester":{"a":true,"h":"Asks External User Requester","n":"asksExternalUserRequester","r":false,"sh":"The external user who requested creation of the Asks issue on behalf of the creator.","t":"`$OBJECT`","key$":"asksExternalUserRequester","index$":5},"asksRequester":{"a":true,"h":"Asks Requester","n":"asksRequester","r":false,"sh":"The internal user who requested creation of the Asks issue on behalf of the creator.","t":"`$OBJECT`","key$":"asksRequester","index$":6},"assignee":{"a":true,"h":"Assignee","n":"assignee","r":false,"sh":"The user to whom the issue is assigned.","t":"`$OBJECT`","key$":"assignee","index$":7},"autoArchivedAt":{"a":true,"h":"Auto Archived At","n":"autoArchivedAt","r":false,"sh":"The time at which the issue was automatically archived by the auto pruning process.","t":"`$ANY`","key$":"autoArchivedAt","index$":8},"autoClosedAt":{"a":true,"h":"Auto Closed At","n":"autoClosedAt","r":false,"sh":"The time at which the issue was automatically closed by the auto pruning process.","t":"`$ANY`","key$":"autoClosedAt","index$":9},"botActor":{"a":true,"h":"Bot Actor","n":"botActor","r":false,"sh":"The bot that created the issue, if applicable.","t":"`$OBJECT`","key$":"botActor","index$":10},"branchName":{"a":true,"h":"Branch Name","n":"branchName","r":true,"sh":"Suggested branch name for the issue.","t":"`$STRING`","key$":"branchName","index$":11},"canceledAt":{"a":true,"h":"Canceled At","n":"canceledAt","r":false,"sh":"The time at which the issue was moved into canceled state.","t":"`$ANY`","key$":"canceledAt","index$":12},"completedAt":{"a":true,"h":"Completed At","n":"completedAt","r":false,"sh":"The time at which the issue was moved into completed state.","t":"`$ANY`","key$":"completedAt","index$":13},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":14},"creator":{"a":true,"h":"Creator","n":"creator","r":false,"sh":"The user who created the issue.","t":"`$OBJECT`","key$":"creator","index$":15},"customerTicketCount":{"a":true,"h":"Customer Ticket Count","n":"customerTicketCount","r":true,"sh":"Returns the number of Attachment resources which are created by customer support ticketing systems (e.g.","t":"`$INTEGER`","key$":"customerTicketCount","index$":16},"cycle":{"a":true,"h":"Cycle","n":"cycle","r":false,"sh":"The cycle that the issue is associated with.","t":"`$OBJECT`","key$":"cycle","index$":17},"delegate":{"a":true,"h":"Delegate","n":"delegate","r":false,"sh":"The agent user that is delegated to work on this issue.","t":"`$OBJECT`","key$":"delegate","index$":18},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"The issue's description in markdown format.","t":"`$STRING`","key$":"description","index$":19},"descriptionState":{"a":true,"h":"Description State","n":"descriptionState","r":false,"sh":"[Internal] The issue's description content as YJS state.","t":"`$STRING`","key$":"descriptionState","index$":20},"documentContent":{"a":true,"h":"Document Content","n":"documentContent","r":false,"sh":"[ALPHA] The document content representing this issue description.","t":"`$OBJECT`","key$":"documentContent","index$":21},"dueDate":{"a":true,"h":"Due Date","n":"dueDate","r":false,"sh":"The date at which the issue is due.","t":"`$ANY`","key$":"dueDate","index$":22},"estimate":{"a":true,"h":"Estimate","n":"estimate","r":false,"sh":"The estimate of the complexity of the issue.","t":"`$NUMBER`","key$":"estimate","index$":23},"externalUserCreator":{"a":true,"h":"External User Creator","n":"externalUserCreator","r":false,"sh":"The external user who created the issue.","t":"`$OBJECT`","key$":"externalUserCreator","index$":24},"favorite":{"a":true,"h":"Favorite","n":"favorite","r":false,"sh":"The users favorite associated with this issue.","t":"`$OBJECT`","key$":"favorite","index$":25},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":26},"identifier":{"a":true,"h":"Identifier","n":"identifier","r":true,"sh":"Issue's human readable identifier (e.g.","t":"`$STRING`","key$":"identifier","index$":27},"inheritsSharedAccess":{"a":true,"h":"Inherits Shared Access","n":"inheritsSharedAccess","r":true,"sh":"Whether this issue inherits shared access from its parent issue.","t":"`$BOOLEAN`","key$":"inheritsSharedAccess","index$":28},"integrationSourceType":{"a":true,"h":"Integration Source Type","n":"integrationSourceType","r":false,"sh":"Integration type that created this issue, if applicable.","t":"`$STRING`","key$":"integrationSourceType","index$":29},"labelIds":{"a":true,"h":"Label Ids","n":"labelIds","r":true,"sh":"Identifiers of the labels associated with this issue.","t":"`$STRING`","key$":"labelIds","index$":30},"lastAppliedTemplate":{"a":true,"h":"Last Applied Template","n":"lastAppliedTemplate","r":false,"sh":"The last template that was applied to this issue.","t":"`$OBJECT`","key$":"lastAppliedTemplate","index$":31},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":true,"sh":"Metadata related to search result.","t":"`$ANY`","key$":"metadata","index$":32},"number":{"a":true,"h":"Number","n":"number","r":true,"sh":"The issue's unique number, scoped to the issue's team.","t":"`$NUMBER`","key$":"number","index$":33},"parent":{"a":true,"h":"Parent","n":"parent","r":false,"sh":"The parent of the issue.","t":"`$OBJECT`","key$":"parent","index$":34},"previousIdentifiers":{"a":true,"h":"Previous Identifiers","n":"previousIdentifiers","r":true,"sh":"Previous identifiers of the issue if it has been moved between teams.","t":"`$STRING`","key$":"previousIdentifiers","index$":35},"priority":{"a":true,"h":"Priority","n":"priority","r":true,"sh":"The priority of the issue.","t":"`$NUMBER`","key$":"priority","index$":36},"priorityLabel":{"a":true,"h":"Priority Label","n":"priorityLabel","r":true,"sh":"Label for the priority.","t":"`$STRING`","key$":"priorityLabel","index$":37},"prioritySortOrder":{"a":true,"h":"Priority Sort Order","n":"prioritySortOrder","r":true,"sh":"The order of the item in relation to other items in the workspace, when ordered by priority.","t":"`$NUMBER`","key$":"prioritySortOrder","index$":38},"project":{"a":true,"h":"Project","n":"project","r":false,"sh":"The project that the issue is associated with.","t":"`$OBJECT`","key$":"project","index$":39},"projectMilestone":{"a":true,"h":"Project Milestone","n":"projectMilestone","r":false,"sh":"The project milestone that the issue is associated with.","t":"`$OBJECT`","key$":"projectMilestone","index$":40},"reactionData":{"a":true,"h":"Reaction Data","n":"reactionData","r":true,"sh":"Emoji reaction summary for the issue, grouped by emoji type.","t":"`$ANY`","key$":"reactionData","index$":41},"recurringIssueTemplate":{"a":true,"h":"Recurring Issue Template","n":"recurringIssueTemplate","r":false,"sh":"The recurring issue template that created this issue.","t":"`$OBJECT`","key$":"recurringIssueTemplate","index$":42},"slaBreachesAt":{"a":true,"h":"Sla Breaches At","n":"slaBreachesAt","r":false,"sh":"The time at which the issue's SLA will breach.","t":"`$ANY`","key$":"slaBreachesAt","index$":43},"slaHighRiskAt":{"a":true,"h":"Sla High Risk At","n":"slaHighRiskAt","r":false,"sh":"The time at which the issue's SLA will enter high risk state.","t":"`$ANY`","key$":"slaHighRiskAt","index$":44},"slaMediumRiskAt":{"a":true,"h":"Sla Medium Risk At","n":"slaMediumRiskAt","r":false,"sh":"The time at which the issue's SLA will enter medium risk state.","t":"`$ANY`","key$":"slaMediumRiskAt","index$":45},"slaStartedAt":{"a":true,"h":"Sla Started At","n":"slaStartedAt","r":false,"sh":"The time at which the issue's SLA began.","t":"`$ANY`","key$":"slaStartedAt","index$":46},"slaType":{"a":true,"h":"Sla Type","n":"slaType","r":false,"sh":"The type of SLA set on the issue.","t":"`$STRING`","key$":"slaType","index$":47},"snoozedBy":{"a":true,"h":"Snoozed By","n":"snoozedBy","r":false,"sh":"The user who snoozed the issue.","t":"`$OBJECT`","key$":"snoozedBy","index$":48},"snoozedUntilAt":{"a":true,"h":"Snoozed Until At","n":"snoozedUntilAt","r":false,"sh":"The time until an issue will be snoozed in Triage view.","t":"`$ANY`","key$":"snoozedUntilAt","index$":49},"sortOrder":{"a":true,"h":"Sort Order","n":"sortOrder","r":true,"sh":"The order of the item in relation to other items in the organization.","t":"`$NUMBER`","key$":"sortOrder","index$":50},"sourceComment":{"a":true,"h":"Source Comment","n":"sourceComment","r":false,"sh":"The comment that this issue was created from, when an issue is created from an existing comment.","t":"`$OBJECT`","key$":"sourceComment","index$":51},"startedAt":{"a":true,"h":"Started At","n":"startedAt","r":false,"sh":"The time at which the issue was moved into started state.","t":"`$ANY`","key$":"startedAt","index$":52},"startedTriageAt":{"a":true,"h":"Started Triage At","n":"startedTriageAt","r":false,"sh":"The time at which the issue entered triage.","t":"`$ANY`","key$":"startedTriageAt","index$":53},"state":{"a":true,"h":"State","n":"state","r":false,"sh":"The workflow state (issue status) that the issue is currently in.","t":"`$OBJECT`","key$":"state","index$":54},"subIssueSortOrder":{"a":true,"h":"Sub Issue Sort Order","n":"subIssueSortOrder","r":false,"sh":"The order of the item in the sub-issue list.","t":"`$NUMBER`","key$":"subIssueSortOrder","index$":55},"suggestionsGeneratedAt":{"a":true,"h":"Suggestions Generated At","n":"suggestionsGeneratedAt","r":false,"sh":"[Internal] The time at which the most recent suggestions for this issue were generated.","t":"`$ANY`","key$":"suggestionsGeneratedAt","index$":56},"summary":{"a":true,"h":"Summary","n":"summary","r":false,"sh":"[Internal] AI-generated activity summary for this issue.","t":"`$OBJECT`","key$":"summary","index$":57},"team":{"a":true,"h":"Team","n":"team","r":false,"sh":"The team that the issue belongs to.","t":"`$OBJECT`","key$":"team","index$":58},"title":{"a":true,"h":"Title","n":"title","r":true,"sh":"The issue's title.","t":"`$STRING`","key$":"title","index$":59},"trashed":{"a":true,"h":"Trashed","n":"trashed","r":false,"sh":"A flag that indicates whether the issue is in the trash bin.","t":"`$BOOLEAN`","key$":"trashed","index$":60},"triagedAt":{"a":true,"h":"Triaged At","n":"triagedAt","r":false,"sh":"The time at which the issue left triage.","t":"`$ANY`","key$":"triagedAt","index$":61},"trusted":{"a":true,"h":"Trusted","n":"trusted","r":false,"sh":"[Internal] Whether this issue has been explicitly marked as trusted.","t":"`$BOOLEAN`","key$":"trusted","index$":62},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":63},"url":{"a":true,"h":"Url","n":"url","r":true,"sh":"Issue URL.","t":"`$STRING`","key$":"url","index$":64}},"id":{"field":"id","name":"id"},"name":"issue_search_result","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"POST searchIssues","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"first","or":"first","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"param","n":"include_archived","or":"include_archived","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"param","n":"include_comment","or":"include_comment","r":false,"t":"`$BOOLEAN`","index$":4},{"a":true,"k":"param","n":"last","or":"last","r":false,"t":"`$INTEGER`","index$":5},{"a":true,"k":"param","n":"order_by","or":"order_by","r":false,"t":"`$ANY`","index$":6},{"a":true,"k":"param","n":"team_id","or":"team_id","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"param","n":"term","or":"term","r":true,"t":"`$STRING`","index$":8}]},"gq":{"doc":"query IssueSearchResultList($after: String, $before: String, $filter: IssueFilter, $first: Int, $includeArchived: Boolean, $includeComments: Boolean, $last: Int, $orderBy: PaginationOrderBy, $teamId: String, $term: String!) { searchIssues(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, includeComments: $includeComments, last: $last, orderBy: $orderBy, teamId: $teamId, term: $term) { nodes { ...IssueSearchResultFields } pageInfo { endCursor hasNextPage } } } fragment IssueSearchResultFields on IssueSearchResult { activitySummary addedToCycleAt addedToProjectAt addedToTeamAt archivedAt asksExternalUserRequester { id } asksRequester { id } assignee { id } autoArchivedAt autoClosedAt botActor { id } branchName canceledAt completedAt createdAt creator { id } customerTicketCount cycle { id } delegate { id } description descriptionState documentContent { id } dueDate estimate externalUserCreator { id } favorite { id } id identifier inheritsSharedAccess integrationSourceType labelIds lastAppliedTemplate { id } metadata number parent { id } previousIdentifiers priority priorityLabel prioritySortOrder project { id } projectMilestone { id } reactionData recurringIssueTemplate { id } slaBreachesAt slaHighRiskAt slaMediumRiskAt slaStartedAt slaType snoozedBy { id } snoozedUntilAt sortOrder sourceComment { id } startedAt startedTriageAt state { id } subIssueSortOrder suggestionsGeneratedAt summary { id } team { id } title trashed triagedAt trusted updatedAt url }","field":"searchIssues","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"","gqltype":"IssueFilter","name":"filter"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"includeComments","gqltype":"Boolean","name":"includeComments"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"},{"from":"teamId","gqltype":"String","name":"teamId"},{"from":"term","gqltype":"String!","name":"term"}]},"k":"graphql","m":"POST","o":"searchIssues","q":{"exist":["term"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.searchIssues.nodes`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"issue_search_result","name__orig":"issue_search_result","Name":"IssueSearchResult","name_":"issue_search_result","name-":"issue-search-result","NAME":"ISSUE_SEARCH_RESULT","index$":45}, {"active":true,"entity":"issue_search_result","key$":"BasicIssueSearchResultFlow","kind":"basic","name":"BasicIssueSearchResultFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","include_comment":"include_comment01","last":"last01","order_by":"order_by01","team_id":"team01","term":"term01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"issue_search_result_ref01"}}],"index$":0}]}, 'IssueSearchResult', {"POST searchIssues":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let issue_search_result_ref01_data = Object.values(setup.data.existing.issue_search_result)[0] as any

    // LIST
    const issue_search_result_ref01_ent = client.IssueSearchResult()
    const issue_search_result_ref01_match: any = {}
    issue_search_result_ref01_match['after'] = setup.idmap['after01']
    issue_search_result_ref01_match['before'] = setup.idmap['before01']
    issue_search_result_ref01_match['first'] = setup.idmap['first01']
    issue_search_result_ref01_match['include_archived'] = setup.idmap['include_archived01']
    issue_search_result_ref01_match['include_comment'] = setup.idmap['include_comment01']
    issue_search_result_ref01_match['last'] = setup.idmap['last01']
    issue_search_result_ref01_match['order_by'] = setup.idmap['order_by01']
    issue_search_result_ref01_match['team_id'] = setup.idmap['team01']
    issue_search_result_ref01_match['term'] = setup.idmap['term01']

    const issue_search_result_ref01_list = (await issue_search_result_ref01_ent.list(issue_search_result_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/issue_search_result/IssueSearchResultTestData.json')

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
    ['issue_search_result01','issue_search_result02','issue_search_result03','after01','before01','first01','include_archived01','include_comment01','last01','order_by01','team01','term01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_ISSUE_SEARCH_RESULT_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_ISSUE_SEARCH_RESULT_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_ISSUE_SEARCH_RESULT_ENTID']
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
  
