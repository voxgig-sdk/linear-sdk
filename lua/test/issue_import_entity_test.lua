-- IssueImport entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("linear_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("IssueImportEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:IssueImport(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = issue_import_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "update", "remove"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "issue_import." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set LINEAR_TEST_ISSUE_IMPORT_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local issue_import_ref01_ent = client:IssueImport(nil)
    local issue_import_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.issue_import"), "issue_import_ref01"))
    issue_import_ref01_data["github_label"] = setup.idmap["github_label01"]
    issue_import_ref01_data["github_repo_id"] = setup.idmap["github_repo01"]
    issue_import_ref01_data["include_closed_issue"] = setup.idmap["include_closed_issue01"]
    issue_import_ref01_data["instant_process"] = setup.idmap["instant_process01"]
    issue_import_ref01_data["issue_import_id"] = setup.idmap["issue_import01"]
    issue_import_ref01_data["linear_source_organization_id"] = setup.idmap["linear_source_organization01"]
    issue_import_ref01_data["mapping"] = setup.idmap["mapping01"]
    issue_import_ref01_data["team_id"] = setup.idmap["team01"]
    issue_import_ref01_data["team_name"] = setup.idmap["team_name01"]

    local issue_import_ref01_data_result, err = issue_import_ref01_ent:create(issue_import_ref01_data, nil)
    assert.is_nil(err)
    issue_import_ref01_data = helpers.to_map(type(issue_import_ref01_data_result) == 'table' and issue_import_ref01_data_result.data_get and issue_import_ref01_data_result:data_get() or issue_import_ref01_data_result)
    assert.is_not_nil(issue_import_ref01_data)
    assert.is_not_nil(issue_import_ref01_data["id"])

    -- UPDATE
    local issue_import_ref01_data_up0_up = {
      id = issue_import_ref01_data["id"],
      ["linear_source_organization_id"] = setup.idmap["linear_source_organization_id"],
    }

    local issue_import_ref01_markdef_up0_name = "creatorId"
    local issue_import_ref01_markdef_up0_value = "Mark01-issue_import_ref01_" .. tostring(setup.now)
    issue_import_ref01_data_up0_up[issue_import_ref01_markdef_up0_name] = issue_import_ref01_markdef_up0_value

    local issue_import_ref01_resdata_up0_result, err = issue_import_ref01_ent:update(issue_import_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local issue_import_ref01_resdata_up0 = helpers.to_map(type(issue_import_ref01_resdata_up0_result) == 'table' and issue_import_ref01_resdata_up0_result.data_get and issue_import_ref01_resdata_up0_result:data_get() or issue_import_ref01_resdata_up0_result)
    assert.is_not_nil(issue_import_ref01_resdata_up0)
    assert.are.equal(issue_import_ref01_resdata_up0["id"], issue_import_ref01_data_up0_up["id"])
    assert.are.equal(issue_import_ref01_resdata_up0[issue_import_ref01_markdef_up0_name], issue_import_ref01_markdef_up0_value)

    -- REMOVE
    local issue_import_ref01_match_rm0 = {
      id = issue_import_ref01_data["id"],
    }
    local _, err = issue_import_ref01_ent:remove(issue_import_ref01_match_rm0, nil)
    assert.is_nil(err)

  end)
end)

function issue_import_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/issue_import/IssueImportTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read issue_import test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "issue_import01", "issue_import02", "issue_import03", "github_label01", "github_repo01", "include_closed_issue01", "instant_process01", "linear_source_organization01", "mapping01", "team01", "team_name01" },
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
  local entid_env_raw = os.getenv("LINEAR_TEST_ISSUE_IMPORT_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["LINEAR_TEST_ISSUE_IMPORT_ENTID"] = idmap,
    ["LINEAR_TEST_LIVE"] = "FALSE",
    ["LINEAR_TEST_EXPLAIN"] = "FALSE",
    ["LINEAR_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["LINEAR_TEST_ISSUE_IMPORT_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["linear_source_organization_id"] == nil then
    idmap_resolved["linear_source_organization_id"] = idmap_resolved["linear_source_organization01"]
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
