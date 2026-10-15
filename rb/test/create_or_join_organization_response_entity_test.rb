# CreateOrJoinOrganizationResponse entity test

require "minitest/autorun"
require "json"
require_relative "../Linear_sdk"
require_relative "runner"

class CreateOrJoinOrganizationResponseEntityTest < Minitest::Test
  # main.kit.test.live.strict is true (the default is true): a live
  # request that fails, or a live test missing an input it needs,
  # fails the test.
  # An account with no record for a test to read skips it either way.
  LIVE_STRICT = true

  def test_create_instance
    testsdk = LinearSDK.test(nil, nil)
    ent = testsdk.CreateOrJoinOrganizationResponse(nil)
    assert !ent.nil?
  end

  def test_validate
    cfg = LinearConfig.shared_config
    unless cfg["feature"].is_a?(Hash) && cfg["feature"].key?("validate")
      skip("feature not present in this SDK: validate")
    end
    client = LinearSDK.test(nil, { "feature" => { "validate" => { "active" => true } } })
    err = assert_raises(StandardError) do
      client.CreateOrJoinOrganizationResponse(nil).update({ "organization_id" => 1 }, nil)
    end
    assert_equal "validate_failed", err.code
  end

  def test_basic_flow
    setup = create_or_join_organization_response_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["update"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "create_or_join_organization_response." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    if setup[:live]
      ["organization01"].each do |_live_key|
        if setup[:synthetic_only] || setup[:idmap][_live_key].nil?
          Runner.live_miss(LIVE_STRICT, "Live entity test blocked: needs #{_live_key} via LINEAR_TEST_CREATE_OR_JOIN_ORGANIZATION_RESPONSE_ENTID")
        end
      end
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    create_or_join_organization_response_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.create_or_join_organization_response")))
    create_or_join_organization_response_ref01_data = nil
    if create_or_join_organization_response_ref01_data_raw.length > 0
      create_or_join_organization_response_ref01_data = Helpers.to_map(create_or_join_organization_response_ref01_data_raw[0][1])
    end

    # UPDATE
    create_or_join_organization_response_ref01_ent = client.CreateOrJoinOrganizationResponse(nil)
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
  entity_data_source = File.read(entity_data_file, encoding: "UTF-8")
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

  # Whether *_ENTID supplied the idmap, read before env_override consumes
  # it: without it, the ids a live flow binds are the fixture's synthetic ones.
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
