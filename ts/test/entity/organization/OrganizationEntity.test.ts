

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


describe('OrganizationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.Organization()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'organization.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"agentAutomationEnabled":{"a":true,"h":"Agent Automation Enabled","n":"agentAutomationEnabled","r":true,"sh":"[INTERNAL] Whether the workspace has enabled agent automation.","t":"`$BOOLEAN`","key$":"agentAutomationEnabled","index$":0},"aiAddonEnabled":{"a":true,"h":"Ai Addon Enabled","n":"aiAddonEnabled","r":true,"sh":"[INTERNAL] Whether the workspace has enabled the AI add-on (which at this point only includes triage suggestions).","t":"`$BOOLEAN`","key$":"aiAddonEnabled","index$":1},"aiDiscussionSummariesEnabled":{"a":true,"h":"Ai Discussion Summaries Enabled","n":"aiDiscussionSummariesEnabled","r":true,"sh":"Whether the workspace has enabled AI discussion summaries for issues.","t":"`$BOOLEAN`","key$":"aiDiscussionSummariesEnabled","index$":2},"aiProviderConfiguration":{"a":true,"h":"Ai Provider Configuration","n":"aiProviderConfiguration","r":false,"sh":"[INTERNAL] Configure per-modality AI host providers and model families.","t":"`$ANY`","key$":"aiProviderConfiguration","index$":3},"aiTelemetryEnabled":{"a":true,"h":"Ai Telemetry Enabled","n":"aiTelemetryEnabled","r":true,"sh":"[INTERNAL] Whether the workspace has opted in to AI telemetry.","t":"`$BOOLEAN`","key$":"aiTelemetryEnabled","index$":4},"aiThreadSummariesEnabled":{"a":true,"h":"Ai Thread Summaries Enabled","n":"aiThreadSummariesEnabled","r":true,"sh":"Whether the workspace has enabled resolved thread AI summaries.","t":"`$BOOLEAN`","key$":"aiThreadSummariesEnabled","index$":5},"allowedFileUploadContentTypes":{"a":true,"h":"Allowed File Upload Content Types","n":"allowedFileUploadContentTypes","r":false,"sh":"Allowed file upload content types","t":"`$STRING`","key$":"allowedFileUploadContentTypes","index$":6},"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":7},"authSettings":{"a":true,"h":"Auth Settings","n":"authSettings","r":true,"sh":"Authentication settings for the workspace, including allowed auth providers, bypass rules, and organization visibility during signup.","t":"`$ANY`","key$":"authSettings","index$":8},"codeIntelligenceEnabled":{"a":true,"h":"Code Intelligence Enabled","n":"codeIntelligenceEnabled","r":true,"sh":"[INTERNAL] Whether code intelligence is enabled for the workspace.","t":"`$BOOLEAN`","key$":"codeIntelligenceEnabled","index$":9},"codeIntelligenceRepository":{"a":true,"h":"Code Intelligence Repository","n":"codeIntelligenceRepository","r":false,"sh":"[INTERNAL] GitHub repository in owner/repo format for code intelligence.","t":"`$STRING`","key$":"codeIntelligenceRepository","index$":10},"codingAgentEnabled":{"a":true,"h":"Coding Agent Enabled","n":"codingAgentEnabled","r":true,"sh":"[INTERNAL] Whether the workspace has enabled Coding Sessions.","t":"`$BOOLEAN`","key$":"codingAgentEnabled","index$":11},"codingAgentSettings":{"a":true,"h":"Coding Agent Settings","n":"codingAgentSettings","r":true,"sh":"[Internal] Settings for Coding Sessions features.","t":"`$ANY`","key$":"codingAgentSettings","index$":12},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":13},"createdIssueCount":{"a":true,"h":"Created Issue Count","n":"createdIssueCount","r":true,"sh":"Approximate total number of issues created in the workspace, including archived ones.","t":"`$INTEGER`","key$":"createdIssueCount","index$":14},"customerCount":{"a":true,"h":"Customer Count","n":"customerCount","r":true,"sh":"The number of active (non-archived) customers tracked in the workspace.","t":"`$INTEGER`","key$":"customerCount","index$":15},"customersConfiguration":{"a":true,"h":"Customers Configuration","n":"customersConfiguration","r":true,"sh":"Configuration settings for the Customers feature, including revenue currency and other customer tracking preferences.","t":"`$ANY`","key$":"customersConfiguration","index$":16},"customersEnabled":{"a":true,"h":"Customers Enabled","n":"customersEnabled","r":true,"sh":"Whether the Customers feature is enabled and accessible for the workspace based on the current plan.","t":"`$BOOLEAN`","key$":"customersEnabled","index$":17},"defaultFeedSummarySchedule":{"a":true,"h":"Default Feed Summary Schedule","n":"defaultFeedSummarySchedule","r":false,"sh":"Default schedule for how often feed summaries are generated.","t":"`$STRING`","key$":"defaultFeedSummarySchedule","index$":18},"defaultHomeView":{"a":true,"h":"Default Home View","n":"defaultHomeView","r":false,"sh":"The default home view for members of the workspace who have not chosen their own default.","t":"`$STRING`","key$":"defaultHomeView","index$":19},"defaultHomeViewTargetId":{"a":true,"h":"Default Home View Target Id","n":"defaultHomeViewTargetId","r":false,"sh":"The id of the specific initiative, project, view, dashboard, or page tab used as the default home view.","t":"`$STRING`","key$":"defaultHomeViewTargetId","index$":20},"deletionRequestedAt":{"a":true,"h":"Deletion Requested At","n":"deletionRequestedAt","r":false,"sh":"The time at which deletion of the workspace was requested.","t":"`$ANY`","key$":"deletionRequestedAt","index$":21},"feedEnabled":{"a":true,"h":"Feed Enabled","n":"feedEnabled","r":true,"sh":"Whether the activity feed feature is enabled for the workspace.","t":"`$BOOLEAN`","key$":"feedEnabled","index$":22},"fiscalYearStartMonth":{"a":true,"h":"Fiscal Year Start Month","n":"fiscalYearStartMonth","r":true,"sh":"The zero-indexed month at which the fiscal year starts (0 = January, 11 = December).","t":"`$NUMBER`","key$":"fiscalYearStartMonth","index$":23},"generatedUpdatesEnabled":{"a":true,"h":"Generated Updates Enabled","n":"generatedUpdatesEnabled","r":true,"sh":"[INTERNAL] Whether the workspace has enabled generated updates.","t":"`$BOOLEAN`","key$":"generatedUpdatesEnabled","index$":24},"gitBranchFormat":{"a":true,"h":"Git Branch Format","n":"gitBranchFormat","r":false,"sh":"The template format for Git branch names created from issues.","t":"`$STRING`","key$":"gitBranchFormat","index$":25},"gitLinkbackDescriptionsEnabled":{"a":true,"h":"Git Linkback Descriptions Enabled","n":"gitLinkbackDescriptionsEnabled","r":true,"sh":"Whether issue descriptions should be included in the Git integration linkback messages posted to pull requests.","t":"`$BOOLEAN`","key$":"gitLinkbackDescriptionsEnabled","index$":26},"gitLinkbackMessagesEnabled":{"a":true,"h":"Git Linkback Messages Enabled","n":"gitLinkbackMessagesEnabled","r":true,"sh":"Whether the Git integration linkback messages should be posted as comments on pull requests in private repositories.","t":"`$BOOLEAN`","key$":"gitLinkbackMessagesEnabled","index$":27},"gitPublicLinkbackMessagesEnabled":{"a":true,"h":"Git Public Linkback Messages Enabled","n":"gitPublicLinkbackMessagesEnabled","r":true,"sh":"Whether the Git integration linkback messages should be posted as comments on pull requests in public repositories.","t":"`$BOOLEAN`","key$":"gitPublicLinkbackMessagesEnabled","index$":28},"hipaaComplianceEnabled":{"a":true,"h":"Hipaa Compliance Enabled","n":"hipaaComplianceEnabled","r":true,"sh":"Whether HIPAA compliance is enabled for the workspace.","t":"`$BOOLEAN`","key$":"hipaaComplianceEnabled","index$":29},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":30},"initiativeUpdateReminderFrequencyInWeeks":{"a":true,"h":"Initiative Update Reminder Frequency In Weeks","n":"initiativeUpdateReminderFrequencyInWeeks","r":false,"sh":"The frequency in weeks at which to prompt for initiative updates.","t":"`$NUMBER`","key$":"initiativeUpdateReminderFrequencyInWeeks","index$":31},"initiativeUpdateRemindersDay":{"a":true,"h":"Initiative Update Reminders Day","n":"initiativeUpdateRemindersDay","r":true,"sh":"The day of the week on which initiative update reminders are sent.","t":"`$STRING`","key$":"initiativeUpdateRemindersDay","index$":32},"initiativeUpdateRemindersHour":{"a":true,"h":"Initiative Update Reminders Hour","n":"initiativeUpdateRemindersHour","r":true,"sh":"The hour of the day (0-23) at which initiative update reminders are sent.","t":"`$NUMBER`","key$":"initiativeUpdateRemindersHour","index$":33},"linearAgentEnabled":{"a":true,"h":"Linear Agent Enabled","n":"linearAgentEnabled","r":true,"sh":"[Internal] Whether the workspace has enabled Linear Agent.","t":"`$BOOLEAN`","key$":"linearAgentEnabled","index$":34},"linearAgentSettings":{"a":true,"h":"Linear Agent Settings","n":"linearAgentSettings","r":true,"sh":"[Internal] Settings for Linear Agent features.","t":"`$ANY`","key$":"linearAgentSettings","index$":35},"logoUrl":{"a":true,"h":"Logo Url","n":"logoUrl","r":false,"sh":"The URL of the workspace's logo image.","t":"`$STRING`","key$":"logoUrl","index$":36},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The workspace's name.","t":"`$STRING`","key$":"name","index$":37},"periodUploadVolume":{"a":true,"h":"Period Upload Volume","n":"periodUploadVolume","r":true,"sh":"Rolling 30-day total file upload volume for the workspace, measured in megabytes.","t":"`$NUMBER`","key$":"periodUploadVolume","index$":38},"previousUrlKeys":{"a":true,"h":"Previous Url Keys","n":"previousUrlKeys","r":true,"sh":"Previously used URL keys for the workspace.","t":"`$STRING`","key$":"previousUrlKeys","index$":39},"projectUpdateReminderFrequencyInWeeks":{"a":true,"h":"Project Update Reminder Frequency In Weeks","n":"projectUpdateReminderFrequencyInWeeks","r":false,"sh":"The frequency in weeks at which to prompt for project updates.","t":"`$NUMBER`","key$":"projectUpdateReminderFrequencyInWeeks","index$":40},"projectUpdateRemindersDay":{"a":true,"h":"Project Update Reminders Day","n":"projectUpdateRemindersDay","r":true,"sh":"The day of the week on which project update reminders are sent.","t":"`$STRING`","key$":"projectUpdateRemindersDay","index$":41},"projectUpdateRemindersHour":{"a":true,"h":"Project Update Reminders Hour","n":"projectUpdateRemindersHour","r":true,"sh":"The hour of the day (0-23) at which project update reminders are sent.","t":"`$NUMBER`","key$":"projectUpdateRemindersHour","index$":42},"pullRequestIssueMode":{"a":true,"h":"Pull Request Issue Mode","n":"pullRequestIssueMode","r":true,"sh":"How Linear suggests and links issues for pull requests that have none linked: 'off', 'suggest', or 'autoOnMerge'.","t":"`$STRING`","key$":"pullRequestIssueMode","index$":43},"pullRequestTourEnabled":{"a":true,"h":"Pull Request Tour Enabled","n":"pullRequestTourEnabled","r":true,"sh":"Whether the workspace generates AI Pull Request guides for new pull requests.","t":"`$BOOLEAN`","key$":"pullRequestTourEnabled","index$":44},"releaseChannel":{"a":true,"h":"Release Channel","n":"releaseChannel","r":true,"sh":"The feature release channel the workspace belongs to, which controls access to pre-release features.","t":"`$STRING`","key$":"releaseChannel","index$":45},"releasesEnabled":{"a":true,"h":"Releases Enabled","n":"releasesEnabled","r":true,"sh":"Whether release management is enabled for the workspace.","t":"`$BOOLEAN`","key$":"releasesEnabled","index$":46},"restrictAgentInvocationToMembers":{"a":true,"h":"Restrict Agent Invocation To Members","n":"restrictAgentInvocationToMembers","r":false,"sh":"[Internal] Whether agent invocation is restricted to full workspace members.","t":"`$BOOLEAN`","key$":"restrictAgentInvocationToMembers","index$":47},"roadmapEnabled":{"a":true,"h":"Roadmap Enabled","n":"roadmapEnabled","r":true,"sh":"Whether the roadmap feature is enabled for the workspace.","t":"`$BOOLEAN`","key$":"roadmapEnabled","index$":48},"samlEnabled":{"a":true,"h":"Saml Enabled","n":"samlEnabled","r":true,"sh":"Whether SAML-based single sign-on authentication is enabled for the workspace.","t":"`$BOOLEAN`","key$":"samlEnabled","index$":49},"samlSettings":{"a":true,"h":"Saml Settings","n":"samlSettings","r":false,"sh":"[INTERNAL] SAML settings.","t":"`$ANY`","key$":"samlSettings","index$":50},"scimEnabled":{"a":true,"h":"Scim Enabled","n":"scimEnabled","r":true,"sh":"Whether SCIM provisioning is enabled for the workspace, allowing automated user and team management from an identity provider.","t":"`$BOOLEAN`","key$":"scimEnabled","index$":51},"scimSettings":{"a":true,"h":"Scim Settings","n":"scimSettings","r":false,"sh":"[INTERNAL] SCIM settings.","t":"`$ANY`","key$":"scimSettings","index$":52},"securitySettings":{"a":true,"h":"Security Settings","n":"securitySettings","r":true,"sh":"Security settings for the workspace, including role-based restrictions for invitations, team creation, label management, and other sensitive operations.","t":"`$ANY`","key$":"securitySettings","index$":53},"slackAutoCreateProjectChannel":{"a":true,"h":"Slack Auto Create Project Channel","n":"slackAutoCreateProjectChannel","r":true,"sh":"[Internal] Whether to automatically create a Slack channel when a new project is created.","t":"`$BOOLEAN`","key$":"slackAutoCreateProjectChannel","index$":54},"slackProjectChannelIntegration":{"a":true,"h":"Slack Project Channel Integration","n":"slackProjectChannelIntegration","r":false,"sh":"The Slack integration used for auto-creating project channels.","t":"`$OBJECT`","key$":"slackProjectChannelIntegration","index$":55},"slackProjectChannelPrefix":{"a":true,"h":"Slack Project Channel Prefix","n":"slackProjectChannelPrefix","r":true,"sh":"The prefix used for auto-created Slack project channels.","t":"`$STRING`","key$":"slackProjectChannelPrefix","index$":56},"slackProjectChannelsEnabled":{"a":true,"h":"Slack Project Channels Enabled","n":"slackProjectChannelsEnabled","r":true,"sh":"[Internal] Whether the Slack project channels feature is enabled for the workspace.","t":"`$BOOLEAN`","key$":"slackProjectChannelsEnabled","index$":57},"subscription":{"a":true,"h":"Subscription","n":"subscription","r":false,"sh":"The workspace's subscription to a paid plan.","t":"`$OBJECT`","key$":"subscription","index$":58},"themeSettings":{"a":true,"h":"Theme Settings","n":"themeSettings","r":false,"sh":"[ALPHA] Theme settings for the workspace.","t":"`$ANY`","key$":"themeSettings","index$":59},"trialEndsAt":{"a":true,"h":"Trial Ends At","n":"trialEndsAt","r":false,"sh":"The time at which the current plan trial will end.","t":"`$ANY`","key$":"trialEndsAt","index$":60},"trialStartsAt":{"a":true,"h":"Trial Starts At","n":"trialStartsAt","r":false,"sh":"The time at which the current plan trial started.","t":"`$ANY`","key$":"trialStartsAt","index$":61},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":62},"urlKey":{"a":true,"h":"Url Key","n":"urlKey","r":true,"sh":"The workspace's unique URL key, used in URLs to identify the workspace.","t":"`$STRING`","key$":"urlKey","index$":63},"userCount":{"a":true,"h":"User Count","n":"userCount","r":true,"sh":"The number of active (non-deactivated) users in the workspace.","t":"`$INTEGER`","key$":"userCount","index$":64},"workingDays":{"a":true,"h":"Working Days","n":"workingDays","r":true,"sh":"[Internal] The list of working days.","t":"`$NUMBER`","key$":"workingDays","index$":65}},"id":{"field":"id","name":"id"},"name":"organization","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST organization","source":"graphql","version":2},"g":{},"gq":{"doc":"query OrganizationLoad { organization { ...OrganizationFields } } fragment OrganizationFields on Organization { agentAutomationEnabled aiAddonEnabled aiDiscussionSummariesEnabled aiProviderConfiguration aiTelemetryEnabled aiThreadSummariesEnabled allowedFileUploadContentTypes archivedAt authSettings codeIntelligenceEnabled codeIntelligenceRepository codingAgentEnabled codingAgentSettings createdAt createdIssueCount customerCount customersConfiguration customersEnabled defaultFeedSummarySchedule defaultHomeView defaultHomeViewTargetId deletionRequestedAt feedEnabled fiscalYearStartMonth generatedUpdatesEnabled gitBranchFormat gitLinkbackDescriptionsEnabled gitLinkbackMessagesEnabled gitPublicLinkbackMessagesEnabled hipaaComplianceEnabled id initiativeUpdateReminderFrequencyInWeeks initiativeUpdateRemindersDay initiativeUpdateRemindersHour linearAgentEnabled linearAgentSettings logoUrl name periodUploadVolume previousUrlKeys projectUpdateReminderFrequencyInWeeks projectUpdateRemindersDay projectUpdateRemindersHour pullRequestIssueMode pullRequestTourEnabled releaseChannel releasesEnabled restrictAgentInvocationToMembers roadmapEnabled samlEnabled samlSettings scimEnabled scimSettings securitySettings slackAutoCreateProjectChannel slackProjectChannelIntegration { id } slackProjectChannelPrefix slackProjectChannelsEnabled subscription { id } themeSettings trialEndsAt trialStartsAt updatedAt urlKey userCount workingDays }","field":"organization","optype":"query","vars":[]},"k":"graphql","m":"POST","o":"organization","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.organization`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"POST organizationDelete","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation OrganizationRemove($input: DeleteOrganizationInput!) { organizationDelete(input: $input) { success } }","field":"organizationDelete","optype":"mutation","vars":[{"from":"","gqltype":"DeleteOrganizationInput!","name":"input"}]},"k":"graphql","m":"POST","o":"organizationDelete","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.organizationDelete`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"POST organizationUpdate","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation OrganizationUpdate($input: OrganizationUpdateInput!) { organizationUpdate(input: $input) { organization { ...OrganizationFields } success } } fragment OrganizationFields on Organization { agentAutomationEnabled aiAddonEnabled aiDiscussionSummariesEnabled aiProviderConfiguration aiTelemetryEnabled aiThreadSummariesEnabled allowedFileUploadContentTypes archivedAt authSettings codeIntelligenceEnabled codeIntelligenceRepository codingAgentEnabled codingAgentSettings createdAt createdIssueCount customerCount customersConfiguration customersEnabled defaultFeedSummarySchedule defaultHomeView defaultHomeViewTargetId deletionRequestedAt feedEnabled fiscalYearStartMonth generatedUpdatesEnabled gitBranchFormat gitLinkbackDescriptionsEnabled gitLinkbackMessagesEnabled gitPublicLinkbackMessagesEnabled hipaaComplianceEnabled id initiativeUpdateReminderFrequencyInWeeks initiativeUpdateRemindersDay initiativeUpdateRemindersHour linearAgentEnabled linearAgentSettings logoUrl name periodUploadVolume previousUrlKeys projectUpdateReminderFrequencyInWeeks projectUpdateRemindersDay projectUpdateRemindersHour pullRequestIssueMode pullRequestTourEnabled releaseChannel releasesEnabled restrictAgentInvocationToMembers roadmapEnabled samlEnabled samlSettings scimEnabled scimSettings securitySettings slackAutoCreateProjectChannel slackProjectChannelIntegration { id } slackProjectChannelPrefix slackProjectChannelsEnabled subscription { id } themeSettings trialEndsAt trialStartsAt updatedAt urlKey userCount workingDays }","field":"organizationUpdate","optype":"mutation","vars":[{"from":"","gqltype":"OrganizationUpdateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"organizationUpdate","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.organizationUpdate.organization`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"organization","name__orig":"organization","Name":"Organization","name_":"organization","name-":"organization","NAME":"ORGANIZATION","index$":51}, {"active":true,"entity":"organization","key$":"BasicOrganizationFlow","kind":"basic","name":"BasicOrganizationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"organization_ref01","srcdatavar":"organization_ref01_data","suffix":"_up0","textfield":"allowedFileUploadContentTypes"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-organization_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"organization_ref01","srcdatavar":"organization_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-organization_ref01"}}],"index$":1}]}, 'Organization', {"POST organization":{"protocol":"graphql"},"POST organizationDelete":{"protocol":"graphql"},"POST organizationUpdate":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let organization_ref01_data = Object.values(setup.data.existing.organization)[0] as any

    // UPDATE
    const organization_ref01_ent = client.Organization()
    const organization_ref01_data_up0: any = {}
    organization_ref01_data_up0.id = organization_ref01_data.id

    const organization_ref01_markdef_up0 = { name: 'allowedFileUploadContentTypes', value: 'Mark01-organization_ref01_' + setup.now }
    ;(organization_ref01_data_up0 as any)[organization_ref01_markdef_up0.name] = organization_ref01_markdef_up0.value

    const organization_ref01_resdata_up0 = (await organization_ref01_ent.update(organization_ref01_data_up0)).data()
    assert(organization_ref01_resdata_up0.id === organization_ref01_data_up0.id)

    assert((organization_ref01_resdata_up0 as any)[organization_ref01_markdef_up0.name] === organization_ref01_markdef_up0.value)


    // LOAD
    const organization_ref01_match_dt0: any = {}
    organization_ref01_match_dt0.id = organization_ref01_data.id
    const organization_ref01_data_dt0 = (await organization_ref01_ent.load(organization_ref01_match_dt0)).data()
    assert(organization_ref01_data_dt0.id === organization_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/organization/OrganizationTestData.json')

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
    ['organization01','organization02','organization03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_ORGANIZATION_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_ORGANIZATION_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_ORGANIZATION_ENTID']
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
  
