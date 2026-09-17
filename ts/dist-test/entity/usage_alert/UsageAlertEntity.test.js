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
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('UsageAlertEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.UsageAlert();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'usage_alert.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "archivedAt", "req": false, "short": "The time at which the entity was archived.", "type": "`$ANY`", "index$": 0 }, { "active": true, "name": "createdAt", "req": true, "short": "The time at which the entity was created.", "type": "`$ANY`", "index$": 1 }, { "active": true, "name": "id", "req": true, "short": "The unique identifier of the entity.", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "metadata", "req": true, "short": "Type-specific snapshot captured when the alert was triggered, keyed by the alert type — for example the credit balance and threshold for a lowBalance alert.", "type": "`$ANY`", "index$": 3 }, { "active": true, "name": "resolvedAt", "req": false, "short": "The time when the usage alert was resolved or archived.", "type": "`$ANY`", "index$": 4 }, { "active": true, "name": "type", "req": true, "short": "The kind of usage alert that was triggered.", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "updatedAt", "req": true, "short": "The last time at which the entity was meaningfully updated.", "type": "`$ANY`", "index$": 6 }], "id": { "field": "id", "name": "id" }, "name": "usage_alert", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "after", "orig": "after", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "before", "orig": "before", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "param", "name": "first", "orig": "first", "reqd": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "kind": "param", "name": "include_archived", "orig": "include_archived", "reqd": false, "type": "`$BOOLEAN`", "index$": 3 }, { "active": true, "kind": "param", "name": "last", "orig": "last", "reqd": false, "type": "`$INTEGER`", "index$": 4 }, { "active": true, "kind": "param", "name": "order_by", "orig": "order_by", "reqd": false, "type": "`$ANY`", "index$": 5 }] }, "contract": { "id": "POST usageAlerts", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String\",\"name\":\"after\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"String\",\"name\":\"before\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"UsageAlertFilter\",\"name\":\"filter\",\"reqd\":false,\"type\":\"UsageAlertFilter\"},{\"gqltype\":\"Int\",\"name\":\"first\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"Boolean\",\"name\":\"includeArchived\",\"reqd\":false,\"type\":\"Boolean\"},{\"gqltype\":\"Int\",\"name\":\"last\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\",\"reqd\":false,\"type\":\"PaginationOrderBy\"}],\"deprecated\":false,\"desc\":\"The workspace's usage-based billing alerts, such as a low or exhausted usage credit balance. Alerts for expired promotional credits are archived and excluded unless archived resources are requested. Use resolvedAt to tell an open alert from one whose condition has since cleared.\",\"gqltype\":\"UsageAlertConnection!\",\"list\":false,\"name\":\"usageAlerts\",\"reqd\":true,\"type\":\"UsageAlertConnection\"},\"invocation\":{\"doc\":\"query UsageAlertList($after: String, $before: String, $filter: UsageAlertFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { usageAlerts(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...UsageAlertFields } pageInfo { endCursor hasNextPage } } } fragment UsageAlertFields on UsageAlert { archivedAt createdAt id metadata resolvedAt type updatedAt }\",\"field\":\"usageAlerts\",\"optype\":\"query\",\"page\":{\"cursor\":\"pageInfo.endCursor\",\"more\":\"pageInfo.hasNextPage\",\"nodes\":\"nodes\",\"style\":\"relay\"},\"vars\":[{\"from\":\"after\",\"gqltype\":\"String\",\"name\":\"after\"},{\"from\":\"before\",\"gqltype\":\"String\",\"name\":\"before\"},{\"from\":\"\",\"gqltype\":\"UsageAlertFilter\",\"name\":\"filter\"},{\"from\":\"first\",\"gqltype\":\"Int\",\"name\":\"first\"},{\"from\":\"includeArchived\",\"gqltype\":\"Boolean\",\"name\":\"includeArchived\"},{\"from\":\"last\",\"gqltype\":\"Int\",\"name\":\"last\"},{\"from\":\"orderBy\",\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"DateComparator\":{\"desc\":\"Comparator for dates.\",\"fields\":{\"eq\":{\"args\":[],\"deprecated\":false,\"desc\":\"Equals constraint.\",\"gqltype\":\"DateTimeOrDuration\",\"list\":false,\"name\":\"eq\",\"reqd\":false,\"type\":\"DateTimeOrDuration\"},\"gt\":{\"args\":[],\"deprecated\":false,\"desc\":\"Greater-than constraint. Matches any values that are greater than the given value.\",\"gqltype\":\"DateTimeOrDuration\",\"list\":false,\"name\":\"gt\",\"reqd\":false,\"type\":\"DateTimeOrDuration\"},\"gte\":{\"args\":[],\"deprecated\":false,\"desc\":\"Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value.\",\"gqltype\":\"DateTimeOrDuration\",\"list\":false,\"name\":\"gte\",\"reqd\":false,\"type\":\"DateTimeOrDuration\"},\"in\":{\"args\":[],\"deprecated\":false,\"desc\":\"In-array constraint.\",\"gqltype\":\"[DateTimeOrDuration!]\",\"list\":true,\"name\":\"in\",\"reqd\":false,\"type\":\"DateTimeOrDuration\"},\"lt\":{\"args\":[],\"deprecated\":false,\"desc\":\"Less-than constraint. Matches any values that are less than the given value.\",\"gqltype\":\"DateTimeOrDuration\",\"list\":false,\"name\":\"lt\",\"reqd\":false,\"type\":\"DateTimeOrDuration\"},\"lte\":{\"args\":[],\"deprecated\":false,\"desc\":\"Less-than-or-equal constraint. Matches any values that are less than or equal to the given value.\",\"gqltype\":\"DateTimeOrDuration\",\"list\":false,\"name\":\"lte\",\"reqd\":false,\"type\":\"DateTimeOrDuration\"},\"neq\":{\"args\":[],\"deprecated\":false,\"desc\":\"Not-equals constraint.\",\"gqltype\":\"DateTimeOrDuration\",\"list\":false,\"name\":\"neq\",\"reqd\":false,\"type\":\"DateTimeOrDuration\"},\"nin\":{\"args\":[],\"deprecated\":false,\"desc\":\"Not-in-array constraint.\",\"gqltype\":\"[DateTimeOrDuration!]\",\"list\":true,\"name\":\"nin\",\"reqd\":false,\"type\":\"DateTimeOrDuration\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"DateComparator\"},\"DateTimeOrDuration\":{\"desc\":\"Represents a date and time in ISO 8601 format. Accepts shortcuts like `2021` to represent midnight Fri Jan 01 2021. Also accepts ISO 8601 durations strings which are added to the current date to create the represented date (e.g '-P2W1D' represents the date that was two weeks and 1 day ago)\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"DateTimeOrDuration\"},\"ID\":{\"desc\":\"The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `\\\"4\\\"`) or integer (such as `4`) input value will be accepted as an ID.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"ID\"},\"IDComparator\":{\"desc\":\"Comparator for identifiers.\",\"fields\":{\"eq\":{\"args\":[],\"deprecated\":false,\"desc\":\"Equals constraint.\",\"gqltype\":\"ID\",\"list\":false,\"name\":\"eq\",\"reqd\":false,\"type\":\"ID\"},\"in\":{\"args\":[],\"deprecated\":false,\"desc\":\"In-array constraint.\",\"gqltype\":\"[ID!]\",\"list\":true,\"name\":\"in\",\"reqd\":false,\"type\":\"ID\"},\"neq\":{\"args\":[],\"deprecated\":false,\"desc\":\"Not-equals constraint.\",\"gqltype\":\"ID\",\"list\":false,\"name\":\"neq\",\"reqd\":false,\"type\":\"ID\"},\"nin\":{\"args\":[],\"deprecated\":false,\"desc\":\"Not-in-array constraint.\",\"gqltype\":\"[ID!]\",\"list\":true,\"name\":\"nin\",\"reqd\":false,\"type\":\"ID\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"IDComparator\"},\"Int\":{\"desc\":\"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Int\"},\"PaginationOrderBy\":{\"desc\":\"By which field should the pagination order by\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"PaginationOrderBy\",\"values\":[\"createdAt\",\"updatedAt\"]},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"},\"UsageAlertFilter\":{\"desc\":\"Usage alert filtering options.\",\"fields\":{\"and\":{\"args\":[],\"deprecated\":false,\"desc\":\"Compound filters, all of which need to be matched by the alert.\",\"gqltype\":\"[UsageAlertFilter!]\",\"list\":true,\"name\":\"and\",\"reqd\":false,\"type\":\"UsageAlertFilter\"},\"createdAt\":{\"args\":[],\"deprecated\":false,\"desc\":\"Comparator for the created at date.\",\"gqltype\":\"DateComparator\",\"list\":false,\"name\":\"createdAt\",\"reqd\":false,\"type\":\"DateComparator\"},\"id\":{\"args\":[],\"deprecated\":false,\"desc\":\"Comparator for the identifier.\",\"gqltype\":\"IDComparator\",\"list\":false,\"name\":\"id\",\"reqd\":false,\"type\":\"IDComparator\"},\"or\":{\"args\":[],\"deprecated\":false,\"desc\":\"Compound filters, one of which need to be matched by the alert.\",\"gqltype\":\"[UsageAlertFilter!]\",\"list\":true,\"name\":\"or\",\"reqd\":false,\"type\":\"UsageAlertFilter\"},\"type\":{\"args\":[],\"deprecated\":false,\"desc\":\"Comparator for the condition the alert was triggered by.\",\"gqltype\":\"UsageAlertTypeComparator\",\"list\":false,\"name\":\"type\",\"reqd\":false,\"type\":\"UsageAlertTypeComparator\"},\"updatedAt\":{\"args\":[],\"deprecated\":false,\"desc\":\"Comparator for the updated at date.\",\"gqltype\":\"DateComparator\",\"list\":false,\"name\":\"updatedAt\",\"reqd\":false,\"type\":\"DateComparator\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"UsageAlertFilter\"},\"UsageAlertType\":{\"desc\":\"The condition a usage alert was triggered by.\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"UsageAlertType\",\"values\":[\"exhausted\",\"expiringPromoCredit\",\"lowBalance\"]},\"UsageAlertTypeComparator\":{\"desc\":\"Comparator for the condition a usage alert was triggered by.\",\"fields\":{\"eq\":{\"args\":[],\"deprecated\":false,\"desc\":\"Equals constraint.\",\"gqltype\":\"UsageAlertType\",\"list\":false,\"name\":\"eq\",\"reqd\":false,\"type\":\"UsageAlertType\"},\"in\":{\"args\":[],\"deprecated\":false,\"desc\":\"In-array constraint.\",\"gqltype\":\"[UsageAlertType!]\",\"list\":true,\"name\":\"in\",\"reqd\":false,\"type\":\"UsageAlertType\"},\"neq\":{\"args\":[],\"deprecated\":false,\"desc\":\"Not-equals constraint.\",\"gqltype\":\"UsageAlertType\",\"list\":false,\"name\":\"neq\",\"reqd\":false,\"type\":\"UsageAlertType\"},\"nin\":{\"args\":[],\"deprecated\":false,\"desc\":\"Not-in-array constraint.\",\"gqltype\":\"[UsageAlertType!]\",\"list\":true,\"name\":\"nin\",\"reqd\":false,\"type\":\"UsageAlertType\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"UsageAlertTypeComparator\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "query UsageAlertList($after: String, $before: String, $filter: UsageAlertFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { usageAlerts(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...UsageAlertFields } pageInfo { endCursor hasNextPage } } } fragment UsageAlertFields on UsageAlert { archivedAt createdAt id metadata resolvedAt type updatedAt }", "field": "usageAlerts", "optype": "query", "page": { "cursor": "pageInfo.endCursor", "more": "pageInfo.hasNextPage", "nodes": "nodes", "style": "relay" }, "vars": [{ "from": "after", "gqltype": "String", "name": "after" }, { "from": "before", "gqltype": "String", "name": "before" }, { "from": "", "gqltype": "UsageAlertFilter", "name": "filter" }, { "from": "first", "gqltype": "Int", "name": "first" }, { "from": "includeArchived", "gqltype": "Boolean", "name": "includeArchived" }, { "from": "last", "gqltype": "Int", "name": "last" }, { "from": "orderBy", "gqltype": "PaginationOrderBy", "name": "orderBy" }] }, "kind": "graphql", "method": "POST", "orig": "usageAlerts", "segments": [], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.data.usageAlerts.nodes`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST usageAlert", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"One usage-based billing alert, by its identifier.\",\"gqltype\":\"UsageAlert!\",\"list\":false,\"name\":\"usageAlert\",\"reqd\":true,\"type\":\"UsageAlert\"},\"invocation\":{\"doc\":\"query UsageAlertLoad($id: String!) { usageAlert(id: $id) { ...UsageAlertFields } } fragment UsageAlertFields on UsageAlert { archivedAt createdAt id metadata resolvedAt type updatedAt }\",\"field\":\"usageAlert\",\"optype\":\"query\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "query UsageAlertLoad($id: String!) { usageAlert(id: $id) { ...UsageAlertFields } } fragment UsageAlertFields on UsageAlert { archivedAt createdAt id metadata resolvedAt type updatedAt }", "field": "usageAlert", "optype": "query", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "kind": "graphql", "method": "POST", "orig": "usageAlert", "segments": [], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.usageAlert`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "usage_alert", "name__orig": "usage_alert", "Name": "UsageAlert", "name_": "usage_alert", "name-": "usage-alert", "NAME": "USAGE_ALERT", "index$": 80 }, { "active": true, "entity": "usage_alert", "key$": "BasicUsageAlertFlow", "kind": "basic", "name": "BasicUsageAlertFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "usage_alert_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "usage_alert_ref01", "srcdatavar": "usage_alert_ref01_data", "suffix": "_dt0" }, "match": { "id": "usage_alert01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-usage_alert_ref01" } }], "index$": 1 }] }, 'UsageAlert');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let usage_alert_ref01_data = Object.values(setup.data.existing.usage_alert)[0];
        // LIST
        const usage_alert_ref01_ent = client.UsageAlert();
        const usage_alert_ref01_match = {};
        usage_alert_ref01_match['after'] = setup.idmap['after01'];
        usage_alert_ref01_match['before'] = setup.idmap['before01'];
        usage_alert_ref01_match['first'] = setup.idmap['first01'];
        usage_alert_ref01_match['include_archived'] = setup.idmap['include_archived01'];
        usage_alert_ref01_match['last'] = setup.idmap['last01'];
        usage_alert_ref01_match['order_by'] = setup.idmap['order_by01'];
        const usage_alert_ref01_list = (await usage_alert_ref01_ent.list(usage_alert_ref01_match)).map((e) => e.data());
        // LOAD
        const usage_alert_ref01_match_dt0 = {};
        usage_alert_ref01_match_dt0.id = usage_alert_ref01_data.id;
        const usage_alert_ref01_data_dt0 = (await usage_alert_ref01_ent.load(usage_alert_ref01_match_dt0)).data();
        (0, node_assert_1.default)(usage_alert_ref01_data_dt0.id === usage_alert_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/usage_alert/UsageAlertTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['usage_alert01', 'usage_alert02', 'usage_alert03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_USAGE_ALERT_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_USAGE_ALERT_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_USAGE_ALERT_ENTID'];
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
//# sourceMappingURL=UsageAlertEntity.test.js.map