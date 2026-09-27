

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


describe('ProjectMilestoneMoveProjectTeamEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.ProjectMilestoneMoveProjectTeam()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'project_milestone_move_project_team.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"projectId":{"a":true,"h":"Project Id","n":"projectId","r":true,"sh":"The project id","t":"`$STRING`","key$":"projectId","index$":1},"teamIds":{"a":true,"h":"Team Ids","n":"teamIds","r":true,"sh":"The team ids for the project","t":"`$STRING`","key$":"teamIds","index$":2}},"id":{"field":"id","name":"id"},"name":"project_milestone_move_project_team","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"POST projectMilestoneMove","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation ProjectMilestoneMoveProjectTeamUpdateProjectMilestoneMove($id: String!, $input: ProjectMilestoneMoveInput!) { projectMilestoneMove(id: $id, input: $input) { previousProjectTeamIds { ...ProjectMilestoneMoveProjectTeamFields } success } } fragment ProjectMilestoneMoveProjectTeamFields on ProjectMilestoneMoveProjectTeams { projectId teamIds }","field":"projectMilestoneMove","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"ProjectMilestoneMoveInput!","name":"input"}]},"k":"graphql","m":"POST","o":"projectMilestoneMove","q":{"$action":"project_milestone_move","exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.projectMilestoneMove.previousProjectTeamIds`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"project_milestone_move_project_team","name__orig":"project_milestone_move_project_team","Name":"ProjectMilestoneMoveProjectTeam","name_":"project_milestone_move_project_team","name-":"project-milestone-move-project-team","NAME":"PROJECT_MILESTONE_MOVE_PROJECT_TEAM","index$":59}, {"active":true,"entity":"project_milestone_move_project_team","key$":"BasicProjectMilestoneMoveProjectTeamFlow","kind":"basic","name":"BasicProjectMilestoneMoveProjectTeamFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"project_milestone_move_project_team_ref01","srcdatavar":"project_milestone_move_project_team_ref01_data","suffix":"_up0","textfield":"projectId"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-project_milestone_move_project_team_ref01"}}],"v":[],"index$":0}]}, 'ProjectMilestoneMoveProjectTeam', {"POST projectMilestoneMove":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let project_milestone_move_project_team_ref01_data = Object.values(setup.data.existing.project_milestone_move_project_team)[0] as any

    // UPDATE
    const project_milestone_move_project_team_ref01_ent = client.ProjectMilestoneMoveProjectTeam()
    const project_milestone_move_project_team_ref01_data_up0: any = {}
    project_milestone_move_project_team_ref01_data_up0.id = project_milestone_move_project_team_ref01_data.id

    const project_milestone_move_project_team_ref01_markdef_up0 = { name: 'projectId', value: 'Mark01-project_milestone_move_project_team_ref01_' + setup.now }
    ;(project_milestone_move_project_team_ref01_data_up0 as any)[project_milestone_move_project_team_ref01_markdef_up0.name] = project_milestone_move_project_team_ref01_markdef_up0.value

    const project_milestone_move_project_team_ref01_resdata_up0 = (await project_milestone_move_project_team_ref01_ent.update(project_milestone_move_project_team_ref01_data_up0)).data()
    assert(project_milestone_move_project_team_ref01_resdata_up0.id === project_milestone_move_project_team_ref01_data_up0.id)

    assert((project_milestone_move_project_team_ref01_resdata_up0 as any)[project_milestone_move_project_team_ref01_markdef_up0.name] === project_milestone_move_project_team_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/project_milestone_move_project_team/ProjectMilestoneMoveProjectTeamTestData.json')

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
    ['project_milestone_move_project_team01','project_milestone_move_project_team02','project_milestone_move_project_team03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_PROJECT_MILESTONE_MOVE_PROJECT_TEAM_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_PROJECT_MILESTONE_MOVE_PROJECT_TEAM_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_PROJECT_MILESTONE_MOVE_PROJECT_TEAM_ENTID']
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
  
