<?php
declare(strict_types=1);

// DocumentSearchResult direct test

require_once __DIR__ . '/../linear_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;

class DocumentSearchResultDirectTest extends TestCase
{
    // main.kit.test.live.strict is true (the default is true): a live
    // request that fails, or a live test missing an input it needs,
    // fails the test.
    // An account with no record for a test to read skips it either way.
    private const LIVE_STRICT = true;

    private static function liveOk(array $result): bool
    {
        $status = Helpers::to_int($result["status"] ?? 0);
        return empty($result["err"]) && !empty($result["ok"]) && $status >= 200 && $status < 300;
    }

    public function test_direct_list_document_search_result(): void
    {
        $setup = document_search_result_direct_setup([
            ["id" => "direct01"],
            ["id" => "direct02"],
        ]);
        [$_shouldSkip, $_reason] = Runner::is_control_skipped("direct", "direct-list-document_search_result", $setup["live"] ? "live" : "unit");
        if ($_shouldSkip) {
            $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
            return;
        }
        if ($setup["live"]) {
            foreach (["after01", "before01", "first01", "include_archived01", "include_comment01", "last01", "order_by01", "team01", "term01"] as $_liveKey) {
                if (null === ($setup["idmap"][$_liveKey] ?? null)) {
                    Runner::live_miss(self::LIVE_STRICT, "Live test blocked: needs " . $_liveKey . " via LINEAR_TEST_DOCUMENT_SEARCH_RESULT_ENTID");
                }
            }
        }
        $client = $setup["client"];

        $params = [];
        $params["after"] = $setup["live"] ? ($setup["idmap"]["after01"] ?? null) : "direct01";
        $params["before"] = $setup["live"] ? ($setup["idmap"]["before01"] ?? null) : "direct02";
        $params["first"] = $setup["live"] ? ($setup["idmap"]["first01"] ?? null) : "direct03";
        $params["include_archived"] = $setup["live"] ? ($setup["idmap"]["include_archived01"] ?? null) : "direct04";
        $params["include_comment"] = $setup["live"] ? ($setup["idmap"]["include_comment01"] ?? null) : "direct05";
        $params["last"] = $setup["live"] ? ($setup["idmap"]["last01"] ?? null) : "direct06";
        $params["order_by"] = $setup["live"] ? ($setup["idmap"]["order_by01"] ?? null) : "direct07";
        $params["team_id"] = $setup["live"] ? ($setup["idmap"]["team01"] ?? null) : "direct08";
        $params["term"] = $setup["live"] ? ($setup["idmap"]["term01"] ?? null) : "direct09";

        $result = $client->direct([
            "path" => "",
            "method" => "GET",
            "params" => $params,
        ]);
        if ($setup["live"]) {
            if (!self::liveOk($result)) {
                Runner::live_miss(self::LIVE_STRICT, "Live list failed: " . Runner::live_describe($result));
            }
            if (null === Runner::live_list($result["data"] ?? null)) {
                Runner::live_miss(self::LIVE_STRICT, "Live list returned no list: " . Runner::live_describe($result));
            }
            $this->assertIsArray(Runner::live_list($result["data"]));
        } else {
            $this->assertArrayNotHasKey("err", $result);
            $this->assertTrue($result["ok"]);
            $this->assertEquals(200, Helpers::to_int($result["status"]));
            $this->assertIsArray($result["data"]);
            $this->assertCount(2, $result["data"]);
            $this->assertCount(1, $setup["calls"]);
        }
    }

}


function document_search_result_direct_setup($mockres)
{
    Runner::load_env_local();

    $calls = new \ArrayObject();

    $env = Runner::env_override([
        "LINEAR_TEST_DOCUMENT_SEARCH_RESULT_ENTID" => [],
        "LINEAR_TEST_LIVE" => "FALSE",
        "LINEAR_APIKEY" => "",
    ]);

    $live = $env["LINEAR_TEST_LIVE"] === "TRUE";

    if ($live) {
        // Merged so the generated fields win: sdk-test-control.json's
        // test.client.options adds to the live client, it does not redirect it.
        $merged_opts = array_merge(Runner::live_client_options(), [
            "apikey" => $env["LINEAR_APIKEY"],
        ]);
        $client = new LinearSDK($merged_opts);
        $idmap = $env["LINEAR_TEST_DOCUMENT_SEARCH_RESULT_ENTID"] ?? [];
        return [
            "client" => $client,
            "calls" => $calls,
            "live" => true,
            "idmap" => is_array($idmap) ? $idmap : [],
        ];
    }

    $mock_fetch = function ($url, $init) use ($calls, $mockres) {
        $calls[] = ["url" => $url, "init" => $init];
        return [
            [
                "status" => 200,
                "statusText" => "OK",
                "headers" => [],
                "json" => function () use ($mockres) {
                    if ($mockres !== null) {
                        return $mockres;
                    }
                    return ["id" => "direct01"];
                },
                "body" => "mock",
            ],
            null,
        ];
    };

    $client = new LinearSDK([
        "base" => "http://localhost:8080",
        "system" => [
            "fetch" => $mock_fetch,
        ],
    ]);

    return [
        "client" => $client,
        "calls" => $calls,
        "live" => false,
        "idmap" => [],
    ];
}
