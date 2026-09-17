<?php
declare(strict_types=1);

// AuthResolverResponse entity test

require_once __DIR__ . '/../linear_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class AuthResolverResponseEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = LinearSDK::test(null, null);
        $ent = $testsdk->AuthResolverResponse(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = auth_resolver_response_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "update", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "auth_resolver_response." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set LINEAR_TEST_AUTH_RESOLVER_RESPONSE_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $auth_resolver_response_ref01_ent = $client->AuthResolverResponse(null);
        $auth_resolver_response_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.auth_resolver_response"), "auth_resolver_response_ref01"));
        $auth_resolver_response_ref01_data["auth_id"] = $setup["idmap"]["auth01"];
        $auth_resolver_response_ref01_data["response"] = $setup["idmap"]["response01"];

        $auth_resolver_response_ref01_data_result = $auth_resolver_response_ref01_ent->create($auth_resolver_response_ref01_data, null);
        $auth_resolver_response_ref01_data = Helpers::to_map(is_object($auth_resolver_response_ref01_data_result) && method_exists($auth_resolver_response_ref01_data_result, 'data_get') ? $auth_resolver_response_ref01_data_result->data_get() : $auth_resolver_response_ref01_data_result);
        $this->assertNotNull($auth_resolver_response_ref01_data);
        $this->assertNotNull($auth_resolver_response_ref01_data["id"]);

        // UPDATE
        $auth_resolver_response_ref01_data_up0_up = [
            "id" => $auth_resolver_response_ref01_data["id"],
            "auth_id" => $setup["idmap"]["auth_id"],
            "response" => $setup["idmap"]["response"],
        ];

        $auth_resolver_response_ref01_markdef_up0_name = "email";
        $auth_resolver_response_ref01_markdef_up0_value = "Mark01-auth_resolver_response_ref01_" . $setup["now"];
        $auth_resolver_response_ref01_data_up0_up[$auth_resolver_response_ref01_markdef_up0_name] = $auth_resolver_response_ref01_markdef_up0_value;

        $auth_resolver_response_ref01_resdata_up0_result = $auth_resolver_response_ref01_ent->update($auth_resolver_response_ref01_data_up0_up, null);
        $auth_resolver_response_ref01_resdata_up0 = Helpers::to_map(is_object($auth_resolver_response_ref01_resdata_up0_result) && method_exists($auth_resolver_response_ref01_resdata_up0_result, 'data_get') ? $auth_resolver_response_ref01_resdata_up0_result->data_get() : $auth_resolver_response_ref01_resdata_up0_result);
        $this->assertNotNull($auth_resolver_response_ref01_resdata_up0);
        $this->assertEquals($auth_resolver_response_ref01_resdata_up0["id"], $auth_resolver_response_ref01_data_up0_up["id"]);
        $this->assertEquals($auth_resolver_response_ref01_resdata_up0[$auth_resolver_response_ref01_markdef_up0_name], $auth_resolver_response_ref01_markdef_up0_value);

        // LOAD
        $auth_resolver_response_ref01_match_dt0 = [
            "id" => $auth_resolver_response_ref01_data["id"],
        ];
        $auth_resolver_response_ref01_data_dt0_loaded = $auth_resolver_response_ref01_ent->load($auth_resolver_response_ref01_match_dt0, null);
        $auth_resolver_response_ref01_data_dt0_load_result = Helpers::to_map(is_object($auth_resolver_response_ref01_data_dt0_loaded) && method_exists($auth_resolver_response_ref01_data_dt0_loaded, 'data_get') ? $auth_resolver_response_ref01_data_dt0_loaded->data_get() : $auth_resolver_response_ref01_data_dt0_loaded);
        $this->assertNotNull($auth_resolver_response_ref01_data_dt0_load_result);
        $this->assertEquals($auth_resolver_response_ref01_data_dt0_load_result["id"], $auth_resolver_response_ref01_data["id"]);

    }
}

function auth_resolver_response_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/auth_resolver_response/AuthResolverResponseTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = LinearSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["auth_resolver_response01", "auth_resolver_response02", "auth_resolver_response03", "auth01", "response01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("LINEAR_TEST_AUTH_RESOLVER_RESPONSE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "LINEAR_TEST_AUTH_RESOLVER_RESPONSE_ENTID" => $idmap,
        "LINEAR_TEST_LIVE" => "FALSE",
        "LINEAR_TEST_EXPLAIN" => "FALSE",
        "LINEAR_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["LINEAR_TEST_AUTH_RESOLVER_RESPONSE_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }
    if (!isset($idmap_resolved["auth_id"])) {
        $idmap_resolved["auth_id"] = $idmap_resolved["auth01"];
    }
    if (!isset($idmap_resolved["response"])) {
        $idmap_resolved["response"] = $idmap_resolved["response01"];
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
