# IssueImport entity test

require "minitest/autorun"
require "json"
require_relative "../Linear_sdk"
require_relative "runner"

class IssueImportEntityTest < Minitest::Test
  def test_create_instance
    testsdk = LinearSDK.test(nil, nil)
    ent = testsdk.IssueImport(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = issue_import_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "issue_import." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set LINEAR_TEST_ISSUE_IMPORT_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    issue_import_ref01_ent = client.IssueImport(nil)
    issue_import_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.issue_import"), "issue_import_ref01"))
    issue_import_ref01_data["github_label"] = setup[:idmap]["github_label01"]
    issue_import_ref01_data["github_repo_id"] = setup[:idmap]["github_repo01"]
    issue_import_ref01_data["include_closed_issue"] = setup[:idmap]["include_closed_issue01"]
    issue_import_ref01_data["instant_process"] = setup[:idmap]["instant_process01"]
    issue_import_ref01_data["issue_import_id"] = setup[:idmap]["issue_import01"]
    issue_import_ref01_data["linear_source_organization_id"] = setup[:idmap]["linear_source_organization01"]
    issue_import_ref01_data["mapping"] = setup[:idmap]["mapping01"]
    issue_import_ref01_data["team_id"] = setup[:idmap]["team01"]
    issue_import_ref01_data["team_name"] = setup[:idmap]["team_name01"]

    issue_import_ref01_data_result = issue_import_ref01_ent.create(issue_import_ref01_data, nil)
    issue_import_ref01_data = Helpers.to_map(issue_import_ref01_data_result.respond_to?(:data_get) ? issue_import_ref01_data_result.data_get : issue_import_ref01_data_result)
    assert !issue_import_ref01_data.nil?
    assert !issue_import_ref01_data["id"].nil?

    # UPDATE
    issue_import_ref01_data_up0_up = {
      "id" => issue_import_ref01_data["id"],
      "linear_source_organization_id" => setup[:idmap]["linear_source_organization_id"],
    }

    issue_import_ref01_markdef_up0_name = "creatorId"
    issue_import_ref01_markdef_up0_value = "Mark01-issue_import_ref01_#{setup[:now]}"
    issue_import_ref01_data_up0_up[issue_import_ref01_markdef_up0_name] = issue_import_ref01_markdef_up0_value

    issue_import_ref01_resdata_up0_result = issue_import_ref01_ent.update(issue_import_ref01_data_up0_up, nil)
    issue_import_ref01_resdata_up0 = Helpers.to_map(issue_import_ref01_resdata_up0_result.respond_to?(:data_get) ? issue_import_ref01_resdata_up0_result.data_get : issue_import_ref01_resdata_up0_result)
    assert !issue_import_ref01_resdata_up0.nil?
    assert_equal issue_import_ref01_resdata_up0["id"], issue_import_ref01_data_up0_up["id"]
    assert_equal issue_import_ref01_resdata_up0[issue_import_ref01_markdef_up0_name], issue_import_ref01_markdef_up0_value

    # REMOVE
    issue_import_ref01_match_rm0 = {
      "id" => issue_import_ref01_data["id"],
    }
    issue_import_ref01_ent.remove(issue_import_ref01_match_rm0, nil)

  end
end

def issue_import_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "issue_import", "IssueImportTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = LinearSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["issue_import01", "issue_import02", "issue_import03", "github_label01", "github_repo01", "include_closed_issue01", "instant_process01", "linear_source_organization01", "mapping01", "team01", "team_name01"],
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
  entid_env_raw = ENV["LINEAR_TEST_ISSUE_IMPORT_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "LINEAR_TEST_ISSUE_IMPORT_ENTID" => idmap,
    "LINEAR_TEST_LIVE" => "FALSE",
    "LINEAR_TEST_EXPLAIN" => "FALSE",
    "LINEAR_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["LINEAR_TEST_ISSUE_IMPORT_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["linear_source_organization_id"].nil?
    idmap_resolved["linear_source_organization_id"] = idmap_resolved["linear_source_organization01"]
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
