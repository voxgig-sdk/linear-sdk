<?php
declare(strict_types=1);

// EntityExternalLink entity test

require_once __DIR__ . '/../linear_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class EntityExternalLinkEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = LinearSDK::test(null, null);
        $ent = $testsdk->EntityExternalLink(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = entity_external_link_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "update", "load", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "entity_external_link." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set LINEAR_TEST_ENTITY_EXTERNAL_LINK_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $entity_external_link_ref01_ent = $client->EntityExternalLink(null);
        $entity_external_link_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.entity_external_link"), "entity_external_link_ref01"));

        $entity_external_link_ref01_data_result = $entity_external_link_ref01_ent->create($entity_external_link_ref01_data, null);
        $entity_external_link_ref01_data = Helpers::to_map(is_object($entity_external_link_ref01_data_result) && method_exists($entity_external_link_ref01_data_result, 'data_get') ? $entity_external_link_ref01_data_result->data_get() : $entity_external_link_ref01_data_result);
        $this->assertNotNull($entity_external_link_ref01_data);
        $this->assertNotNull($entity_external_link_ref01_data["id"]);

        // UPDATE
        $entity_external_link_ref01_data_up0_up = [
            "id" => $entity_external_link_ref01_data["id"],
        ];

        $entity_external_link_ref01_markdef_up0_name = "label";
        $entity_external_link_ref01_markdef_up0_value = "Mark01-entity_external_link_ref01_" . $setup["now"];
        $entity_external_link_ref01_data_up0_up[$entity_external_link_ref01_markdef_up0_name] = $entity_external_link_ref01_markdef_up0_value;

        $entity_external_link_ref01_resdata_up0_result = $entity_external_link_ref01_ent->update($entity_external_link_ref01_data_up0_up, null);
        $entity_external_link_ref01_resdata_up0 = Helpers::to_map(is_object($entity_external_link_ref01_resdata_up0_result) && method_exists($entity_external_link_ref01_resdata_up0_result, 'data_get') ? $entity_external_link_ref01_resdata_up0_result->data_get() : $entity_external_link_ref01_resdata_up0_result);
        $this->assertNotNull($entity_external_link_ref01_resdata_up0);
        $this->assertEquals($entity_external_link_ref01_resdata_up0["id"], $entity_external_link_ref01_data_up0_up["id"]);
        $this->assertEquals($entity_external_link_ref01_resdata_up0[$entity_external_link_ref01_markdef_up0_name], $entity_external_link_ref01_markdef_up0_value);

        // LOAD
        $entity_external_link_ref01_match_dt0 = [
            "id" => $entity_external_link_ref01_data["id"],
        ];
        $entity_external_link_ref01_data_dt0_loaded = $entity_external_link_ref01_ent->load($entity_external_link_ref01_match_dt0, null);
        $entity_external_link_ref01_data_dt0_load_result = Helpers::to_map(is_object($entity_external_link_ref01_data_dt0_loaded) && method_exists($entity_external_link_ref01_data_dt0_loaded, 'data_get') ? $entity_external_link_ref01_data_dt0_loaded->data_get() : $entity_external_link_ref01_data_dt0_loaded);
        $this->assertNotNull($entity_external_link_ref01_data_dt0_load_result);
        $this->assertEquals($entity_external_link_ref01_data_dt0_load_result["id"], $entity_external_link_ref01_data["id"]);

        // REMOVE
        $entity_external_link_ref01_match_rm0 = [
            "id" => $entity_external_link_ref01_data["id"],
        ];
        $entity_external_link_ref01_ent->remove($entity_external_link_ref01_match_rm0, null);

    }
}

function entity_external_link_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/entity_external_link/EntityExternalLinkTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = LinearSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["entity_external_link01", "entity_external_link02", "entity_external_link03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("LINEAR_TEST_ENTITY_EXTERNAL_LINK_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "LINEAR_TEST_ENTITY_EXTERNAL_LINK_ENTID" => $idmap,
        "LINEAR_TEST_LIVE" => "FALSE",
        "LINEAR_TEST_EXPLAIN" => "FALSE",
        "LINEAR_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["LINEAR_TEST_ENTITY_EXTERNAL_LINK_ENTID"]);
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
