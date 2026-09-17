-- OrganizationDomain entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("linear_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("OrganizationDomainEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:OrganizationDomain(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = organization_domain_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "update", "remove"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "organization_domain." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set LINEAR_TEST_ORGANIZATION_DOMAIN_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local organization_domain_ref01_ent = client:OrganizationDomain(nil)
    local organization_domain_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.organization_domain"), "organization_domain_ref01"))

    local organization_domain_ref01_data_result, err = organization_domain_ref01_ent:create(organization_domain_ref01_data, nil)
    assert.is_nil(err)
    organization_domain_ref01_data = helpers.to_map(type(organization_domain_ref01_data_result) == 'table' and organization_domain_ref01_data_result.data_get and organization_domain_ref01_data_result:data_get() or organization_domain_ref01_data_result)
    assert.is_not_nil(organization_domain_ref01_data)
    assert.is_not_nil(organization_domain_ref01_data["id"])

    -- UPDATE
    local organization_domain_ref01_data_up0_up = {
      id = organization_domain_ref01_data["id"],
    }

    local organization_domain_ref01_markdef_up0_name = "authType"
    local organization_domain_ref01_markdef_up0_value = "Mark01-organization_domain_ref01_" .. tostring(setup.now)
    organization_domain_ref01_data_up0_up[organization_domain_ref01_markdef_up0_name] = organization_domain_ref01_markdef_up0_value

    local organization_domain_ref01_resdata_up0_result, err = organization_domain_ref01_ent:update(organization_domain_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local organization_domain_ref01_resdata_up0 = helpers.to_map(type(organization_domain_ref01_resdata_up0_result) == 'table' and organization_domain_ref01_resdata_up0_result.data_get and organization_domain_ref01_resdata_up0_result:data_get() or organization_domain_ref01_resdata_up0_result)
    assert.is_not_nil(organization_domain_ref01_resdata_up0)
    assert.are.equal(organization_domain_ref01_resdata_up0["id"], organization_domain_ref01_data_up0_up["id"])
    assert.are.equal(organization_domain_ref01_resdata_up0[organization_domain_ref01_markdef_up0_name], organization_domain_ref01_markdef_up0_value)

    -- REMOVE
    local organization_domain_ref01_match_rm0 = {
      id = organization_domain_ref01_data["id"],
    }
    local _, err = organization_domain_ref01_ent:remove(organization_domain_ref01_match_rm0, nil)
    assert.is_nil(err)

  end)
end)

function organization_domain_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/organization_domain/OrganizationDomainTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read organization_domain test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "organization_domain01", "organization_domain02", "organization_domain03" },
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
  local entid_env_raw = os.getenv("LINEAR_TEST_ORGANIZATION_DOMAIN_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["LINEAR_TEST_ORGANIZATION_DOMAIN_ENTID"] = idmap,
    ["LINEAR_TEST_LIVE"] = "FALSE",
    ["LINEAR_TEST_EXPLAIN"] = "FALSE",
    ["LINEAR_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["LINEAR_TEST_ORGANIZATION_DOMAIN_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
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
