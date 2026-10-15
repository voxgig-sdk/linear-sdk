# Team entity test

require "minitest/autorun"
require "json"
require_relative "../Linear_sdk"
require_relative "runner"

class TeamEntityTest < Minitest::Test
  # main.kit.test.live.strict is true (the default is true): a live
  # request that fails, or a live test missing an input it needs,
  # fails the test.
  # An account with no record for a test to read skips it either way.
  LIVE_STRICT = true

  def test_create_instance
    testsdk = LinearSDK.test(nil, nil)
    ent = testsdk.Team(nil)
    assert !ent.nil?
  end

  def test_list_entities
    seed = {
      "entity" => {
        "team" => {
          "l1" => { "id" => "l1" },
          "l2" => { "id" => "l2" },
        },
      },
    }
    items = LinearSDK.test(seed, nil).Team(nil).list(nil, nil)
    # list resolves to one entity per record; data_get reads the record.
    assert_equal 2, items.length
    items.each do |item|
      assert item.respond_to?(:data_get)
      assert item.data_get.is_a?(Hash)
    end
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "team" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = LinearSDK.test(seed, nil)
    seen = base.Team(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = LinearConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = LinearSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.Team(nil).stream("list", nil, nil).each do |item|
        if item.is_a?(Array)
          got.concat(item)
        else
          got << item
        end
      end
      assert_equal 3, got.length
    end
  end

  class FailHook < LinearBaseFeature
    attr_reader :unexpected

    def initialize
      super()
      @name = "failhook"
      @unexpected = 0
    end

    def PreSpec(ctx)
      raise "team hook failed"
    end

    def PreUnexpected(ctx)
      @unexpected += 1
    end
  end

  def test_stream_error
    offline = { "net" => { "offline" => true } }
    err = assert_raises(StandardError) do
      LinearSDK.test(offline, nil).Team(nil).stream("list", nil, nil).to_a
    end
    assert_match(/offline/, err.message)

    LinearSDK.test(offline, nil).Team(nil)
      .stream("list", nil, { "ctrl" => { "throw" => false } }).to_a

    cfg = LinearConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("rbac")
      denied = LinearSDK.test(nil, { "feature" => { "rbac" => { "active" => true, "deny" => true } } })
      err = assert_raises(StandardError) do
        denied.Team(nil).stream("list", nil, nil).to_a
      end
      assert_equal "rbac_denied", err.code
    end
  end

  def test_stream_ctrl
    explain = {}
    ctrl = { "explain" => explain }
    LinearSDK.test(nil, nil).Team(nil).stream("list", nil, { "ctrl" => ctrl }).to_a
    assert_equal ["explain"], ctrl.keys
    assert_same explain, ctrl["explain"]
    refute_empty explain
  end

  def test_unexpected
    hook = FailHook.new
    client = LinearSDK.new({ "feature" => { "test" => { "active" => true } }, "extend" => [hook] })

    err = assert_raises(StandardError) do
      client.Team(nil).list(nil, nil)
    end
    assert_match(/hook failed/, err.message)
    assert_operator hook.unexpected, :>, 0

    fired = hook.unexpected
    assert_nil client.Team(nil).list(nil, { "throw" => false })
    assert_operator hook.unexpected, :>, fired
  end

  def test_validate
    cfg = LinearConfig.shared_config
    unless cfg["feature"].is_a?(Hash) && cfg["feature"].key?("validate")
      skip("feature not present in this SDK: validate")
    end
    client = LinearSDK.test(nil, { "feature" => { "validate" => { "active" => true } } })
    err = assert_raises(StandardError) do
      client.Team(nil).list({ "after" => 1 }, nil)
    end
    assert_equal "validate_failed", err.code
  end

  def test_basic_flow
    setup = team_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "team." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    if setup[:live]
      ["after01", "before01", "copy_settings_from_team01", "first01", "include_archived01", "last01", "order_by01"].each do |_live_key|
        if setup[:synthetic_only] || setup[:idmap][_live_key].nil?
          Runner.live_miss(LIVE_STRICT, "Live entity test blocked: needs #{_live_key} via LINEAR_TEST_TEAM_ENTID")
        end
      end
    end
    client = setup[:client]

    # CREATE
    team_ref01_ent = client.Team(nil)
    team_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.team"), "team_ref01"))
    team_ref01_data["after"] = setup[:idmap]["after01"]
    team_ref01_data["before"] = setup[:idmap]["before01"]
    team_ref01_data["copy_settings_from_team_id"] = setup[:idmap]["copy_settings_from_team01"]
    team_ref01_data["first"] = setup[:idmap]["first01"]
    team_ref01_data["include_archived"] = setup[:idmap]["include_archived01"]
    team_ref01_data["last"] = setup[:idmap]["last01"]
    team_ref01_data["order_by"] = setup[:idmap]["order_by01"]

    team_ref01_data_result = team_ref01_ent.create(team_ref01_data, nil)
    team_ref01_data = Helpers.to_map(team_ref01_data_result.respond_to?(:data_get) ? team_ref01_data_result.data_get : team_ref01_data_result)
    assert !team_ref01_data.nil?
    assert !team_ref01_data["id"].nil?

    # LIST
    team_ref01_match = {
      "after" => setup[:idmap]["after01"],
      "before" => setup[:idmap]["before01"],
      "first" => setup[:idmap]["first01"],
      "include_archived" => setup[:idmap]["include_archived01"],
      "last" => setup[:idmap]["last01"],
      "order_by" => setup[:idmap]["order_by01"],
    }

    team_ref01_list_result = team_ref01_ent.list(team_ref01_match, nil)
    assert team_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(team_ref01_list_result),
      { "id" => team_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    team_ref01_data_up0_up = {
      "id" => team_ref01_data["id"],
    }

    team_ref01_markdef_up0_name = "autoCloseStateId"
    team_ref01_markdef_up0_value = "Mark01-team_ref01_#{setup[:now]}"
    team_ref01_data_up0_up[team_ref01_markdef_up0_name] = team_ref01_markdef_up0_value

    team_ref01_resdata_up0_result = team_ref01_ent.update(team_ref01_data_up0_up, nil)
    team_ref01_resdata_up0 = Helpers.to_map(team_ref01_resdata_up0_result.respond_to?(:data_get) ? team_ref01_resdata_up0_result.data_get : team_ref01_resdata_up0_result)
    assert !team_ref01_resdata_up0.nil?
    assert_equal team_ref01_resdata_up0["id"], team_ref01_data_up0_up["id"]
    assert_equal team_ref01_resdata_up0[team_ref01_markdef_up0_name], team_ref01_markdef_up0_value

    # LOAD
    team_ref01_match_dt0 = {
      "id" => team_ref01_data["id"],
    }
    team_ref01_data_dt0_loaded = team_ref01_ent.load(team_ref01_match_dt0, nil)
    team_ref01_data_dt0_load_result = Helpers.to_map(team_ref01_data_dt0_loaded.respond_to?(:data_get) ? team_ref01_data_dt0_loaded.data_get : team_ref01_data_dt0_loaded)
    assert !team_ref01_data_dt0_load_result.nil?
    assert_equal team_ref01_data_dt0_load_result["id"], team_ref01_data["id"]

    # REMOVE
    team_ref01_match_rm0 = {
      "id" => team_ref01_data["id"],
    }
    team_ref01_ent.remove(team_ref01_match_rm0, nil)

    # LIST
    team_ref01_match_rt0 = {
      "after" => setup[:idmap]["after01"],
      "before" => setup[:idmap]["before01"],
      "first" => setup[:idmap]["first01"],
      "include_archived" => setup[:idmap]["include_archived01"],
      "last" => setup[:idmap]["last01"],
      "order_by" => setup[:idmap]["order_by01"],
    }

    team_ref01_list_rt0_result = team_ref01_ent.list(team_ref01_match_rt0, nil)
    assert team_ref01_list_rt0_result.is_a?(Array)

    not_found_item = Vs.select(
      Runner.entity_list_to_data(team_ref01_list_rt0_result),
      { "id" => team_ref01_data["id"] })
    assert Vs.isempty(not_found_item)

  end
end

def team_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "team", "TeamTestData.json")
  entity_data_source = File.read(entity_data_file, encoding: "UTF-8")
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = LinearSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["team01", "team02", "team03", "after01", "before01", "copy_settings_from_team01", "first01", "include_archived01", "last01", "order_by01"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Whether *_ENTID supplied the idmap, read before env_override consumes
  # it: without it, the ids a live flow binds are the fixture's synthetic ones.
  entid_env_raw = ENV["LINEAR_TEST_TEAM_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "LINEAR_TEST_TEAM_ENTID" => idmap,
    "LINEAR_TEST_LIVE" => "FALSE",
    "LINEAR_TEST_EXPLAIN" => "FALSE",
    "LINEAR_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["LINEAR_TEST_TEAM_ENTID"])
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
