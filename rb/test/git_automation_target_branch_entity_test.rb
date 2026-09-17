# GitAutomationTargetBranch entity test

require "minitest/autorun"
require "json"
require_relative "../Linear_sdk"
require_relative "runner"

class GitAutomationTargetBranchEntityTest < Minitest::Test
  def test_create_instance
    testsdk = LinearSDK.test(nil, nil)
    ent = testsdk.GitAutomationTargetBranch(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = git_automation_target_branch_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "git_automation_target_branch." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set LINEAR_TEST_GIT_AUTOMATION_TARGET_BRANCH_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    git_automation_target_branch_ref01_ent = client.GitAutomationTargetBranch(nil)
    git_automation_target_branch_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.git_automation_target_branch"), "git_automation_target_branch_ref01"))

    git_automation_target_branch_ref01_data_result = git_automation_target_branch_ref01_ent.create(git_automation_target_branch_ref01_data, nil)
    git_automation_target_branch_ref01_data = Helpers.to_map(git_automation_target_branch_ref01_data_result.respond_to?(:data_get) ? git_automation_target_branch_ref01_data_result.data_get : git_automation_target_branch_ref01_data_result)
    assert !git_automation_target_branch_ref01_data.nil?
    assert !git_automation_target_branch_ref01_data["id"].nil?

    # UPDATE
    git_automation_target_branch_ref01_data_up0_up = {
      "id" => git_automation_target_branch_ref01_data["id"],
    }

    git_automation_target_branch_ref01_markdef_up0_name = "branchPattern"
    git_automation_target_branch_ref01_markdef_up0_value = "Mark01-git_automation_target_branch_ref01_#{setup[:now]}"
    git_automation_target_branch_ref01_data_up0_up[git_automation_target_branch_ref01_markdef_up0_name] = git_automation_target_branch_ref01_markdef_up0_value

    git_automation_target_branch_ref01_resdata_up0_result = git_automation_target_branch_ref01_ent.update(git_automation_target_branch_ref01_data_up0_up, nil)
    git_automation_target_branch_ref01_resdata_up0 = Helpers.to_map(git_automation_target_branch_ref01_resdata_up0_result.respond_to?(:data_get) ? git_automation_target_branch_ref01_resdata_up0_result.data_get : git_automation_target_branch_ref01_resdata_up0_result)
    assert !git_automation_target_branch_ref01_resdata_up0.nil?
    assert_equal git_automation_target_branch_ref01_resdata_up0["id"], git_automation_target_branch_ref01_data_up0_up["id"]
    assert_equal git_automation_target_branch_ref01_resdata_up0[git_automation_target_branch_ref01_markdef_up0_name], git_automation_target_branch_ref01_markdef_up0_value

    # REMOVE
    git_automation_target_branch_ref01_match_rm0 = {
      "id" => git_automation_target_branch_ref01_data["id"],
    }
    git_automation_target_branch_ref01_ent.remove(git_automation_target_branch_ref01_match_rm0, nil)

  end
end

def git_automation_target_branch_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "git_automation_target_branch", "GitAutomationTargetBranchTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = LinearSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["git_automation_target_branch01", "git_automation_target_branch02", "git_automation_target_branch03"],
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
  entid_env_raw = ENV["LINEAR_TEST_GIT_AUTOMATION_TARGET_BRANCH_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "LINEAR_TEST_GIT_AUTOMATION_TARGET_BRANCH_ENTID" => idmap,
    "LINEAR_TEST_LIVE" => "FALSE",
    "LINEAR_TEST_EXPLAIN" => "FALSE",
    "LINEAR_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["LINEAR_TEST_GIT_AUTOMATION_TARGET_BRANCH_ENTID"])
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
