# OrganizationDomain entity test

require "minitest/autorun"
require "json"
require_relative "../Linear_sdk"
require_relative "runner"

class OrganizationDomainEntityTest < Minitest::Test
  def test_create_instance
    testsdk = LinearSDK.test(nil, nil)
    ent = testsdk.OrganizationDomain(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = organization_domain_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "organization_domain." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set LINEAR_TEST_ORGANIZATION_DOMAIN_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    organization_domain_ref01_ent = client.OrganizationDomain(nil)
    organization_domain_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.organization_domain"), "organization_domain_ref01"))

    organization_domain_ref01_data_result = organization_domain_ref01_ent.create(organization_domain_ref01_data, nil)
    organization_domain_ref01_data = Helpers.to_map(organization_domain_ref01_data_result.respond_to?(:data_get) ? organization_domain_ref01_data_result.data_get : organization_domain_ref01_data_result)
    assert !organization_domain_ref01_data.nil?
    assert !organization_domain_ref01_data["id"].nil?

    # UPDATE
    organization_domain_ref01_data_up0_up = {
      "id" => organization_domain_ref01_data["id"],
    }

    organization_domain_ref01_markdef_up0_name = "authType"
    organization_domain_ref01_markdef_up0_value = "Mark01-organization_domain_ref01_#{setup[:now]}"
    organization_domain_ref01_data_up0_up[organization_domain_ref01_markdef_up0_name] = organization_domain_ref01_markdef_up0_value

    organization_domain_ref01_resdata_up0_result = organization_domain_ref01_ent.update(organization_domain_ref01_data_up0_up, nil)
    organization_domain_ref01_resdata_up0 = Helpers.to_map(organization_domain_ref01_resdata_up0_result.respond_to?(:data_get) ? organization_domain_ref01_resdata_up0_result.data_get : organization_domain_ref01_resdata_up0_result)
    assert !organization_domain_ref01_resdata_up0.nil?
    assert_equal organization_domain_ref01_resdata_up0["id"], organization_domain_ref01_data_up0_up["id"]
    assert_equal organization_domain_ref01_resdata_up0[organization_domain_ref01_markdef_up0_name], organization_domain_ref01_markdef_up0_value

    # REMOVE
    organization_domain_ref01_match_rm0 = {
      "id" => organization_domain_ref01_data["id"],
    }
    organization_domain_ref01_ent.remove(organization_domain_ref01_match_rm0, nil)

  end
end

def organization_domain_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "organization_domain", "OrganizationDomainTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = LinearSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["organization_domain01", "organization_domain02", "organization_domain03"],
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
  entid_env_raw = ENV["LINEAR_TEST_ORGANIZATION_DOMAIN_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "LINEAR_TEST_ORGANIZATION_DOMAIN_ENTID" => idmap,
    "LINEAR_TEST_LIVE" => "FALSE",
    "LINEAR_TEST_EXPLAIN" => "FALSE",
    "LINEAR_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["LINEAR_TEST_ORGANIZATION_DOMAIN_ENTID"])
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
