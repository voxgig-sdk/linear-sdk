-- CustomView entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("linear_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("CustomViewEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:CustomView(nil)
    assert.is_not_nil(ent)
  end)

  -- Feature #4: the entity stream(action, ...) method runs the op pipeline and
  -- returns an iterator over result items. With the streaming feature active it
  -- yields the feature's incremental output; otherwise it falls back to the
  -- materialised list so stream always yields.
  it("should stream", function()
    local seed = {
      entity = {
        ["custom_view"] = {
          s1 = { id = "s1" },
          s2 = { id = "s2" },
          s3 = { id = "s3" },
        },
      },
    }

    -- Fallback: streaming inactive -> yields the materialised list items.
    local base = sdk.test(seed, nil)
    local seen = {}
    for item in base:CustomView(nil):stream("list", nil, nil) do
      table.insert(seen, item)
    end
    assert.are.equal(3, #seen)

    -- Inbound: streaming active -> yields each item from the feature.
    local config = require("config_shared")()
    if type(config.feature) == "table" and config.feature.streaming ~= nil then
      local streamsdk = sdk.test(seed, { feature = { streaming = { active = true } } })
      local got = {}
      for item in streamsdk:CustomView(nil):stream("list", nil, nil) do
        if vs.islist(item) then
          for _, sub in ipairs(item) do
            table.insert(got, sub)
          end
        else
          table.insert(got, item)
        end
      end
      assert.are.equal(3, #got)
    end
  end)

  it("should run basic flow", function()
    local setup = custom_view_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "list", "update", "load", "remove"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "custom_view." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set LINEAR_TEST_CUSTOM_VIEW_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local custom_view_ref01_ent = client:CustomView(nil)
    local custom_view_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.custom_view"), "custom_view_ref01"))
    custom_view_ref01_data["after"] = setup.idmap["after01"]
    custom_view_ref01_data["before"] = setup.idmap["before01"]
    custom_view_ref01_data["first"] = setup.idmap["first01"]
    custom_view_ref01_data["include_archived"] = setup.idmap["include_archived01"]
    custom_view_ref01_data["last"] = setup.idmap["last01"]
    custom_view_ref01_data["order_by"] = setup.idmap["order_by01"]

    local custom_view_ref01_data_result, err = custom_view_ref01_ent:create(custom_view_ref01_data, nil)
    assert.is_nil(err)
    custom_view_ref01_data = helpers.to_map(type(custom_view_ref01_data_result) == 'table' and custom_view_ref01_data_result.data_get and custom_view_ref01_data_result:data_get() or custom_view_ref01_data_result)
    assert.is_not_nil(custom_view_ref01_data)
    assert.is_not_nil(custom_view_ref01_data["id"])

    -- LIST
    local custom_view_ref01_match = {
      ["after"] = setup.idmap["after01"],
      ["before"] = setup.idmap["before01"],
      ["first"] = setup.idmap["first01"],
      ["include_archived"] = setup.idmap["include_archived01"],
      ["last"] = setup.idmap["last01"],
      ["order_by"] = setup.idmap["order_by01"],
    }

    local custom_view_ref01_list_result, err = custom_view_ref01_ent:list(custom_view_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(custom_view_ref01_list_result)

    local found_item = vs.select(
      runner.entity_list_to_data(custom_view_ref01_list_result),
      { id = custom_view_ref01_data["id"] })
    assert.is_false(vs.isempty(found_item))

    -- UPDATE
    local custom_view_ref01_data_up0_up = {
      id = custom_view_ref01_data["id"],
    }

    local custom_view_ref01_markdef_up0_name = "color"
    local custom_view_ref01_markdef_up0_value = "Mark01-custom_view_ref01_" .. tostring(setup.now)
    custom_view_ref01_data_up0_up[custom_view_ref01_markdef_up0_name] = custom_view_ref01_markdef_up0_value

    local custom_view_ref01_resdata_up0_result, err = custom_view_ref01_ent:update(custom_view_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local custom_view_ref01_resdata_up0 = helpers.to_map(type(custom_view_ref01_resdata_up0_result) == 'table' and custom_view_ref01_resdata_up0_result.data_get and custom_view_ref01_resdata_up0_result:data_get() or custom_view_ref01_resdata_up0_result)
    assert.is_not_nil(custom_view_ref01_resdata_up0)
    assert.are.equal(custom_view_ref01_resdata_up0["id"], custom_view_ref01_data_up0_up["id"])
    assert.are.equal(custom_view_ref01_resdata_up0[custom_view_ref01_markdef_up0_name], custom_view_ref01_markdef_up0_value)

    -- LOAD
    local custom_view_ref01_match_dt0 = {
      id = custom_view_ref01_data["id"],
    }
    local custom_view_ref01_data_dt0_loaded, err = custom_view_ref01_ent:load(custom_view_ref01_match_dt0, nil)
    assert.is_nil(err)
    local custom_view_ref01_data_dt0_load_result = helpers.to_map(type(custom_view_ref01_data_dt0_loaded) == 'table' and custom_view_ref01_data_dt0_loaded.data_get and custom_view_ref01_data_dt0_loaded:data_get() or custom_view_ref01_data_dt0_loaded)
    assert.is_not_nil(custom_view_ref01_data_dt0_load_result)
    assert.are.equal(custom_view_ref01_data_dt0_load_result["id"], custom_view_ref01_data["id"])

    -- REMOVE
    local custom_view_ref01_match_rm0 = {
      id = custom_view_ref01_data["id"],
    }
    local _, err = custom_view_ref01_ent:remove(custom_view_ref01_match_rm0, nil)
    assert.is_nil(err)

    -- LIST
    local custom_view_ref01_match_rt0 = {
      ["after"] = setup.idmap["after01"],
      ["before"] = setup.idmap["before01"],
      ["first"] = setup.idmap["first01"],
      ["include_archived"] = setup.idmap["include_archived01"],
      ["last"] = setup.idmap["last01"],
      ["order_by"] = setup.idmap["order_by01"],
    }

    local custom_view_ref01_list_rt0_result, err = custom_view_ref01_ent:list(custom_view_ref01_match_rt0, nil)
    assert.is_nil(err)
    assert.is_table(custom_view_ref01_list_rt0_result)

    local not_found_item = vs.select(
      runner.entity_list_to_data(custom_view_ref01_list_rt0_result),
      { id = custom_view_ref01_data["id"] })
    assert.is_true(vs.isempty(not_found_item))

  end)
end)

function custom_view_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/custom_view/CustomViewTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read custom_view test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "custom_view01", "custom_view02", "custom_view03", "after01", "before01", "first01", "include_archived01", "last01", "order_by01" },
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
  local entid_env_raw = os.getenv("LINEAR_TEST_CUSTOM_VIEW_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["LINEAR_TEST_CUSTOM_VIEW_ENTID"] = idmap,
    ["LINEAR_TEST_LIVE"] = "FALSE",
    ["LINEAR_TEST_EXPLAIN"] = "FALSE",
    ["LINEAR_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["LINEAR_TEST_CUSTOM_VIEW_ENTID"])
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
