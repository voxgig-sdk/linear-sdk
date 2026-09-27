"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('EmailIntakeAddressEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.EmailIntakeAddress();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'email_intake_address.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "address": { "a": true, "h": "Address", "n": "address", "r": true, "sh": "The unique local part (before the @) of the intake email address, used to route incoming emails to the correct intake handler.", "t": "`$STRING`", "key$": "address", "index$": 0 }, "archivedAt": { "a": true, "h": "Archived At", "n": "archivedAt", "r": false, "sh": "The time at which the entity was archived.", "t": "`$ANY`", "key$": "archivedAt", "index$": 1 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "sh": "The time at which the entity was created.", "t": "`$ANY`", "key$": "createdAt", "index$": 2 }, "creator": { "a": true, "h": "Creator", "n": "creator", "r": false, "sh": "The user who created the email intake address.", "t": "`$OBJECT`", "key$": "creator", "index$": 3 }, "customerRequestsEnabled": { "a": true, "h": "Customer Requests Enabled", "n": "customerRequestsEnabled", "r": true, "sh": "Whether issues created from emails sent to this address are automatically converted into customer requests, linking the sender as a customer contact.", "t": "`$BOOLEAN`", "key$": "customerRequestsEnabled", "index$": 4 }, "enabled": { "a": true, "h": "Enabled", "n": "enabled", "r": true, "sh": "Whether the email address is enabled.", "t": "`$BOOLEAN`", "key$": "enabled", "index$": 5 }, "forwardingEmailAddress": { "a": true, "h": "Forwarding Email Address", "n": "forwardingEmailAddress", "r": false, "sh": "The email address used to forward emails to the intake address.", "t": "`$STRING`", "key$": "forwardingEmailAddress", "index$": 6 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier of the entity.", "t": "`$STRING`", "key$": "id", "index$": 7 }, "issueCanceledAutoReply": { "a": true, "h": "Issue Canceled Auto Reply", "n": "issueCanceledAutoReply", "r": false, "sh": "The auto-reply message for issue canceled.", "t": "`$STRING`", "key$": "issueCanceledAutoReply", "index$": 8 }, "issueCanceledAutoReplyEnabled": { "a": true, "h": "Issue Canceled Auto Reply Enabled", "n": "issueCanceledAutoReplyEnabled", "r": true, "sh": "Whether the auto-reply for issue canceled is enabled.", "t": "`$BOOLEAN`", "key$": "issueCanceledAutoReplyEnabled", "index$": 9 }, "issueCompletedAutoReply": { "a": true, "h": "Issue Completed Auto Reply", "n": "issueCompletedAutoReply", "r": false, "sh": "The auto-reply message for issue completed.", "t": "`$STRING`", "key$": "issueCompletedAutoReply", "index$": 10 }, "issueCompletedAutoReplyEnabled": { "a": true, "h": "Issue Completed Auto Reply Enabled", "n": "issueCompletedAutoReplyEnabled", "r": true, "sh": "Whether the auto-reply for issue completed is enabled.", "t": "`$BOOLEAN`", "key$": "issueCompletedAutoReplyEnabled", "index$": 11 }, "issueCreatedAutoReply": { "a": true, "h": "Issue Created Auto Reply", "n": "issueCreatedAutoReply", "r": false, "sh": "The auto-reply message for issue created.", "t": "`$STRING`", "key$": "issueCreatedAutoReply", "index$": 12 }, "issueCreatedAutoReplyEnabled": { "a": true, "h": "Issue Created Auto Reply Enabled", "n": "issueCreatedAutoReplyEnabled", "r": true, "sh": "Whether the auto-reply for issue created is enabled.", "t": "`$BOOLEAN`", "key$": "issueCreatedAutoReplyEnabled", "index$": 13 }, "lastUsedAt": { "a": true, "h": "Last Used At", "n": "lastUsedAt", "r": false, "sh": "The last time an inbound email was successfully ingested for this address.", "t": "`$ANY`", "key$": "lastUsedAt", "index$": 14 }, "organization": { "a": true, "h": "Organization", "n": "organization", "r": false, "sh": "The workspace that the email address is associated with.", "t": "`$OBJECT`", "key$": "organization", "index$": 15 }, "reopenOnReply": { "a": true, "h": "Reopen On Reply", "n": "reopenOnReply", "r": true, "sh": "Whether to reopen completed or canceled issues when a substantive email reply is received.", "t": "`$BOOLEAN`", "key$": "reopenOnReply", "index$": 16 }, "repliesEnabled": { "a": true, "h": "Replies Enabled", "n": "repliesEnabled", "r": true, "sh": "Whether email replies are enabled.", "t": "`$BOOLEAN`", "key$": "repliesEnabled", "index$": 17 }, "senderName": { "a": true, "h": "Sender Name", "n": "senderName", "r": false, "sh": "The name to be used for outgoing emails.", "t": "`$STRING`", "key$": "senderName", "index$": 18 }, "sesDomainIdentity": { "a": true, "h": "Ses Domain Identity", "n": "sesDomainIdentity", "r": false, "sh": "The SES domain identity that the email address is associated with.", "t": "`$OBJECT`", "key$": "sesDomainIdentity", "index$": 19 }, "team": { "a": true, "h": "Team", "n": "team", "r": false, "sh": "The team that the email address is associated with.", "t": "`$OBJECT`", "key$": "team", "index$": 20 }, "template": { "a": true, "h": "Template", "n": "template", "r": false, "sh": "The template that the email address is associated with.", "t": "`$OBJECT`", "key$": "template", "index$": 21 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "sh": "The type of the email address.", "t": "`$STRING`", "key$": "type", "index$": 22 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": true, "sh": "The last time at which the entity was meaningfully updated.", "t": "`$ANY`", "key$": "updatedAt", "index$": 23 }, "useUserNamesInReplies": { "a": true, "h": "Use User Names In Replies", "n": "useUserNamesInReplies", "r": true, "sh": "Whether the commenter's name is included in the email replies.", "t": "`$BOOLEAN`", "key$": "useUserNamesInReplies", "index$": 24 } }, "id": { "field": "id", "name": "id" }, "name": "email_intake_address", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST emailIntakeAddressCreate", "source": "graphql", "version": 2 }, "g": {}, "gq": { "doc": "mutation EmailIntakeAddressCreate($input: EmailIntakeAddressCreateInput!) { emailIntakeAddressCreate(input: $input) { emailIntakeAddress { ...EmailIntakeAddressFields } success } } fragment EmailIntakeAddressFields on EmailIntakeAddress { address archivedAt createdAt creator { id } customerRequestsEnabled enabled forwardingEmailAddress id issueCanceledAutoReply issueCanceledAutoReplyEnabled issueCompletedAutoReply issueCompletedAutoReplyEnabled issueCreatedAutoReply issueCreatedAutoReplyEnabled lastUsedAt organization { id } reopenOnReply repliesEnabled senderName sesDomainIdentity { id } team { id } template { id } type updatedAt useUserNamesInReplies }", "field": "emailIntakeAddressCreate", "optype": "mutation", "vars": [{ "from": "", "gqltype": "EmailIntakeAddressCreateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "emailIntakeAddressCreate", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.emailIntakeAddressCreate.emailIntakeAddress`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "POST emailIntakeAddress", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "query EmailIntakeAddressLoad($id: String!) { emailIntakeAddress(id: $id) { ...EmailIntakeAddressFields } } fragment EmailIntakeAddressFields on EmailIntakeAddress { address archivedAt createdAt creator { id } customerRequestsEnabled enabled forwardingEmailAddress id issueCanceledAutoReply issueCanceledAutoReplyEnabled issueCompletedAutoReply issueCompletedAutoReplyEnabled issueCreatedAutoReply issueCreatedAutoReplyEnabled lastUsedAt organization { id } reopenOnReply repliesEnabled senderName sesDomainIdentity { id } team { id } template { id } type updatedAt useUserNamesInReplies }", "field": "emailIntakeAddress", "optype": "query", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "emailIntakeAddress", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.emailIntakeAddress`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "POST emailIntakeAddressDelete", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation EmailIntakeAddressRemove($id: String!) { emailIntakeAddressDelete(id: $id) { entityId lastSyncId success } }", "field": "emailIntakeAddressDelete", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "emailIntakeAddressDelete", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.emailIntakeAddressDelete`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "POST emailIntakeAddressRotate", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation EmailIntakeAddressUpdateRotate($id: String!) { emailIntakeAddressRotate(id: $id) { emailIntakeAddress { ...EmailIntakeAddressFields } success } } fragment EmailIntakeAddressFields on EmailIntakeAddress { address archivedAt createdAt creator { id } customerRequestsEnabled enabled forwardingEmailAddress id issueCanceledAutoReply issueCanceledAutoReplyEnabled issueCompletedAutoReply issueCompletedAutoReplyEnabled issueCreatedAutoReply issueCreatedAutoReplyEnabled lastUsedAt organization { id } reopenOnReply repliesEnabled senderName sesDomainIdentity { id } team { id } template { id } type updatedAt useUserNamesInReplies }", "field": "emailIntakeAddressRotate", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "emailIntakeAddressRotate", "q": { "$action": "rotate", "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.emailIntakeAddressRotate.emailIntakeAddress`" }, "index$": 0 }, { "a": true, "co": { "id": "POST emailIntakeAddressUpdate", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation EmailIntakeAddressUpdate($id: String!, $input: EmailIntakeAddressUpdateInput!) { emailIntakeAddressUpdate(id: $id, input: $input) { emailIntakeAddress { ...EmailIntakeAddressFields } success } } fragment EmailIntakeAddressFields on EmailIntakeAddress { address archivedAt createdAt creator { id } customerRequestsEnabled enabled forwardingEmailAddress id issueCanceledAutoReply issueCanceledAutoReplyEnabled issueCompletedAutoReply issueCompletedAutoReplyEnabled issueCreatedAutoReply issueCreatedAutoReplyEnabled lastUsedAt organization { id } reopenOnReply repliesEnabled senderName sesDomainIdentity { id } team { id } template { id } type updatedAt useUserNamesInReplies }", "field": "emailIntakeAddressUpdate", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }, { "from": "", "gqltype": "EmailIntakeAddressUpdateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "emailIntakeAddressUpdate", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.emailIntakeAddressUpdate.emailIntakeAddress`" }, "index$": 1 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "email_intake_address", "name__orig": "email_intake_address", "Name": "EmailIntakeAddress", "name_": "email_intake_address", "name-": "email-intake-address", "NAME": "EMAIL_INTAKE_ADDRESS", "index$": 22 }, { "active": true, "entity": "email_intake_address", "key$": "BasicEmailIntakeAddressFlow", "kind": "basic", "name": "BasicEmailIntakeAddressFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "email_intake_address_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "email_intake_address_ref01", "srcdatavar": "email_intake_address_ref01_data", "suffix": "_up0", "textfield": "address" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-email_intake_address_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "email_intake_address_ref01", "srcdatavar": "email_intake_address_ref01_data", "suffix": "_dt0" }, "m": { "id": "email_intake_address01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-email_intake_address_ref01" } }], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "email_intake_address_ref01", "suffix": "_rm0" }, "m": { "id": "email_intake_address01" }, "o": "remove", "s": [], "v": [], "index$": 3 }] }, 'EmailIntakeAddress', { "POST emailIntakeAddressCreate": { "protocol": "graphql" }, "POST emailIntakeAddress": { "protocol": "graphql" }, "POST emailIntakeAddressDelete": { "protocol": "graphql" }, "POST emailIntakeAddressRotate": { "protocol": "graphql" }, "POST emailIntakeAddressUpdate": { "protocol": "graphql" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const email_intake_address_ref01_ent = client.EmailIntakeAddress();
        let email_intake_address_ref01_data = setup.data.new.email_intake_address['email_intake_address_ref01'];
        email_intake_address_ref01_data = (await email_intake_address_ref01_ent.create(email_intake_address_ref01_data)).data();
        (0, node_assert_1.default)(null != email_intake_address_ref01_data.id);
        // UPDATE
        const email_intake_address_ref01_data_up0 = {};
        email_intake_address_ref01_data_up0.id = email_intake_address_ref01_data.id;
        const email_intake_address_ref01_markdef_up0 = { name: 'address', value: 'Mark01-email_intake_address_ref01_' + setup.now };
        email_intake_address_ref01_data_up0[email_intake_address_ref01_markdef_up0.name] = email_intake_address_ref01_markdef_up0.value;
        const email_intake_address_ref01_resdata_up0 = (await email_intake_address_ref01_ent.update(email_intake_address_ref01_data_up0)).data();
        (0, node_assert_1.default)(email_intake_address_ref01_resdata_up0.id === email_intake_address_ref01_data_up0.id);
        (0, node_assert_1.default)(email_intake_address_ref01_resdata_up0[email_intake_address_ref01_markdef_up0.name] === email_intake_address_ref01_markdef_up0.value);
        // LOAD
        const email_intake_address_ref01_match_dt0 = {};
        email_intake_address_ref01_match_dt0.id = email_intake_address_ref01_data.id;
        const email_intake_address_ref01_data_dt0 = (await email_intake_address_ref01_ent.load(email_intake_address_ref01_match_dt0)).data();
        (0, node_assert_1.default)(email_intake_address_ref01_data_dt0.id === email_intake_address_ref01_data.id);
        // REMOVE
        const email_intake_address_ref01_match_rm0 = { id: email_intake_address_ref01_data.id };
        await email_intake_address_ref01_ent.remove(email_intake_address_ref01_match_rm0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/email_intake_address/EmailIntakeAddressTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['email_intake_address01', 'email_intake_address02', 'email_intake_address03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_EMAIL_INTAKE_ADDRESS_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_EMAIL_INTAKE_ADDRESS_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_EMAIL_INTAKE_ADDRESS_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.LinearSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
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
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=EmailIntakeAddressEntity.test.js.map