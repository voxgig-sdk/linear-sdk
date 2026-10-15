<?php
declare(strict_types=1);

// AccessKeyReleasePipeline entity test

require_once __DIR__ . '/../linear_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class AccessKeyReleasePipelineEntityTest extends TestCase
{
    // main.kit.test.live.strict is true (the default is true): a live
    // request that fails, or a live test missing an input it needs,
    // fails the test.
    // An account with no record for a test to read skips it either way.
    private const LIVE_STRICT = true;

    public function test_create_instance(): void
    {
        $testsdk = LinearSDK::test(null, null);
        $ent = $testsdk->AccessKeyReleasePipeline(null);
        $this->assertNotNull($ent);
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
            $client->AccessKeyReleasePipeline(null)->load(["id" => 1], null);
        } catch (\Throwable $e) {
            $err = $e;
        }
        $this->assertSame('validate_failed', $err->sdk_code ?? null);
    }

    public function test_basic_flow(): void
    {
        $setup = access_key_release_pipeline_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "access_key_release_pipeline." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        if (!empty($setup["live"])) {
            Runner::live_miss(self::LIVE_STRICT, "Live entity test blocked: " . "the flow loads a access_key_release_pipeline record it has no list to find");
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $access_key_release_pipeline_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.access_key_release_pipeline")));
        $access_key_release_pipeline_ref01_data = null;
        if (count($access_key_release_pipeline_ref01_data_raw) > 0) {
            $access_key_release_pipeline_ref01_data = Helpers::to_map($access_key_release_pipeline_ref01_data_raw[0][1]);
        }

        // LOAD
        $access_key_release_pipeline_ref01_ent = $client->AccessKeyReleasePipeline(null);
        $access_key_release_pipeline_ref01_match_dt0 = [
            "id" => $access_key_release_pipeline_ref01_data["id"],
        ];
        $access_key_release_pipeline_ref01_data_dt0_loaded = $access_key_release_pipeline_ref01_ent->load($access_key_release_pipeline_ref01_match_dt0, null);
        $access_key_release_pipeline_ref01_data_dt0_load_result = Helpers::to_map(is_object($access_key_release_pipeline_ref01_data_dt0_loaded) && method_exists($access_key_release_pipeline_ref01_data_dt0_loaded, 'data_get') ? $access_key_release_pipeline_ref01_data_dt0_loaded->data_get() : $access_key_release_pipeline_ref01_data_dt0_loaded);
        $this->assertNotNull($access_key_release_pipeline_ref01_data_dt0_load_result);
        $this->assertEquals($access_key_release_pipeline_ref01_data_dt0_load_result["id"], $access_key_release_pipeline_ref01_data["id"]);

    }
}

function access_key_release_pipeline_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/access_key_release_pipeline/AccessKeyReleasePipelineTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = LinearSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["access_key_release_pipeline01", "access_key_release_pipeline02", "access_key_release_pipeline03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Whether *_ENTID supplied the idmap, read before env_override consumes
    // it: without it, the ids a live flow binds are the fixture's synthetic ones.
    $entid_env_raw = getenv("LINEAR_TEST_ACCESS_KEY_RELEASE_PIPELINE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "LINEAR_TEST_ACCESS_KEY_RELEASE_PIPELINE_ENTID" => $idmap,
        "LINEAR_TEST_LIVE" => "FALSE",
        "LINEAR_TEST_EXPLAIN" => "FALSE",
        "LINEAR_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["LINEAR_TEST_ACCESS_KEY_RELEASE_PIPELINE_ENTID"]);
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
