

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


describe('FavoriteEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.Favorite()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'favorite.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"aiConversation","req":false,"short":"[INTERNAL] The favorited Agent conversation.","type":"`$OBJECT`","index$":0},{"active":true,"name":"archivedAt","req":false,"short":"The time at which the entity was archived.","type":"`$ANY`","index$":1},{"active":true,"name":"color","req":false,"short":"[Internal] Returns the color of the favorite's icon.","type":"`$STRING`","index$":2},{"active":true,"name":"createdAt","req":true,"short":"The time at which the entity was created.","type":"`$ANY`","index$":3},{"active":true,"name":"customView","req":false,"short":"The favorited custom view.","type":"`$OBJECT`","index$":4},{"active":true,"name":"customer","req":false,"short":"The favorited customer.","type":"`$OBJECT`","index$":5},{"active":true,"name":"cycle","req":false,"short":"The favorited cycle.","type":"`$OBJECT`","index$":6},{"active":true,"name":"dashboard","req":false,"short":"The favorited dashboard.","type":"`$OBJECT`","index$":7},{"active":true,"name":"detail","req":false,"short":"[Internal] Detail text for favorite's `title` (e.g.","type":"`$STRING`","index$":8},{"active":true,"name":"document","req":false,"short":"The favorited document.","type":"`$OBJECT`","index$":9},{"active":true,"name":"facet","req":false,"short":"[INTERNAL] The favorited facet.","type":"`$OBJECT`","index$":10},{"active":true,"name":"folderName","req":false,"short":"The name of the folder.","type":"`$STRING`","index$":11},{"active":true,"name":"icon","req":false,"short":"[Internal] Name of the favorite's icon.","type":"`$STRING`","index$":12},{"active":true,"name":"id","req":true,"short":"The unique identifier of the entity.","type":"`$STRING`","index$":13},{"active":true,"name":"initiative","req":false,"short":"The favorited initiative.","type":"`$OBJECT`","index$":14},{"active":true,"name":"initiativeLabel","req":false,"short":"[INTERNAL] The favorited initiative label.","type":"`$OBJECT`","index$":15},{"active":true,"name":"initiativeTab","req":false,"short":"The targeted tab of the initiative.","type":"`$STRING`","index$":16},{"active":true,"name":"issue","req":false,"short":"The favorited issue.","type":"`$OBJECT`","index$":17},{"active":true,"name":"label","req":false,"short":"The favorited label.","type":"`$OBJECT`","index$":18},{"active":true,"name":"liveFolderDefinition","req":false,"short":"The versioned lazy root and filter represented by this live favorite folder.","type":"`$ANY`","index$":19},{"active":true,"name":"liveFolderPreset","req":false,"short":"The predefined live folder represented by this favorite.","type":"`$STRING`","index$":20},{"active":true,"name":"owner","req":false,"short":"The user who owns this favorite.","type":"`$OBJECT`","index$":21},{"active":true,"name":"parent","req":false,"short":"The parent folder of the favorite.","type":"`$OBJECT`","index$":22},{"active":true,"name":"pipelineTab","req":false,"short":"The targeted tab of the release pipeline.","type":"`$STRING`","index$":23},{"active":true,"name":"predefinedViewTeam","req":false,"short":"The team of the favorited predefined view.","type":"`$OBJECT`","index$":24},{"active":true,"name":"predefinedViewType","req":false,"short":"The type of favorited predefined view (e.g., 'allIssues', 'activeCycle', 'backlog', 'triage').","type":"`$STRING`","index$":25},{"active":true,"name":"project","req":false,"short":"The favorited project.","type":"`$OBJECT`","index$":26},{"active":true,"name":"projectLabel","req":false,"short":"The favorited project label.","type":"`$OBJECT`","index$":27},{"active":true,"name":"projectTab","req":false,"short":"The targeted tab of the project.","type":"`$STRING`","index$":28},{"active":true,"name":"projectTeam","req":false,"short":"[DEPRECATED] The favorited team of the project.","type":"`$OBJECT`","index$":29},{"active":true,"name":"pullRequest","req":false,"short":"The favorited pull request.","type":"`$OBJECT`","index$":30},{"active":true,"name":"release","req":false,"short":"The favorited release.","type":"`$OBJECT`","index$":31},{"active":true,"name":"releaseNote","req":false,"short":"The favorited release note.","type":"`$OBJECT`","index$":32},{"active":true,"name":"releasePipeline","req":false,"short":"The favorited release pipeline.","type":"`$OBJECT`","index$":33},{"active":true,"name":"sortOrder","req":true,"short":"The position of this item in the user's favorites list.","type":"`$NUMBER`","index$":34},{"active":true,"name":"team","req":false,"short":"The favorited team.","type":"`$OBJECT`","index$":35},{"active":true,"name":"title","req":true,"short":"[Internal] Favorite's title text (name of the favorite'd object or folder).","type":"`$STRING`","index$":36},{"active":true,"name":"type","req":true,"short":"The type of entity this favorite references, such as 'issue', 'project', 'cycle', 'customView', 'document', 'folder', etc.","type":"`$STRING`","index$":37},{"active":true,"name":"updatedAt","req":true,"short":"The last time at which the entity was meaningfully updated.","type":"`$ANY`","index$":38},{"active":true,"name":"url","req":false,"short":"URL of the favorited entity.","type":"`$STRING`","index$":39},{"active":true,"name":"user","req":false,"short":"The favorited user.","type":"`$OBJECT`","index$":40},{"active":true,"name":"workflowDefinition","req":false,"short":"The favorited loop.","type":"`$OBJECT`","index$":41}],"id":{"field":"id","name":"id"},"name":"favorite","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST favoriteCreate","json":"{\"field\":{\"args\":[{\"gqltype\":\"FavoriteCreateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"FavoriteCreateInput\"}],\"deprecated\":false,\"desc\":\"Creates a new favorite for the authenticated user. Exactly one target entity must be specified. If a favorite for the same entity already exists, the existing favorite is returned (upsert behavior).\",\"gqltype\":\"FavoritePayload!\",\"list\":false,\"name\":\"favoriteCreate\",\"reqd\":true,\"type\":\"FavoritePayload\"},\"invocation\":{\"doc\":\"mutation FavoriteCreate($input: FavoriteCreateInput!) { favoriteCreate(input: $input) { favorite { ...FavoriteFields } success } } fragment FavoriteFields on Favorite { aiConversation { id } archivedAt color createdAt customView { id } customer { id } cycle { id } dashboard { id } detail document { id } facet { id } folderName icon id initiative { id } initiativeLabel { id } initiativeTab issue { id } label { id } liveFolderDefinition liveFolderPreset owner { id } parent { id } pipelineTab predefinedViewTeam { id } predefinedViewType project { id } projectLabel { id } projectTab projectTeam { id } pullRequest { id } release { id } releaseNote { id } releasePipeline { id } sortOrder team { id } title type updatedAt url user { id } workflowDefinition { id } }\",\"field\":\"favoriteCreate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"\",\"gqltype\":\"FavoriteCreateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"FavoriteCreateInput\":{\"desc\":\"Input for creating a favorite. Exactly one target entity must be specified (e.g., issueId, projectId, customViewId, folderName, etc.).\",\"fields\":{\"aiConversationId\":{\"args\":[],\"deprecated\":false,\"desc\":\"[INTERNAL] The identifier of the Agent conversation to favorite.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"aiConversationId\",\"reqd\":false,\"type\":\"String\"},\"customViewId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the custom view to favorite.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"customViewId\",\"reqd\":false,\"type\":\"String\"},\"customerId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the customer to favorite.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"customerId\",\"reqd\":false,\"type\":\"String\"},\"cycleId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the cycle to favorite.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"cycleId\",\"reqd\":false,\"type\":\"String\"},\"dashboardId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the dashboard to favorite.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"dashboardId\",\"reqd\":false,\"type\":\"String\"},\"documentId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the document to favorite.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"documentId\",\"reqd\":false,\"type\":\"String\"},\"facetId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the facet to favorite.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"facetId\",\"reqd\":false,\"type\":\"String\"},\"folderName\":{\"args\":[],\"deprecated\":false,\"desc\":\"The name of the favorite folder.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"folderName\",\"reqd\":false,\"type\":\"String\"},\"id\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier. If none is provided, the backend will generate one.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"id\",\"reqd\":false,\"type\":\"String\"},\"initiativeId\":{\"args\":[],\"deprecated\":false,\"desc\":\"[INTERNAL] The identifier of the initiative to favorite.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"initiativeId\",\"reqd\":false,\"type\":\"String\"},\"initiativeLabelId\":{\"args\":[],\"deprecated\":false,\"desc\":\"[INTERNAL] The identifier of the initiative label to favorite.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"initiativeLabelId\",\"reqd\":false,\"type\":\"String\"},\"initiativeTab\":{\"args\":[],\"deprecated\":false,\"desc\":\"The tab of the initiative to favorite.\",\"gqltype\":\"InitiativeTab\",\"list\":false,\"name\":\"initiativeTab\",\"reqd\":false,\"type\":\"InitiativeTab\"},\"issueId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the issue to favorite. Can be a UUID or issue identifier (e.g., 'LIN-123').\",\"gqltype\":\"String\",\"list\":false,\"name\":\"issueId\",\"reqd\":false,\"type\":\"String\"},\"labelId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the label to favorite.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"labelId\",\"reqd\":false,\"type\":\"String\"},\"liveFolderPreset\":{\"args\":[],\"deprecated\":false,\"desc\":\"The predefined live folder to create.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"liveFolderPreset\",\"reqd\":false,\"type\":\"String\"},\"parentId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The parent folder of the favorite.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"parentId\",\"reqd\":false,\"type\":\"String\"},\"pipelineTab\":{\"args\":[],\"deprecated\":false,\"desc\":\"The tab of the release pipeline to favorite.\",\"gqltype\":\"PipelineTab\",\"list\":false,\"name\":\"pipelineTab\",\"reqd\":false,\"type\":\"PipelineTab\"},\"predefinedViewTeamId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of team for the predefined view to favorite.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"predefinedViewTeamId\",\"reqd\":false,\"type\":\"String\"},\"predefinedViewType\":{\"args\":[],\"deprecated\":false,\"desc\":\"The type of the predefined view to favorite.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"predefinedViewType\",\"reqd\":false,\"type\":\"String\"},\"projectId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the project to favorite.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"projectId\",\"reqd\":false,\"type\":\"String\"},\"projectLabelId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the project label to favorite.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"projectLabelId\",\"reqd\":false,\"type\":\"String\"},\"projectTab\":{\"args\":[],\"deprecated\":false,\"desc\":\"The tab of the project to favorite.\",\"gqltype\":\"ProjectTab\",\"list\":false,\"name\":\"projectTab\",\"reqd\":false,\"type\":\"ProjectTab\"},\"pullRequestId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the pull request to favorite.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"pullRequestId\",\"reqd\":false,\"type\":\"String\"},\"releaseId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the release to favorite.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"releaseId\",\"reqd\":false,\"type\":\"String\"},\"releaseNoteId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the release note to favorite.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"releaseNoteId\",\"reqd\":false,\"type\":\"String\"},\"releasePipelineId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the release pipeline to favorite.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"releasePipelineId\",\"reqd\":false,\"type\":\"String\"},\"sortOrder\":{\"args\":[],\"deprecated\":false,\"desc\":\"The position of the item in the favorites list.\",\"gqltype\":\"Float\",\"list\":false,\"name\":\"sortOrder\",\"reqd\":false,\"type\":\"Float\"},\"teamId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the team to favorite.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"teamId\",\"reqd\":false,\"type\":\"String\"},\"userId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the user to favorite.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"userId\",\"reqd\":false,\"type\":\"String\"},\"workflowDefinitionId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the loop to favorite.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"workflowDefinitionId\",\"reqd\":false,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"FavoriteCreateInput\"},\"Float\":{\"desc\":\"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Float\"},\"InitiativeTab\":{\"desc\":\"Different tabs available inside an initiative.\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"InitiativeTab\",\"values\":[\"overview\",\"projects\",\"updates\"]},\"PipelineTab\":{\"desc\":\"Different tabs available inside a release pipeline.\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"PipelineTab\",\"values\":[\"releaseNotes\",\"releases\"]},\"ProjectTab\":{\"desc\":\"Different tabs available inside a project.\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"ProjectTab\",\"values\":[\"customers\",\"documents\",\"issues\",\"loops\",\"updates\"]},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation FavoriteCreate($input: FavoriteCreateInput!) { favoriteCreate(input: $input) { favorite { ...FavoriteFields } success } } fragment FavoriteFields on Favorite { aiConversation { id } archivedAt color createdAt customView { id } customer { id } cycle { id } dashboard { id } detail document { id } facet { id } folderName icon id initiative { id } initiativeLabel { id } initiativeTab issue { id } label { id } liveFolderDefinition liveFolderPreset owner { id } parent { id } pipelineTab predefinedViewTeam { id } predefinedViewType project { id } projectLabel { id } projectTab projectTeam { id } pullRequest { id } release { id } releaseNote { id } releasePipeline { id } sortOrder team { id } title type updatedAt url user { id } workflowDefinition { id } }","field":"favoriteCreate","optype":"mutation","vars":[{"from":"","gqltype":"FavoriteCreateInput!","name":"input"}]},"kind":"graphql","method":"POST","orig":"favoriteCreate","segments":[],"select":{},"transform":{"req":"`reqdata`","res":"`body.data.favoriteCreate.favorite`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"after","orig":"after","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"before","orig":"before","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"param","name":"first","orig":"first","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"kind":"param","name":"include_archived","orig":"include_archived","reqd":false,"type":"`$BOOLEAN`","index$":3},{"active":true,"kind":"param","name":"last","orig":"last","reqd":false,"type":"`$INTEGER`","index$":4},{"active":true,"kind":"param","name":"order_by","orig":"order_by","reqd":false,"type":"`$ANY`","index$":5}]},"contract":{"id":"POST favorites","json":"{\"field\":{\"args\":[{\"gqltype\":\"String\",\"name\":\"after\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"String\",\"name\":\"before\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"Int\",\"name\":\"first\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"Boolean\",\"name\":\"includeArchived\",\"reqd\":false,\"type\":\"Boolean\"},{\"gqltype\":\"Int\",\"name\":\"last\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\",\"reqd\":false,\"type\":\"PaginationOrderBy\"}],\"deprecated\":false,\"desc\":\"The authenticated user's favorites. Returns all bookmarked items that appear in the user's sidebar.\",\"gqltype\":\"FavoriteConnection!\",\"list\":false,\"name\":\"favorites\",\"reqd\":true,\"type\":\"FavoriteConnection\"},\"invocation\":{\"doc\":\"query FavoriteList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { favorites(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...FavoriteFields } pageInfo { endCursor hasNextPage } } } fragment FavoriteFields on Favorite { aiConversation { id } archivedAt color createdAt customView { id } customer { id } cycle { id } dashboard { id } detail document { id } facet { id } folderName icon id initiative { id } initiativeLabel { id } initiativeTab issue { id } label { id } liveFolderDefinition liveFolderPreset owner { id } parent { id } pipelineTab predefinedViewTeam { id } predefinedViewType project { id } projectLabel { id } projectTab projectTeam { id } pullRequest { id } release { id } releaseNote { id } releasePipeline { id } sortOrder team { id } title type updatedAt url user { id } workflowDefinition { id } }\",\"field\":\"favorites\",\"optype\":\"query\",\"page\":{\"cursor\":\"pageInfo.endCursor\",\"more\":\"pageInfo.hasNextPage\",\"nodes\":\"nodes\",\"style\":\"relay\"},\"vars\":[{\"from\":\"after\",\"gqltype\":\"String\",\"name\":\"after\"},{\"from\":\"before\",\"gqltype\":\"String\",\"name\":\"before\"},{\"from\":\"first\",\"gqltype\":\"Int\",\"name\":\"first\"},{\"from\":\"includeArchived\",\"gqltype\":\"Boolean\",\"name\":\"includeArchived\"},{\"from\":\"last\",\"gqltype\":\"Int\",\"name\":\"last\"},{\"from\":\"orderBy\",\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"Int\":{\"desc\":\"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Int\"},\"PaginationOrderBy\":{\"desc\":\"By which field should the pagination order by\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"PaginationOrderBy\",\"values\":[\"createdAt\",\"updatedAt\"]},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"query FavoriteList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { favorites(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...FavoriteFields } pageInfo { endCursor hasNextPage } } } fragment FavoriteFields on Favorite { aiConversation { id } archivedAt color createdAt customView { id } customer { id } cycle { id } dashboard { id } detail document { id } facet { id } folderName icon id initiative { id } initiativeLabel { id } initiativeTab issue { id } label { id } liveFolderDefinition liveFolderPreset owner { id } parent { id } pipelineTab predefinedViewTeam { id } predefinedViewType project { id } projectLabel { id } projectTab projectTeam { id } pullRequest { id } release { id } releaseNote { id } releasePipeline { id } sortOrder team { id } title type updatedAt url user { id } workflowDefinition { id } }","field":"favorites","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"}]},"kind":"graphql","method":"POST","orig":"favorites","segments":[],"select":{},"transform":{"req":"`reqdata`","res":"`body.data.favorites.nodes`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST favorite","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"A specific favorite by ID.\",\"gqltype\":\"Favorite!\",\"list\":false,\"name\":\"favorite\",\"reqd\":true,\"type\":\"Favorite\"},\"invocation\":{\"doc\":\"query FavoriteLoad($id: String!) { favorite(id: $id) { ...FavoriteFields } } fragment FavoriteFields on Favorite { aiConversation { id } archivedAt color createdAt customView { id } customer { id } cycle { id } dashboard { id } detail document { id } facet { id } folderName icon id initiative { id } initiativeLabel { id } initiativeTab issue { id } label { id } liveFolderDefinition liveFolderPreset owner { id } parent { id } pipelineTab predefinedViewTeam { id } predefinedViewType project { id } projectLabel { id } projectTab projectTeam { id } pullRequest { id } release { id } releaseNote { id } releasePipeline { id } sortOrder team { id } title type updatedAt url user { id } workflowDefinition { id } }\",\"field\":\"favorite\",\"optype\":\"query\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"query FavoriteLoad($id: String!) { favorite(id: $id) { ...FavoriteFields } } fragment FavoriteFields on Favorite { aiConversation { id } archivedAt color createdAt customView { id } customer { id } cycle { id } dashboard { id } detail document { id } facet { id } folderName icon id initiative { id } initiativeLabel { id } initiativeTab issue { id } label { id } liveFolderDefinition liveFolderPreset owner { id } parent { id } pipelineTab predefinedViewTeam { id } predefinedViewType project { id } projectLabel { id } projectTab projectTeam { id } pullRequest { id } release { id } releaseNote { id } releasePipeline { id } sortOrder team { id } title type updatedAt url user { id } workflowDefinition { id } }","field":"favorite","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"kind":"graphql","method":"POST","orig":"favorite","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.favorite`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST favoriteDelete","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Deletes a favorite, removing it from the user's sidebar. This is an idempotent operation -- deleting a non-existent favorite succeeds silently.\",\"gqltype\":\"DeletePayload!\",\"list\":false,\"name\":\"favoriteDelete\",\"reqd\":true,\"type\":\"DeletePayload\"},\"invocation\":{\"doc\":\"mutation FavoriteRemove($id: String!) { favoriteDelete(id: $id) { entityId lastSyncId success } }\",\"field\":\"favoriteDelete\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation FavoriteRemove($id: String!) { favoriteDelete(id: $id) { entityId lastSyncId success } }","field":"favoriteDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"kind":"graphql","method":"POST","orig":"favoriteDelete","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.favoriteDelete`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST favoriteUpdate","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"},{\"gqltype\":\"FavoriteUpdateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"FavoriteUpdateInput\"}],\"deprecated\":false,\"desc\":\"Updates a favorite's position, parent folder, or folder name.\",\"gqltype\":\"FavoritePayload!\",\"list\":false,\"name\":\"favoriteUpdate\",\"reqd\":true,\"type\":\"FavoritePayload\"},\"invocation\":{\"doc\":\"mutation FavoriteUpdate($id: String!, $input: FavoriteUpdateInput!) { favoriteUpdate(id: $id, input: $input) { favorite { ...FavoriteFields } success } } fragment FavoriteFields on Favorite { aiConversation { id } archivedAt color createdAt customView { id } customer { id } cycle { id } dashboard { id } detail document { id } facet { id } folderName icon id initiative { id } initiativeLabel { id } initiativeTab issue { id } label { id } liveFolderDefinition liveFolderPreset owner { id } parent { id } pipelineTab predefinedViewTeam { id } predefinedViewType project { id } projectLabel { id } projectTab projectTeam { id } pullRequest { id } release { id } releaseNote { id } releasePipeline { id } sortOrder team { id } title type updatedAt url user { id } workflowDefinition { id } }\",\"field\":\"favoriteUpdate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"},{\"from\":\"\",\"gqltype\":\"FavoriteUpdateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"FavoriteUpdateInput\":{\"desc\":\"Input for updating a favorite's position, parent folder, or folder name.\",\"fields\":{\"folderName\":{\"args\":[],\"deprecated\":false,\"desc\":\"The name of the favorite folder.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"folderName\",\"reqd\":false,\"type\":\"String\"},\"parentId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier (in UUID v4 format) of the folder to move the favorite under.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"parentId\",\"reqd\":false,\"type\":\"String\"},\"sortOrder\":{\"args\":[],\"deprecated\":false,\"desc\":\"The position of the item in the favorites list.\",\"gqltype\":\"Float\",\"list\":false,\"name\":\"sortOrder\",\"reqd\":false,\"type\":\"Float\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"FavoriteUpdateInput\"},\"Float\":{\"desc\":\"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Float\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation FavoriteUpdate($id: String!, $input: FavoriteUpdateInput!) { favoriteUpdate(id: $id, input: $input) { favorite { ...FavoriteFields } success } } fragment FavoriteFields on Favorite { aiConversation { id } archivedAt color createdAt customView { id } customer { id } cycle { id } dashboard { id } detail document { id } facet { id } folderName icon id initiative { id } initiativeLabel { id } initiativeTab issue { id } label { id } liveFolderDefinition liveFolderPreset owner { id } parent { id } pipelineTab predefinedViewTeam { id } predefinedViewType project { id } projectLabel { id } projectTab projectTeam { id } pullRequest { id } release { id } releaseNote { id } releasePipeline { id } sortOrder team { id } title type updatedAt url user { id } workflowDefinition { id } }","field":"favoriteUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"FavoriteUpdateInput!","name":"input"}]},"kind":"graphql","method":"POST","orig":"favoriteUpdate","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.favoriteUpdate.favorite`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"favorite","name__orig":"favorite","Name":"Favorite","name_":"favorite","name-":"favorite","NAME":"FAVORITE","index$":27}, {"active":true,"entity":"favorite","key$":"BasicFavoriteFlow","kind":"basic","name":"BasicFavoriteFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"favorite_ref01"},"match":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"favorite_ref01"}}],"index$":1},{"active":true,"data":{},"input":{"ref":"favorite_ref01","srcdatavar":"favorite_ref01_data","suffix":"_up0","textfield":"color"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-favorite_ref01"}}],"valid":[],"index$":2},{"active":true,"data":{},"input":{"ref":"favorite_ref01","srcdatavar":"favorite_ref01_data","suffix":"_dt0"},"match":{"id":"favorite01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-favorite_ref01"}}],"index$":3},{"active":true,"data":{},"input":{"ref":"favorite_ref01","suffix":"_rm0"},"match":{"id":"favorite01"},"op":"remove","spec":[],"valid":[],"index$":4},{"active":true,"data":{},"input":{"suffix":"_rt0"},"match":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"op":"list","spec":[],"valid":[{"apply":"ItemNotExists","def":{"ref":"favorite_ref01"}}],"index$":5}]}, 'Favorite')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const favorite_ref01_ent = client.Favorite()
    let favorite_ref01_data = setup.data.new.favorite['favorite_ref01']
    favorite_ref01_data['after'] = setup.idmap['after01']
    favorite_ref01_data['before'] = setup.idmap['before01']
    favorite_ref01_data['first'] = setup.idmap['first01']
    favorite_ref01_data['include_archived'] = setup.idmap['include_archived01']
    favorite_ref01_data['last'] = setup.idmap['last01']
    favorite_ref01_data['order_by'] = setup.idmap['order_by01']

    favorite_ref01_data = (await favorite_ref01_ent.create(favorite_ref01_data)).data()
    assert(null != favorite_ref01_data.id)


    // LIST
    const favorite_ref01_match: any = {}
    favorite_ref01_match['after'] = setup.idmap['after01']
    favorite_ref01_match['before'] = setup.idmap['before01']
    favorite_ref01_match['first'] = setup.idmap['first01']
    favorite_ref01_match['include_archived'] = setup.idmap['include_archived01']
    favorite_ref01_match['last'] = setup.idmap['last01']
    favorite_ref01_match['order_by'] = setup.idmap['order_by01']

    const favorite_ref01_list = (await favorite_ref01_ent.list(favorite_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(favorite_ref01_list, { id: favorite_ref01_data.id })))


    // UPDATE
    const favorite_ref01_data_up0: any = {}
    favorite_ref01_data_up0.id = favorite_ref01_data.id

    const favorite_ref01_markdef_up0 = { name: 'color', value: 'Mark01-favorite_ref01_' + setup.now }
    ;(favorite_ref01_data_up0 as any)[favorite_ref01_markdef_up0.name] = favorite_ref01_markdef_up0.value

    const favorite_ref01_resdata_up0 = (await favorite_ref01_ent.update(favorite_ref01_data_up0)).data()
    assert(favorite_ref01_resdata_up0.id === favorite_ref01_data_up0.id)

    assert((favorite_ref01_resdata_up0 as any)[favorite_ref01_markdef_up0.name] === favorite_ref01_markdef_up0.value)


    // LOAD
    const favorite_ref01_match_dt0: any = {}
    favorite_ref01_match_dt0.id = favorite_ref01_data.id
    const favorite_ref01_data_dt0 = (await favorite_ref01_ent.load(favorite_ref01_match_dt0)).data()
    assert(favorite_ref01_data_dt0.id === favorite_ref01_data.id)


    // REMOVE
    const favorite_ref01_match_rm0: any = { id: favorite_ref01_data.id }
    await favorite_ref01_ent.remove(favorite_ref01_match_rm0)
  

    // LIST
    const favorite_ref01_match_rt0: any = {}
    favorite_ref01_match_rt0['after'] = setup.idmap['after01']
    favorite_ref01_match_rt0['before'] = setup.idmap['before01']
    favorite_ref01_match_rt0['first'] = setup.idmap['first01']
    favorite_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01']
    favorite_ref01_match_rt0['last'] = setup.idmap['last01']
    favorite_ref01_match_rt0['order_by'] = setup.idmap['order_by01']

    const favorite_ref01_list_rt0 = (await favorite_ref01_ent.list(favorite_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(favorite_ref01_list_rt0, { id: favorite_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/favorite/FavoriteTestData.json')

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
    ['favorite01','favorite02','favorite03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_FAVORITE_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_FAVORITE_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_FAVORITE_ENTID']
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
  
