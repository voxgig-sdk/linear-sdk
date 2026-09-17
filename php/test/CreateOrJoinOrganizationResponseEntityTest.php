<?php
declare(strict_types=1);

// CreateOrJoinOrganizationResponse entity test

require_once __DIR__ . '/../linear_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class CreateOrJoinOrganizationResponseEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = LinearSDK::test(null, null);
        $ent = $testsdk->CreateOrJoinOrganizationResponse(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = create_or_join_organization_response_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "update"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "create_or_join_organization_response." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set LINEAR_TEST_CREATE_OR_JOIN_ORGANIZATION_RESPONSE_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $create_or_join_organization_response_ref01_ent = $client->CreateOrJoinOrganizationResponse(null);
        $create_or_join_organization_response_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.create_or_join_organization_response"), "create_or_join_organization_response_ref01"));
        $create_or_join_organization_response_ref01_data["organization_id"] = $setup["idmap"]["organization01"];

        $create_or_join_organization_response_ref01_data_result = $create_or_join_organization_response_ref01_ent->create($create_or_join_organization_response_ref01_data, null);
        $create_or_join_organization_response_ref01_data = Helpers::to_map(is_object($create_or_join_organization_response_ref01_data_result) && method_exists($create_or_join_organization_response_ref01_data_result, 'data_get') ? $create_or_join_organization_response_ref01_data_result->data_get() : $create_or_join_organization_response_ref01_data_result);
        $this->assertNotNull($create_or_join_organization_response_ref01_data);

        // UPDATE
        $create_or_join_organization_response_ref01_data_up0_up = [
            "organization_id" => $setup["idmap"]["organization_id"],
        ];

        $create_or_join_organization_response_ref01_resdata_up0_result = $create_or_join_organization_response_ref01_ent->update($create_or_join_organization_response_ref01_data_up0_up, null);
        $create_or_join_organization_response_ref01_resdata_up0 = Helpers::to_map(is_object($create_or_join_organization_response_ref01_resdata_up0_result) && method_exists($create_or_join_organization_response_ref01_resdata_up0_result, 'data_get') ? $create_or_join_organization_response_ref01_resdata_up0_result->data_get() : $create_or_join_organization_response_ref01_resdata_up0_result);
        $this->assertNotNull($create_or_join_organization_response_ref01_resdata_up0);

    }
}

function create_or_join_organization_response_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/create_or_join_organization_response/CreateOrJoinOrganizationResponseTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = LinearSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["create_or_join_organization_response01", "create_or_join_organization_response02", "create_or_join_organization_response03", "organization01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("LINEAR_TEST_CREATE_OR_JOIN_ORGANIZATION_RESPONSE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "LINEAR_TEST_CREATE_OR_JOIN_ORGANIZATION_RESPONSE_ENTID" => $idmap,
        "LINEAR_TEST_LIVE" => "FALSE",
        "LINEAR_TEST_EXPLAIN" => "FALSE",
        "LINEAR_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["LINEAR_TEST_CREATE_OR_JOIN_ORGANIZATION_RESPONSE_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }
    if (!isset($idmap_resolved["organization_id"])) {
        $idmap_resolved["organization_id"] = $idmap_resolved["organization01"];
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
