<?php
declare(strict_types=1);

// Roadmap entity test

require_once __DIR__ . '/../linear_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class RoadmapEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = LinearSDK::test(null, null);
        $ent = $testsdk->Roadmap(null);
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
                "roadmap" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = LinearSDK::test($seed, null);
        $seen = iterator_to_array($base->Roadmap(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = LinearConfig::shared_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = LinearSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->Roadmap(null)->stream("list", null, null) as $item) {
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

    public function test_basic_flow(): void
    {
        $setup = roadmap_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "update", "load", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "roadmap." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set LINEAR_TEST_ROADMAP_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $roadmap_ref01_ent = $client->Roadmap(null);
        $roadmap_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.roadmap"), "roadmap_ref01"));
        $roadmap_ref01_data["after"] = $setup["idmap"]["after01"];
        $roadmap_ref01_data["before"] = $setup["idmap"]["before01"];
        $roadmap_ref01_data["first"] = $setup["idmap"]["first01"];
        $roadmap_ref01_data["include_archived"] = $setup["idmap"]["include_archived01"];
        $roadmap_ref01_data["last"] = $setup["idmap"]["last01"];
        $roadmap_ref01_data["order_by"] = $setup["idmap"]["order_by01"];

        $roadmap_ref01_data_result = $roadmap_ref01_ent->create($roadmap_ref01_data, null);
        $roadmap_ref01_data = Helpers::to_map(is_object($roadmap_ref01_data_result) && method_exists($roadmap_ref01_data_result, 'data_get') ? $roadmap_ref01_data_result->data_get() : $roadmap_ref01_data_result);
        $this->assertNotNull($roadmap_ref01_data);
        $this->assertNotNull($roadmap_ref01_data["id"]);

        // LIST
        $roadmap_ref01_match = [
            "after" => $setup["idmap"]["after01"],
            "before" => $setup["idmap"]["before01"],
            "first" => $setup["idmap"]["first01"],
            "include_archived" => $setup["idmap"]["include_archived01"],
            "last" => $setup["idmap"]["last01"],
            "order_by" => $setup["idmap"]["order_by01"],
        ];

        $roadmap_ref01_list_result = $roadmap_ref01_ent->list($roadmap_ref01_match, null);
        $this->assertIsArray($roadmap_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($roadmap_ref01_list_result),
            ["id" => $roadmap_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // UPDATE
        $roadmap_ref01_data_up0_up = [
            "id" => $roadmap_ref01_data["id"],
        ];

        $roadmap_ref01_markdef_up0_name = "color";
        $roadmap_ref01_markdef_up0_value = "Mark01-roadmap_ref01_" . $setup["now"];
        $roadmap_ref01_data_up0_up[$roadmap_ref01_markdef_up0_name] = $roadmap_ref01_markdef_up0_value;

        $roadmap_ref01_resdata_up0_result = $roadmap_ref01_ent->update($roadmap_ref01_data_up0_up, null);
        $roadmap_ref01_resdata_up0 = Helpers::to_map(is_object($roadmap_ref01_resdata_up0_result) && method_exists($roadmap_ref01_resdata_up0_result, 'data_get') ? $roadmap_ref01_resdata_up0_result->data_get() : $roadmap_ref01_resdata_up0_result);
        $this->assertNotNull($roadmap_ref01_resdata_up0);
        $this->assertEquals($roadmap_ref01_resdata_up0["id"], $roadmap_ref01_data_up0_up["id"]);
        $this->assertEquals($roadmap_ref01_resdata_up0[$roadmap_ref01_markdef_up0_name], $roadmap_ref01_markdef_up0_value);

        // LOAD
        $roadmap_ref01_match_dt0 = [
            "id" => $roadmap_ref01_data["id"],
        ];
        $roadmap_ref01_data_dt0_loaded = $roadmap_ref01_ent->load($roadmap_ref01_match_dt0, null);
        $roadmap_ref01_data_dt0_load_result = Helpers::to_map(is_object($roadmap_ref01_data_dt0_loaded) && method_exists($roadmap_ref01_data_dt0_loaded, 'data_get') ? $roadmap_ref01_data_dt0_loaded->data_get() : $roadmap_ref01_data_dt0_loaded);
        $this->assertNotNull($roadmap_ref01_data_dt0_load_result);
        $this->assertEquals($roadmap_ref01_data_dt0_load_result["id"], $roadmap_ref01_data["id"]);

        // REMOVE
        $roadmap_ref01_match_rm0 = [
            "id" => $roadmap_ref01_data["id"],
        ];
        $roadmap_ref01_ent->remove($roadmap_ref01_match_rm0, null);

        // LIST
        $roadmap_ref01_match_rt0 = [
            "after" => $setup["idmap"]["after01"],
            "before" => $setup["idmap"]["before01"],
            "first" => $setup["idmap"]["first01"],
            "include_archived" => $setup["idmap"]["include_archived01"],
            "last" => $setup["idmap"]["last01"],
            "order_by" => $setup["idmap"]["order_by01"],
        ];

        $roadmap_ref01_list_rt0_result = $roadmap_ref01_ent->list($roadmap_ref01_match_rt0, null);
        $this->assertIsArray($roadmap_ref01_list_rt0_result);

        $not_found_item = sdk_select(
            Runner::entity_list_to_data($roadmap_ref01_list_rt0_result),
            ["id" => $roadmap_ref01_data["id"]]);
        $this->assertEmpty($not_found_item);

    }
}

function roadmap_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/roadmap/RoadmapTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = LinearSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["roadmap01", "roadmap02", "roadmap03", "after01", "before01", "first01", "include_archived01", "last01", "order_by01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("LINEAR_TEST_ROADMAP_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "LINEAR_TEST_ROADMAP_ENTID" => $idmap,
        "LINEAR_TEST_LIVE" => "FALSE",
        "LINEAR_TEST_EXPLAIN" => "FALSE",
        "LINEAR_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["LINEAR_TEST_ROADMAP_ENTID"]);
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
