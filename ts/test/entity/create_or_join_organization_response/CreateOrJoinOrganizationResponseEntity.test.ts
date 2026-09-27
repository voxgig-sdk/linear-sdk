

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


describe('CreateOrJoinOrganizationResponseEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.CreateOrJoinOrganizationResponse()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'create_or_join_organization_response.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"organization":{"a":true,"h":"Organization","n":"organization","r":false,"sh":"The workspace that was created or joined.","t":"`$OBJECT`","key$":"organization","index$":0},"user":{"a":true,"h":"User","n":"user","r":false,"sh":"The user who created or joined the workspace.","t":"`$OBJECT`","key$":"user","index$":1}},"name":"create_or_join_organization_response","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST createOrganizationFromOnboarding","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"partner_offer_token","or":"partner_offer_token","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"session_id","or":"session_id","r":false,"t":"`$STRING`","index$":1}]},"gq":{"doc":"mutation CreateOrJoinOrganizationResponseCreateCreateOrganizationFromOnboarding($input: CreateOrganizationInput!, $partnerOfferToken: String, $sessionId: String, $survey: OnboardingCustomerSurvey) { createOrganizationFromOnboarding(input: $input, partnerOfferToken: $partnerOfferToken, sessionId: $sessionId, survey: $survey) { ...CreateOrJoinOrganizationResponseFields } } fragment CreateOrJoinOrganizationResponseFields on CreateOrJoinOrganizationResponse { organization { id } user { id } }","field":"createOrganizationFromOnboarding","optype":"mutation","vars":[{"from":"input","gqltype":"CreateOrganizationInput!","name":"input"},{"from":"partnerOfferToken","gqltype":"String","name":"partnerOfferToken"},{"from":"sessionId","gqltype":"String","name":"sessionId"},{"from":"survey","gqltype":"OnboardingCustomerSurvey","name":"survey"}]},"k":"graphql","m":"POST","o":"createOrganizationFromOnboarding","q":{"$action":"create_organization_from_onboarding"},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.createOrganizationFromOnboarding`"},"index$":0},{"a":true,"co":{"id":"POST joinOrganizationFromOnboarding","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation CreateOrJoinOrganizationResponseCreateJoinOrganizationFromOnboarding($input: JoinOrganizationInput!) { joinOrganizationFromOnboarding(input: $input) { ...CreateOrJoinOrganizationResponseFields } } fragment CreateOrJoinOrganizationResponseFields on CreateOrJoinOrganizationResponse { organization { id } user { id } }","field":"joinOrganizationFromOnboarding","optype":"mutation","vars":[{"from":"","gqltype":"JoinOrganizationInput!","name":"input"}]},"k":"graphql","m":"POST","o":"joinOrganizationFromOnboarding","q":{"$action":"join_organization_from_onboarding"},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.joinOrganizationFromOnboarding`"},"index$":1}],"key$":"create"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"POST leaveOrganization","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"organization_id","or":"organization_id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation CreateOrJoinOrganizationResponseUpdateLeaveOrganization($organizationId: String!) { leaveOrganization(organizationId: $organizationId) { ...CreateOrJoinOrganizationResponseFields } } fragment CreateOrJoinOrganizationResponseFields on CreateOrJoinOrganizationResponse { organization { id } user { id } }","field":"leaveOrganization","optype":"mutation","vars":[{"from":"organizationId","gqltype":"String!","name":"organizationId"}]},"k":"graphql","m":"POST","o":"leaveOrganization","q":{"$action":"leave_organization","exist":["organization_id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.leaveOrganization`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"create_or_join_organization_response","name__orig":"create_or_join_organization_response","Name":"CreateOrJoinOrganizationResponse","name_":"create_or_join_organization_response","name-":"create-or-join-organization-response","NAME":"CREATE_OR_JOIN_ORGANIZATION_RESPONSE","index$":12}, {"active":true,"entity":"create_or_join_organization_response","key$":"BasicCreateOrJoinOrganizationResponseFlow","kind":"basic","name":"BasicCreateOrJoinOrganizationResponseFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"create_or_join_organization_response_ref01"},"m":{"organization_id":"organization01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"organization_id":"organization01"},"i":{"ref":"create_or_join_organization_response_ref01","srcdatavar":"create_or_join_organization_response_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-create_or_join_organization_response_ref01"}}],"v":[],"index$":1}]}, 'CreateOrJoinOrganizationResponse', {"POST createOrganizationFromOnboarding":{"protocol":"graphql"},"POST joinOrganizationFromOnboarding":{"protocol":"graphql"},"POST leaveOrganization":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const create_or_join_organization_response_ref01_ent = client.CreateOrJoinOrganizationResponse()
    let create_or_join_organization_response_ref01_data = setup.data.new.create_or_join_organization_response['create_or_join_organization_response_ref01']
    create_or_join_organization_response_ref01_data['organization_id'] = setup.idmap['organization01']

    create_or_join_organization_response_ref01_data = (await create_or_join_organization_response_ref01_ent.create(create_or_join_organization_response_ref01_data)).data()
    assert(null != create_or_join_organization_response_ref01_data)


    // UPDATE
    const create_or_join_organization_response_ref01_data_up0: any = {}
    create_or_join_organization_response_ref01_data_up0 ['organization_id'] = setup.idmap['organization_id']

    const create_or_join_organization_response_ref01_resdata_up0 = (await create_or_join_organization_response_ref01_ent.update(create_or_join_organization_response_ref01_data_up0)).data()
    assert(null != create_or_join_organization_response_ref01_resdata_up0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/create_or_join_organization_response/CreateOrJoinOrganizationResponseTestData.json')

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
    ['create_or_join_organization_response01','create_or_join_organization_response02','create_or_join_organization_response03','organization01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_CREATE_OR_JOIN_ORGANIZATION_RESPONSE_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_CREATE_OR_JOIN_ORGANIZATION_RESPONSE_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_CREATE_OR_JOIN_ORGANIZATION_RESPONSE_ENTID']
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
  
