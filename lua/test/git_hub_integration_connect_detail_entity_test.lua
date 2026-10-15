-- GitHubIntegrationConnectDetail entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("linear_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

-- main.kit.test.live.strict is true (the default is true): a live
-- request that fails, or a live test missing an input it needs,
-- fails the test.
-- An account with no record for a test to read skips it either way.
local LIVE_STRICT = true


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
    for _, _op in ipairs({}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "git_hub_integration_connect_detail." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    local client = setup.client

    -- Bootstrap entity data from existing test data.
    local git_hub_integration_connect_detail_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.git_hub_integration_connect_detail")))
    local git_hub_integration_connect_detail_ref01_data = nil
    if #git_hub_integration_connect_detail_ref01_data_raw > 0 then
      git_hub_integration_connect_detail_ref01_data = helpers.to_map(git_hub_integration_connect_detail_ref01_data_raw[1][2])
    end

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
    { "git_hub_integration_connect_detail01", "git_hub_integration_connect_detail02", "git_hub_integration_connect_detail03" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Whether *_ENTID supplied the idmap, read before env_override consumes
  -- it: without it, the ids a live flow binds are the fixture's synthetic ones.
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
