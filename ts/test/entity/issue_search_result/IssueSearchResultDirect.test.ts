

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'


import { LinearSDK } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  maybeSkipControl,
  skipIfMissingIds,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('IssueSearchResultDirect', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('direct-exists', async () => {
    const sdk = new LinearSDK({
      // Concrete base: a live construction must satisfy any server
      // variables a templated base URL declares; overriding base with a
      // literal (as the direct flow tests do) sidesteps the requirement.
      base: 'http://localhost:8080',
      system: { fetch: async () => ({}) }
    })
    assert('function' === typeof sdk.direct)
    assert('function' === typeof sdk.prepare)
  })


  test('direct-list-issue_search_result', async (t: any) => {
    if (liveScenariosActive()) { t.skip('Covered by live operation scenarios'); return }
    const setup = directSetup()
    if (maybeSkipControl(t, 'direct', 'direct-list-issue_search_result', setup.live)) return
    if (skipIfMissingIds(t, setup, ["after01","before01","filter01","first01","includeArchived01","includeComments01","last01","orderBy01","teamId01","term01"])) return
    const { client, calls } = setup

    const variables: any = {}
    if (setup.live) {
      variables["after"] = setup.idmap['after01']
      variables["before"] = setup.idmap['before01']
      variables["filter"] = setup.idmap['filter01']
      variables["first"] = setup.idmap['first01']
      variables["includeArchived"] = setup.idmap['includeArchived01']
      variables["includeComments"] = setup.idmap['includeComments01']
      variables["last"] = setup.idmap['last01']
      variables["orderBy"] = setup.idmap['orderBy01']
      variables["teamId"] = setup.idmap['teamId01']
      variables["term"] = setup.idmap['term01']
    } else {
      variables["after"] = 'direct01'
      variables["before"] = 'direct02'
      variables["filter"] = 'direct03'
      variables["first"] = 'direct04'
      variables["includeArchived"] = 'direct05'
      variables["includeComments"] = 'direct06'
      variables["last"] = 'direct07'
      variables["orderBy"] = 'direct08'
      variables["teamId"] = 'direct09'
      variables["term"] = 'direct010'
    }

    const result: any = await client.graphql("query IssueSearchResultList($after: String, $before: String, $filter: IssueFilter, $first: Int, $includeArchived: Boolean, $includeComments: Boolean, $last: Int, $orderBy: PaginationOrderBy, $teamId: String, $term: String!) { searchIssues(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, includeComments: $includeComments, last: $last, orderBy: $orderBy, teamId: $teamId, term: $term) { nodes { ...IssueSearchResultFields } pageInfo { endCursor hasNextPage } } } fragment IssueSearchResultFields on IssueSearchResult { activitySummary addedToCycleAt addedToProjectAt addedToTeamAt archivedAt asksExternalUserRequester { id } asksRequester { id } assignee { id } autoArchivedAt autoClosedAt botActor { id } branchName canceledAt completedAt createdAt creator { id } customerTicketCount cycle { id } delegate { id } description descriptionState documentContent { id } dueDate estimate externalUserCreator { id } favorite { id } id identifier inheritsSharedAccess integrationSourceType labelIds lastAppliedTemplate { id } metadata number parent { id } previousIdentifiers priority priorityLabel prioritySortOrder project { id } projectMilestone { id } reactionData recurringIssueTemplate { id } slaBreachesAt slaHighRiskAt slaMediumRiskAt slaStartedAt slaType snoozedBy { id } snoozedUntilAt sortOrder sourceComment { id } startedAt startedTriageAt state { id } subIssueSortOrder suggestionsGeneratedAt summary { id } team { id } title trashed triagedAt trusted updatedAt url }", variables)

    if (setup.live) {
      // STRICT live mode: a non-2xx is a real failure - this project owns
      // the server it points at, so there is nothing to be lenient about.
      //
      // What is NOT asserted here is the MOCK's own fixtures. `direct01`
      // is a scripted id and `calls` records the mock transport; neither
      // exists on a live run, so asserting them made strict mode mean
      // "compare the live server against the mock's script" - a suite that
      // could not pass against any real API, including this project's own.
      assert(result.ok === true,
        'Live request failed: HTTP ' + result.status)
      assert(result.status >= 200 && result.status < 300)
      assert(null != result.data)
    } else {
      assert(result.ok === true)
      assert(result.status === 200)
      assert(null != result.data)
      assert(calls.length === 1)
      assert(calls[0].init.method === 'POST')
      assert(calls[0].init.body.includes('direct01'))
      assert(calls[0].init.body.includes('direct02'))
      assert(calls[0].init.body.includes('direct03'))
      assert(calls[0].init.body.includes('direct04'))
      assert(calls[0].init.body.includes('direct05'))
      assert(calls[0].init.body.includes('direct06'))
      assert(calls[0].init.body.includes('direct07'))
      assert(calls[0].init.body.includes('direct08'))
      assert(calls[0].init.body.includes('direct09'))
      assert(calls[0].init.body.includes('direct010'))
    }
  })

})



function liveScenariosActive() { return false && process.env.LINEAR_TEST_LIVE === 'TRUE' }
function directSetup(mockres?: any) {
  const calls: any[] = []

  const env = envOverride({
    'LINEAR_TEST_ISSUE_SEARCH_RESULT_ENTID': {},
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  if (live) {
    const transport = createLiveTransport()
    // Merged so the generated fields win: sdk-test-control.json's
    // test.client.options adds to the live client, it does not redirect it.
    const client = new LinearSDK(
      Object.assign({}, liveClientOptions(), { system: { fetch: transport.fetch },
      apikey: env.LINEAR_APIKEY,
      }))

    let idmap: any = env['LINEAR_TEST_ISSUE_SEARCH_RESULT_ENTID']
    if ('string' === typeof idmap && idmap.startsWith('{')) {
      idmap = JSON.parse(idmap)
    }

    return { client, calls, live, idmap, transport }
  }

  const mockFetch = async (url: string, init: any) => {
    calls.push({ url, init })
    return {
      status: 200,
      statusText: 'OK',
      headers: {},
      json: async () => (null != mockres ? mockres : { id: 'direct01' }),
    }
  }

  const client = new LinearSDK({
    base: 'http://localhost:8080',
    system: { fetch: mockFetch },
  })

  return { client, calls, live, idmap: {} as any }
}

// direct() returns the raw response body. List endpoints often wrap the
// array in an envelope (e.g. { data: [...] }, { entities: [...] },
// { pagination, data: [...] }). The test transforms the raw body to
// extract the first array — either the body itself or the first array
// property of an envelope object.
function unwrapListData(data: any): any[] | null {
  if (Array.isArray(data)) return data
  if (data && 'object' === typeof data) {
    for (const v of Object.values(data)) {
      if (Array.isArray(v)) return v as any[]
    }
  }
  return null
}
  
