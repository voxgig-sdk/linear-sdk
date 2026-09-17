-- LogoutResponse entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("linear_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("LogoutResponseEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:LogoutResponse(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = logout_response_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "update"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "logout_response." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set LINEAR_TEST_LOGOUT_RESPONSE_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local logout_response_ref01_ent = client:LogoutResponse(nil)
    local logout_response_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.logout_response"), "logout_response_ref01"))
    logout_response_ref01_data["reason"] = setup.idmap["reason01"]
    logout_response_ref01_data["session_id"] = setup.idmap["session01"]

    local logout_response_ref01_data_result, err = logout_response_ref01_ent:create(logout_response_ref01_data, nil)
    assert.is_nil(err)
    logout_response_ref01_data = helpers.to_map(type(logout_response_ref01_data_result) == 'table' and logout_response_ref01_data_result.data_get and logout_response_ref01_data_result:data_get() or logout_response_ref01_data_result)
    assert.is_not_nil(logout_response_ref01_data)

    -- UPDATE
    local logout_response_ref01_data_up0_up = {
      ["session_id"] = setup.idmap["session_id"],
    }

    local logout_response_ref01_resdata_up0_result, err = logout_response_ref01_ent:update(logout_response_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local logout_response_ref01_resdata_up0 = helpers.to_map(type(logout_response_ref01_resdata_up0_result) == 'table' and logout_response_ref01_resdata_up0_result.data_get and logout_response_ref01_resdata_up0_result:data_get() or logout_response_ref01_resdata_up0_result)
    assert.is_not_nil(logout_response_ref01_resdata_up0)

  end)
end)

function logout_response_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/logout_response/LogoutResponseTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read logout_response test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "logout_response01", "logout_response02", "logout_response03", "reason01", "session01" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("LINEAR_TEST_LOGOUT_RESPONSE_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["LINEAR_TEST_LOGOUT_RESPONSE_ENTID"] = idmap,
    ["LINEAR_TEST_LIVE"] = "FALSE",
    ["LINEAR_TEST_EXPLAIN"] = "FALSE",
    ["LINEAR_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["LINEAR_TEST_LOGOUT_RESPONSE_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["session_id"] == nil then
    idmap_resolved["session_id"] = idmap_resolved["session01"]
  end

  if env["LINEAR_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
        apikey = env["LINEAR_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["LINEAR_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["LINEAR_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
