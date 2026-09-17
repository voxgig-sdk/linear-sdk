# CreateOrJoinOrganizationResponse entity test

require "minitest/autorun"
require "json"
require_relative "../Linear_sdk"
require_relative "runner"

class CreateOrJoinOrganizationResponseEntityTest < Minitest::Test
  def test_create_instance
    testsdk = LinearSDK.test(nil, nil)
    ent = testsdk.CreateOrJoinOrganizationResponse(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = create_or_join_organization_response_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "create_or_join_organization_response." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set LINEAR_TEST_CREATE_OR_JOIN_ORGANIZATION_RESPONSE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    create_or_join_organization_response_ref01_ent = client.CreateOrJoinOrganizationResponse(nil)
    create_or_join_organization_response_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.create_or_join_organization_response"), "create_or_join_organization_response_ref01"))
    create_or_join_organization_response_ref01_data["organization_id"] = setup[:idmap]["organization01"]

    create_or_join_organization_response_ref01_data_result = create_or_join_organization_response_ref01_ent.create(create_or_join_organization_response_ref01_data, nil)
    create_or_join_organization_response_ref01_data = Helpers.to_map(create_or_join_organization_response_ref01_data_result.respond_to?(:data_get) ? create_or_join_organization_response_ref01_data_result.data_get : create_or_join_organization_response_ref01_data_result)
    assert !create_or_join_organization_response_ref01_data.nil?

    # UPDATE
    create_or_join_organization_response_ref01_data_up0_up = {
      "organization_id" => setup[:idmap]["organization_id"],
    }

    create_or_join_organization_response_ref01_resdata_up0_result = create_or_join_organization_response_ref01_ent.update(create_or_join_organization_response_ref01_data_up0_up, nil)
    create_or_join_organization_response_ref01_resdata_up0 = Helpers.to_map(create_or_join_organization_response_ref01_resdata_up0_result.respond_to?(:data_get) ? create_or_join_organization_response_ref01_resdata_up0_result.data_get : create_or_join_organization_response_ref01_resdata_up0_result)
    assert !create_or_join_organization_response_ref01_resdata_up0.nil?

  end
end

def create_or_join_organization_response_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "create_or_join_organization_response", "CreateOrJoinOrganizationResponseTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = LinearSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["create_or_join_organization_response01", "create_or_join_organization_response02", "create_or_join_organization_response03", "organization01"],
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
  entid_env_raw = ENV["LINEAR_TEST_CREATE_OR_JOIN_ORGANIZATION_RESPONSE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "LINEAR_TEST_CREATE_OR_JOIN_ORGANIZATION_RESPONSE_ENTID" => idmap,
    "LINEAR_TEST_LIVE" => "FALSE",
    "LINEAR_TEST_EXPLAIN" => "FALSE",
    "LINEAR_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["LINEAR_TEST_CREATE_OR_JOIN_ORGANIZATION_RESPONSE_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["organization_id"].nil?
    idmap_resolved["organization_id"] = idmap_resolved["organization01"]
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
