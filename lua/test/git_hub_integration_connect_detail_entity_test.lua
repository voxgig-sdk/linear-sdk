-- GitHubIntegrationConnectDetail entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("linear_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("GitHubIntegrationConnectDetailEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:GitHubIntegrationConnectDetail(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = git_hub_integration_connect_detail_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "update"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "git_hub_integration_connect_detail." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set LINEAR_TEST_GIT_HUB_INTEGRATION_CONNECT_DETAIL_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local git_hub_integration_connect_detail_ref01_ent = client:GitHubIntegrationConnectDetail(nil)
    local git_hub_integration_connect_detail_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.git_hub_integration_connect_detail"), "git_hub_integration_connect_detail_ref01"))
    git_hub_integration_connect_detail_ref01_data["code"] = setup.idmap["code01"]
    git_hub_integration_connect_detail_ref01_data["custom_view_id"] = setup.idmap["custom_view01"]
    git_hub_integration_connect_detail_ref01_data["initiative_id"] = setup.idmap["initiative01"]
    git_hub_integration_connect_detail_ref01_data["integration_id"] = setup.idmap["integration01"]
    git_hub_integration_connect_detail_ref01_data["project_id"] = setup.idmap["project01"]
    git_hub_integration_connect_detail_ref01_data["redirect_uri"] = setup.idmap["redirect_uri01"]
    git_hub_integration_connect_detail_ref01_data["service"] = setup.idmap["service01"]
    git_hub_integration_connect_detail_ref01_data["should_use_v2_auth"] = setup.idmap["should_use_v2_auth01"]
    git_hub_integration_connect_detail_ref01_data["team_id"] = setup.idmap["team01"]

    local git_hub_integration_connect_detail_ref01_data_result, err = git_hub_integration_connect_detail_ref01_ent:create(git_hub_integration_connect_detail_ref01_data, nil)
    assert.is_nil(err)
    git_hub_integration_connect_detail_ref01_data = helpers.to_map(type(git_hub_integration_connect_detail_ref01_data_result) == 'table' and git_hub_integration_connect_detail_ref01_data_result.data_get and git_hub_integration_connect_detail_ref01_data_result:data_get() or git_hub_integration_connect_detail_ref01_data_result)
    assert.is_not_nil(git_hub_integration_connect_detail_ref01_data)

    -- UPDATE
    local git_hub_integration_connect_detail_ref01_data_up0_up = {
      ["integration_id"] = setup.idmap["integration_id"],
    }

    local git_hub_integration_connect_detail_ref01_markdef_up0_name = "lostRepositoryNames"
    local git_hub_integration_connect_detail_ref01_markdef_up0_value = "Mark01-git_hub_integration_connect_detail_ref01_" .. tostring(setup.now)
    git_hub_integration_connect_detail_ref01_data_up0_up[git_hub_integration_connect_detail_ref01_markdef_up0_name] = git_hub_integration_connect_detail_ref01_markdef_up0_value

    local git_hub_integration_connect_detail_ref01_resdata_up0_result, err = git_hub_integration_connect_detail_ref01_ent:update(git_hub_integration_connect_detail_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local git_hub_integration_connect_detail_ref01_resdata_up0 = helpers.to_map(type(git_hub_integration_connect_detail_ref01_resdata_up0_result) == 'table' and git_hub_integration_connect_detail_ref01_resdata_up0_result.data_get and git_hub_integration_connect_detail_ref01_resdata_up0_result:data_get() or git_hub_integration_connect_detail_ref01_resdata_up0_result)
    assert.is_not_nil(git_hub_integration_connect_detail_ref01_resdata_up0)
    assert.are.equal(git_hub_integration_connect_detail_ref01_resdata_up0[git_hub_integration_connect_detail_ref01_markdef_up0_name], git_hub_integration_connect_detail_ref01_markdef_up0_value)

  end)
end)

function git_hub_integration_connect_detail_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/git_hub_integration_connect_detail/GitHubIntegrationConnectDetailTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read git_hub_integration_connect_detail test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "git_hub_integration_connect_detail01", "git_hub_integration_connect_detail02", "git_hub_integration_connect_detail03", "code01", "custom_view01", "initiative01", "integration01", "project01", "redirect_uri01", "service01", "should_use_v2_auth01", "team01" },
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
  local entid_env_raw = os.getenv("LINEAR_TEST_GIT_HUB_INTEGRATION_CONNECT_DETAIL_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["LINEAR_TEST_GIT_HUB_INTEGRATION_CONNECT_DETAIL_ENTID"] = idmap,
    ["LINEAR_TEST_LIVE"] = "FALSE",
    ["LINEAR_TEST_EXPLAIN"] = "FALSE",
    ["LINEAR_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["LINEAR_TEST_GIT_HUB_INTEGRATION_CONNECT_DETAIL_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["integration_id"] == nil then
    idmap_resolved["integration_id"] = idmap_resolved["integration01"]
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
