# AccessKeyReleasePipeline entity test

require "minitest/autorun"
require "json"
require_relative "../Linear_sdk"
require_relative "runner"

class AccessKeyReleasePipelineEntityTest < Minitest::Test
  def test_create_instance
    testsdk = LinearSDK.test(nil, nil)
    ent = testsdk.AccessKeyReleasePipeline(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = access_key_release_pipeline_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "access_key_release_pipeline." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set LINEAR_TEST_ACCESS_KEY_RELEASE_PIPELINE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    access_key_release_pipeline_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.access_key_release_pipeline")))
    access_key_release_pipeline_ref01_data = nil
    if access_key_release_pipeline_ref01_data_raw.length > 0
      access_key_release_pipeline_ref01_data = Helpers.to_map(access_key_release_pipeline_ref01_data_raw[0][1])
    end

    # LOAD
    access_key_release_pipeline_ref01_ent = client.AccessKeyReleasePipeline(nil)
    access_key_release_pipeline_ref01_match_dt0 = {
      "id" => access_key_release_pipeline_ref01_data["id"],
    }
    access_key_release_pipeline_ref01_data_dt0_loaded = access_key_release_pipeline_ref01_ent.load(access_key_release_pipeline_ref01_match_dt0, nil)
    access_key_release_pipeline_ref01_data_dt0_load_result = Helpers.to_map(access_key_release_pipeline_ref01_data_dt0_loaded.respond_to?(:data_get) ? access_key_release_pipeline_ref01_data_dt0_loaded.data_get : access_key_release_pipeline_ref01_data_dt0_loaded)
    assert !access_key_release_pipeline_ref01_data_dt0_load_result.nil?
    assert_equal access_key_release_pipeline_ref01_data_dt0_load_result["id"], access_key_release_pipeline_ref01_data["id"]

  end
end

def access_key_release_pipeline_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "access_key_release_pipeline", "AccessKeyReleasePipelineTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = LinearSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["access_key_release_pipeline01", "access_key_release_pipeline02", "access_key_release_pipeline03"],
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
  entid_env_raw = ENV["LINEAR_TEST_ACCESS_KEY_RELEASE_PIPELINE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "LINEAR_TEST_ACCESS_KEY_RELEASE_PIPELINE_ENTID" => idmap,
    "LINEAR_TEST_LIVE" => "FALSE",
    "LINEAR_TEST_EXPLAIN" => "FALSE",
    "LINEAR_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["LINEAR_TEST_ACCESS_KEY_RELEASE_PIPELINE_ENTID"])
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
