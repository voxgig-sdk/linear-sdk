# User entity test

require "minitest/autorun"
require "json"
require_relative "../Linear_sdk"
require_relative "runner"

class UserEntityTest < Minitest::Test
  # main.kit.test.live.strict is true (the default is true): a live
  # request that fails, or a live test missing an input it needs,
  # fails the test.
  # An account with no record for a test to read skips it either way.
  LIVE_STRICT = true

  def test_create_instance
    testsdk = LinearSDK.test(nil, nil)
    ent = testsdk.User(nil)
    assert !ent.nil?
  end

  def test_list_entities
    seed = {
      "entity" => {
        "user" => {
          "l1" => { "id" => "l1" },
          "l2" => { "id" => "l2" },
        },
      },
    }
    items = LinearSDK.test(seed, nil).User(nil).list(nil, nil)
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
        "user" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = LinearSDK.test(seed, nil)
    seen = base.User(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = LinearConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = LinearSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.User(nil).stream("list", nil, nil).each do |item|
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
      raise "user hook failed"
    end

    def PreUnexpected(ctx)
      @unexpected += 1
    end
  end

  def test_stream_error
    offline = { "net" => { "offline" => true } }
    err = assert_raises(StandardError) do
      LinearSDK.test(offline, nil).User(nil).stream("list", nil, nil).to_a
    end
    assert_match(/offline/, err.message)

    LinearSDK.test(offline, nil).User(nil)
      .stream("list", nil, { "ctrl" => { "throw" => false } }).to_a

    cfg = LinearConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("rbac")
      denied = LinearSDK.test(nil, { "feature" => { "rbac" => { "active" => true, "deny" => true } } })
      err = assert_raises(StandardError) do
        denied.User(nil).stream("list", nil, nil).to_a
      end
      assert_equal "rbac_denied", err.code
    end
  end

  def test_stream_ctrl
    explain = {}
    ctrl = { "explain" => explain }
    LinearSDK.test(nil, nil).User(nil).stream("list", nil, { "ctrl" => ctrl }).to_a
    assert_equal ["explain"], ctrl.keys
    assert_same explain, ctrl["explain"]
    refute_empty explain
  end

  def test_unexpected
    hook = FailHook.new
    client = LinearSDK.new({ "feature" => { "test" => { "active" => true } }, "extend" => [hook] })

    err = assert_raises(StandardError) do
      client.User(nil).list(nil, nil)
    end
    assert_match(/hook failed/, err.message)
    assert_operator hook.unexpected, :>, 0

    fired = hook.unexpected
    assert_nil client.User(nil).list(nil, { "throw" => false })
    assert_operator hook.unexpected, :>, fired
  end

  def test_validate
    cfg = LinearConfig.shared_config
    unless cfg["feature"].is_a?(Hash) && cfg["feature"].key?("validate")
      skip("feature not present in this SDK: validate")
    end
    client = LinearSDK.test(nil, { "feature" => { "validate" => { "active" => true } } })
    err = assert_raises(StandardError) do
      client.User(nil).list({ "after" => 1 }, nil)
    end
    assert_equal "validate_failed", err.code
  end

  def test_basic_flow
    setup = user_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["list", "update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "user." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    if setup[:live]
      ["after01", "before01", "first01", "include_archived01", "include_disabled01", "last01", "order_by01"].each do |_live_key|
        if setup[:synthetic_only] || setup[:idmap][_live_key].nil?
          Runner.live_miss(LIVE_STRICT, "Live entity test blocked: needs #{_live_key} via LINEAR_TEST_USER_ENTID")
        end
      end
    end
    if setup[:live]
      Runner.live_miss(LIVE_STRICT, "Live entity test blocked: " + "the flow updates a user record it did not create")
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    user_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.user")))
    user_ref01_data = nil
    if user_ref01_data_raw.length > 0
      user_ref01_data = Helpers.to_map(user_ref01_data_raw[0][1])
    end

    # LIST
    user_ref01_ent = client.User(nil)
    user_ref01_match = {
      "after" => setup[:idmap]["after01"],
      "before" => setup[:idmap]["before01"],
      "first" => setup[:idmap]["first01"],
      "include_archived" => setup[:idmap]["include_archived01"],
      "include_disabled" => setup[:idmap]["include_disabled01"],
      "last" => setup[:idmap]["last01"],
      "order_by" => setup[:idmap]["order_by01"],
    }

    user_ref01_list_result = user_ref01_ent.list(user_ref01_match, nil)
    assert user_ref01_list_result.is_a?(Array)

    # UPDATE
    user_ref01_data_up0_up = {
      "id" => user_ref01_data["id"],
    }

    user_ref01_markdef_up0_name = "avatarBackgroundColor"
    user_ref01_markdef_up0_value = "Mark01-user_ref01_#{setup[:now]}"
    user_ref01_data_up0_up[user_ref01_markdef_up0_name] = user_ref01_markdef_up0_value

    user_ref01_resdata_up0_result = user_ref01_ent.update(user_ref01_data_up0_up, nil)
    user_ref01_resdata_up0 = Helpers.to_map(user_ref01_resdata_up0_result.respond_to?(:data_get) ? user_ref01_resdata_up0_result.data_get : user_ref01_resdata_up0_result)
    assert !user_ref01_resdata_up0.nil?
    assert_equal user_ref01_resdata_up0["id"], user_ref01_data_up0_up["id"]
    assert_equal user_ref01_resdata_up0[user_ref01_markdef_up0_name], user_ref01_markdef_up0_value

    # LOAD
    user_ref01_match_dt0 = {
      "id" => user_ref01_data["id"],
    }
    user_ref01_data_dt0_loaded = user_ref01_ent.load(user_ref01_match_dt0, nil)
    user_ref01_data_dt0_load_result = Helpers.to_map(user_ref01_data_dt0_loaded.respond_to?(:data_get) ? user_ref01_data_dt0_loaded.data_get : user_ref01_data_dt0_loaded)
    assert !user_ref01_data_dt0_load_result.nil?
    assert_equal user_ref01_data_dt0_load_result["id"], user_ref01_data["id"]

  end
end

def user_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "user", "UserTestData.json")
  entity_data_source = File.read(entity_data_file, encoding: "UTF-8")
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = LinearSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["user01", "user02", "user03", "after01", "before01", "first01", "include_archived01", "include_disabled01", "last01", "order_by01"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Whether *_ENTID supplied the idmap, read before env_override consumes
  # it: without it, the ids a live flow binds are the fixture's synthetic ones.
  entid_env_raw = ENV["LINEAR_TEST_USER_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "LINEAR_TEST_USER_ENTID" => idmap,
    "LINEAR_TEST_LIVE" => "FALSE",
    "LINEAR_TEST_EXPLAIN" => "FALSE",
    "LINEAR_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["LINEAR_TEST_USER_ENTID"])
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
