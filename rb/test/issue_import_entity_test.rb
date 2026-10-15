# IssueImport entity test

require "minitest/autorun"
require "json"
require_relative "../Linear_sdk"
require_relative "runner"

class IssueImportEntityTest < Minitest::Test
  # main.kit.test.live.strict is true (the default is true): a live
  # request that fails, or a live test missing an input it needs,
  # fails the test.
  # An account with no record for a test to read skips it either way.
  LIVE_STRICT = true

  def test_create_instance
    testsdk = LinearSDK.test(nil, nil)
    ent = testsdk.IssueImport(nil)
    assert !ent.nil?
  end

  def test_validate
    cfg = LinearConfig.shared_config
    unless cfg["feature"].is_a?(Hash) && cfg["feature"].key?("validate")
      skip("feature not present in this SDK: validate")
    end
    client = LinearSDK.test(nil, { "feature" => { "validate" => { "active" => true } } })
    err = assert_raises(StandardError) do
      client.IssueImport(nil).update({ "id" => 1 }, nil)
    end
    assert_equal "validate_failed", err.code
  end

  def test_basic_flow
    setup = issue_import_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["update", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "issue_import." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    if setup[:live]
      ["linear_source_organization01"].each do |_live_key|
        if setup[:synthetic_only] || setup[:idmap][_live_key].nil?
          Runner.live_miss(LIVE_STRICT, "Live entity test blocked: needs #{_live_key} via LINEAR_TEST_ISSUE_IMPORT_ENTID")
        end
      end
    end
    if setup[:live]
      Runner.live_miss(LIVE_STRICT, "Live entity test blocked: " + "the flow updates a issue_import record it did not create")
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    issue_import_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.issue_import")))
    issue_import_ref01_data = nil
    if issue_import_ref01_data_raw.length > 0
      issue_import_ref01_data = Helpers.to_map(issue_import_ref01_data_raw[0][1])
    end

    # UPDATE
    issue_import_ref01_ent = client.IssueImport(nil)
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

  end
end

def issue_import_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "issue_import", "IssueImportTestData.json")
  entity_data_source = File.read(entity_data_file, encoding: "UTF-8")
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = LinearSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["issue_import01", "issue_import02", "issue_import03", "linear_source_organization01"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Whether *_ENTID supplied the idmap, read before env_override consumes
  # it: without it, the ids a live flow binds are the fixture's synthetic ones.
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
