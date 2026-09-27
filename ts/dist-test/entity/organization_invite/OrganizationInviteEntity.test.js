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
(0, node_test_1.describe)('OrganizationInviteEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.OrganizationInvite();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'organization_invite.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "acceptedAt": { "a": true, "h": "Accepted At", "n": "acceptedAt", "r": false, "sh": "The time at which the invite was accepted by the invitee.", "t": "`$ANY`", "key$": "acceptedAt", "index$": 0 }, "archivedAt": { "a": true, "h": "Archived At", "n": "archivedAt", "r": false, "sh": "The time at which the entity was archived.", "t": "`$ANY`", "key$": "archivedAt", "index$": 1 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "sh": "The time at which the entity was created.", "t": "`$ANY`", "key$": "createdAt", "index$": 2 }, "email": { "a": true, "h": "Email", "n": "email", "r": true, "sh": "The email address of the person being invited to the workspace.", "t": "`$STRING`", "key$": "email", "index$": 3 }, "expiresAt": { "a": true, "h": "Expires At", "n": "expiresAt", "r": false, "sh": "The time at which the invite will expire and can no longer be accepted.", "t": "`$ANY`", "key$": "expiresAt", "index$": 4 }, "external": { "a": true, "h": "External", "n": "external", "r": true, "sh": "Whether the invite was sent to an email address outside the workspace's verified domains.", "t": "`$BOOLEAN`", "key$": "external", "index$": 5 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier of the entity.", "t": "`$STRING`", "key$": "id", "index$": 6 }, "invitee": { "a": true, "h": "Invitee", "n": "invitee", "r": false, "sh": "The user who has accepted the invite.", "t": "`$OBJECT`", "key$": "invitee", "index$": 7 }, "inviter": { "a": true, "h": "Inviter", "n": "inviter", "r": false, "sh": "The user who created the invitation.", "t": "`$OBJECT`", "key$": "inviter", "index$": 8 }, "metadata": { "a": true, "h": "Metadata", "n": "metadata", "r": false, "sh": "Extra metadata associated with the invite.", "t": "`$ANY`", "key$": "metadata", "index$": 9 }, "organization": { "a": true, "h": "Organization", "n": "organization", "r": false, "sh": "The workspace that the invite is associated with.", "t": "`$OBJECT`", "key$": "organization", "index$": 10 }, "role": { "a": true, "h": "Role", "n": "role", "r": true, "sh": "The workspace role (admin, member, guest, or owner) that the invitee will receive upon accepting the invite.", "t": "`$STRING`", "key$": "role", "index$": 11 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": true, "sh": "The last time at which the entity was meaningfully updated.", "t": "`$ANY`", "key$": "updatedAt", "index$": 12 } }, "id": { "field": "id", "name": "id" }, "name": "organization_invite", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST organizationInviteCreate", "source": "graphql", "version": 2 }, "g": {}, "gq": { "doc": "mutation OrganizationInviteCreate($input: OrganizationInviteCreateInput!) { organizationInviteCreate(input: $input) { organizationInvite { ...OrganizationInviteFields } success } } fragment OrganizationInviteFields on OrganizationInvite { acceptedAt archivedAt createdAt email expiresAt external id invitee { id } inviter { id } metadata organization { id } role updatedAt }", "field": "organizationInviteCreate", "optype": "mutation", "vars": [{ "from": "", "gqltype": "OrganizationInviteCreateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "organizationInviteCreate", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.organizationInviteCreate.organizationInvite`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "POST organizationInvites", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "first", "or": "first", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "param", "n": "include_archived", "or": "include_archived", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "k": "param", "n": "last", "or": "last", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "param", "n": "order_by", "or": "order_by", "r": false, "t": "`$ANY`", "index$": 5 }] }, "gq": { "doc": "query OrganizationInviteList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { organizationInvites(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...OrganizationInviteFields } pageInfo { endCursor hasNextPage } } } fragment OrganizationInviteFields on OrganizationInvite { acceptedAt archivedAt createdAt email expiresAt external id invitee { id } inviter { id } metadata organization { id } role updatedAt }", "field": "organizationInvites", "optype": "query", "page": { "cursor": "pageInfo.endCursor", "more": "pageInfo.hasNextPage", "nodes": "nodes", "style": "relay" }, "vars": [{ "from": "after", "gqltype": "String", "name": "after" }, { "from": "before", "gqltype": "String", "name": "before" }, { "from": "first", "gqltype": "Int", "name": "first" }, { "from": "includeArchived", "gqltype": "Boolean", "name": "includeArchived" }, { "from": "last", "gqltype": "Int", "name": "last" }, { "from": "orderBy", "gqltype": "PaginationOrderBy", "name": "orderBy" }] }, "k": "graphql", "m": "POST", "o": "organizationInvites", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.organizationInvites.nodes`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "POST organizationInvite", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "query OrganizationInviteLoad($id: String!) { organizationInvite(id: $id) { ...OrganizationInviteFields } } fragment OrganizationInviteFields on OrganizationInvite { acceptedAt archivedAt createdAt email expiresAt external id invitee { id } inviter { id } metadata organization { id } role updatedAt }", "field": "organizationInvite", "optype": "query", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "organizationInvite", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.organizationInvite`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "POST organizationInviteDelete", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation OrganizationInviteRemove($id: String!) { organizationInviteDelete(id: $id) { entityId lastSyncId success } }", "field": "organizationInviteDelete", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "organizationInviteDelete", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.organizationInviteDelete`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "POST organizationInviteUpdate", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation OrganizationInviteUpdate($id: String!, $input: OrganizationInviteUpdateInput!) { organizationInviteUpdate(id: $id, input: $input) { organizationInvite { ...OrganizationInviteFields } success } } fragment OrganizationInviteFields on OrganizationInvite { acceptedAt archivedAt createdAt email expiresAt external id invitee { id } inviter { id } metadata organization { id } role updatedAt }", "field": "organizationInviteUpdate", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }, { "from": "", "gqltype": "OrganizationInviteUpdateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "organizationInviteUpdate", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.organizationInviteUpdate.organizationInvite`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "organization_invite", "name__orig": "organization_invite", "Name": "OrganizationInvite", "name_": "organization_invite", "name-": "organization-invite", "NAME": "ORGANIZATION_INVITE", "index$": 53 }, { "active": true, "entity": "organization_invite", "key$": "BasicOrganizationInviteFlow", "kind": "basic", "name": "BasicOrganizationInviteFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "organization_invite_ref01" }, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "organization_invite_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "organization_invite_ref01", "srcdatavar": "organization_invite_ref01_data", "suffix": "_up0", "textfield": "email" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-organization_invite_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "organization_invite_ref01", "srcdatavar": "organization_invite_ref01_data", "suffix": "_dt0" }, "m": { "id": "organization_invite01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-organization_invite_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "organization_invite_ref01", "suffix": "_rm0" }, "m": { "id": "organization_invite01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "organization_invite_ref01" } }], "index$": 5 }] }, 'OrganizationInvite', { "POST organizationInviteCreate": { "protocol": "graphql" }, "POST organizationInvites": { "protocol": "graphql" }, "POST organizationInvite": { "protocol": "graphql" }, "POST organizationInviteDelete": { "protocol": "graphql" }, "POST organizationInviteUpdate": { "protocol": "graphql" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const organization_invite_ref01_ent = client.OrganizationInvite();
        let organization_invite_ref01_data = setup.data.new.organization_invite['organization_invite_ref01'];
        organization_invite_ref01_data['after'] = setup.idmap['after01'];
        organization_invite_ref01_data['before'] = setup.idmap['before01'];
        organization_invite_ref01_data['first'] = setup.idmap['first01'];
        organization_invite_ref01_data['include_archived'] = setup.idmap['include_archived01'];
        organization_invite_ref01_data['last'] = setup.idmap['last01'];
        organization_invite_ref01_data['order_by'] = setup.idmap['order_by01'];
        organization_invite_ref01_data = (await organization_invite_ref01_ent.create(organization_invite_ref01_data)).data();
        (0, node_assert_1.default)(null != organization_invite_ref01_data.id);
        // LIST
        const organization_invite_ref01_match = {};
        organization_invite_ref01_match['after'] = setup.idmap['after01'];
        organization_invite_ref01_match['before'] = setup.idmap['before01'];
        organization_invite_ref01_match['first'] = setup.idmap['first01'];
        organization_invite_ref01_match['include_archived'] = setup.idmap['include_archived01'];
        organization_invite_ref01_match['last'] = setup.idmap['last01'];
        organization_invite_ref01_match['order_by'] = setup.idmap['order_by01'];
        const organization_invite_ref01_list = (await organization_invite_ref01_ent.list(organization_invite_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(organization_invite_ref01_list, { id: organization_invite_ref01_data.id })));
        // UPDATE
        const organization_invite_ref01_data_up0 = {};
        organization_invite_ref01_data_up0.id = organization_invite_ref01_data.id;
        const organization_invite_ref01_markdef_up0 = { name: 'email', value: 'Mark01-organization_invite_ref01_' + setup.now };
        organization_invite_ref01_data_up0[organization_invite_ref01_markdef_up0.name] = organization_invite_ref01_markdef_up0.value;
        const organization_invite_ref01_resdata_up0 = (await organization_invite_ref01_ent.update(organization_invite_ref01_data_up0)).data();
        (0, node_assert_1.default)(organization_invite_ref01_resdata_up0.id === organization_invite_ref01_data_up0.id);
        (0, node_assert_1.default)(organization_invite_ref01_resdata_up0[organization_invite_ref01_markdef_up0.name] === organization_invite_ref01_markdef_up0.value);
        // LOAD
        const organization_invite_ref01_match_dt0 = {};
        organization_invite_ref01_match_dt0.id = organization_invite_ref01_data.id;
        const organization_invite_ref01_data_dt0 = (await organization_invite_ref01_ent.load(organization_invite_ref01_match_dt0)).data();
        (0, node_assert_1.default)(organization_invite_ref01_data_dt0.id === organization_invite_ref01_data.id);
        // REMOVE
        const organization_invite_ref01_match_rm0 = { id: organization_invite_ref01_data.id };
        await organization_invite_ref01_ent.remove(organization_invite_ref01_match_rm0);
        // LIST
        const organization_invite_ref01_match_rt0 = {};
        organization_invite_ref01_match_rt0['after'] = setup.idmap['after01'];
        organization_invite_ref01_match_rt0['before'] = setup.idmap['before01'];
        organization_invite_ref01_match_rt0['first'] = setup.idmap['first01'];
        organization_invite_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01'];
        organization_invite_ref01_match_rt0['last'] = setup.idmap['last01'];
        organization_invite_ref01_match_rt0['order_by'] = setup.idmap['order_by01'];
        const organization_invite_ref01_list_rt0 = (await organization_invite_ref01_ent.list(organization_invite_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(organization_invite_ref01_list_rt0, { id: organization_invite_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/organization_invite/OrganizationInviteTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['organization_invite01', 'organization_invite02', 'organization_invite03', 'after01', 'before01', 'first01', 'include_archived01', 'last01', 'order_by01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_ORGANIZATION_INVITE_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_ORGANIZATION_INVITE_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_ORGANIZATION_INVITE_ENTID'];
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
//# sourceMappingURL=OrganizationInviteEntity.test.js.map