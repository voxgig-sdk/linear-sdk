# GitHubIntegrationConnectDetail entity test

require "minitest/autorun"
require "json"
require_relative "../Linear_sdk"
require_relative "runner"

class GitHubIntegrationConnectDetailEntityTest < Minitest::Test
  def test_create_instance
    testsdk = LinearSDK.test(nil, nil)
    ent = testsdk.GitHubIntegrationConnectDetail(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = git_hub_integration_connect_detail_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "git_hub_integration_connect_detail." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set LINEAR_TEST_GIT_HUB_INTEGRATION_CONNECT_DETAIL_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    git_hub_integration_connect_detail_ref01_ent = client.GitHubIntegrationConnectDetail(nil)
    git_hub_integration_connect_detail_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.git_hub_integration_connect_detail"), "git_hub_integration_connect_detail_ref01"))
    git_hub_integration_connect_detail_ref01_data["code"] = setup[:idmap]["code01"]
    git_hub_integration_connect_detail_ref01_data["custom_view_id"] = setup[:idmap]["custom_view01"]
    git_hub_integration_connect_detail_ref01_data["initiative_id"] = setup[:idmap]["initiative01"]
    git_hub_integration_connect_detail_ref01_data["integration_id"] = setup[:idmap]["integration01"]
    git_hub_integration_connect_detail_ref01_data["project_id"] = setup[:idmap]["project01"]
    git_hub_integration_connect_detail_ref01_data["redirect_uri"] = setup[:idmap]["redirect_uri01"]
    git_hub_integration_connect_detail_ref01_data["service"] = setup[:idmap]["service01"]
    git_hub_integration_connect_detail_ref01_data["should_use_v2_auth"] = setup[:idmap]["should_use_v2_auth01"]
    git_hub_integration_connect_detail_ref01_data["team_id"] = setup[:idmap]["team01"]

    git_hub_integration_connect_detail_ref01_data_result = git_hub_integration_connect_detail_ref01_ent.create(git_hub_integration_connect_detail_ref01_data, nil)
    git_hub_integration_connect_detail_ref01_data = Helpers.to_map(git_hub_integration_connect_detail_ref01_data_result.respond_to?(:data_get) ? git_hub_integration_connect_detail_ref01_data_result.data_get : git_hub_integration_connect_detail_ref01_data_result)
    assert !git_hub_integration_connect_detail_ref01_data.nil?

    # UPDATE
    git_hub_integration_connect_detail_ref01_data_up0_up = {
      "integration_id" => setup[:idmap]["integration_id"],
    }

    git_hub_integration_connect_detail_ref01_markdef_up0_name = "lostRepositoryNames"
    git_hub_integration_connect_detail_ref01_markdef_up0_value = "Mark01-git_hub_integration_connect_detail_ref01_#{setup[:now]}"
    git_hub_integration_connect_detail_ref01_data_up0_up[git_hub_integration_connect_detail_ref01_markdef_up0_name] = git_hub_integration_connect_detail_ref01_markdef_up0_value

    git_hub_integration_connect_detail_ref01_resdata_up0_result = git_hub_integration_connect_detail_ref01_ent.update(git_hub_integration_connect_detail_ref01_data_up0_up, nil)
    git_hub_integration_connect_detail_ref01_resdata_up0 = Helpers.to_map(git_hub_integration_connect_detail_ref01_resdata_up0_result.respond_to?(:data_get) ? git_hub_integration_connect_detail_ref01_resdata_up0_result.data_get : git_hub_integration_connect_detail_ref01_resdata_up0_result)
    assert !git_hub_integration_connect_detail_ref01_resdata_up0.nil?
    assert_equal git_hub_integration_connect_detail_ref01_resdata_up0[git_hub_integration_connect_detail_ref01_markdef_up0_name], git_hub_integration_connect_detail_ref01_markdef_up0_value

  end
end

def git_hub_integration_connect_detail_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "git_hub_integration_connect_detail", "GitHubIntegrationConnectDetailTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = LinearSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["git_hub_integration_connect_detail01", "git_hub_integration_connect_detail02", "git_hub_integration_connect_detail03", "code01", "custom_view01", "initiative01", "integration01", "project01", "redirect_uri01", "service01", "should_use_v2_auth01", "team01"],
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
  entid_env_raw = ENV["LINEAR_TEST_GIT_HUB_INTEGRATION_CONNECT_DETAIL_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "LINEAR_TEST_GIT_HUB_INTEGRATION_CONNECT_DETAIL_ENTID" => idmap,
    "LINEAR_TEST_LIVE" => "FALSE",
    "LINEAR_TEST_EXPLAIN" => "FALSE",
    "LINEAR_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["LINEAR_TEST_GIT_HUB_INTEGRATION_CONNECT_DETAIL_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["integration_id"].nil?
    idmap_resolved["integration_id"] = idmap_resolved["integration01"]
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
