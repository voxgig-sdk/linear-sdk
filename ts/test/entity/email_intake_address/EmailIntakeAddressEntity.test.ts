

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


describe('EmailIntakeAddressEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.EmailIntakeAddress()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'email_intake_address.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"address","req":true,"short":"The unique local part (before the @) of the intake email address, used to route incoming emails to the correct intake handler.","type":"`$STRING`","index$":0},{"active":true,"name":"archivedAt","req":false,"short":"The time at which the entity was archived.","type":"`$ANY`","index$":1},{"active":true,"name":"createdAt","req":true,"short":"The time at which the entity was created.","type":"`$ANY`","index$":2},{"active":true,"name":"creator","req":false,"short":"The user who created the email intake address.","type":"`$OBJECT`","index$":3},{"active":true,"name":"customerRequestsEnabled","req":true,"short":"Whether issues created from emails sent to this address are automatically converted into customer requests, linking the sender as a customer contact.","type":"`$BOOLEAN`","index$":4},{"active":true,"name":"enabled","req":true,"short":"Whether the email address is enabled.","type":"`$BOOLEAN`","index$":5},{"active":true,"name":"forwardingEmailAddress","req":false,"short":"The email address used to forward emails to the intake address.","type":"`$STRING`","index$":6},{"active":true,"name":"id","req":true,"short":"The unique identifier of the entity.","type":"`$STRING`","index$":7},{"active":true,"name":"issueCanceledAutoReply","req":false,"short":"The auto-reply message for issue canceled.","type":"`$STRING`","index$":8},{"active":true,"name":"issueCanceledAutoReplyEnabled","req":true,"short":"Whether the auto-reply for issue canceled is enabled.","type":"`$BOOLEAN`","index$":9},{"active":true,"name":"issueCompletedAutoReply","req":false,"short":"The auto-reply message for issue completed.","type":"`$STRING`","index$":10},{"active":true,"name":"issueCompletedAutoReplyEnabled","req":true,"short":"Whether the auto-reply for issue completed is enabled.","type":"`$BOOLEAN`","index$":11},{"active":true,"name":"issueCreatedAutoReply","req":false,"short":"The auto-reply message for issue created.","type":"`$STRING`","index$":12},{"active":true,"name":"issueCreatedAutoReplyEnabled","req":true,"short":"Whether the auto-reply for issue created is enabled.","type":"`$BOOLEAN`","index$":13},{"active":true,"name":"lastUsedAt","req":false,"short":"The last time an inbound email was successfully ingested for this address.","type":"`$ANY`","index$":14},{"active":true,"name":"organization","req":false,"short":"The workspace that the email address is associated with.","type":"`$OBJECT`","index$":15},{"active":true,"name":"reopenOnReply","req":true,"short":"Whether to reopen completed or canceled issues when a substantive email reply is received.","type":"`$BOOLEAN`","index$":16},{"active":true,"name":"repliesEnabled","req":true,"short":"Whether email replies are enabled.","type":"`$BOOLEAN`","index$":17},{"active":true,"name":"senderName","req":false,"short":"The name to be used for outgoing emails.","type":"`$STRING`","index$":18},{"active":true,"name":"sesDomainIdentity","req":false,"short":"The SES domain identity that the email address is associated with.","type":"`$OBJECT`","index$":19},{"active":true,"name":"team","req":false,"short":"The team that the email address is associated with.","type":"`$OBJECT`","index$":20},{"active":true,"name":"template","req":false,"short":"The template that the email address is associated with.","type":"`$OBJECT`","index$":21},{"active":true,"name":"type","req":true,"short":"The type of the email address.","type":"`$STRING`","index$":22},{"active":true,"name":"updatedAt","req":true,"short":"The last time at which the entity was meaningfully updated.","type":"`$ANY`","index$":23},{"active":true,"name":"useUserNamesInReplies","req":true,"short":"Whether the commenter's name is included in the email replies.","type":"`$BOOLEAN`","index$":24}],"id":{"field":"id","name":"id"},"name":"email_intake_address","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST emailIntakeAddressCreate","json":"{\"field\":{\"args\":[{\"gqltype\":\"EmailIntakeAddressCreateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"EmailIntakeAddressCreateInput\"}],\"deprecated\":false,\"desc\":\"Creates a new email intake address.\",\"gqltype\":\"EmailIntakeAddressPayload!\",\"list\":false,\"name\":\"emailIntakeAddressCreate\",\"reqd\":true,\"type\":\"EmailIntakeAddressPayload\"},\"invocation\":{\"doc\":\"mutation EmailIntakeAddressCreate($input: EmailIntakeAddressCreateInput!) { emailIntakeAddressCreate(input: $input) { emailIntakeAddress { ...EmailIntakeAddressFields } success } } fragment EmailIntakeAddressFields on EmailIntakeAddress { address archivedAt createdAt creator { id } customerRequestsEnabled enabled forwardingEmailAddress id issueCanceledAutoReply issueCanceledAutoReplyEnabled issueCompletedAutoReply issueCompletedAutoReplyEnabled issueCreatedAutoReply issueCreatedAutoReplyEnabled lastUsedAt organization { id } reopenOnReply repliesEnabled senderName sesDomainIdentity { id } team { id } template { id } type updatedAt useUserNamesInReplies }\",\"field\":\"emailIntakeAddressCreate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"\",\"gqltype\":\"EmailIntakeAddressCreateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"EmailIntakeAddressCreateInput\":{\"desc\":\"Input for creating a new email intake address.\",\"fields\":{\"customerRequestsEnabled\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether customer requests are enabled.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"customerRequestsEnabled\",\"reqd\":false,\"type\":\"Boolean\"},\"forwardingEmailAddress\":{\"args\":[],\"deprecated\":false,\"desc\":\"The email address used to forward emails to the intake address.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"forwardingEmailAddress\",\"reqd\":false,\"type\":\"String\"},\"id\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier in UUID v4 format. If none is provided, the backend will generate one.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"id\",\"reqd\":false,\"type\":\"String\"},\"issueCanceledAutoReply\":{\"args\":[],\"deprecated\":false,\"desc\":\"The auto-reply message for issue canceled.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"issueCanceledAutoReply\",\"reqd\":false,\"type\":\"String\"},\"issueCanceledAutoReplyEnabled\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether the issue canceled auto-reply is enabled.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"issueCanceledAutoReplyEnabled\",\"reqd\":false,\"type\":\"Boolean\"},\"issueCompletedAutoReply\":{\"args\":[],\"deprecated\":false,\"desc\":\"The auto-reply message for issue completed.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"issueCompletedAutoReply\",\"reqd\":false,\"type\":\"String\"},\"issueCompletedAutoReplyEnabled\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether the issue completed auto-reply is enabled.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"issueCompletedAutoReplyEnabled\",\"reqd\":false,\"type\":\"Boolean\"},\"issueCreatedAutoReply\":{\"args\":[],\"deprecated\":false,\"desc\":\"The auto-reply message for issue created.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"issueCreatedAutoReply\",\"reqd\":false,\"type\":\"String\"},\"issueCreatedAutoReplyEnabled\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether the issue created auto-reply is enabled.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"issueCreatedAutoReplyEnabled\",\"reqd\":false,\"type\":\"Boolean\"},\"reopenOnReply\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether to reopen completed or canceled issues when a substantive email reply is received.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"reopenOnReply\",\"reqd\":false,\"type\":\"Boolean\"},\"repliesEnabled\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether email replies are enabled.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"repliesEnabled\",\"reqd\":false,\"type\":\"Boolean\"},\"senderName\":{\"args\":[],\"deprecated\":false,\"desc\":\"The name to be used for outgoing emails.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"senderName\",\"reqd\":false,\"type\":\"String\"},\"teamId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier or key of the team this email address will intake issues for.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"teamId\",\"reqd\":false,\"type\":\"String\"},\"templateId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the template this email address will intake issues for.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"templateId\",\"reqd\":false,\"type\":\"String\"},\"type\":{\"args\":[],\"deprecated\":false,\"desc\":\"The type of the email address. If not provided, the backend will default to team or template.\",\"gqltype\":\"EmailIntakeAddressType\",\"list\":false,\"name\":\"type\",\"reqd\":false,\"type\":\"EmailIntakeAddressType\"},\"useUserNamesInReplies\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether the commenter's name is included in the email replies.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"useUserNamesInReplies\",\"reqd\":false,\"type\":\"Boolean\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"EmailIntakeAddressCreateInput\"},\"EmailIntakeAddressType\":{\"desc\":\"The type of the email address.\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"EmailIntakeAddressType\",\"values\":[\"asks\",\"asksWeb\",\"team\",\"template\"]},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation EmailIntakeAddressCreate($input: EmailIntakeAddressCreateInput!) { emailIntakeAddressCreate(input: $input) { emailIntakeAddress { ...EmailIntakeAddressFields } success } } fragment EmailIntakeAddressFields on EmailIntakeAddress { address archivedAt createdAt creator { id } customerRequestsEnabled enabled forwardingEmailAddress id issueCanceledAutoReply issueCanceledAutoReplyEnabled issueCompletedAutoReply issueCompletedAutoReplyEnabled issueCreatedAutoReply issueCreatedAutoReplyEnabled lastUsedAt organization { id } reopenOnReply repliesEnabled senderName sesDomainIdentity { id } team { id } template { id } type updatedAt useUserNamesInReplies }","field":"emailIntakeAddressCreate","optype":"mutation","vars":[{"from":"","gqltype":"EmailIntakeAddressCreateInput!","name":"input"}]},"kind":"graphql","method":"POST","orig":"emailIntakeAddressCreate","segments":[],"select":{},"transform":{"req":"`reqdata`","res":"`body.data.emailIntakeAddressCreate.emailIntakeAddress`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST emailIntakeAddress","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"One specific email intake address.\",\"gqltype\":\"EmailIntakeAddress!\",\"list\":false,\"name\":\"emailIntakeAddress\",\"reqd\":true,\"type\":\"EmailIntakeAddress\"},\"invocation\":{\"doc\":\"query EmailIntakeAddressLoad($id: String!) { emailIntakeAddress(id: $id) { ...EmailIntakeAddressFields } } fragment EmailIntakeAddressFields on EmailIntakeAddress { address archivedAt createdAt creator { id } customerRequestsEnabled enabled forwardingEmailAddress id issueCanceledAutoReply issueCanceledAutoReplyEnabled issueCompletedAutoReply issueCompletedAutoReplyEnabled issueCreatedAutoReply issueCreatedAutoReplyEnabled lastUsedAt organization { id } reopenOnReply repliesEnabled senderName sesDomainIdentity { id } team { id } template { id } type updatedAt useUserNamesInReplies }\",\"field\":\"emailIntakeAddress\",\"optype\":\"query\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"query EmailIntakeAddressLoad($id: String!) { emailIntakeAddress(id: $id) { ...EmailIntakeAddressFields } } fragment EmailIntakeAddressFields on EmailIntakeAddress { address archivedAt createdAt creator { id } customerRequestsEnabled enabled forwardingEmailAddress id issueCanceledAutoReply issueCanceledAutoReplyEnabled issueCompletedAutoReply issueCompletedAutoReplyEnabled issueCreatedAutoReply issueCreatedAutoReplyEnabled lastUsedAt organization { id } reopenOnReply repliesEnabled senderName sesDomainIdentity { id } team { id } template { id } type updatedAt useUserNamesInReplies }","field":"emailIntakeAddress","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"kind":"graphql","method":"POST","orig":"emailIntakeAddress","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.emailIntakeAddress`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST emailIntakeAddressDelete","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Deletes an email intake address object.\",\"gqltype\":\"DeletePayload!\",\"list\":false,\"name\":\"emailIntakeAddressDelete\",\"reqd\":true,\"type\":\"DeletePayload\"},\"invocation\":{\"doc\":\"mutation EmailIntakeAddressRemove($id: String!) { emailIntakeAddressDelete(id: $id) { entityId lastSyncId success } }\",\"field\":\"emailIntakeAddressDelete\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation EmailIntakeAddressRemove($id: String!) { emailIntakeAddressDelete(id: $id) { entityId lastSyncId success } }","field":"emailIntakeAddressDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"kind":"graphql","method":"POST","orig":"emailIntakeAddressDelete","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.emailIntakeAddressDelete`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`"}]},"contract":{"id":"POST emailIntakeAddressRotate","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Rotates an existing email intake address.\",\"gqltype\":\"EmailIntakeAddressPayload!\",\"list\":false,\"name\":\"emailIntakeAddressRotate\",\"reqd\":true,\"type\":\"EmailIntakeAddressPayload\"},\"invocation\":{\"doc\":\"mutation EmailIntakeAddressUpdateRotate($id: String!) { emailIntakeAddressRotate(id: $id) { emailIntakeAddress { ...EmailIntakeAddressFields } success } } fragment EmailIntakeAddressFields on EmailIntakeAddress { address archivedAt createdAt creator { id } customerRequestsEnabled enabled forwardingEmailAddress id issueCanceledAutoReply issueCanceledAutoReplyEnabled issueCompletedAutoReply issueCompletedAutoReplyEnabled issueCreatedAutoReply issueCreatedAutoReplyEnabled lastUsedAt organization { id } reopenOnReply repliesEnabled senderName sesDomainIdentity { id } team { id } template { id } type updatedAt useUserNamesInReplies }\",\"field\":\"emailIntakeAddressRotate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation EmailIntakeAddressUpdateRotate($id: String!) { emailIntakeAddressRotate(id: $id) { emailIntakeAddress { ...EmailIntakeAddressFields } success } } fragment EmailIntakeAddressFields on EmailIntakeAddress { address archivedAt createdAt creator { id } customerRequestsEnabled enabled forwardingEmailAddress id issueCanceledAutoReply issueCanceledAutoReplyEnabled issueCompletedAutoReply issueCompletedAutoReplyEnabled issueCreatedAutoReply issueCreatedAutoReplyEnabled lastUsedAt organization { id } reopenOnReply repliesEnabled senderName sesDomainIdentity { id } team { id } template { id } type updatedAt useUserNamesInReplies }","field":"emailIntakeAddressRotate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"kind":"graphql","method":"POST","orig":"emailIntakeAddressRotate","segments":[],"select":{"$action":"rotate","exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.emailIntakeAddressRotate.emailIntakeAddress`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST emailIntakeAddressUpdate","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"},{\"gqltype\":\"EmailIntakeAddressUpdateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"EmailIntakeAddressUpdateInput\"}],\"deprecated\":false,\"desc\":\"Updates an existing email intake address.\",\"gqltype\":\"EmailIntakeAddressPayload!\",\"list\":false,\"name\":\"emailIntakeAddressUpdate\",\"reqd\":true,\"type\":\"EmailIntakeAddressPayload\"},\"invocation\":{\"doc\":\"mutation EmailIntakeAddressUpdate($id: String!, $input: EmailIntakeAddressUpdateInput!) { emailIntakeAddressUpdate(id: $id, input: $input) { emailIntakeAddress { ...EmailIntakeAddressFields } success } } fragment EmailIntakeAddressFields on EmailIntakeAddress { address archivedAt createdAt creator { id } customerRequestsEnabled enabled forwardingEmailAddress id issueCanceledAutoReply issueCanceledAutoReplyEnabled issueCompletedAutoReply issueCompletedAutoReplyEnabled issueCreatedAutoReply issueCreatedAutoReplyEnabled lastUsedAt organization { id } reopenOnReply repliesEnabled senderName sesDomainIdentity { id } team { id } template { id } type updatedAt useUserNamesInReplies }\",\"field\":\"emailIntakeAddressUpdate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"},{\"from\":\"\",\"gqltype\":\"EmailIntakeAddressUpdateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"EmailIntakeAddressUpdateInput\":{\"desc\":\"Input for updating an existing email intake address.\",\"fields\":{\"customerRequestsEnabled\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether customer requests are enabled.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"customerRequestsEnabled\",\"reqd\":false,\"type\":\"Boolean\"},\"enabled\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether the email address is currently enabled. If set to false, the email address will be disabled and no longer accept incoming emails.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"enabled\",\"reqd\":false,\"type\":\"Boolean\"},\"forwardingEmailAddress\":{\"args\":[],\"deprecated\":false,\"desc\":\"The email address used to forward emails to the intake address.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"forwardingEmailAddress\",\"reqd\":false,\"type\":\"String\"},\"issueCanceledAutoReply\":{\"args\":[],\"deprecated\":false,\"desc\":\"Custom auto-reply message for issue canceled.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"issueCanceledAutoReply\",\"reqd\":false,\"type\":\"String\"},\"issueCanceledAutoReplyEnabled\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether the issue canceled auto-reply is enabled.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"issueCanceledAutoReplyEnabled\",\"reqd\":false,\"type\":\"Boolean\"},\"issueCompletedAutoReply\":{\"args\":[],\"deprecated\":false,\"desc\":\"Custom auto-reply message for issue completed.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"issueCompletedAutoReply\",\"reqd\":false,\"type\":\"String\"},\"issueCompletedAutoReplyEnabled\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether the issue completed auto-reply is enabled.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"issueCompletedAutoReplyEnabled\",\"reqd\":false,\"type\":\"Boolean\"},\"issueCreatedAutoReply\":{\"args\":[],\"deprecated\":false,\"desc\":\"The auto-reply message for issue created.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"issueCreatedAutoReply\",\"reqd\":false,\"type\":\"String\"},\"issueCreatedAutoReplyEnabled\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether the issue created auto-reply is enabled.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"issueCreatedAutoReplyEnabled\",\"reqd\":false,\"type\":\"Boolean\"},\"reopenOnReply\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether to reopen completed or canceled issues when a substantive email reply is received.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"reopenOnReply\",\"reqd\":false,\"type\":\"Boolean\"},\"repliesEnabled\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether email replies are enabled.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"repliesEnabled\",\"reqd\":false,\"type\":\"Boolean\"},\"senderName\":{\"args\":[],\"deprecated\":false,\"desc\":\"The name to be used for outgoing emails.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"senderName\",\"reqd\":false,\"type\":\"String\"},\"teamId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier or key of the team this email address will intake issues for.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"teamId\",\"reqd\":false,\"type\":\"String\"},\"templateId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the template this email address will intake issues for.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"templateId\",\"reqd\":false,\"type\":\"String\"},\"useUserNamesInReplies\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether the commenter's name is included in the email replies.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"useUserNamesInReplies\",\"reqd\":false,\"type\":\"Boolean\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"EmailIntakeAddressUpdateInput\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation EmailIntakeAddressUpdate($id: String!, $input: EmailIntakeAddressUpdateInput!) { emailIntakeAddressUpdate(id: $id, input: $input) { emailIntakeAddress { ...EmailIntakeAddressFields } success } } fragment EmailIntakeAddressFields on EmailIntakeAddress { address archivedAt createdAt creator { id } customerRequestsEnabled enabled forwardingEmailAddress id issueCanceledAutoReply issueCanceledAutoReplyEnabled issueCompletedAutoReply issueCompletedAutoReplyEnabled issueCreatedAutoReply issueCreatedAutoReplyEnabled lastUsedAt organization { id } reopenOnReply repliesEnabled senderName sesDomainIdentity { id } team { id } template { id } type updatedAt useUserNamesInReplies }","field":"emailIntakeAddressUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"EmailIntakeAddressUpdateInput!","name":"input"}]},"kind":"graphql","method":"POST","orig":"emailIntakeAddressUpdate","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.emailIntakeAddressUpdate.emailIntakeAddress`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"email_intake_address","name__orig":"email_intake_address","Name":"EmailIntakeAddress","name_":"email_intake_address","name-":"email-intake-address","NAME":"EMAIL_INTAKE_ADDRESS","index$":22}, {"active":true,"entity":"email_intake_address","key$":"BasicEmailIntakeAddressFlow","kind":"basic","name":"BasicEmailIntakeAddressFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"email_intake_address_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"email_intake_address_ref01","srcdatavar":"email_intake_address_ref01_data","suffix":"_up0","textfield":"address"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-email_intake_address_ref01"}}],"valid":[],"index$":1},{"active":true,"data":{},"input":{"ref":"email_intake_address_ref01","srcdatavar":"email_intake_address_ref01_data","suffix":"_dt0"},"match":{"id":"email_intake_address01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-email_intake_address_ref01"}}],"index$":2},{"active":true,"data":{},"input":{"ref":"email_intake_address_ref01","suffix":"_rm0"},"match":{"id":"email_intake_address01"},"op":"remove","spec":[],"valid":[],"index$":3}]}, 'EmailIntakeAddress')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const email_intake_address_ref01_ent = client.EmailIntakeAddress()
    let email_intake_address_ref01_data = setup.data.new.email_intake_address['email_intake_address_ref01']

    email_intake_address_ref01_data = (await email_intake_address_ref01_ent.create(email_intake_address_ref01_data)).data()
    assert(null != email_intake_address_ref01_data.id)


    // UPDATE
    const email_intake_address_ref01_data_up0: any = {}
    email_intake_address_ref01_data_up0.id = email_intake_address_ref01_data.id

    const email_intake_address_ref01_markdef_up0 = { name: 'address', value: 'Mark01-email_intake_address_ref01_' + setup.now }
    ;(email_intake_address_ref01_data_up0 as any)[email_intake_address_ref01_markdef_up0.name] = email_intake_address_ref01_markdef_up0.value

    const email_intake_address_ref01_resdata_up0 = (await email_intake_address_ref01_ent.update(email_intake_address_ref01_data_up0)).data()
    assert(email_intake_address_ref01_resdata_up0.id === email_intake_address_ref01_data_up0.id)

    assert((email_intake_address_ref01_resdata_up0 as any)[email_intake_address_ref01_markdef_up0.name] === email_intake_address_ref01_markdef_up0.value)


    // LOAD
    const email_intake_address_ref01_match_dt0: any = {}
    email_intake_address_ref01_match_dt0.id = email_intake_address_ref01_data.id
    const email_intake_address_ref01_data_dt0 = (await email_intake_address_ref01_ent.load(email_intake_address_ref01_match_dt0)).data()
    assert(email_intake_address_ref01_data_dt0.id === email_intake_address_ref01_data.id)


    // REMOVE
    const email_intake_address_ref01_match_rm0: any = { id: email_intake_address_ref01_data.id }
    await email_intake_address_ref01_ent.remove(email_intake_address_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/email_intake_address/EmailIntakeAddressTestData.json')

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
    ['email_intake_address01','email_intake_address02','email_intake_address03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_EMAIL_INTAKE_ADDRESS_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_EMAIL_INTAKE_ADDRESS_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_EMAIL_INTAKE_ADDRESS_ENTID']
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
  
