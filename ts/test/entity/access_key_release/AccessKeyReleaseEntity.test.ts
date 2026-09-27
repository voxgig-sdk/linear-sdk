

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


describe('AccessKeyReleaseEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.AccessKeyRelease()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'access_key_release.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the release was archived.","t":"`$ANY`","key$":"archivedAt","index$":0},"commitSha":{"a":true,"h":"Commit Sha","n":"commitSha","r":false,"sh":"The Git commit SHA associated with the release.","t":"`$STRING`","key$":"commitSha","index$":1},"completedAt":{"a":true,"h":"Completed At","n":"completedAt","r":false,"sh":"The time at which the release was completed.","t":"`$ANY`","key$":"completedAt","index$":2},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the release was created.","t":"`$ANY`","key$":"createdAt","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the release.","t":"`$STRING`","key$":"id","index$":4},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of the release.","t":"`$STRING`","key$":"name","index$":5},"url":{"a":true,"h":"Url","n":"url","r":true,"sh":"The URL to the release page in the Linear app.","t":"`$STRING`","key$":"url","index$":6},"version":{"a":true,"h":"Version","n":"version","r":false,"sh":"The version identifier for this release.","t":"`$STRING`","key$":"version","index$":7}},"id":{"field":"id","name":"id"},"name":"access_key_release","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST releaseCompleteByAccessKey","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation AccessKeyReleaseCreateReleaseCompleteByAccessKey($input: ReleaseCompleteInputBase!) { releaseCompleteByAccessKey(input: $input) { release { ...AccessKeyReleaseFields } success } } fragment AccessKeyReleaseFields on AccessKeyRelease { archivedAt commitSha completedAt createdAt id name url version }","field":"releaseCompleteByAccessKey","optype":"mutation","vars":[{"from":"","gqltype":"ReleaseCompleteInputBase!","name":"input"}]},"k":"graphql","m":"POST","o":"releaseCompleteByAccessKey","q":{"$action":"release_complete_by_access_key"},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.releaseCompleteByAccessKey.release`"},"index$":0},{"a":true,"co":{"id":"POST releaseSyncByAccessKey","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation AccessKeyReleaseCreateReleaseSyncByAccessKey($input: ReleaseSyncInputBase!) { releaseSyncByAccessKey(input: $input) { release { ...AccessKeyReleaseFields } success } } fragment AccessKeyReleaseFields on AccessKeyRelease { archivedAt commitSha completedAt createdAt id name url version }","field":"releaseSyncByAccessKey","optype":"mutation","vars":[{"from":"","gqltype":"ReleaseSyncInputBase!","name":"input"}]},"k":"graphql","m":"POST","o":"releaseSyncByAccessKey","q":{"$action":"release_sync_by_access_key"},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.releaseSyncByAccessKey.release`"},"index$":1},{"a":true,"co":{"id":"POST releaseUpdateByPipelineByAccessKey","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation AccessKeyReleaseCreateReleaseUpdateByPipelineByAccessKey($input: ReleaseUpdateByPipelineInputBase!) { releaseUpdateByPipelineByAccessKey(input: $input) { release { ...AccessKeyReleaseFields } success } } fragment AccessKeyReleaseFields on AccessKeyRelease { archivedAt commitSha completedAt createdAt id name url version }","field":"releaseUpdateByPipelineByAccessKey","optype":"mutation","vars":[{"from":"","gqltype":"ReleaseUpdateByPipelineInputBase!","name":"input"}]},"k":"graphql","m":"POST","o":"releaseUpdateByPipelineByAccessKey","q":{"$action":"release_update_by_pipeline_by_access_key"},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.releaseUpdateByPipelineByAccessKey.release`"},"index$":2}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"POST recentReleasesByAccessKey","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0}]},"gq":{"doc":"query AccessKeyReleaseList($limit: Int) { recentReleasesByAccessKey(limit: $limit) { ...AccessKeyReleaseFields } } fragment AccessKeyReleaseFields on AccessKeyRelease { archivedAt commitSha completedAt createdAt id name url version }","field":"recentReleasesByAccessKey","optype":"query","vars":[{"from":"limit","gqltype":"Int","name":"limit"}]},"k":"graphql","m":"POST","o":"recentReleasesByAccessKey","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.recentReleasesByAccessKey`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST latestReleaseByAccessKey","source":"graphql","version":2},"g":{},"gq":{"doc":"query AccessKeyReleaseLoad { latestReleaseByAccessKey { ...AccessKeyReleaseFields } } fragment AccessKeyReleaseFields on AccessKeyRelease { archivedAt commitSha completedAt createdAt id name url version }","field":"latestReleaseByAccessKey","optype":"query","vars":[]},"k":"graphql","m":"POST","o":"latestReleaseByAccessKey","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.latestReleaseByAccessKey`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"access_key_release","name__orig":"access_key_release","Name":"AccessKeyRelease","name_":"access_key_release","name-":"access-key-release","NAME":"ACCESS_KEY_RELEASE","index$":0}, {"active":true,"entity":"access_key_release","key$":"BasicAccessKeyReleaseFlow","kind":"basic","name":"BasicAccessKeyReleaseFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"access_key_release_ref01"},"m":{"limit":"limit01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"limit":"limit01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"access_key_release_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"access_key_release_ref01","srcdatavar":"access_key_release_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-access_key_release_ref01"}}],"index$":2}]}, 'AccessKeyRelease', {"POST releaseCompleteByAccessKey":{"protocol":"graphql"},"POST releaseSyncByAccessKey":{"protocol":"graphql"},"POST releaseUpdateByPipelineByAccessKey":{"protocol":"graphql"},"POST recentReleasesByAccessKey":{"protocol":"graphql"},"POST latestReleaseByAccessKey":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const access_key_release_ref01_ent = client.AccessKeyRelease()
    let access_key_release_ref01_data = setup.data.new.access_key_release['access_key_release_ref01']
    access_key_release_ref01_data['limit'] = setup.idmap['limit01']

    access_key_release_ref01_data = (await access_key_release_ref01_ent.create(access_key_release_ref01_data)).data()
    assert(null != access_key_release_ref01_data.id)


    // LIST
    const access_key_release_ref01_match: any = {}
    access_key_release_ref01_match['limit'] = setup.idmap['limit01']

    const access_key_release_ref01_list = (await access_key_release_ref01_ent.list(access_key_release_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(access_key_release_ref01_list, { id: access_key_release_ref01_data.id })))


    // LOAD
    const access_key_release_ref01_match_dt0: any = {}
    access_key_release_ref01_match_dt0.id = access_key_release_ref01_data.id
    const access_key_release_ref01_data_dt0 = (await access_key_release_ref01_ent.load(access_key_release_ref01_match_dt0)).data()
    assert(access_key_release_ref01_data_dt0.id === access_key_release_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/access_key_release/AccessKeyReleaseTestData.json')

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
    ['access_key_release01','access_key_release02','access_key_release03','limit01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_ACCESS_KEY_RELEASE_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_ACCESS_KEY_RELEASE_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_ACCESS_KEY_RELEASE_ENTID']
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
  
