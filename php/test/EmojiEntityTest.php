<?php
declare(strict_types=1);

// Emoji entity test

require_once __DIR__ . '/../linear_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class EmojiEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = LinearSDK::test(null, null);
        $ent = $testsdk->Emoji(null);
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
                "emoji" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = LinearSDK::test($seed, null);
        $seen = iterator_to_array($base->Emoji(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = LinearConfig::shared_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = LinearSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->Emoji(null)->stream("list", null, null) as $item) {
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
        $setup = emoji_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "load", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "emoji." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set LINEAR_TEST_EMOJI_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $emoji_ref01_ent = $client->Emoji(null);
        $emoji_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.emoji"), "emoji_ref01"));
        $emoji_ref01_data["after"] = $setup["idmap"]["after01"];
        $emoji_ref01_data["before"] = $setup["idmap"]["before01"];
        $emoji_ref01_data["first"] = $setup["idmap"]["first01"];
        $emoji_ref01_data["include_archived"] = $setup["idmap"]["include_archived01"];
        $emoji_ref01_data["last"] = $setup["idmap"]["last01"];
        $emoji_ref01_data["order_by"] = $setup["idmap"]["order_by01"];

        $emoji_ref01_data_result = $emoji_ref01_ent->create($emoji_ref01_data, null);
        $emoji_ref01_data = Helpers::to_map(is_object($emoji_ref01_data_result) && method_exists($emoji_ref01_data_result, 'data_get') ? $emoji_ref01_data_result->data_get() : $emoji_ref01_data_result);
        $this->assertNotNull($emoji_ref01_data);
        $this->assertNotNull($emoji_ref01_data["id"]);

        // LIST
        $emoji_ref01_match = [
            "after" => $setup["idmap"]["after01"],
            "before" => $setup["idmap"]["before01"],
            "first" => $setup["idmap"]["first01"],
            "include_archived" => $setup["idmap"]["include_archived01"],
            "last" => $setup["idmap"]["last01"],
            "order_by" => $setup["idmap"]["order_by01"],
        ];

        $emoji_ref01_list_result = $emoji_ref01_ent->list($emoji_ref01_match, null);
        $this->assertIsArray($emoji_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($emoji_ref01_list_result),
            ["id" => $emoji_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // LOAD
        $emoji_ref01_match_dt0 = [
            "id" => $emoji_ref01_data["id"],
        ];
        $emoji_ref01_data_dt0_loaded = $emoji_ref01_ent->load($emoji_ref01_match_dt0, null);
        $emoji_ref01_data_dt0_load_result = Helpers::to_map(is_object($emoji_ref01_data_dt0_loaded) && method_exists($emoji_ref01_data_dt0_loaded, 'data_get') ? $emoji_ref01_data_dt0_loaded->data_get() : $emoji_ref01_data_dt0_loaded);
        $this->assertNotNull($emoji_ref01_data_dt0_load_result);
        $this->assertEquals($emoji_ref01_data_dt0_load_result["id"], $emoji_ref01_data["id"]);

        // REMOVE
        $emoji_ref01_match_rm0 = [
            "id" => $emoji_ref01_data["id"],
        ];
        $emoji_ref01_ent->remove($emoji_ref01_match_rm0, null);

        // LIST
        $emoji_ref01_match_rt0 = [
            "after" => $setup["idmap"]["after01"],
            "before" => $setup["idmap"]["before01"],
            "first" => $setup["idmap"]["first01"],
            "include_archived" => $setup["idmap"]["include_archived01"],
            "last" => $setup["idmap"]["last01"],
            "order_by" => $setup["idmap"]["order_by01"],
        ];

        $emoji_ref01_list_rt0_result = $emoji_ref01_ent->list($emoji_ref01_match_rt0, null);
        $this->assertIsArray($emoji_ref01_list_rt0_result);

        $not_found_item = sdk_select(
            Runner::entity_list_to_data($emoji_ref01_list_rt0_result),
            ["id" => $emoji_ref01_data["id"]]);
        $this->assertEmpty($not_found_item);

    }
}

function emoji_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/emoji/EmojiTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = LinearSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["emoji01", "emoji02", "emoji03", "after01", "before01", "first01", "include_archived01", "last01", "order_by01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("LINEAR_TEST_EMOJI_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "LINEAR_TEST_EMOJI_ENTID" => $idmap,
        "LINEAR_TEST_LIVE" => "FALSE",
        "LINEAR_TEST_EXPLAIN" => "FALSE",
        "LINEAR_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["LINEAR_TEST_EMOJI_ENTID"]);
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
