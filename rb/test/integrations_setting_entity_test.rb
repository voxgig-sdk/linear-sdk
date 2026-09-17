# IntegrationsSetting entity test

require "minitest/autorun"
require "json"
require_relative "../Linear_sdk"
require_relative "runner"

class IntegrationsSettingEntityTest < Minitest::Test
  def test_create_instance
    testsdk = LinearSDK.test(nil, nil)
    ent = testsdk.IntegrationsSetting(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = integrations_setting_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "integrations_setting." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set LINEAR_TEST_INTEGRATIONS_SETTING_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    integrations_setting_ref01_ent = client.IntegrationsSetting(nil)
    integrations_setting_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.integrations_setting"), "integrations_setting_ref01"))

    integrations_setting_ref01_data_result = integrations_setting_ref01_ent.create(integrations_setting_ref01_data, nil)
    integrations_setting_ref01_data = Helpers.to_map(integrations_setting_ref01_data_result.respond_to?(:data_get) ? integrations_setting_ref01_data_result.data_get : integrations_setting_ref01_data_result)
    assert !integrations_setting_ref01_data.nil?
    assert !integrations_setting_ref01_data["id"].nil?

    # UPDATE
    integrations_setting_ref01_data_up0_up = {
      "id" => integrations_setting_ref01_data["id"],
    }

    integrations_setting_ref01_markdef_up0_name = "contextViewType"
    integrations_setting_ref01_markdef_up0_value = "Mark01-integrations_setting_ref01_#{setup[:now]}"
    integrations_setting_ref01_data_up0_up[integrations_setting_ref01_markdef_up0_name] = integrations_setting_ref01_markdef_up0_value

    integrations_setting_ref01_resdata_up0_result = integrations_setting_ref01_ent.update(integrations_setting_ref01_data_up0_up, nil)
    integrations_setting_ref01_resdata_up0 = Helpers.to_map(integrations_setting_ref01_resdata_up0_result.respond_to?(:data_get) ? integrations_setting_ref01_resdata_up0_result.data_get : integrations_setting_ref01_resdata_up0_result)
    assert !integrations_setting_ref01_resdata_up0.nil?
    assert_equal integrations_setting_ref01_resdata_up0["id"], integrations_setting_ref01_data_up0_up["id"]
    assert_equal integrations_setting_ref01_resdata_up0[integrations_setting_ref01_markdef_up0_name], integrations_setting_ref01_markdef_up0_value

    # LOAD
    integrations_setting_ref01_match_dt0 = {
      "id" => integrations_setting_ref01_data["id"],
    }
    integrations_setting_ref01_data_dt0_loaded = integrations_setting_ref01_ent.load(integrations_setting_ref01_match_dt0, nil)
    integrations_setting_ref01_data_dt0_load_result = Helpers.to_map(integrations_setting_ref01_data_dt0_loaded.respond_to?(:data_get) ? integrations_setting_ref01_data_dt0_loaded.data_get : integrations_setting_ref01_data_dt0_loaded)
    assert !integrations_setting_ref01_data_dt0_load_result.nil?
    assert_equal integrations_setting_ref01_data_dt0_load_result["id"], integrations_setting_ref01_data["id"]

  end
end

def integrations_setting_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "integrations_setting", "IntegrationsSettingTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = LinearSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["integrations_setting01", "integrations_setting02", "integrations_setting03"],
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
  entid_env_raw = ENV["LINEAR_TEST_INTEGRATIONS_SETTING_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "LINEAR_TEST_INTEGRATIONS_SETTING_ENTID" => idmap,
    "LINEAR_TEST_LIVE" => "FALSE",
    "LINEAR_TEST_EXPLAIN" => "FALSE",
    "LINEAR_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["LINEAR_TEST_INTEGRATIONS_SETTING_ENTID"])
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
