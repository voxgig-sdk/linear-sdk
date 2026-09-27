

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


describe('TemplateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.Template()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'template.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":0},"color":{"a":true,"h":"Color","n":"color","r":false,"sh":"The hex color of the template icon.","t":"`$STRING`","key$":"color","index$":1},"content":{"a":true,"h":"Content","n":"content","r":false,"sh":"The template's content in markdown format: the body it pre-fills on the entity it creates.","t":"`$STRING`","key$":"content","index$":2},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":3},"creator":{"a":true,"h":"Creator","n":"creator","r":false,"sh":"The user who created the template.","t":"`$OBJECT`","key$":"creator","index$":4},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"A description of what the template is used for.","t":"`$STRING`","key$":"description","index$":5},"hasFormFields":{"a":true,"h":"Has Form Fields","n":"hasFormFields","r":true,"sh":"[Internal] Whether the template has form fields","t":"`$BOOLEAN`","key$":"hasFormFields","index$":6},"icon":{"a":true,"h":"Icon","n":"icon","r":false,"sh":"The icon of the template, either a decorative icon type or an emoji string.","t":"`$STRING`","key$":"icon","index$":7},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":8},"inheritedFrom":{"a":true,"h":"Inherited From","n":"inheritedFrom","r":false,"sh":"The parent team template this template was inherited from.","t":"`$OBJECT`","key$":"inheritedFrom","index$":9},"lastAppliedAt":{"a":true,"h":"Last Applied At","n":"lastAppliedAt","r":false,"sh":"The date when the template was last applied to create or update an entity.","t":"`$ANY`","key$":"lastAppliedAt","index$":10},"lastUpdatedBy":{"a":true,"h":"Last Updated By","n":"lastUpdatedBy","r":false,"sh":"The user who last updated the template.","t":"`$OBJECT`","key$":"lastUpdatedBy","index$":11},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of the template.","t":"`$STRING`","key$":"name","index$":12},"organization":{"a":true,"h":"Organization","n":"organization","r":false,"sh":"The workspace that owns this template.","t":"`$OBJECT`","key$":"organization","index$":13},"pipeline":{"a":true,"h":"Pipeline","n":"pipeline","r":false,"sh":"The release pipeline this template is bound to.","t":"`$OBJECT`","key$":"pipeline","index$":14},"sortOrder":{"a":true,"h":"Sort Order","n":"sortOrder","r":true,"sh":"The sort order of the template within the templates list.","t":"`$NUMBER`","key$":"sortOrder","index$":15},"team":{"a":true,"h":"Team","n":"team","r":false,"sh":"The team that the template is associated with.","t":"`$OBJECT`","key$":"team","index$":16},"templateData":{"a":true,"h":"Template Data","n":"templateData","r":true,"sh":"The template data as a JSON-encoded string containing the pre-filled attributes for the entity type (e.g., issue fields, project configuration, or document content).","t":"`$ANY`","key$":"templateData","index$":17},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"The entity type this template is for, such as 'issue', 'project', or 'document'.","t":"`$STRING`","key$":"type","index$":18},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":19}},"id":{"field":"id","name":"id"},"name":"template","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST templateCreate","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation TemplateCreate($input: TemplateCreateInput!) { templateCreate(input: $input) { template { ...TemplateFields } success } } fragment TemplateFields on Template { archivedAt color content createdAt creator { id } description hasFormFields icon id inheritedFrom { id } lastAppliedAt lastUpdatedBy { id } name organization { id } pipeline { id } sortOrder team { id } templateData type updatedAt }","field":"templateCreate","optype":"mutation","vars":[{"from":"","gqltype":"TemplateCreateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"templateCreate","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.templateCreate.template`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"POST templatesForIntegration","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"integration_type","or":"integration_type","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"query TemplateList($integrationType: String!) { templatesForIntegration(integrationType: $integrationType) { ...TemplateFields } } fragment TemplateFields on Template { archivedAt color content createdAt creator { id } description hasFormFields icon id inheritedFrom { id } lastAppliedAt lastUpdatedBy { id } name organization { id } pipeline { id } sortOrder team { id } templateData type updatedAt }","field":"templatesForIntegration","optype":"query","vars":[{"from":"integrationType","gqltype":"String!","name":"integrationType"}]},"k":"graphql","m":"POST","o":"templatesForIntegration","q":{"exist":["integration_type"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.templatesForIntegration`"},"index$":0},{"a":true,"co":{"id":"POST templateSearch","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"first","or":"first","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"include_archived","or":"include_archived","r":false,"t":"`$BOOLEAN`","index$":1}]},"gq":{"doc":"query TemplateList($filter: TemplateFilter, $first: Int, $includeArchived: Boolean) { templateSearch(filter: $filter, first: $first, includeArchived: $includeArchived) { ...TemplateFields } } fragment TemplateFields on Template { archivedAt color content createdAt creator { id } description hasFormFields icon id inheritedFrom { id } lastAppliedAt lastUpdatedBy { id } name organization { id } pipeline { id } sortOrder team { id } templateData type updatedAt }","field":"templateSearch","optype":"query","vars":[{"from":"","gqltype":"TemplateFilter","name":"filter"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"}]},"k":"graphql","m":"POST","o":"templateSearch","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.templateSearch`"},"index$":1},{"a":true,"co":{"id":"POST templates","source":"graphql","version":2},"g":{},"gq":{"doc":"query TemplateList { templates { ...TemplateFields } } fragment TemplateFields on Template { archivedAt color content createdAt creator { id } description hasFormFields icon id inheritedFrom { id } lastAppliedAt lastUpdatedBy { id } name organization { id } pipeline { id } sortOrder team { id } templateData type updatedAt }","field":"templates","optype":"query","vars":[]},"k":"graphql","m":"POST","o":"templates","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.templates`"},"index$":2}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST template","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"query TemplateLoad($id: String!) { template(id: $id) { ...TemplateFields } } fragment TemplateFields on Template { archivedAt color content createdAt creator { id } description hasFormFields icon id inheritedFrom { id } lastAppliedAt lastUpdatedBy { id } name organization { id } pipeline { id } sortOrder team { id } templateData type updatedAt }","field":"template","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"template","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.template`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"POST templateDelete","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation TemplateRemove($id: String!) { templateDelete(id: $id) { entityId lastSyncId success } }","field":"templateDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"templateDelete","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.templateDelete`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"POST templateUpdate","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation TemplateUpdate($id: String!, $input: TemplateUpdateInput!) { templateUpdate(id: $id, input: $input) { template { ...TemplateFields } success } } fragment TemplateFields on Template { archivedAt color content createdAt creator { id } description hasFormFields icon id inheritedFrom { id } lastAppliedAt lastUpdatedBy { id } name organization { id } pipeline { id } sortOrder team { id } templateData type updatedAt }","field":"templateUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"TemplateUpdateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"templateUpdate","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.templateUpdate.template`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"template","name__orig":"template","Name":"Template","name_":"template","name-":"template","NAME":"TEMPLATE","index$":76}, {"active":true,"entity":"template","key$":"BasicTemplateFlow","kind":"basic","name":"BasicTemplateFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"template_ref01"},"m":{"first":"first01","include_archived":"include_archived01","integration_type":"integration_type01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"template_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"template_ref01","srcdatavar":"template_ref01_data","suffix":"_up0","textfield":"color"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-template_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"template_ref01","srcdatavar":"template_ref01_data","suffix":"_dt0"},"m":{"id":"template01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-template_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"template_ref01","suffix":"_rm0"},"m":{"id":"template01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"template_ref01"}}],"index$":5}]}, 'Template', {"POST templateCreate":{"protocol":"graphql"},"POST templatesForIntegration":{"protocol":"graphql"},"POST templateSearch":{"protocol":"graphql"},"POST templates":{"protocol":"graphql"},"POST template":{"protocol":"graphql"},"POST templateDelete":{"protocol":"graphql"},"POST templateUpdate":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const template_ref01_ent = client.Template()
    let template_ref01_data = setup.data.new.template['template_ref01']
    template_ref01_data['first'] = setup.idmap['first01']
    template_ref01_data['include_archived'] = setup.idmap['include_archived01']
    template_ref01_data['integration_type'] = setup.idmap['integration_type01']

    template_ref01_data = (await template_ref01_ent.create(template_ref01_data)).data()
    assert(null != template_ref01_data.id)


    // LIST
    const template_ref01_match: any = {}

    const template_ref01_list = (await template_ref01_ent.list(template_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(template_ref01_list, { id: template_ref01_data.id })))


    // UPDATE
    const template_ref01_data_up0: any = {}
    template_ref01_data_up0.id = template_ref01_data.id

    const template_ref01_markdef_up0 = { name: 'color', value: 'Mark01-template_ref01_' + setup.now }
    ;(template_ref01_data_up0 as any)[template_ref01_markdef_up0.name] = template_ref01_markdef_up0.value

    const template_ref01_resdata_up0 = (await template_ref01_ent.update(template_ref01_data_up0)).data()
    assert(template_ref01_resdata_up0.id === template_ref01_data_up0.id)

    assert((template_ref01_resdata_up0 as any)[template_ref01_markdef_up0.name] === template_ref01_markdef_up0.value)


    // LOAD
    const template_ref01_match_dt0: any = {}
    template_ref01_match_dt0.id = template_ref01_data.id
    const template_ref01_data_dt0 = (await template_ref01_ent.load(template_ref01_match_dt0)).data()
    assert(template_ref01_data_dt0.id === template_ref01_data.id)


    // REMOVE
    const template_ref01_match_rm0: any = { id: template_ref01_data.id }
    await template_ref01_ent.remove(template_ref01_match_rm0)
  

    // LIST
    const template_ref01_match_rt0: any = {}

    const template_ref01_list_rt0 = (await template_ref01_ent.list(template_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(template_ref01_list_rt0, { id: template_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/template/TemplateTestData.json')

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
    ['template01','template02','template03','first01','include_archived01','integration_type01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_TEMPLATE_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_TEMPLATE_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_TEMPLATE_ENTID']
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
  
