# DocumentSearchResult direct test

require "minitest/autorun"
require "json"
require_relative "../Linear_sdk"
require_relative "runner"

class DocumentSearchResultDirectTest < Minitest::Test
  # main.kit.test.live.strict is true (the default is true): a live
  # request that fails, or a live test missing an input it needs,
  # fails the test.
  # An account with no record for a test to read skips it either way.
  LIVE_STRICT = true

  def live_ok(result)
    status = Helpers.to_int(result["status"])
    result["err"].nil? && result["ok"] && status >= 200 && status < 300
  end

  def test_direct_list_document_search_result
    setup = document_search_result_direct_setup([
      { "id" => "direct01" },
      { "id" => "direct02" },
    ])
    _should_skip, _reason = Runner.is_control_skipped("direct", "direct-list-document_search_result", setup[:live] ? "live" : "unit")
    if _should_skip
      skip(_reason || "skipped via sdk-test-control.json")
      return
    end
    if setup[:live]
      ["after01", "before01", "first01", "include_archived01", "include_comment01", "last01", "order_by01", "team01", "term01"].each do |_live_key|
        if setup[:idmap][_live_key].nil?
          Runner.live_miss(LIVE_STRICT, "Live test blocked: needs #{_live_key} via LINEAR_TEST_DOCUMENT_SEARCH_RESULT_ENTID")
        end
      end
    end
    client = setup[:client]

    params = {}
    params["after"] = setup[:live] ? setup[:idmap]["after01"] : "direct01"
    params["before"] = setup[:live] ? setup[:idmap]["before01"] : "direct02"
    params["first"] = setup[:live] ? setup[:idmap]["first01"] : "direct03"
    params["include_archived"] = setup[:live] ? setup[:idmap]["include_archived01"] : "direct04"
    params["include_comment"] = setup[:live] ? setup[:idmap]["include_comment01"] : "direct05"
    params["last"] = setup[:live] ? setup[:idmap]["last01"] : "direct06"
    params["order_by"] = setup[:live] ? setup[:idmap]["order_by01"] : "direct07"
    params["team_id"] = setup[:live] ? setup[:idmap]["team01"] : "direct08"
    params["term"] = setup[:live] ? setup[:idmap]["term01"] : "direct09"

    result = client.direct({
      "path" => "",
      "method" => "GET",
      "params" => params,
    })
    if setup[:live]
      unless live_ok(result)
        Runner.live_miss(LIVE_STRICT, "Live list failed: " + Runner.live_describe(result))
      end
      if Runner.live_list(result["data"]).nil?
        Runner.live_miss(LIVE_STRICT, "Live list returned no list: " + Runner.live_describe(result))
      end
      assert Runner.live_list(result["data"]).is_a?(Array)
    else
      assert_nil result["err"]
      assert result["ok"]
      assert_equal 200, Helpers.to_int(result["status"])
      assert result["data"].is_a?(Array)
      assert_equal 2, result["data"].length
      assert_equal 1, setup[:calls].length
    end
  end

end


def document_search_result_direct_setup(mockres)
  Runner.load_env_local

  calls = []

  env = Runner.env_override({
    "LINEAR_TEST_DOCUMENT_SEARCH_RESULT_ENTID" => {},
    "LINEAR_TEST_LIVE" => "FALSE",
    "LINEAR_APIKEY" => "",
  })

  live = env["LINEAR_TEST_LIVE"] == "TRUE"

  if live
    # Merged so the generated fields win: sdk-test-control.json's
    # test.client.options adds to the live client, it does not redirect it.
    merged_opts = Runner.live_client_options.merge({
      "apikey" => env["LINEAR_APIKEY"],
    })
    client = LinearSDK.new(merged_opts)
    idmap = env["LINEAR_TEST_DOCUMENT_SEARCH_RESULT_ENTID"]
    return {
      client: client,
      calls: calls,
      live: true,
      idmap: idmap.is_a?(Hash) ? idmap : {},
    }
  end

  mock_fetch = ->(url, init) {
    calls.push({ "url" => url, "init" => init })
    return {
      "status" => 200,
      "statusText" => "OK",
      "headers" => {},
      "json" => ->() {
        if !mockres.nil?
          return mockres
        end
        return { "id" => "direct01" }
      },
      "body" => "mock",
    }, nil
  }

  client = LinearSDK.new({
    "base" => "http://localhost:8080",
    "system" => {
      "fetch" => mock_fetch,
    },
  })

  {
    client: client,
    calls: calls,
    live: false,
    idmap: {},
  }
end
