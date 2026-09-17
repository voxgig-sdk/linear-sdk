

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


describe('OrganizationDomainEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.OrganizationDomain()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'update', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'organization_domain.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"archivedAt","req":false,"short":"The time at which the entity was archived.","type":"`$ANY`","index$":0},{"active":true,"name":"authType","req":true,"short":"The authentication type this domain is used for.","type":"`$STRING`","index$":1},{"active":true,"name":"claimed","req":false,"short":"Whether the domain was claimed by the workspace through DNS TXT record verification.","type":"`$BOOLEAN`","index$":2},{"active":true,"name":"createdAt","req":true,"short":"The time at which the entity was created.","type":"`$ANY`","index$":3},{"active":true,"name":"creator","req":false,"short":"The user who added the domain.","type":"`$OBJECT`","index$":4},{"active":true,"name":"disableOrganizationCreation","req":false,"short":"Whether users with email addresses from this domain are prevented from creating new workspaces.","type":"`$BOOLEAN`","index$":5},{"active":true,"name":"id","req":true,"short":"The unique identifier of the entity.","type":"`$STRING`","index$":6},{"active":true,"name":"identityProvider","req":false,"short":"The identity provider the domain belongs to.","type":"`$OBJECT`","index$":7},{"active":true,"name":"name","req":true,"short":"The domain name (e.g., 'example.com').","type":"`$STRING`","index$":8},{"active":true,"name":"updatedAt","req":true,"short":"The last time at which the entity was meaningfully updated.","type":"`$ANY`","index$":9},{"active":true,"name":"verificationEmail","req":false,"short":"The email address used to verify this domain.","type":"`$STRING`","index$":10},{"active":true,"name":"verified","req":true,"short":"Whether the domain has been verified via email verification.","type":"`$BOOLEAN`","index$":11}],"id":{"field":"id","name":"id"},"name":"organization_domain","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"trigger_email_verification","orig":"trigger_email_verification","reqd":false,"type":"`$BOOLEAN`","index$":0}]},"contract":{"id":"POST organizationDomainCreate","json":"{\"field\":{\"args\":[{\"gqltype\":\"OrganizationDomainCreateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"OrganizationDomainCreateInput\"},{\"gqltype\":\"Boolean\",\"name\":\"triggerEmailVerification\",\"reqd\":false,\"type\":\"Boolean\"}],\"deprecated\":false,\"desc\":\"[INTERNAL] Adds a domain to be allowed for a workspace.\",\"gqltype\":\"OrganizationDomainPayload!\",\"list\":false,\"name\":\"organizationDomainCreate\",\"reqd\":true,\"type\":\"OrganizationDomainPayload\"},\"invocation\":{\"doc\":\"mutation OrganizationDomainCreate($input: OrganizationDomainCreateInput!, $triggerEmailVerification: Boolean) { organizationDomainCreate(input: $input, triggerEmailVerification: $triggerEmailVerification) { organizationDomain { ...OrganizationDomainFields } success } } fragment OrganizationDomainFields on OrganizationDomain { archivedAt authType claimed createdAt creator { id } disableOrganizationCreation id identityProvider { id } name updatedAt verificationEmail verified }\",\"field\":\"organizationDomainCreate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"\",\"gqltype\":\"OrganizationDomainCreateInput!\",\"name\":\"input\"},{\"from\":\"triggerEmailVerification\",\"gqltype\":\"Boolean\",\"name\":\"triggerEmailVerification\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"OrganizationDomainCreateInput\":{\"fields\":{\"authType\":{\"args\":[],\"deprecated\":false,\"desc\":\"The authentication type this domain is for.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"authType\",\"reqd\":false,\"type\":\"String\"},\"id\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier in UUID v4 format. If none is provided, the backend will generate one.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"id\",\"reqd\":false,\"type\":\"String\"},\"identityProviderId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identity provider to which to add the domain.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"identityProviderId\",\"reqd\":false,\"type\":\"String\"},\"name\":{\"args\":[],\"deprecated\":false,\"desc\":\"The domain name to add.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"name\",\"reqd\":true,\"type\":\"String\"},\"verificationEmail\":{\"args\":[],\"deprecated\":false,\"desc\":\"The email address to which to send the verification code.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"verificationEmail\",\"reqd\":false,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"OrganizationDomainCreateInput\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation OrganizationDomainCreate($input: OrganizationDomainCreateInput!, $triggerEmailVerification: Boolean) { organizationDomainCreate(input: $input, triggerEmailVerification: $triggerEmailVerification) { organizationDomain { ...OrganizationDomainFields } success } } fragment OrganizationDomainFields on OrganizationDomain { archivedAt authType claimed createdAt creator { id } disableOrganizationCreation id identityProvider { id } name updatedAt verificationEmail verified }","field":"organizationDomainCreate","optype":"mutation","vars":[{"from":"","gqltype":"OrganizationDomainCreateInput!","name":"input"},{"from":"triggerEmailVerification","gqltype":"Boolean","name":"triggerEmailVerification"}]},"kind":"graphql","method":"POST","orig":"organizationDomainCreate","segments":[],"select":{},"transform":{"req":"`reqdata`","res":"`body.data.organizationDomainCreate.organizationDomain`"},"index$":0},{"active":true,"args":{},"contract":{"id":"POST organizationDomainVerify","json":"{\"field\":{\"args\":[{\"gqltype\":\"OrganizationDomainVerificationInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"OrganizationDomainVerificationInput\"}],\"deprecated\":false,\"desc\":\"[INTERNAL] Verifies a domain to be added to a workspace.\",\"gqltype\":\"OrganizationDomainPayload!\",\"list\":false,\"name\":\"organizationDomainVerify\",\"reqd\":true,\"type\":\"OrganizationDomainPayload\"},\"invocation\":{\"doc\":\"mutation OrganizationDomainCreateVerify($input: OrganizationDomainVerificationInput!) { organizationDomainVerify(input: $input) { organizationDomain { ...OrganizationDomainFields } success } } fragment OrganizationDomainFields on OrganizationDomain { archivedAt authType claimed createdAt creator { id } disableOrganizationCreation id identityProvider { id } name updatedAt verificationEmail verified }\",\"field\":\"organizationDomainVerify\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"\",\"gqltype\":\"OrganizationDomainVerificationInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"OrganizationDomainVerificationInput\":{\"fields\":{\"organizationDomainId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier in UUID v4 format of the domain being verified.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"organizationDomainId\",\"reqd\":true,\"type\":\"String\"},\"verificationCode\":{\"args\":[],\"deprecated\":false,\"desc\":\"The verification code sent via email.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"verificationCode\",\"reqd\":true,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"OrganizationDomainVerificationInput\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation OrganizationDomainCreateVerify($input: OrganizationDomainVerificationInput!) { organizationDomainVerify(input: $input) { organizationDomain { ...OrganizationDomainFields } success } } fragment OrganizationDomainFields on OrganizationDomain { archivedAt authType claimed createdAt creator { id } disableOrganizationCreation id identityProvider { id } name updatedAt verificationEmail verified }","field":"organizationDomainVerify","optype":"mutation","vars":[{"from":"","gqltype":"OrganizationDomainVerificationInput!","name":"input"}]},"kind":"graphql","method":"POST","orig":"organizationDomainVerify","segments":[],"select":{"$action":"verify"},"transform":{"req":"`reqdata`","res":"`body.data.organizationDomainVerify.organizationDomain`"},"index$":1}],"key$":"create"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST organizationDomainDelete","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Deletes a domain.\",\"gqltype\":\"DeletePayload!\",\"list\":false,\"name\":\"organizationDomainDelete\",\"reqd\":true,\"type\":\"DeletePayload\"},\"invocation\":{\"doc\":\"mutation OrganizationDomainRemove($id: String!) { organizationDomainDelete(id: $id) { entityId lastSyncId success } }\",\"field\":\"organizationDomainDelete\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation OrganizationDomainRemove($id: String!) { organizationDomainDelete(id: $id) { entityId lastSyncId success } }","field":"organizationDomainDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"kind":"graphql","method":"POST","orig":"organizationDomainDelete","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.organizationDomainDelete`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST organizationDomainUpdate","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"},{\"gqltype\":\"OrganizationDomainUpdateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"OrganizationDomainUpdateInput\"}],\"deprecated\":false,\"desc\":\"[INTERNAL] Updates a workspace domain's settings.\",\"gqltype\":\"OrganizationDomainPayload!\",\"list\":false,\"name\":\"organizationDomainUpdate\",\"reqd\":true,\"type\":\"OrganizationDomainPayload\"},\"invocation\":{\"doc\":\"mutation OrganizationDomainUpdate($id: String!, $input: OrganizationDomainUpdateInput!) { organizationDomainUpdate(id: $id, input: $input) { organizationDomain { ...OrganizationDomainFields } success } } fragment OrganizationDomainFields on OrganizationDomain { archivedAt authType claimed createdAt creator { id } disableOrganizationCreation id identityProvider { id } name updatedAt verificationEmail verified }\",\"field\":\"organizationDomainUpdate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"},{\"from\":\"\",\"gqltype\":\"OrganizationDomainUpdateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"OrganizationDomainUpdateInput\":{\"fields\":{\"disableOrganizationCreation\":{\"args\":[],\"deprecated\":false,\"desc\":\"Prevent users with this domain to create new workspaces. Only allowed to set on claimed domains!\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"disableOrganizationCreation\",\"reqd\":false,\"type\":\"Boolean\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"OrganizationDomainUpdateInput\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation OrganizationDomainUpdate($id: String!, $input: OrganizationDomainUpdateInput!) { organizationDomainUpdate(id: $id, input: $input) { organizationDomain { ...OrganizationDomainFields } success } } fragment OrganizationDomainFields on OrganizationDomain { archivedAt authType claimed createdAt creator { id } disableOrganizationCreation id identityProvider { id } name updatedAt verificationEmail verified }","field":"organizationDomainUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"OrganizationDomainUpdateInput!","name":"input"}]},"kind":"graphql","method":"POST","orig":"organizationDomainUpdate","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.organizationDomainUpdate.organizationDomain`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"organization_domain","name__orig":"organization_domain","Name":"OrganizationDomain","name_":"organization_domain","name-":"organization-domain","NAME":"ORGANIZATION_DOMAIN","index$":52}, {"active":true,"entity":"organization_domain","key$":"BasicOrganizationDomainFlow","kind":"basic","name":"BasicOrganizationDomainFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"organization_domain_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"organization_domain_ref01","srcdatavar":"organization_domain_ref01_data","suffix":"_up0","textfield":"authType"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-organization_domain_ref01"}}],"valid":[],"index$":1},{"active":true,"data":{},"input":{"ref":"organization_domain_ref01","suffix":"_rm0"},"match":{"id":"organization_domain01"},"op":"remove","spec":[],"valid":[],"index$":2}]}, 'OrganizationDomain')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const organization_domain_ref01_ent = client.OrganizationDomain()
    let organization_domain_ref01_data = setup.data.new.organization_domain['organization_domain_ref01']

    organization_domain_ref01_data = (await organization_domain_ref01_ent.create(organization_domain_ref01_data)).data()
    assert(null != organization_domain_ref01_data.id)


    // UPDATE
    const organization_domain_ref01_data_up0: any = {}
    organization_domain_ref01_data_up0.id = organization_domain_ref01_data.id

    const organization_domain_ref01_markdef_up0 = { name: 'authType', value: 'Mark01-organization_domain_ref01_' + setup.now }
    ;(organization_domain_ref01_data_up0 as any)[organization_domain_ref01_markdef_up0.name] = organization_domain_ref01_markdef_up0.value

    const organization_domain_ref01_resdata_up0 = (await organization_domain_ref01_ent.update(organization_domain_ref01_data_up0)).data()
    assert(organization_domain_ref01_resdata_up0.id === organization_domain_ref01_data_up0.id)

    assert((organization_domain_ref01_resdata_up0 as any)[organization_domain_ref01_markdef_up0.name] === organization_domain_ref01_markdef_up0.value)


    // REMOVE
    const organization_domain_ref01_match_rm0: any = { id: organization_domain_ref01_data.id }
    await organization_domain_ref01_ent.remove(organization_domain_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/organization_domain/OrganizationDomainTestData.json')

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
    ['organization_domain01','organization_domain02','organization_domain03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_ORGANIZATION_DOMAIN_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_ORGANIZATION_DOMAIN_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_ORGANIZATION_DOMAIN_ENTID']
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
  
