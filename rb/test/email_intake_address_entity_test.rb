# EmailIntakeAddress entity test

require "minitest/autorun"
require "json"
require_relative "../Linear_sdk"
require_relative "runner"

class EmailIntakeAddressEntityTest < Minitest::Test
  def test_create_instance
    testsdk = LinearSDK.test(nil, nil)
    ent = testsdk.EmailIntakeAddress(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = email_intake_address_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "email_intake_address." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set LINEAR_TEST_EMAIL_INTAKE_ADDRESS_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    email_intake_address_ref01_ent = client.EmailIntakeAddress(nil)
    email_intake_address_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.email_intake_address"), "email_intake_address_ref01"))

    email_intake_address_ref01_data_result = email_intake_address_ref01_ent.create(email_intake_address_ref01_data, nil)
    email_intake_address_ref01_data = Helpers.to_map(email_intake_address_ref01_data_result.respond_to?(:data_get) ? email_intake_address_ref01_data_result.data_get : email_intake_address_ref01_data_result)
    assert !email_intake_address_ref01_data.nil?
    assert !email_intake_address_ref01_data["id"].nil?

    # UPDATE
    email_intake_address_ref01_data_up0_up = {
      "id" => email_intake_address_ref01_data["id"],
    }

    email_intake_address_ref01_markdef_up0_name = "address"
    email_intake_address_ref01_markdef_up0_value = "Mark01-email_intake_address_ref01_#{setup[:now]}"
    email_intake_address_ref01_data_up0_up[email_intake_address_ref01_markdef_up0_name] = email_intake_address_ref01_markdef_up0_value

    email_intake_address_ref01_resdata_up0_result = email_intake_address_ref01_ent.update(email_intake_address_ref01_data_up0_up, nil)
    email_intake_address_ref01_resdata_up0 = Helpers.to_map(email_intake_address_ref01_resdata_up0_result.respond_to?(:data_get) ? email_intake_address_ref01_resdata_up0_result.data_get : email_intake_address_ref01_resdata_up0_result)
    assert !email_intake_address_ref01_resdata_up0.nil?
    assert_equal email_intake_address_ref01_resdata_up0["id"], email_intake_address_ref01_data_up0_up["id"]
    assert_equal email_intake_address_ref01_resdata_up0[email_intake_address_ref01_markdef_up0_name], email_intake_address_ref01_markdef_up0_value

    # LOAD
    email_intake_address_ref01_match_dt0 = {
      "id" => email_intake_address_ref01_data["id"],
    }
    email_intake_address_ref01_data_dt0_loaded = email_intake_address_ref01_ent.load(email_intake_address_ref01_match_dt0, nil)
    email_intake_address_ref01_data_dt0_load_result = Helpers.to_map(email_intake_address_ref01_data_dt0_loaded.respond_to?(:data_get) ? email_intake_address_ref01_data_dt0_loaded.data_get : email_intake_address_ref01_data_dt0_loaded)
    assert !email_intake_address_ref01_data_dt0_load_result.nil?
    assert_equal email_intake_address_ref01_data_dt0_load_result["id"], email_intake_address_ref01_data["id"]

    # REMOVE
    email_intake_address_ref01_match_rm0 = {
      "id" => email_intake_address_ref01_data["id"],
    }
    email_intake_address_ref01_ent.remove(email_intake_address_ref01_match_rm0, nil)

  end
end

def email_intake_address_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "email_intake_address", "EmailIntakeAddressTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = LinearSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["email_intake_address01", "email_intake_address02", "email_intake_address03"],
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
  entid_env_raw = ENV["LINEAR_TEST_EMAIL_INTAKE_ADDRESS_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "LINEAR_TEST_EMAIL_INTAKE_ADDRESS_ENTID" => idmap,
    "LINEAR_TEST_LIVE" => "FALSE",
    "LINEAR_TEST_EXPLAIN" => "FALSE",
    "LINEAR_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["LINEAR_TEST_EMAIL_INTAKE_ADDRESS_ENTID"])
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
