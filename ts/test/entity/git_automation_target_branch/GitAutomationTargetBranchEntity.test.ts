

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


describe('GitAutomationTargetBranchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.GitAutomationTargetBranch()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'update', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'git_automation_target_branch.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"archivedAt","req":false,"short":"The time at which the entity was archived.","type":"`$ANY`","index$":0},{"active":true,"name":"branchPattern","req":true,"short":"The branch name or pattern to match against pull request target branches.","type":"`$STRING`","index$":1},{"active":true,"name":"createdAt","req":true,"short":"The time at which the entity was created.","type":"`$ANY`","index$":2},{"active":true,"name":"id","req":true,"short":"The unique identifier of the entity.","type":"`$STRING`","index$":3},{"active":true,"name":"isRegex","req":true,"short":"Whether the branch pattern should be interpreted as a regular expression.","type":"`$BOOLEAN`","index$":4},{"active":true,"name":"team","req":false,"short":"The team that this target branch definition belongs to.","type":"`$OBJECT`","index$":5},{"active":true,"name":"updatedAt","req":true,"short":"The last time at which the entity was meaningfully updated.","type":"`$ANY`","index$":6}],"id":{"field":"id","name":"id"},"name":"git_automation_target_branch","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST gitAutomationTargetBranchCreate","json":"{\"field\":{\"args\":[{\"gqltype\":\"GitAutomationTargetBranchCreateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"GitAutomationTargetBranchCreateInput\"}],\"deprecated\":false,\"desc\":\"Creates a new Git target branch definition that scopes automation rules to pull requests targeting a specific branch pattern.\",\"gqltype\":\"GitAutomationTargetBranchPayload!\",\"list\":false,\"name\":\"gitAutomationTargetBranchCreate\",\"reqd\":true,\"type\":\"GitAutomationTargetBranchPayload\"},\"invocation\":{\"doc\":\"mutation GitAutomationTargetBranchCreate($input: GitAutomationTargetBranchCreateInput!) { gitAutomationTargetBranchCreate(input: $input) { targetBranch { ...GitAutomationTargetBranchFields } success } } fragment GitAutomationTargetBranchFields on GitAutomationTargetBranch { archivedAt branchPattern createdAt id isRegex team { id } updatedAt }\",\"field\":\"gitAutomationTargetBranchCreate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"\",\"gqltype\":\"GitAutomationTargetBranchCreateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"GitAutomationTargetBranchCreateInput\":{\"desc\":\"Input for creating a new Git target branch definition.\",\"fields\":{\"branchPattern\":{\"args\":[],\"deprecated\":false,\"desc\":\"The target branch pattern.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"branchPattern\",\"reqd\":true,\"type\":\"String\"},\"id\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier in UUID v4 format. If none is provided, the backend will generate one.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"id\",\"reqd\":false,\"type\":\"String\"},\"isRegex\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether the branch pattern is a regular expression.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"isRegex\",\"reqd\":false,\"type\":\"Boolean\"},\"teamId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The team associated with the Git target branch automation.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"teamId\",\"reqd\":true,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"GitAutomationTargetBranchCreateInput\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation GitAutomationTargetBranchCreate($input: GitAutomationTargetBranchCreateInput!) { gitAutomationTargetBranchCreate(input: $input) { targetBranch { ...GitAutomationTargetBranchFields } success } } fragment GitAutomationTargetBranchFields on GitAutomationTargetBranch { archivedAt branchPattern createdAt id isRegex team { id } updatedAt }","field":"gitAutomationTargetBranchCreate","optype":"mutation","vars":[{"from":"","gqltype":"GitAutomationTargetBranchCreateInput!","name":"input"}]},"kind":"graphql","method":"POST","orig":"gitAutomationTargetBranchCreate","segments":[],"select":{},"transform":{"req":"`reqdata`","res":"`body.data.gitAutomationTargetBranchCreate.targetBranch`"},"index$":0}],"key$":"create"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST gitAutomationTargetBranchDelete","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Deletes a Git target branch definition and its associated automation rules.\",\"gqltype\":\"DeletePayload!\",\"list\":false,\"name\":\"gitAutomationTargetBranchDelete\",\"reqd\":true,\"type\":\"DeletePayload\"},\"invocation\":{\"doc\":\"mutation GitAutomationTargetBranchRemove($id: String!) { gitAutomationTargetBranchDelete(id: $id) { entityId lastSyncId success } }\",\"field\":\"gitAutomationTargetBranchDelete\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation GitAutomationTargetBranchRemove($id: String!) { gitAutomationTargetBranchDelete(id: $id) { entityId lastSyncId success } }","field":"gitAutomationTargetBranchDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"kind":"graphql","method":"POST","orig":"gitAutomationTargetBranchDelete","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.gitAutomationTargetBranchDelete`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST gitAutomationTargetBranchUpdate","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"},{\"gqltype\":\"GitAutomationTargetBranchUpdateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"GitAutomationTargetBranchUpdateInput\"}],\"deprecated\":false,\"desc\":\"Updates an existing Git target branch definition, including its branch pattern and regex flag.\",\"gqltype\":\"GitAutomationTargetBranchPayload!\",\"list\":false,\"name\":\"gitAutomationTargetBranchUpdate\",\"reqd\":true,\"type\":\"GitAutomationTargetBranchPayload\"},\"invocation\":{\"doc\":\"mutation GitAutomationTargetBranchUpdate($id: String!, $input: GitAutomationTargetBranchUpdateInput!) { gitAutomationTargetBranchUpdate(id: $id, input: $input) { targetBranch { ...GitAutomationTargetBranchFields } success } } fragment GitAutomationTargetBranchFields on GitAutomationTargetBranch { archivedAt branchPattern createdAt id isRegex team { id } updatedAt }\",\"field\":\"gitAutomationTargetBranchUpdate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"},{\"from\":\"\",\"gqltype\":\"GitAutomationTargetBranchUpdateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"GitAutomationTargetBranchUpdateInput\":{\"desc\":\"Input for updating an existing Git target branch definition.\",\"fields\":{\"branchPattern\":{\"args\":[],\"deprecated\":false,\"desc\":\"The target branch pattern.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"branchPattern\",\"reqd\":false,\"type\":\"String\"},\"isRegex\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether the branch pattern is a regular expression.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"isRegex\",\"reqd\":false,\"type\":\"Boolean\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"GitAutomationTargetBranchUpdateInput\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation GitAutomationTargetBranchUpdate($id: String!, $input: GitAutomationTargetBranchUpdateInput!) { gitAutomationTargetBranchUpdate(id: $id, input: $input) { targetBranch { ...GitAutomationTargetBranchFields } success } } fragment GitAutomationTargetBranchFields on GitAutomationTargetBranch { archivedAt branchPattern createdAt id isRegex team { id } updatedAt }","field":"gitAutomationTargetBranchUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"GitAutomationTargetBranchUpdateInput!","name":"input"}]},"kind":"graphql","method":"POST","orig":"gitAutomationTargetBranchUpdate","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.gitAutomationTargetBranchUpdate.targetBranch`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"git_automation_target_branch","name__orig":"git_automation_target_branch","Name":"GitAutomationTargetBranch","name_":"git_automation_target_branch","name-":"git-automation-target-branch","NAME":"GIT_AUTOMATION_TARGET_BRANCH","index$":29}, {"active":true,"entity":"git_automation_target_branch","key$":"BasicGitAutomationTargetBranchFlow","kind":"basic","name":"BasicGitAutomationTargetBranchFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"git_automation_target_branch_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"git_automation_target_branch_ref01","srcdatavar":"git_automation_target_branch_ref01_data","suffix":"_up0","textfield":"branchPattern"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-git_automation_target_branch_ref01"}}],"valid":[],"index$":1},{"active":true,"data":{},"input":{"ref":"git_automation_target_branch_ref01","suffix":"_rm0"},"match":{"id":"git_automation_target_branch01"},"op":"remove","spec":[],"valid":[],"index$":2}]}, 'GitAutomationTargetBranch')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const git_automation_target_branch_ref01_ent = client.GitAutomationTargetBranch()
    let git_automation_target_branch_ref01_data = setup.data.new.git_automation_target_branch['git_automation_target_branch_ref01']

    git_automation_target_branch_ref01_data = (await git_automation_target_branch_ref01_ent.create(git_automation_target_branch_ref01_data)).data()
    assert(null != git_automation_target_branch_ref01_data.id)


    // UPDATE
    const git_automation_target_branch_ref01_data_up0: any = {}
    git_automation_target_branch_ref01_data_up0.id = git_automation_target_branch_ref01_data.id

    const git_automation_target_branch_ref01_markdef_up0 = { name: 'branchPattern', value: 'Mark01-git_automation_target_branch_ref01_' + setup.now }
    ;(git_automation_target_branch_ref01_data_up0 as any)[git_automation_target_branch_ref01_markdef_up0.name] = git_automation_target_branch_ref01_markdef_up0.value

    const git_automation_target_branch_ref01_resdata_up0 = (await git_automation_target_branch_ref01_ent.update(git_automation_target_branch_ref01_data_up0)).data()
    assert(git_automation_target_branch_ref01_resdata_up0.id === git_automation_target_branch_ref01_data_up0.id)

    assert((git_automation_target_branch_ref01_resdata_up0 as any)[git_automation_target_branch_ref01_markdef_up0.name] === git_automation_target_branch_ref01_markdef_up0.value)


    // REMOVE
    const git_automation_target_branch_ref01_match_rm0: any = { id: git_automation_target_branch_ref01_data.id }
    await git_automation_target_branch_ref01_ent.remove(git_automation_target_branch_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/git_automation_target_branch/GitAutomationTargetBranchTestData.json')

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
    ['git_automation_target_branch01','git_automation_target_branch02','git_automation_target_branch03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_GIT_AUTOMATION_TARGET_BRANCH_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_GIT_AUTOMATION_TARGET_BRANCH_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_GIT_AUTOMATION_TARGET_BRANCH_ENTID']
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
  
