<?php
declare(strict_types=1);

// InitiativeRelation entity test

require_once __DIR__ . '/../linear_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class InitiativeRelationEntityTestFailHook extends LinearBaseFeature
{
    public int $unexpected = 0;

    public function __construct()
    {
        parent::__construct();
        $this->name = 'failhook';
    }

    public function init(LinearContext $ctx, array $options): void
    {
    }

    public function PreSpec(LinearContext $ctx): void
    {
        throw new \RuntimeException('initiative_relation hook failed');
    }

    public function PreUnexpected(LinearContext $ctx): void
    {
        $this->unexpected++;
    }
}

class InitiativeRelationEntityTest extends TestCase
{
    // main.kit.test.live.strict is true (the default is true): a live
    // request that fails, or a live test missing an input it needs,
    // fails the test.
    // An account with no record for a test to read skips it either way.
    private const LIVE_STRICT = true;

    public function test_create_instance(): void
    {
        $testsdk = LinearSDK::test(null, null);
        $ent = $testsdk->InitiativeRelation(null);
        $this->assertNotNull($ent);
    }

    // Feature #4: the entity stream(action, ...) method runs the op pipeline
    // and yields result items. With the streaming feature active it yields the
    // feature's incremental output; otherwise it falls back to the materialised
    // list so stream always yields.
    public function test_stream(): void
    {
        $seed = [
            "entity" => [
                "initiative_relation" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = LinearSDK::test($seed, null);
        $seen = iterator_to_array($base->InitiativeRelation(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = LinearConfig::shared_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = LinearSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->InitiativeRelation(null)->stream("list", null, null) as $item) {
                if (is_array($item) && array_is_list($item)) {
                    foreach ($item as $sub) {
                        $got[] = $sub;
                    }
                } else {
                    $got[] = $item;
                }
            }
            $this->assertCount(3, $got);
        }
    }

    public function test_stream_error(): void
    {
        $offline = ["net" => ["offline" => true]];
        $streamerr = null;
        try {
            iterator_to_array(LinearSDK::test($offline, null)->InitiativeRelation(null)
                ->stream("list", null, null), false);
        } catch (\Throwable $e) {
            $streamerr = $e;
        }
        $this->assertNotNull($streamerr, 'the stream should raise the transport failure');
        $this->assertStringContainsString('offline', $streamerr->getMessage());

        iterator_to_array(LinearSDK::test($offline, null)->InitiativeRelation(null)
            ->stream("list", null, ["ctrl" => ["throw" => false]]), false);

        $cfg = LinearConfig::shared_config();
        if (isset($cfg["feature"]["rbac"])) {
            $denied = LinearSDK::test(null, ["feature" => ["rbac" => ["active" => true, "deny" => true]]]);
            $denyerr = null;
            try {
                iterator_to_array($denied->InitiativeRelation(null)->stream("list", null, null), false);
            } catch (\Throwable $e) {
                $denyerr = $e;
            }
            $this->assertSame('rbac_denied', $denyerr->sdk_code ?? null);
        }
    }

    public function test_stream_ctrl(): void
    {
        $ctrl = ["explain" => []];
        iterator_to_array(LinearSDK::test(null, null)->InitiativeRelation(null)
            ->stream("list", null, ["ctrl" => $ctrl]), false);
        $this->assertSame(["explain"], array_keys($ctrl));
    }

    public function test_unexpected(): void
    {
        $hook = new InitiativeRelationEntityTestFailHook();
        $client = new LinearSDK(["feature" => ["test" => ["active" => true]], "extend" => [$hook]]);

        $err = null;
        try {
            $client->InitiativeRelation(null)->list(null, null);
        } catch (\Throwable $e) {
            $err = $e;
        }
        $this->assertNotNull($err, 'the throwing hook should fail the operation');
        $this->assertStringContainsString('hook failed', $err->getMessage());
        $this->assertGreaterThan(0, $hook->unexpected, 'PreUnexpected did not fire');

        $fired = $hook->unexpected;
        $this->assertNull($client->InitiativeRelation(null)->list(null, ["throw" => false]));
        $this->assertGreaterThan($fired, $hook->unexpected, 'PreUnexpected did not fire');
    }

    public function test_cost_commits_a_throwing_transport(): void
    {
        $cfg = LinearConfig::shared_config();
        if (!isset($cfg["feature"]["cost"])) {
            $this->markTestSkipped('feature not present in this SDK: cost');
        }
        $client = new LinearSDK([
            "test" => ["active" => true],
            "feature" => ["cost" => ["active" => true, "unit" => 1]],
            "utility" => ["fetcher" => function ($ctx, $url, $fetchdef) {
                throw new \RuntimeException('initiative_relation transport failed');
            }],
        ]);

        $err = null;
        try {
            $client->InitiativeRelation(null)->list(null, null);
        } catch (\Throwable $e) {
            $err = $e;
        }
        $this->assertInstanceOf(LinearError::class, $err);
        $this->assertStringContainsString('transport failed', $err->getMessage());

        $client->InitiativeRelation(null)->list(null, ["throw" => false]);
        $this->assertSame(2, $client->_cost["total"]["calls"]);
        $this->assertSame(2, $client->_cost["total"]["attempts"]);
    }

    public function test_validate(): void
    {
        $cfg = LinearConfig::shared_config();
        if (!isset($cfg["feature"]["validate"])) {
            $this->markTestSkipped('feature not present in this SDK: validate');
        }
        $client = LinearSDK::test(null, ["feature" => ["validate" => ["active" => true]]]);
        $err = null;
        try {
            $client->InitiativeRelation(null)->list(["after" => 1], null);
        } catch (\Throwable $e) {
            $err = $e;
        }
        $this->assertSame('validate_failed', $err->sdk_code ?? null);
    }

    public function test_basic_flow(): void
    {
        $setup = initiative_relation_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "update", "load", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "initiative_relation." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        if (!empty($setup["live"])) {
            foreach (["after01", "before01", "first01", "include_archived01", "last01", "order_by01"] as $_liveKey) {
                if (!empty($setup["synthetic_only"]) || null === ($setup["idmap"][$_liveKey] ?? null)) {
                    Runner::live_miss(self::LIVE_STRICT, "Live entity test blocked: needs " . $_liveKey . " via LINEAR_TEST_INITIATIVE_RELATION_ENTID");
                }
            }
        }
        $client = $setup["client"];

        // CREATE
        $initiative_relation_ref01_ent = $client->InitiativeRelation(null);
        $initiative_relation_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.initiative_relation"), "initiative_relation_ref01"));
        $initiative_relation_ref01_data["after"] = $setup["idmap"]["after01"];
        $initiative_relation_ref01_data["before"] = $setup["idmap"]["before01"];
        $initiative_relation_ref01_data["first"] = $setup["idmap"]["first01"];
        $initiative_relation_ref01_data["include_archived"] = $setup["idmap"]["include_archived01"];
        $initiative_relation_ref01_data["last"] = $setup["idmap"]["last01"];
        $initiative_relation_ref01_data["order_by"] = $setup["idmap"]["order_by01"];

        $initiative_relation_ref01_data_result = $initiative_relation_ref01_ent->create($initiative_relation_ref01_data, null);
        $initiative_relation_ref01_data = Helpers::to_map(is_object($initiative_relation_ref01_data_result) && method_exists($initiative_relation_ref01_data_result, 'data_get') ? $initiative_relation_ref01_data_result->data_get() : $initiative_relation_ref01_data_result);
        $this->assertNotNull($initiative_relation_ref01_data);
        $this->assertNotNull($initiative_relation_ref01_data["id"]);

        // LIST
        $initiative_relation_ref01_match = [
            "after" => $setup["idmap"]["after01"],
            "before" => $setup["idmap"]["before01"],
            "first" => $setup["idmap"]["first01"],
            "include_archived" => $setup["idmap"]["include_archived01"],
            "last" => $setup["idmap"]["last01"],
            "order_by" => $setup["idmap"]["order_by01"],
        ];

        $initiative_relation_ref01_list_result = $initiative_relation_ref01_ent->list($initiative_relation_ref01_match, null);
        $this->assertIsArray($initiative_relation_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($initiative_relation_ref01_list_result),
            ["id" => $initiative_relation_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // UPDATE
        $initiative_relation_ref01_data_up0_up = [
            "id" => $initiative_relation_ref01_data["id"],
        ];

        $initiative_relation_ref01_resdata_up0_result = $initiative_relation_ref01_ent->update($initiative_relation_ref01_data_up0_up, null);
        $initiative_relation_ref01_resdata_up0 = Helpers::to_map(is_object($initiative_relation_ref01_resdata_up0_result) && method_exists($initiative_relation_ref01_resdata_up0_result, 'data_get') ? $initiative_relation_ref01_resdata_up0_result->data_get() : $initiative_relation_ref01_resdata_up0_result);
        $this->assertNotNull($initiative_relation_ref01_resdata_up0);
        $this->assertEquals($initiative_relation_ref01_resdata_up0["id"], $initiative_relation_ref01_data_up0_up["id"]);

        // LOAD
        $initiative_relation_ref01_match_dt0 = [
            "id" => $initiative_relation_ref01_data["id"],
        ];
        $initiative_relation_ref01_data_dt0_loaded = $initiative_relation_ref01_ent->load($initiative_relation_ref01_match_dt0, null);
        $initiative_relation_ref01_data_dt0_load_result = Helpers::to_map(is_object($initiative_relation_ref01_data_dt0_loaded) && method_exists($initiative_relation_ref01_data_dt0_loaded, 'data_get') ? $initiative_relation_ref01_data_dt0_loaded->data_get() : $initiative_relation_ref01_data_dt0_loaded);
        $this->assertNotNull($initiative_relation_ref01_data_dt0_load_result);
        $this->assertEquals($initiative_relation_ref01_data_dt0_load_result["id"], $initiative_relation_ref01_data["id"]);

        // REMOVE
        $initiative_relation_ref01_match_rm0 = [
            "id" => $initiative_relation_ref01_data["id"],
        ];
        $initiative_relation_ref01_ent->remove($initiative_relation_ref01_match_rm0, null);

        // LIST
        $initiative_relation_ref01_match_rt0 = [
            "after" => $setup["idmap"]["after01"],
            "before" => $setup["idmap"]["before01"],
            "first" => $setup["idmap"]["first01"],
            "include_archived" => $setup["idmap"]["include_archived01"],
            "last" => $setup["idmap"]["last01"],
            "order_by" => $setup["idmap"]["order_by01"],
        ];

        $initiative_relation_ref01_list_rt0_result = $initiative_relation_ref01_ent->list($initiative_relation_ref01_match_rt0, null);
        $this->assertIsArray($initiative_relation_ref01_list_rt0_result);

        $not_found_item = sdk_select(
            Runner::entity_list_to_data($initiative_relation_ref01_list_rt0_result),
            ["id" => $initiative_relation_ref01_data["id"]]);
        $this->assertEmpty($not_found_item);

    }
}

function initiative_relation_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/initiative_relation/InitiativeRelationTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = LinearSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["initiative_relation01", "initiative_relation02", "initiative_relation03", "after01", "before01", "first01", "include_archived01", "last01", "order_by01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Whether *_ENTID supplied the idmap, read before env_override consumes
    // it: without it, the ids a live flow binds are the fixture's synthetic ones.
    $entid_env_raw = getenv("LINEAR_TEST_INITIATIVE_RELATION_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "LINEAR_TEST_INITIATIVE_RELATION_ENTID" => $idmap,
        "LINEAR_TEST_LIVE" => "FALSE",
        "LINEAR_TEST_EXPLAIN" => "FALSE",
        "LINEAR_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["LINEAR_TEST_INITIATIVE_RELATION_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["LINEAR_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["LINEAR_APIKEY"],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        // "?? []" because merge legitimately answers with a stdClass when every
        // contributing entry is an EMPTY map - an SDK with no apikey and no
        // server variables generates an empty middle entry, so that is the
        // common case, not the edge one. to_map returns null for a non-array by
        // design, and the constructor takes a non-nullable array, so without the
        // fallback every such SDK died on "must be of type array, null given"
        // the moment live mode was switched on. Offline mode never reaches this
        // branch, which is why the offline suite stayed green.
        $client = new LinearSDK(Helpers::to_map($merged_opts) ?? []);
    }

    $live = $env["LINEAR_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["LINEAR_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
