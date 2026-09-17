

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


describe('CustomerDirect', async () => {

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


  test('direct-load-customer', async (t: any) => {
    if (liveScenariosActive()) { t.skip('Covered by live operation scenarios'); return }
    const setup = directSetup()
    if (maybeSkipControl(t, 'direct', 'direct-load-customer', setup.live)) return
    if (skipIfMissingIds(t, setup, ["customer01"])) return
    const { client, calls } = setup

    const variables: any = {}
    if (setup.live) {
      variables["id"] = setup.idmap['customer01']
    } else {
      variables["id"] = 'direct01'
    }

    const result: any = await client.graphql("query CustomerLoad($id: String!) { customer(id: $id) { ...CustomerFields } } fragment CustomerFields on Customer { approximateNeedCount archivedAt createdAt domains externalIds id integration { id } logoUrl mainSourceId name owner { id } revenue size slackChannelId slugId status { id } tier { id } updatedAt url }", variables)

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
    }
  })

  test('direct-list-customer', async (t: any) => {
    if (liveScenariosActive()) { t.skip('Covered by live operation scenarios'); return }
    const setup = directSetup()
    if (maybeSkipControl(t, 'direct', 'direct-list-customer', setup.live)) return
    if (skipIfMissingIds(t, setup, ["after01","before01","filter01","first01","includeArchived01","last01","orderBy01","sorts01"])) return
    const { client, calls } = setup

    const variables: any = {}
    if (setup.live) {
      variables["after"] = setup.idmap['after01']
      variables["before"] = setup.idmap['before01']
      variables["filter"] = setup.idmap['filter01']
      variables["first"] = setup.idmap['first01']
      variables["includeArchived"] = setup.idmap['includeArchived01']
      variables["last"] = setup.idmap['last01']
      variables["orderBy"] = setup.idmap['orderBy01']
      variables["sorts"] = setup.idmap['sorts01']
    } else {
      variables["after"] = 'direct01'
      variables["before"] = 'direct02'
      variables["filter"] = 'direct03'
      variables["first"] = 'direct04'
      variables["includeArchived"] = 'direct05'
      variables["last"] = 'direct06'
      variables["orderBy"] = 'direct07'
      variables["sorts"] = 'direct08'
    }

    const result: any = await client.graphql("query CustomerList($after: String, $before: String, $filter: CustomerFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy, $sorts: [CustomerSortInput!]) { customers(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy, sorts: $sorts) { nodes { ...CustomerFields } pageInfo { endCursor hasNextPage } } } fragment CustomerFields on Customer { approximateNeedCount archivedAt createdAt domains externalIds id integration { id } logoUrl mainSourceId name owner { id } revenue size slackChannelId slugId status { id } tier { id } updatedAt url }", variables)

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
    }
  })

})



function liveScenariosActive() { return false && process.env.LINEAR_TEST_LIVE === 'TRUE' }
function directSetup(mockres?: any) {
  const calls: any[] = []

  const env = envOverride({
    'LINEAR_TEST_CUSTOMER_ENTID': {},
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

    let idmap: any = env['LINEAR_TEST_CUSTOMER_ENTID']
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
  
