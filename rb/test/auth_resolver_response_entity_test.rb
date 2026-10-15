# AuthResolverResponse entity test

require "minitest/autorun"
require "json"
require_relative "../Linear_sdk"
require_relative "runner"

class AuthResolverResponseEntityTest < Minitest::Test
  # main.kit.test.live.strict is true (the default is true): a live
  # request that fails, or a live test missing an input it needs,
  # fails the test.
  # An account with no record for a test to read skips it either way.
  LIVE_STRICT = true

  def test_create_instance
    testsdk = LinearSDK.test(nil, nil)
    ent = testsdk.AuthResolverResponse(nil)
    assert !ent.nil?
  end

  def test_validate
    cfg = LinearConfig.shared_config
    unless cfg["feature"].is_a?(Hash) && cfg["feature"].key?("validate")
      skip("feature not present in this SDK: validate")
    end
    client = LinearSDK.test(nil, { "feature" => { "validate" => { "active" => true } } })
    err = assert_raises(StandardError) do
      client.AuthResolverResponse(nil).load({ "allowDomainAccess" => "x", "id" => "x" }, nil)
    end
    assert_equal "validate_failed", err.code
  end

  def test_basic_flow
    setup = auth_resolver_response_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "auth_resolver_response." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    if setup[:live]
      ["auth01", "response01"].each do |_live_key|
        if setup[:synthetic_only] || setup[:idmap][_live_key].nil?
          Runner.live_miss(LIVE_STRICT, "Live entity test blocked: needs #{_live_key} via LINEAR_TEST_AUTH_RESOLVER_RESPONSE_ENTID")
        end
      end
    end
    if setup[:live]
      Runner.live_miss(LIVE_STRICT, "Live entity test blocked: " + "the flow updates a auth_resolver_response record it did not create")
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    auth_resolver_response_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.auth_resolver_response")))
    auth_resolver_response_ref01_data = nil
    if auth_resolver_response_ref01_data_raw.length > 0
      auth_resolver_response_ref01_data = Helpers.to_map(auth_resolver_response_ref01_data_raw[0][1])
    end

    # UPDATE
    auth_resolver_response_ref01_ent = client.AuthResolverResponse(nil)
    auth_resolver_response_ref01_data_up0_up = {
      "id" => auth_resolver_response_ref01_data["id"],
      "auth_id" => setup[:idmap]["auth_id"],
      "response" => setup[:idmap]["response"],
    }

    auth_resolver_response_ref01_markdef_up0_name = "email"
    auth_resolver_response_ref01_markdef_up0_value = "Mark01-auth_resolver_response_ref01_#{setup[:now]}"
    auth_resolver_response_ref01_data_up0_up[auth_resolver_response_ref01_markdef_up0_name] = auth_resolver_response_ref01_markdef_up0_value

    auth_resolver_response_ref01_resdata_up0_result = auth_resolver_response_ref01_ent.update(auth_resolver_response_ref01_data_up0_up, nil)
    auth_resolver_response_ref01_resdata_up0 = Helpers.to_map(auth_resolver_response_ref01_resdata_up0_result.respond_to?(:data_get) ? auth_resolver_response_ref01_resdata_up0_result.data_get : auth_resolver_response_ref01_resdata_up0_result)
    assert !auth_resolver_response_ref01_resdata_up0.nil?
    assert_equal auth_resolver_response_ref01_resdata_up0["id"], auth_resolver_response_ref01_data_up0_up["id"]
    assert_equal auth_resolver_response_ref01_resdata_up0[auth_resolver_response_ref01_markdef_up0_name], auth_resolver_response_ref01_markdef_up0_value

    # LOAD
    auth_resolver_response_ref01_match_dt0 = {
      "id" => auth_resolver_response_ref01_data["id"],
    }
    auth_resolver_response_ref01_data_dt0_loaded = auth_resolver_response_ref01_ent.load(auth_resolver_response_ref01_match_dt0, nil)
    auth_resolver_response_ref01_data_dt0_load_result = Helpers.to_map(auth_resolver_response_ref01_data_dt0_loaded.respond_to?(:data_get) ? auth_resolver_response_ref01_data_dt0_loaded.data_get : auth_resolver_response_ref01_data_dt0_loaded)
    assert !auth_resolver_response_ref01_data_dt0_load_result.nil?
    assert_equal auth_resolver_response_ref01_data_dt0_load_result["id"], auth_resolver_response_ref01_data["id"]

  end
end

def auth_resolver_response_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "auth_resolver_response", "AuthResolverResponseTestData.json")
  entity_data_source = File.read(entity_data_file, encoding: "UTF-8")
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = LinearSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["auth_resolver_response01", "auth_resolver_response02", "auth_resolver_response03", "auth01", "response01"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Whether *_ENTID supplied the idmap, read before env_override consumes
  # it: without it, the ids a live flow binds are the fixture's synthetic ones.
  entid_env_raw = ENV["LINEAR_TEST_AUTH_RESOLVER_RESPONSE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "LINEAR_TEST_AUTH_RESOLVER_RESPONSE_ENTID" => idmap,
    "LINEAR_TEST_LIVE" => "FALSE",
    "LINEAR_TEST_EXPLAIN" => "FALSE",
    "LINEAR_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["LINEAR_TEST_AUTH_RESOLVER_RESPONSE_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["auth_id"].nil?
    idmap_resolved["auth_id"] = idmap_resolved["auth01"]
  end
  if idmap_resolved["response"].nil?
    idmap_resolved["response"] = idmap_resolved["response01"]
  end

  if env["LINEAR_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
        "apikey" => env["LINEAR_APIKEY"],
      },
      extra || {},
    ])
    client = LinearSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["LINEAR_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["LINEAR_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
