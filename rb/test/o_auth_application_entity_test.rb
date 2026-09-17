# OAuthApplication entity test

require "minitest/autorun"
require "json"
require_relative "../Linear_sdk"
require_relative "runner"

class OAuthApplicationEntityTest < Minitest::Test
  def test_create_instance
    testsdk = LinearSDK.test(nil, nil)
    ent = testsdk.OAuthApplication(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "o_auth_application" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = LinearSDK.test(seed, nil)
    seen = base.OAuthApplication(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = LinearConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = LinearSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.OAuthApplication(nil).stream("list", nil, nil).each do |item|
        if item.is_a?(Array)
          got.concat(item)
        else
          got << item
        end
      end
      assert_equal 3, got.length
    end
  end

  def test_basic_flow
    setup = o_auth_application_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "o_auth_application." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set LINEAR_TEST_O_AUTH_APPLICATION_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    o_auth_application_ref01_ent = client.OAuthApplication(nil)
    o_auth_application_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.o_auth_application"), "o_auth_application_ref01"))

    o_auth_application_ref01_data_result = o_auth_application_ref01_ent.create(o_auth_application_ref01_data, nil)
    o_auth_application_ref01_data = Helpers.to_map(o_auth_application_ref01_data_result.respond_to?(:data_get) ? o_auth_application_ref01_data_result.data_get : o_auth_application_ref01_data_result)
    assert !o_auth_application_ref01_data.nil?
    assert !o_auth_application_ref01_data["id"].nil?

    # LIST
    o_auth_application_ref01_match = {}

    o_auth_application_ref01_list_result = o_auth_application_ref01_ent.list(o_auth_application_ref01_match, nil)
    assert o_auth_application_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(o_auth_application_ref01_list_result),
      { "id" => o_auth_application_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    o_auth_application_ref01_data_up0_up = {
      "id" => o_auth_application_ref01_data["id"],
    }

    o_auth_application_ref01_markdef_up0_name = "clientId"
    o_auth_application_ref01_markdef_up0_value = "Mark01-o_auth_application_ref01_#{setup[:now]}"
    o_auth_application_ref01_data_up0_up[o_auth_application_ref01_markdef_up0_name] = o_auth_application_ref01_markdef_up0_value

    o_auth_application_ref01_resdata_up0_result = o_auth_application_ref01_ent.update(o_auth_application_ref01_data_up0_up, nil)
    o_auth_application_ref01_resdata_up0 = Helpers.to_map(o_auth_application_ref01_resdata_up0_result.respond_to?(:data_get) ? o_auth_application_ref01_resdata_up0_result.data_get : o_auth_application_ref01_resdata_up0_result)
    assert !o_auth_application_ref01_resdata_up0.nil?
    assert_equal o_auth_application_ref01_resdata_up0["id"], o_auth_application_ref01_data_up0_up["id"]
    assert_equal o_auth_application_ref01_resdata_up0[o_auth_application_ref01_markdef_up0_name], o_auth_application_ref01_markdef_up0_value

    # LOAD
    o_auth_application_ref01_match_dt0 = {
      "id" => o_auth_application_ref01_data["id"],
    }
    o_auth_application_ref01_data_dt0_loaded = o_auth_application_ref01_ent.load(o_auth_application_ref01_match_dt0, nil)
    o_auth_application_ref01_data_dt0_load_result = Helpers.to_map(o_auth_application_ref01_data_dt0_loaded.respond_to?(:data_get) ? o_auth_application_ref01_data_dt0_loaded.data_get : o_auth_application_ref01_data_dt0_loaded)
    assert !o_auth_application_ref01_data_dt0_load_result.nil?
    assert_equal o_auth_application_ref01_data_dt0_load_result["id"], o_auth_application_ref01_data["id"]

  end
end

def o_auth_application_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "o_auth_application", "OAuthApplicationTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = LinearSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["o_auth_application01", "o_auth_application02", "o_auth_application03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["LINEAR_TEST_O_AUTH_APPLICATION_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "LINEAR_TEST_O_AUTH_APPLICATION_ENTID" => idmap,
    "LINEAR_TEST_LIVE" => "FALSE",
    "LINEAR_TEST_EXPLAIN" => "FALSE",
    "LINEAR_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["LINEAR_TEST_O_AUTH_APPLICATION_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
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
