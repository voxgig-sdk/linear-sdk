<?php
declare(strict_types=1);

// GitHubIntegrationConnectDetail entity test

require_once __DIR__ . '/../linear_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class GitHubIntegrationConnectDetailEntityTest extends TestCase
{
    // main.kit.test.live.strict is true (the default is true): a live
    // request that fails, or a live test missing an input it needs,
    // fails the test.
    // An account with no record for a test to read skips it either way.
    private const LIVE_STRICT = true;

    public function test_create_instance(): void
    {
        $testsdk = LinearSDK::test(null, null);
        $ent = $testsdk->GitHubIntegrationConnectDetail(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = git_hub_integration_connect_detail_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach ([] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "git_hub_integration_connect_detail." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $git_hub_integration_connect_detail_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.git_hub_integration_connect_detail")));
        $git_hub_integration_connect_detail_ref01_data = null;
        if (count($git_hub_integration_connect_detail_ref01_data_raw) > 0) {
            $git_hub_integration_connect_detail_ref01_data = Helpers::to_map($git_hub_integration_connect_detail_ref01_data_raw[0][1]);
        }

    }
}

function git_hub_integration_connect_detail_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/git_hub_integration_connect_detail/GitHubIntegrationConnectDetailTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = LinearSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["git_hub_integration_connect_detail01", "git_hub_integration_connect_detail02", "git_hub_integration_connect_detail03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Whether *_ENTID supplied the idmap, read before env_override consumes
    // it: without it, the ids a live flow binds are the fixture's synthetic ones.
    $entid_env_raw = getenv("LINEAR_TEST_GIT_HUB_INTEGRATION_CONNECT_DETAIL_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "LINEAR_TEST_GIT_HUB_INTEGRATION_CONNECT_DETAIL_ENTID" => $idmap,
        "LINEAR_TEST_LIVE" => "FALSE",
        "LINEAR_TEST_EXPLAIN" => "FALSE",
        "LINEAR_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["LINEAR_TEST_GIT_HUB_INTEGRATION_CONNECT_DETAIL_ENTID"]);
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
