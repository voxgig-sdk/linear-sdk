# AccessKeyReleasePipeline entity test

require "minitest/autorun"
require "json"
require_relative "../Linear_sdk"
require_relative "runner"

class AccessKeyReleasePipelineEntityTest < Minitest::Test
  # main.kit.test.live.strict is true (the default is true): a live
  # request that fails, or a live test missing an input it needs,
  # fails the test.
  # An account with no record for a test to read skips it either way.
  LIVE_STRICT = true

  def test_create_instance
    testsdk = LinearSDK.test(nil, nil)
    ent = testsdk.AccessKeyReleasePipeline(nil)
    assert !ent.nil?
  end

  def test_validate
    cfg = LinearConfig.shared_config
    unless cfg["feature"].is_a?(Hash) && cfg["feature"].key?("validate")
      skip("feature not present in this SDK: validate")
    end
    client = LinearSDK.test(nil, { "feature" => { "validate" => { "active" => true } } })
    err = assert_raises(StandardError) do
      client.AccessKeyReleasePipeline(nil).load({ "id" => 1 }, nil)
    end
    assert_equal "validate_failed", err.code
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
    if setup[:live]
      Runner.live_miss(LIVE_STRICT, "Live entity test blocked: " + "the flow loads a access_key_release_pipeline record it has no list to find")
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
  entity_data_source = File.read(entity_data_file, encoding: "UTF-8")
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

  # Whether *_ENTID supplied the idmap, read before env_override consumes
  # it: without it, the ids a live flow binds are the fixture's synthetic ones.
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
