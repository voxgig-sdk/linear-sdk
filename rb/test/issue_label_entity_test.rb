# IssueLabel entity test

require "minitest/autorun"
require "json"
require_relative "../Linear_sdk"
require_relative "runner"

class IssueLabelEntityTest < Minitest::Test
  def test_create_instance
    testsdk = LinearSDK.test(nil, nil)
    ent = testsdk.IssueLabel(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "issue_label" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = LinearSDK.test(seed, nil)
    seen = base.IssueLabel(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = LinearConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = LinearSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.IssueLabel(nil).stream("list", nil, nil).each do |item|
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
    setup = issue_label_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "issue_label." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set LINEAR_TEST_ISSUE_LABEL_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    issue_label_ref01_ent = client.IssueLabel(nil)
    issue_label_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.issue_label"), "issue_label_ref01"))
    issue_label_ref01_data["after"] = setup[:idmap]["after01"]
    issue_label_ref01_data["before"] = setup[:idmap]["before01"]
    issue_label_ref01_data["first"] = setup[:idmap]["first01"]
    issue_label_ref01_data["include_archived"] = setup[:idmap]["include_archived01"]
    issue_label_ref01_data["last"] = setup[:idmap]["last01"]
    issue_label_ref01_data["order_by"] = setup[:idmap]["order_by01"]
    issue_label_ref01_data["replace_team_label"] = setup[:idmap]["replace_team_label01"]

    issue_label_ref01_data_result = issue_label_ref01_ent.create(issue_label_ref01_data, nil)
    issue_label_ref01_data = Helpers.to_map(issue_label_ref01_data_result.respond_to?(:data_get) ? issue_label_ref01_data_result.data_get : issue_label_ref01_data_result)
    assert !issue_label_ref01_data.nil?
    assert !issue_label_ref01_data["id"].nil?

    # LIST
    issue_label_ref01_match = {
      "after" => setup[:idmap]["after01"],
      "before" => setup[:idmap]["before01"],
      "first" => setup[:idmap]["first01"],
      "include_archived" => setup[:idmap]["include_archived01"],
      "last" => setup[:idmap]["last01"],
      "order_by" => setup[:idmap]["order_by01"],
    }

    issue_label_ref01_list_result = issue_label_ref01_ent.list(issue_label_ref01_match, nil)
    assert issue_label_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(issue_label_ref01_list_result),
      { "id" => issue_label_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    issue_label_ref01_data_up0_up = {
      "id" => issue_label_ref01_data["id"],
      "replace_team_label" => setup[:idmap]["replace_team_label"],
    }

    issue_label_ref01_markdef_up0_name = "color"
    issue_label_ref01_markdef_up0_value = "Mark01-issue_label_ref01_#{setup[:now]}"
    issue_label_ref01_data_up0_up[issue_label_ref01_markdef_up0_name] = issue_label_ref01_markdef_up0_value

    issue_label_ref01_resdata_up0_result = issue_label_ref01_ent.update(issue_label_ref01_data_up0_up, nil)
    issue_label_ref01_resdata_up0 = Helpers.to_map(issue_label_ref01_resdata_up0_result.respond_to?(:data_get) ? issue_label_ref01_resdata_up0_result.data_get : issue_label_ref01_resdata_up0_result)
    assert !issue_label_ref01_resdata_up0.nil?
    assert_equal issue_label_ref01_resdata_up0["id"], issue_label_ref01_data_up0_up["id"]
    assert_equal issue_label_ref01_resdata_up0[issue_label_ref01_markdef_up0_name], issue_label_ref01_markdef_up0_value

    # LOAD
    issue_label_ref01_match_dt0 = {
      "id" => issue_label_ref01_data["id"],
    }
    issue_label_ref01_data_dt0_loaded = issue_label_ref01_ent.load(issue_label_ref01_match_dt0, nil)
    issue_label_ref01_data_dt0_load_result = Helpers.to_map(issue_label_ref01_data_dt0_loaded.respond_to?(:data_get) ? issue_label_ref01_data_dt0_loaded.data_get : issue_label_ref01_data_dt0_loaded)
    assert !issue_label_ref01_data_dt0_load_result.nil?
    assert_equal issue_label_ref01_data_dt0_load_result["id"], issue_label_ref01_data["id"]

    # REMOVE
    issue_label_ref01_match_rm0 = {
      "id" => issue_label_ref01_data["id"],
    }
    issue_label_ref01_ent.remove(issue_label_ref01_match_rm0, nil)

    # LIST
    issue_label_ref01_match_rt0 = {
      "after" => setup[:idmap]["after01"],
      "before" => setup[:idmap]["before01"],
      "first" => setup[:idmap]["first01"],
      "include_archived" => setup[:idmap]["include_archived01"],
      "last" => setup[:idmap]["last01"],
      "order_by" => setup[:idmap]["order_by01"],
    }

    issue_label_ref01_list_rt0_result = issue_label_ref01_ent.list(issue_label_ref01_match_rt0, nil)
    assert issue_label_ref01_list_rt0_result.is_a?(Array)

    not_found_item = Vs.select(
      Runner.entity_list_to_data(issue_label_ref01_list_rt0_result),
      { "id" => issue_label_ref01_data["id"] })
    assert Vs.isempty(not_found_item)

  end
end

def issue_label_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "issue_label", "IssueLabelTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = LinearSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["issue_label01", "issue_label02", "issue_label03", "after01", "before01", "first01", "include_archived01", "last01", "order_by01", "replace_team_label01"],
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
  entid_env_raw = ENV["LINEAR_TEST_ISSUE_LABEL_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "LINEAR_TEST_ISSUE_LABEL_ENTID" => idmap,
    "LINEAR_TEST_LIVE" => "FALSE",
    "LINEAR_TEST_EXPLAIN" => "FALSE",
    "LINEAR_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["LINEAR_TEST_ISSUE_LABEL_ENTID"])
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
