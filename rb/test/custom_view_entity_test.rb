# CustomView entity test

require "minitest/autorun"
require "json"
require_relative "../Linear_sdk"
require_relative "runner"

class CustomViewEntityTest < Minitest::Test
  def test_create_instance
    testsdk = LinearSDK.test(nil, nil)
    ent = testsdk.CustomView(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "custom_view" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = LinearSDK.test(seed, nil)
    seen = base.CustomView(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = LinearConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = LinearSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.CustomView(nil).stream("list", nil, nil).each do |item|
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
    setup = custom_view_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "custom_view." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set LINEAR_TEST_CUSTOM_VIEW_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    custom_view_ref01_ent = client.CustomView(nil)
    custom_view_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.custom_view"), "custom_view_ref01"))
    custom_view_ref01_data["after"] = setup[:idmap]["after01"]
    custom_view_ref01_data["before"] = setup[:idmap]["before01"]
    custom_view_ref01_data["first"] = setup[:idmap]["first01"]
    custom_view_ref01_data["include_archived"] = setup[:idmap]["include_archived01"]
    custom_view_ref01_data["last"] = setup[:idmap]["last01"]
    custom_view_ref01_data["order_by"] = setup[:idmap]["order_by01"]

    custom_view_ref01_data_result = custom_view_ref01_ent.create(custom_view_ref01_data, nil)
    custom_view_ref01_data = Helpers.to_map(custom_view_ref01_data_result.respond_to?(:data_get) ? custom_view_ref01_data_result.data_get : custom_view_ref01_data_result)
    assert !custom_view_ref01_data.nil?
    assert !custom_view_ref01_data["id"].nil?

    # LIST
    custom_view_ref01_match = {
      "after" => setup[:idmap]["after01"],
      "before" => setup[:idmap]["before01"],
      "first" => setup[:idmap]["first01"],
      "include_archived" => setup[:idmap]["include_archived01"],
      "last" => setup[:idmap]["last01"],
      "order_by" => setup[:idmap]["order_by01"],
    }

    custom_view_ref01_list_result = custom_view_ref01_ent.list(custom_view_ref01_match, nil)
    assert custom_view_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(custom_view_ref01_list_result),
      { "id" => custom_view_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    custom_view_ref01_data_up0_up = {
      "id" => custom_view_ref01_data["id"],
    }

    custom_view_ref01_markdef_up0_name = "color"
    custom_view_ref01_markdef_up0_value = "Mark01-custom_view_ref01_#{setup[:now]}"
    custom_view_ref01_data_up0_up[custom_view_ref01_markdef_up0_name] = custom_view_ref01_markdef_up0_value

    custom_view_ref01_resdata_up0_result = custom_view_ref01_ent.update(custom_view_ref01_data_up0_up, nil)
    custom_view_ref01_resdata_up0 = Helpers.to_map(custom_view_ref01_resdata_up0_result.respond_to?(:data_get) ? custom_view_ref01_resdata_up0_result.data_get : custom_view_ref01_resdata_up0_result)
    assert !custom_view_ref01_resdata_up0.nil?
    assert_equal custom_view_ref01_resdata_up0["id"], custom_view_ref01_data_up0_up["id"]
    assert_equal custom_view_ref01_resdata_up0[custom_view_ref01_markdef_up0_name], custom_view_ref01_markdef_up0_value

    # LOAD
    custom_view_ref01_match_dt0 = {
      "id" => custom_view_ref01_data["id"],
    }
    custom_view_ref01_data_dt0_loaded = custom_view_ref01_ent.load(custom_view_ref01_match_dt0, nil)
    custom_view_ref01_data_dt0_load_result = Helpers.to_map(custom_view_ref01_data_dt0_loaded.respond_to?(:data_get) ? custom_view_ref01_data_dt0_loaded.data_get : custom_view_ref01_data_dt0_loaded)
    assert !custom_view_ref01_data_dt0_load_result.nil?
    assert_equal custom_view_ref01_data_dt0_load_result["id"], custom_view_ref01_data["id"]

    # REMOVE
    custom_view_ref01_match_rm0 = {
      "id" => custom_view_ref01_data["id"],
    }
    custom_view_ref01_ent.remove(custom_view_ref01_match_rm0, nil)

    # LIST
    custom_view_ref01_match_rt0 = {
      "after" => setup[:idmap]["after01"],
      "before" => setup[:idmap]["before01"],
      "first" => setup[:idmap]["first01"],
      "include_archived" => setup[:idmap]["include_archived01"],
      "last" => setup[:idmap]["last01"],
      "order_by" => setup[:idmap]["order_by01"],
    }

    custom_view_ref01_list_rt0_result = custom_view_ref01_ent.list(custom_view_ref01_match_rt0, nil)
    assert custom_view_ref01_list_rt0_result.is_a?(Array)

    not_found_item = Vs.select(
      Runner.entity_list_to_data(custom_view_ref01_list_rt0_result),
      { "id" => custom_view_ref01_data["id"] })
    assert Vs.isempty(not_found_item)

  end
end

def custom_view_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "custom_view", "CustomViewTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = LinearSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["custom_view01", "custom_view02", "custom_view03", "after01", "before01", "first01", "include_archived01", "last01", "order_by01"],
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
  entid_env_raw = ENV["LINEAR_TEST_CUSTOM_VIEW_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "LINEAR_TEST_CUSTOM_VIEW_ENTID" => idmap,
    "LINEAR_TEST_LIVE" => "FALSE",
    "LINEAR_TEST_EXPLAIN" => "FALSE",
    "LINEAR_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["LINEAR_TEST_CUSTOM_VIEW_ENTID"])
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
