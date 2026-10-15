# ProjectLabel entity test

require "minitest/autorun"
require "json"
require_relative "../Linear_sdk"
require_relative "runner"

class ProjectLabelEntityTest < Minitest::Test
  # main.kit.test.live.strict is true (the default is true): a live
  # request that fails, or a live test missing an input it needs,
  # fails the test.
  # An account with no record for a test to read skips it either way.
  LIVE_STRICT = true

  def test_create_instance
    testsdk = LinearSDK.test(nil, nil)
    ent = testsdk.ProjectLabel(nil)
    assert !ent.nil?
  end

  def test_list_entities
    seed = {
      "entity" => {
        "project_label" => {
          "l1" => { "id" => "l1" },
          "l2" => { "id" => "l2" },
        },
      },
    }
    items = LinearSDK.test(seed, nil).ProjectLabel(nil).list(nil, nil)
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
        "project_label" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = LinearSDK.test(seed, nil)
    seen = base.ProjectLabel(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = LinearConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = LinearSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.ProjectLabel(nil).stream("list", nil, nil).each do |item|
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
      raise "project_label hook failed"
    end

    def PreUnexpected(ctx)
      @unexpected += 1
    end
  end

  def test_stream_error
    offline = { "net" => { "offline" => true } }
    err = assert_raises(StandardError) do
      LinearSDK.test(offline, nil).ProjectLabel(nil).stream("list", nil, nil).to_a
    end
    assert_match(/offline/, err.message)

    LinearSDK.test(offline, nil).ProjectLabel(nil)
      .stream("list", nil, { "ctrl" => { "throw" => false } }).to_a

    cfg = LinearConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("rbac")
      denied = LinearSDK.test(nil, { "feature" => { "rbac" => { "active" => true, "deny" => true } } })
      err = assert_raises(StandardError) do
        denied.ProjectLabel(nil).stream("list", nil, nil).to_a
      end
      assert_equal "rbac_denied", err.code
    end
  end

  def test_stream_ctrl
    explain = {}
    ctrl = { "explain" => explain }
    LinearSDK.test(nil, nil).ProjectLabel(nil).stream("list", nil, { "ctrl" => ctrl }).to_a
    assert_equal ["explain"], ctrl.keys
    assert_same explain, ctrl["explain"]
    refute_empty explain
  end

  def test_unexpected
    hook = FailHook.new
    client = LinearSDK.new({ "feature" => { "test" => { "active" => true } }, "extend" => [hook] })

    err = assert_raises(StandardError) do
      client.ProjectLabel(nil).list(nil, nil)
    end
    assert_match(/hook failed/, err.message)
    assert_operator hook.unexpected, :>, 0

    fired = hook.unexpected
    assert_nil client.ProjectLabel(nil).list(nil, { "throw" => false })
    assert_operator hook.unexpected, :>, fired
  end

  def test_validate
    cfg = LinearConfig.shared_config
    unless cfg["feature"].is_a?(Hash) && cfg["feature"].key?("validate")
      skip("feature not present in this SDK: validate")
    end
    client = LinearSDK.test(nil, { "feature" => { "validate" => { "active" => true } } })
    err = assert_raises(StandardError) do
      client.ProjectLabel(nil).list({ "after" => 1 }, nil)
    end
    assert_equal "validate_failed", err.code
  end

  def test_basic_flow
    setup = project_label_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "project_label." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    if setup[:live]
      ["after01", "before01", "first01", "include_archived01", "last01", "order_by01", "replace_team_label01"].each do |_live_key|
        if setup[:synthetic_only] || setup[:idmap][_live_key].nil?
          Runner.live_miss(LIVE_STRICT, "Live entity test blocked: needs #{_live_key} via LINEAR_TEST_PROJECT_LABEL_ENTID")
        end
      end
    end
    client = setup[:client]

    # CREATE
    project_label_ref01_ent = client.ProjectLabel(nil)
    project_label_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.project_label"), "project_label_ref01"))
    project_label_ref01_data["after"] = setup[:idmap]["after01"]
    project_label_ref01_data["before"] = setup[:idmap]["before01"]
    project_label_ref01_data["first"] = setup[:idmap]["first01"]
    project_label_ref01_data["include_archived"] = setup[:idmap]["include_archived01"]
    project_label_ref01_data["last"] = setup[:idmap]["last01"]
    project_label_ref01_data["order_by"] = setup[:idmap]["order_by01"]
    project_label_ref01_data["replace_team_label"] = setup[:idmap]["replace_team_label01"]

    project_label_ref01_data_result = project_label_ref01_ent.create(project_label_ref01_data, nil)
    project_label_ref01_data = Helpers.to_map(project_label_ref01_data_result.respond_to?(:data_get) ? project_label_ref01_data_result.data_get : project_label_ref01_data_result)
    assert !project_label_ref01_data.nil?
    assert !project_label_ref01_data["id"].nil?

    # LIST
    project_label_ref01_match = {
      "after" => setup[:idmap]["after01"],
      "before" => setup[:idmap]["before01"],
      "first" => setup[:idmap]["first01"],
      "include_archived" => setup[:idmap]["include_archived01"],
      "last" => setup[:idmap]["last01"],
      "order_by" => setup[:idmap]["order_by01"],
    }

    project_label_ref01_list_result = project_label_ref01_ent.list(project_label_ref01_match, nil)
    assert project_label_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(project_label_ref01_list_result),
      { "id" => project_label_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    project_label_ref01_data_up0_up = {
      "id" => project_label_ref01_data["id"],
      "replace_team_label" => setup[:idmap]["replace_team_label"],
    }

    project_label_ref01_markdef_up0_name = "color"
    project_label_ref01_markdef_up0_value = "Mark01-project_label_ref01_#{setup[:now]}"
    project_label_ref01_data_up0_up[project_label_ref01_markdef_up0_name] = project_label_ref01_markdef_up0_value

    project_label_ref01_resdata_up0_result = project_label_ref01_ent.update(project_label_ref01_data_up0_up, nil)
    project_label_ref01_resdata_up0 = Helpers.to_map(project_label_ref01_resdata_up0_result.respond_to?(:data_get) ? project_label_ref01_resdata_up0_result.data_get : project_label_ref01_resdata_up0_result)
    assert !project_label_ref01_resdata_up0.nil?
    assert_equal project_label_ref01_resdata_up0["id"], project_label_ref01_data_up0_up["id"]
    assert_equal project_label_ref01_resdata_up0[project_label_ref01_markdef_up0_name], project_label_ref01_markdef_up0_value

    # LOAD
    project_label_ref01_match_dt0 = {
      "id" => project_label_ref01_data["id"],
    }
    project_label_ref01_data_dt0_loaded = project_label_ref01_ent.load(project_label_ref01_match_dt0, nil)
    project_label_ref01_data_dt0_load_result = Helpers.to_map(project_label_ref01_data_dt0_loaded.respond_to?(:data_get) ? project_label_ref01_data_dt0_loaded.data_get : project_label_ref01_data_dt0_loaded)
    assert !project_label_ref01_data_dt0_load_result.nil?
    assert_equal project_label_ref01_data_dt0_load_result["id"], project_label_ref01_data["id"]

    # REMOVE
    project_label_ref01_match_rm0 = {
      "id" => project_label_ref01_data["id"],
    }
    project_label_ref01_ent.remove(project_label_ref01_match_rm0, nil)

    # LIST
    project_label_ref01_match_rt0 = {
      "after" => setup[:idmap]["after01"],
      "before" => setup[:idmap]["before01"],
      "first" => setup[:idmap]["first01"],
      "include_archived" => setup[:idmap]["include_archived01"],
      "last" => setup[:idmap]["last01"],
      "order_by" => setup[:idmap]["order_by01"],
    }

    project_label_ref01_list_rt0_result = project_label_ref01_ent.list(project_label_ref01_match_rt0, nil)
    assert project_label_ref01_list_rt0_result.is_a?(Array)

    not_found_item = Vs.select(
      Runner.entity_list_to_data(project_label_ref01_list_rt0_result),
      { "id" => project_label_ref01_data["id"] })
    assert Vs.isempty(not_found_item)

  end
end

def project_label_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "project_label", "ProjectLabelTestData.json")
  entity_data_source = File.read(entity_data_file, encoding: "UTF-8")
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = LinearSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["project_label01", "project_label02", "project_label03", "after01", "before01", "first01", "include_archived01", "last01", "order_by01", "replace_team_label01"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Whether *_ENTID supplied the idmap, read before env_override consumes
  # it: without it, the ids a live flow binds are the fixture's synthetic ones.
  entid_env_raw = ENV["LINEAR_TEST_PROJECT_LABEL_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "LINEAR_TEST_PROJECT_LABEL_ENTID" => idmap,
    "LINEAR_TEST_LIVE" => "FALSE",
    "LINEAR_TEST_EXPLAIN" => "FALSE",
    "LINEAR_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["LINEAR_TEST_PROJECT_LABEL_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["replace_team_label"].nil?
    idmap_resolved["replace_team_label"] = idmap_resolved["replace_team_label01"]
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
