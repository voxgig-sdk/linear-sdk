

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"projectId","req":true,"short":"The project id","type":"`$STRING`","index$":1},{"active":true,"name":"teamIds","req":true,"short":"The team ids for the project","type":"`$STRING`","index$":2}],"id":{"field":"id","name":"id"},"name":"project_milestone_move_project_team","op":{"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST projectMilestoneMove","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"},{\"gqltype\":\"ProjectMilestoneMoveInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"ProjectMilestoneMoveInput\"}],\"deprecated\":false,\"desc\":\"[Internal] Moves a project milestone to another project, can be called to undo a prior move.\",\"gqltype\":\"ProjectMilestoneMovePayload!\",\"list\":false,\"name\":\"projectMilestoneMove\",\"reqd\":true,\"type\":\"ProjectMilestoneMovePayload\"},\"invocation\":{\"doc\":\"mutation ProjectMilestoneMoveProjectTeamUpdateProjectMilestoneMove($id: String!, $input: ProjectMilestoneMoveInput!) { projectMilestoneMove(id: $id, input: $input) { previousProjectTeamIds { ...ProjectMilestoneMoveProjectTeamFields } success } } fragment ProjectMilestoneMoveProjectTeamFields on ProjectMilestoneMoveProjectTeams { projectId teamIds }\",\"field\":\"projectMilestoneMove\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"},{\"from\":\"\",\"gqltype\":\"ProjectMilestoneMoveInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"ProjectMilestoneMoveInput\":{\"desc\":\"[Internal] Input for moving a project milestone to another project.\",\"fields\":{\"addIssueTeamToProject\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether to add each milestone issue's team to the project. This is needed when there is a mismatch between a project's teams and the milestone's issues' teams. Either this or newIssueTeamId is required in that situation to resolve constraints.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"addIssueTeamToProject\",\"reqd\":false,\"type\":\"Boolean\"},\"newIssueTeamId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The team id to move the attached issues to. This is needed when there is a mismatch between a project's teams and the milestone's issues' teams. Either this or addIssueTeamToProject is required in that situation to resolve constraints.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"newIssueTeamId\",\"reqd\":false,\"type\":\"String\"},\"projectId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the project to move the milestone to.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"projectId\",\"reqd\":true,\"type\":\"String\"},\"undoIssueTeamIds\":{\"args\":[],\"deprecated\":false,\"desc\":\"A list of issue id to team ids, used for undoing a previous milestone move where the specified issues were moved from the specified teams.\",\"gqltype\":\"[ProjectMilestoneMoveIssueToTeamInput!]\",\"list\":true,\"name\":\"undoIssueTeamIds\",\"reqd\":false,\"type\":\"ProjectMilestoneMoveIssueToTeamInput\"},\"undoProjectTeamIds\":{\"args\":[],\"deprecated\":false,\"desc\":\"A mapping of project id to a previous set of team ids, used for undoing a previous milestone move where the specified teams were added to the project.\",\"gqltype\":\"ProjectMilestoneMoveProjectTeamsInput\",\"list\":false,\"name\":\"undoProjectTeamIds\",\"reqd\":false,\"type\":\"ProjectMilestoneMoveProjectTeamsInput\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"ProjectMilestoneMoveInput\"},\"ProjectMilestoneMoveIssueToTeamInput\":{\"desc\":\"[Internal] Used for ProjectMilestoneMoveInput to describe a mapping between an issue and its team.\",\"fields\":{\"issueId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The issue id in this relationship, you can use * as wildcard if all issues are being moved to the same team\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"issueId\",\"reqd\":true,\"type\":\"String\"},\"teamId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The team id in this relationship\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"teamId\",\"reqd\":true,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"ProjectMilestoneMoveIssueToTeamInput\"},\"ProjectMilestoneMoveProjectTeamsInput\":{\"desc\":\"[Internal] Used for ProjectMilestoneMoveInput to describe a snapshot of a project and its team ids\",\"fields\":{\"projectId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The project id\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"projectId\",\"reqd\":true,\"type\":\"String\"},\"teamIds\":{\"args\":[],\"deprecated\":false,\"desc\":\"The team ids for the project\",\"gqltype\":\"[String!]!\",\"list\":true,\"name\":\"teamIds\",\"reqd\":true,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"ProjectMilestoneMoveProjectTeamsInput\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation ProjectMilestoneMoveProjectTeamUpdateProjectMilestoneMove($id: String!, $input: ProjectMilestoneMoveInput!) { projectMilestoneMove(id: $id, input: $input) { previousProjectTeamIds { ...ProjectMilestoneMoveProjectTeamFields } success } } fragment ProjectMilestoneMoveProjectTeamFields on ProjectMilestoneMoveProjectTeams { projectId teamIds }","field":"projectMilestoneMove","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"ProjectMilestoneMoveInput!","name":"input"}]},"kind":"graphql","method":"POST","orig":"projectMilestoneMove","segments":[],"select":{"$action":"project_milestone_move","exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.projectMilestoneMove.previousProjectTeamIds`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"project_milestone_move_project_team","name__orig":"project_milestone_move_project_team","Name":"ProjectMilestoneMoveProjectTeam","name_":"project_milestone_move_project_team","name-":"project-milestone-move-project-team","NAME":"PROJECT_MILESTONE_MOVE_PROJECT_TEAM","index$":59}, {"active":true,"entity":"project_milestone_move_project_team","key$":"BasicProjectMilestoneMoveProjectTeamFlow","kind":"basic","name":"BasicProjectMilestoneMoveProjectTeamFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"project_milestone_move_project_team_ref01","srcdatavar":"project_milestone_move_project_team_ref01_data","suffix":"_up0","textfield":"projectId"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-project_milestone_move_project_team_ref01"}}],"valid":[],"index$":0}]}, 'ProjectMilestoneMoveProjectTeam')
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
  
