<?php
declare(strict_types=1);

// GitHubIntegrationConnectDetail entity test

require_once __DIR__ . '/../linear_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class GitHubIntegrationConnectDetailEntityTest extends TestCase
{
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
        foreach (["create", "update"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "git_hub_integration_connect_detail." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set LINEAR_TEST_GIT_HUB_INTEGRATION_CONNECT_DETAIL_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $git_hub_integration_connect_detail_ref01_ent = $client->GitHubIntegrationConnectDetail(null);
        $git_hub_integration_connect_detail_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.git_hub_integration_connect_detail"), "git_hub_integration_connect_detail_ref01"));
        $git_hub_integration_connect_detail_ref01_data["code"] = $setup["idmap"]["code01"];
        $git_hub_integration_connect_detail_ref01_data["custom_view_id"] = $setup["idmap"]["custom_view01"];
        $git_hub_integration_connect_detail_ref01_data["initiative_id"] = $setup["idmap"]["initiative01"];
        $git_hub_integration_connect_detail_ref01_data["integration_id"] = $setup["idmap"]["integration01"];
        $git_hub_integration_connect_detail_ref01_data["project_id"] = $setup["idmap"]["project01"];
        $git_hub_integration_connect_detail_ref01_data["redirect_uri"] = $setup["idmap"]["redirect_uri01"];
        $git_hub_integration_connect_detail_ref01_data["service"] = $setup["idmap"]["service01"];
        $git_hub_integration_connect_detail_ref01_data["should_use_v2_auth"] = $setup["idmap"]["should_use_v2_auth01"];
        $git_hub_integration_connect_detail_ref01_data["team_id"] = $setup["idmap"]["team01"];

        $git_hub_integration_connect_detail_ref01_data_result = $git_hub_integration_connect_detail_ref01_ent->create($git_hub_integration_connect_detail_ref01_data, null);
        $git_hub_integration_connect_detail_ref01_data = Helpers::to_map(is_object($git_hub_integration_connect_detail_ref01_data_result) && method_exists($git_hub_integration_connect_detail_ref01_data_result, 'data_get') ? $git_hub_integration_connect_detail_ref01_data_result->data_get() : $git_hub_integration_connect_detail_ref01_data_result);
        $this->assertNotNull($git_hub_integration_connect_detail_ref01_data);

        // UPDATE
        $git_hub_integration_connect_detail_ref01_data_up0_up = [
            "integration_id" => $setup["idmap"]["integration_id"],
        ];

        $git_hub_integration_connect_detail_ref01_markdef_up0_name = "lostRepositoryNames";
        $git_hub_integration_connect_detail_ref01_markdef_up0_value = "Mark01-git_hub_integration_connect_detail_ref01_" . $setup["now"];
        $git_hub_integration_connect_detail_ref01_data_up0_up[$git_hub_integration_connect_detail_ref01_markdef_up0_name] = $git_hub_integration_connect_detail_ref01_markdef_up0_value;

        $git_hub_integration_connect_detail_ref01_resdata_up0_result = $git_hub_integration_connect_detail_ref01_ent->update($git_hub_integration_connect_detail_ref01_data_up0_up, null);
        $git_hub_integration_connect_detail_ref01_resdata_up0 = Helpers::to_map(is_object($git_hub_integration_connect_detail_ref01_resdata_up0_result) && method_exists($git_hub_integration_connect_detail_ref01_resdata_up0_result, 'data_get') ? $git_hub_integration_connect_detail_ref01_resdata_up0_result->data_get() : $git_hub_integration_connect_detail_ref01_resdata_up0_result);
        $this->assertNotNull($git_hub_integration_connect_detail_ref01_resdata_up0);
        $this->assertEquals($git_hub_integration_connect_detail_ref01_resdata_up0[$git_hub_integration_connect_detail_ref01_markdef_up0_name], $git_hub_integration_connect_detail_ref01_markdef_up0_value);

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
    foreach (["git_hub_integration_connect_detail01", "git_hub_integration_connect_detail02", "git_hub_integration_connect_detail03", "code01", "custom_view01", "initiative01", "integration01", "project01", "redirect_uri01", "service01", "should_use_v2_auth01", "team01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
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
    if (!isset($idmap_resolved["integration_id"])) {
        $idmap_resolved["integration_id"] = $idmap_resolved["integration01"];
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
