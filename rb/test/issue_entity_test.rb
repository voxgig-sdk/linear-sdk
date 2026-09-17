# Issue entity test

require "minitest/autorun"
require "json"
require_relative "../Linear_sdk"
require_relative "runner"

class IssueEntityTest < Minitest::Test
  def test_create_instance
    testsdk = LinearSDK.test(nil, nil)
    ent = testsdk.Issue(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "issue" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = LinearSDK.test(seed, nil)
    seen = base.Issue(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = LinearConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = LinearSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.Issue(nil).stream("list", nil, nil).each do |item|
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
    setup = issue_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "issue." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set LINEAR_TEST_ISSUE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    issue_ref01_ent = client.Issue(nil)
    issue_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.issue"), "issue_ref01"))
    issue_ref01_data["after"] = setup[:idmap]["after01"]
    issue_ref01_data["attachment_id"] = setup[:idmap]["attachment01"]
    issue_ref01_data["before"] = setup[:idmap]["before01"]
    issue_ref01_data["branch_name"] = setup[:idmap]["branch_name01"]
    issue_ref01_data["description"] = setup[:idmap]["description01"]
    issue_ref01_data["file_key"] = setup[:idmap]["file_key01"]
    issue_ref01_data["first"] = setup[:idmap]["first01"]
    issue_ref01_data["include_archived"] = setup[:idmap]["include_archived01"]
    issue_ref01_data["label_id"] = setup[:idmap]["label01"]
    issue_ref01_data["last"] = setup[:idmap]["last01"]
    issue_ref01_data["order_by"] = setup[:idmap]["order_by01"]
    issue_ref01_data["permanently_delete"] = setup[:idmap]["permanently_delete01"]
    issue_ref01_data["query"] = setup[:idmap]["query01"]
    issue_ref01_data["reminder_at"] = setup[:idmap]["reminder_at01"]
    issue_ref01_data["trash"] = setup[:idmap]["trash01"]
    issue_ref01_data["user_email"] = setup[:idmap]["user_email01"]
    issue_ref01_data["user_id"] = setup[:idmap]["user01"]

    issue_ref01_data_result = issue_ref01_ent.create(issue_ref01_data, nil)
    issue_ref01_data = Helpers.to_map(issue_ref01_data_result.respond_to?(:data_get) ? issue_ref01_data_result.data_get : issue_ref01_data_result)
    assert !issue_ref01_data.nil?
    assert !issue_ref01_data["id"].nil?

    # LIST
    issue_ref01_match = {
      "after" => setup[:idmap]["after01"],
      "before" => setup[:idmap]["before01"],
      "first" => setup[:idmap]["first01"],
      "include_archived" => setup[:idmap]["include_archived01"],
      "last" => setup[:idmap]["last01"],
      "order_by" => setup[:idmap]["order_by01"],
    }

    issue_ref01_list_result = issue_ref01_ent.list(issue_ref01_match, nil)
    assert issue_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(issue_ref01_list_result),
      { "id" => issue_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    issue_ref01_data_up0_up = {
      "id" => issue_ref01_data["id"],
    }

    issue_ref01_markdef_up0_name = "branchName"
    issue_ref01_markdef_up0_value = "Mark01-issue_ref01_#{setup[:now]}"
    issue_ref01_data_up0_up[issue_ref01_markdef_up0_name] = issue_ref01_markdef_up0_value

    issue_ref01_resdata_up0_result = issue_ref01_ent.update(issue_ref01_data_up0_up, nil)
    issue_ref01_resdata_up0 = Helpers.to_map(issue_ref01_resdata_up0_result.respond_to?(:data_get) ? issue_ref01_resdata_up0_result.data_get : issue_ref01_resdata_up0_result)
    assert !issue_ref01_resdata_up0.nil?
    assert_equal issue_ref01_resdata_up0["id"], issue_ref01_data_up0_up["id"]
    assert_equal issue_ref01_resdata_up0[issue_ref01_markdef_up0_name], issue_ref01_markdef_up0_value

    # LOAD
    issue_ref01_match_dt0 = {
      "id" => issue_ref01_data["id"],
    }
    issue_ref01_data_dt0_loaded = issue_ref01_ent.load(issue_ref01_match_dt0, nil)
    issue_ref01_data_dt0_load_result = Helpers.to_map(issue_ref01_data_dt0_loaded.respond_to?(:data_get) ? issue_ref01_data_dt0_loaded.data_get : issue_ref01_data_dt0_loaded)
    assert !issue_ref01_data_dt0_load_result.nil?
    assert_equal issue_ref01_data_dt0_load_result["id"], issue_ref01_data["id"]

    # REMOVE
    issue_ref01_match_rm0 = {
      "id" => issue_ref01_data["id"],
    }
    issue_ref01_ent.remove(issue_ref01_match_rm0, nil)

    # LIST
    issue_ref01_match_rt0 = {
      "after" => setup[:idmap]["after01"],
      "before" => setup[:idmap]["before01"],
      "first" => setup[:idmap]["first01"],
      "include_archived" => setup[:idmap]["include_archived01"],
      "last" => setup[:idmap]["last01"],
      "order_by" => setup[:idmap]["order_by01"],
    }

    issue_ref01_list_rt0_result = issue_ref01_ent.list(issue_ref01_match_rt0, nil)
    assert issue_ref01_list_rt0_result.is_a?(Array)

    not_found_item = Vs.select(
      Runner.entity_list_to_data(issue_ref01_list_rt0_result),
      { "id" => issue_ref01_data["id"] })
    assert Vs.isempty(not_found_item)

  end
end

def issue_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "issue", "IssueTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = LinearSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["issue01", "issue02", "issue03", "after01", "attachment01", "before01", "branch_name01", "description01", "file_key01", "first01", "include_archived01", "label01", "last01", "order_by01", "permanently_delete01", "query01", "reminder_at01", "trash01", "user_email01", "user01"],
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
  entid_env_raw = ENV["LINEAR_TEST_ISSUE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "LINEAR_TEST_ISSUE_ENTID" => idmap,
    "LINEAR_TEST_LIVE" => "FALSE",
    "LINEAR_TEST_EXPLAIN" => "FALSE",
    "LINEAR_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["LINEAR_TEST_ISSUE_ENTID"])
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
