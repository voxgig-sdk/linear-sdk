-- Linear SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("linear_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local LinearSDK = {}
LinearSDK.__index = LinearSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

LinearSDK._make_feature = _make_feature


function LinearSDK.new(options)
  local self = setmetatable({}, LinearSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: debug
  -- feature: idempotency
  -- feature: metrics
  -- feature: paging
  -- feature: ratelimit
  -- feature: retry
  -- feature: test
  -- feature: timeout


  return self
end


function LinearSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function LinearSDK:get_utility()
  return Utility.copy(self._utility)
end


function LinearSDK:get_root_ctx()
  return self._rootctx
end


function LinearSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function LinearSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function LinearSDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function LinearSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "LinearSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function LinearSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function LinearSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "LinearSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:AccessKeyRelease():list() / client:AccessKeyRelease():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:AccessKeyRelease(data)
  local EntityMod = require("entity.access_key_release_entity")
  if data == nil then
    if self._access_key_release == nil then
      self._access_key_release = EntityMod.new(self, nil)
    end
    return self._access_key_release
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AccessKeyReleasePipeline():list() / client:AccessKeyReleasePipeline():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:AccessKeyReleasePipeline(data)
  local EntityMod = require("entity.access_key_release_pipeline_entity")
  if data == nil then
    if self._access_key_release_pipeline == nil then
      self._access_key_release_pipeline = EntityMod.new(self, nil)
    end
    return self._access_key_release_pipeline
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AgentActivity():list() / client:AgentActivity():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:AgentActivity(data)
  local EntityMod = require("entity.agent_activity_entity")
  if data == nil then
    if self._agent_activity == nil then
      self._agent_activity = EntityMod.new(self, nil)
    end
    return self._agent_activity
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AgentSession():list() / client:AgentSession():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:AgentSession(data)
  local EntityMod = require("entity.agent_session_entity")
  if data == nil then
    if self._agent_session == nil then
      self._agent_session = EntityMod.new(self, nil)
    end
    return self._agent_session
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AgentSkill():list() / client:AgentSkill():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:AgentSkill(data)
  local EntityMod = require("entity.agent_skill_entity")
  if data == nil then
    if self._agent_skill == nil then
      self._agent_skill = EntityMod.new(self, nil)
    end
    return self._agent_skill
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Application():list() / client:Application():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:Application(data)
  local EntityMod = require("entity.application_entity")
  if data == nil then
    if self._application == nil then
      self._application = EntityMod.new(self, nil)
    end
    return self._application
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Attachment():list() / client:Attachment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:Attachment(data)
  local EntityMod = require("entity.attachment_entity")
  if data == nil then
    if self._attachment == nil then
      self._attachment = EntityMod.new(self, nil)
    end
    return self._attachment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AuditEntry():list() / client:AuditEntry():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:AuditEntry(data)
  local EntityMod = require("entity.audit_entry_entity")
  if data == nil then
    if self._audit_entry == nil then
      self._audit_entry = EntityMod.new(self, nil)
    end
    return self._audit_entry
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AuditEntryType():list() / client:AuditEntryType():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:AuditEntryType(data)
  local EntityMod = require("entity.audit_entry_type_entity")
  if data == nil then
    if self._audit_entry_type == nil then
      self._audit_entry_type = EntityMod.new(self, nil)
    end
    return self._audit_entry_type
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AuthResolverResponse():list() / client:AuthResolverResponse():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:AuthResolverResponse(data)
  local EntityMod = require("entity.auth_resolver_response_entity")
  if data == nil then
    if self._auth_resolver_response == nil then
      self._auth_resolver_response = EntityMod.new(self, nil)
    end
    return self._auth_resolver_response
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AuthenticationSessionResponse():list() / client:AuthenticationSessionResponse():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:AuthenticationSessionResponse(data)
  local EntityMod = require("entity.authentication_session_response_entity")
  if data == nil then
    if self._authentication_session_response == nil then
      self._authentication_session_response = EntityMod.new(self, nil)
    end
    return self._authentication_session_response
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Comment():list() / client:Comment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:Comment(data)
  local EntityMod = require("entity.comment_entity")
  if data == nil then
    if self._comment == nil then
      self._comment = EntityMod.new(self, nil)
    end
    return self._comment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CreateOrJoinOrganizationResponse():list() / client:CreateOrJoinOrganizationResponse():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:CreateOrJoinOrganizationResponse(data)
  local EntityMod = require("entity.create_or_join_organization_response_entity")
  if data == nil then
    if self._create_or_join_organization_response == nil then
      self._create_or_join_organization_response = EntityMod.new(self, nil)
    end
    return self._create_or_join_organization_response
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomView():list() / client:CustomView():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:CustomView(data)
  local EntityMod = require("entity.custom_view_entity")
  if data == nil then
    if self._custom_view == nil then
      self._custom_view = EntityMod.new(self, nil)
    end
    return self._custom_view
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Customer():list() / client:Customer():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:Customer(data)
  local EntityMod = require("entity.customer_entity")
  if data == nil then
    if self._customer == nil then
      self._customer = EntityMod.new(self, nil)
    end
    return self._customer
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomerNeed():list() / client:CustomerNeed():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:CustomerNeed(data)
  local EntityMod = require("entity.customer_need_entity")
  if data == nil then
    if self._customer_need == nil then
      self._customer_need = EntityMod.new(self, nil)
    end
    return self._customer_need
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomerStatus():list() / client:CustomerStatus():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:CustomerStatus(data)
  local EntityMod = require("entity.customer_status_entity")
  if data == nil then
    if self._customer_status == nil then
      self._customer_status = EntityMod.new(self, nil)
    end
    return self._customer_status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomerTier():list() / client:CustomerTier():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:CustomerTier(data)
  local EntityMod = require("entity.customer_tier_entity")
  if data == nil then
    if self._customer_tier == nil then
      self._customer_tier = EntityMod.new(self, nil)
    end
    return self._customer_tier
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Cycle():list() / client:Cycle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:Cycle(data)
  local EntityMod = require("entity.cycle_entity")
  if data == nil then
    if self._cycle == nil then
      self._cycle = EntityMod.new(self, nil)
    end
    return self._cycle
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Diff():list() / client:Diff():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:Diff(data)
  local EntityMod = require("entity.diff_entity")
  if data == nil then
    if self._diff == nil then
      self._diff = EntityMod.new(self, nil)
    end
    return self._diff
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Document():list() / client:Document():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:Document(data)
  local EntityMod = require("entity.document_entity")
  if data == nil then
    if self._document == nil then
      self._document = EntityMod.new(self, nil)
    end
    return self._document
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DocumentSearchResult():list() / client:DocumentSearchResult():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:DocumentSearchResult(data)
  local EntityMod = require("entity.document_search_result_entity")
  if data == nil then
    if self._document_search_result == nil then
      self._document_search_result = EntityMod.new(self, nil)
    end
    return self._document_search_result
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EmailIntakeAddress():list() / client:EmailIntakeAddress():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:EmailIntakeAddress(data)
  local EntityMod = require("entity.email_intake_address_entity")
  if data == nil then
    if self._email_intake_address == nil then
      self._email_intake_address = EntityMod.new(self, nil)
    end
    return self._email_intake_address
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EmailUserAccountAuthChallengeResponse():list() / client:EmailUserAccountAuthChallengeResponse():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:EmailUserAccountAuthChallengeResponse(data)
  local EntityMod = require("entity.email_user_account_auth_challenge_response_entity")
  if data == nil then
    if self._email_user_account_auth_challenge_response == nil then
      self._email_user_account_auth_challenge_response = EntityMod.new(self, nil)
    end
    return self._email_user_account_auth_challenge_response
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Emoji():list() / client:Emoji():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:Emoji(data)
  local EntityMod = require("entity.emoji_entity")
  if data == nil then
    if self._emoji == nil then
      self._emoji = EntityMod.new(self, nil)
    end
    return self._emoji
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EntityExternalLink():list() / client:EntityExternalLink():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:EntityExternalLink(data)
  local EntityMod = require("entity.entity_external_link_entity")
  if data == nil then
    if self._entity_external_link == nil then
      self._entity_external_link = EntityMod.new(self, nil)
    end
    return self._entity_external_link
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ExternalUser():list() / client:ExternalUser():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:ExternalUser(data)
  local EntityMod = require("entity.external_user_entity")
  if data == nil then
    if self._external_user == nil then
      self._external_user = EntityMod.new(self, nil)
    end
    return self._external_user
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Favorite():list() / client:Favorite():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:Favorite(data)
  local EntityMod = require("entity.favorite_entity")
  if data == nil then
    if self._favorite == nil then
      self._favorite = EntityMod.new(self, nil)
    end
    return self._favorite
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GitAutomationState():list() / client:GitAutomationState():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:GitAutomationState(data)
  local EntityMod = require("entity.git_automation_state_entity")
  if data == nil then
    if self._git_automation_state == nil then
      self._git_automation_state = EntityMod.new(self, nil)
    end
    return self._git_automation_state
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GitAutomationTargetBranch():list() / client:GitAutomationTargetBranch():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:GitAutomationTargetBranch(data)
  local EntityMod = require("entity.git_automation_target_branch_entity")
  if data == nil then
    if self._git_automation_target_branch == nil then
      self._git_automation_target_branch = EntityMod.new(self, nil)
    end
    return self._git_automation_target_branch
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GitHubIntegrationConnectDetail():list() / client:GitHubIntegrationConnectDetail():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:GitHubIntegrationConnectDetail(data)
  local EntityMod = require("entity.git_hub_integration_connect_detail_entity")
  if data == nil then
    if self._git_hub_integration_connect_detail == nil then
      self._git_hub_integration_connect_detail = EntityMod.new(self, nil)
    end
    return self._git_hub_integration_connect_detail
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Initiative():list() / client:Initiative():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:Initiative(data)
  local EntityMod = require("entity.initiative_entity")
  if data == nil then
    if self._initiative == nil then
      self._initiative = EntityMod.new(self, nil)
    end
    return self._initiative
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:InitiativeLabel():list() / client:InitiativeLabel():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:InitiativeLabel(data)
  local EntityMod = require("entity.initiative_label_entity")
  if data == nil then
    if self._initiative_label == nil then
      self._initiative_label = EntityMod.new(self, nil)
    end
    return self._initiative_label
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:InitiativeLeadTeamChangeImpact():list() / client:InitiativeLeadTeamChangeImpact():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:InitiativeLeadTeamChangeImpact(data)
  local EntityMod = require("entity.initiative_lead_team_change_impact_entity")
  if data == nil then
    if self._initiative_lead_team_change_impact == nil then
      self._initiative_lead_team_change_impact = EntityMod.new(self, nil)
    end
    return self._initiative_lead_team_change_impact
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:InitiativeRelation():list() / client:InitiativeRelation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:InitiativeRelation(data)
  local EntityMod = require("entity.initiative_relation_entity")
  if data == nil then
    if self._initiative_relation == nil then
      self._initiative_relation = EntityMod.new(self, nil)
    end
    return self._initiative_relation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:InitiativeToProject():list() / client:InitiativeToProject():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:InitiativeToProject(data)
  local EntityMod = require("entity.initiative_to_project_entity")
  if data == nil then
    if self._initiative_to_project == nil then
      self._initiative_to_project = EntityMod.new(self, nil)
    end
    return self._initiative_to_project
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:InitiativeUpdate():list() / client:InitiativeUpdate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:InitiativeUpdate(data)
  local EntityMod = require("entity.initiative_update_entity")
  if data == nil then
    if self._initiative_update == nil then
      self._initiative_update = EntityMod.new(self, nil)
    end
    return self._initiative_update
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Integration():list() / client:Integration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:Integration(data)
  local EntityMod = require("entity.integration_entity")
  if data == nil then
    if self._integration == nil then
      self._integration = EntityMod.new(self, nil)
    end
    return self._integration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IntegrationTemplate():list() / client:IntegrationTemplate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:IntegrationTemplate(data)
  local EntityMod = require("entity.integration_template_entity")
  if data == nil then
    if self._integration_template == nil then
      self._integration_template = EntityMod.new(self, nil)
    end
    return self._integration_template
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IntegrationsSetting():list() / client:IntegrationsSetting():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:IntegrationsSetting(data)
  local EntityMod = require("entity.integrations_setting_entity")
  if data == nil then
    if self._integrations_setting == nil then
      self._integrations_setting = EntityMod.new(self, nil)
    end
    return self._integrations_setting
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Issue():list() / client:Issue():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:Issue(data)
  local EntityMod = require("entity.issue_entity")
  if data == nil then
    if self._issue == nil then
      self._issue = EntityMod.new(self, nil)
    end
    return self._issue
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IssueImport():list() / client:IssueImport():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:IssueImport(data)
  local EntityMod = require("entity.issue_import_entity")
  if data == nil then
    if self._issue_import == nil then
      self._issue_import = EntityMod.new(self, nil)
    end
    return self._issue_import
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IssueLabel():list() / client:IssueLabel():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:IssueLabel(data)
  local EntityMod = require("entity.issue_label_entity")
  if data == nil then
    if self._issue_label == nil then
      self._issue_label = EntityMod.new(self, nil)
    end
    return self._issue_label
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IssuePriorityValue():list() / client:IssuePriorityValue():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:IssuePriorityValue(data)
  local EntityMod = require("entity.issue_priority_value_entity")
  if data == nil then
    if self._issue_priority_value == nil then
      self._issue_priority_value = EntityMod.new(self, nil)
    end
    return self._issue_priority_value
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IssueRelation():list() / client:IssueRelation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:IssueRelation(data)
  local EntityMod = require("entity.issue_relation_entity")
  if data == nil then
    if self._issue_relation == nil then
      self._issue_relation = EntityMod.new(self, nil)
    end
    return self._issue_relation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IssueSearchResult():list() / client:IssueSearchResult():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:IssueSearchResult(data)
  local EntityMod = require("entity.issue_search_result_entity")
  if data == nil then
    if self._issue_search_result == nil then
      self._issue_search_result = EntityMod.new(self, nil)
    end
    return self._issue_search_result
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IssueToRelease():list() / client:IssueToRelease():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:IssueToRelease(data)
  local EntityMod = require("entity.issue_to_release_entity")
  if data == nil then
    if self._issue_to_release == nil then
      self._issue_to_release = EntityMod.new(self, nil)
    end
    return self._issue_to_release
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LogoutResponse():list() / client:LogoutResponse():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:LogoutResponse(data)
  local EntityMod = require("entity.logout_response_entity")
  if data == nil then
    if self._logout_response == nil then
      self._logout_response = EntityMod.new(self, nil)
    end
    return self._logout_response
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Notification():list() / client:Notification():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:Notification(data)
  local EntityMod = require("entity.notification_entity")
  if data == nil then
    if self._notification == nil then
      self._notification = EntityMod.new(self, nil)
    end
    return self._notification
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NotificationSubscription():list() / client:NotificationSubscription():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:NotificationSubscription(data)
  local EntityMod = require("entity.notification_subscription_entity")
  if data == nil then
    if self._notification_subscription == nil then
      self._notification_subscription = EntityMod.new(self, nil)
    end
    return self._notification_subscription
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OAuthApplication():list() / client:OAuthApplication():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:OAuthApplication(data)
  local EntityMod = require("entity.o_auth_application_entity")
  if data == nil then
    if self._o_auth_application == nil then
      self._o_auth_application = EntityMod.new(self, nil)
    end
    return self._o_auth_application
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Organization():list() / client:Organization():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:Organization(data)
  local EntityMod = require("entity.organization_entity")
  if data == nil then
    if self._organization == nil then
      self._organization = EntityMod.new(self, nil)
    end
    return self._organization
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrganizationDomain():list() / client:OrganizationDomain():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:OrganizationDomain(data)
  local EntityMod = require("entity.organization_domain_entity")
  if data == nil then
    if self._organization_domain == nil then
      self._organization_domain = EntityMod.new(self, nil)
    end
    return self._organization_domain
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrganizationInvite():list() / client:OrganizationInvite():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:OrganizationInvite(data)
  local EntityMod = require("entity.organization_invite_entity")
  if data == nil then
    if self._organization_invite == nil then
      self._organization_invite = EntityMod.new(self, nil)
    end
    return self._organization_invite
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrganizationMeta():list() / client:OrganizationMeta():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:OrganizationMeta(data)
  local EntityMod = require("entity.organization_meta_entity")
  if data == nil then
    if self._organization_meta == nil then
      self._organization_meta = EntityMod.new(self, nil)
    end
    return self._organization_meta
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PasskeyLoginStartResponse():list() / client:PasskeyLoginStartResponse():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:PasskeyLoginStartResponse(data)
  local EntityMod = require("entity.passkey_login_start_response_entity")
  if data == nil then
    if self._passkey_login_start_response == nil then
      self._passkey_login_start_response = EntityMod.new(self, nil)
    end
    return self._passkey_login_start_response
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Project():list() / client:Project():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:Project(data)
  local EntityMod = require("entity.project_entity")
  if data == nil then
    if self._project == nil then
      self._project = EntityMod.new(self, nil)
    end
    return self._project
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectLabel():list() / client:ProjectLabel():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:ProjectLabel(data)
  local EntityMod = require("entity.project_label_entity")
  if data == nil then
    if self._project_label == nil then
      self._project_label = EntityMod.new(self, nil)
    end
    return self._project_label
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectMilestone():list() / client:ProjectMilestone():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:ProjectMilestone(data)
  local EntityMod = require("entity.project_milestone_entity")
  if data == nil then
    if self._project_milestone == nil then
      self._project_milestone = EntityMod.new(self, nil)
    end
    return self._project_milestone
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectMilestoneMoveProjectTeam():list() / client:ProjectMilestoneMoveProjectTeam():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:ProjectMilestoneMoveProjectTeam(data)
  local EntityMod = require("entity.project_milestone_move_project_team_entity")
  if data == nil then
    if self._project_milestone_move_project_team == nil then
      self._project_milestone_move_project_team = EntityMod.new(self, nil)
    end
    return self._project_milestone_move_project_team
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectRelation():list() / client:ProjectRelation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:ProjectRelation(data)
  local EntityMod = require("entity.project_relation_entity")
  if data == nil then
    if self._project_relation == nil then
      self._project_relation = EntityMod.new(self, nil)
    end
    return self._project_relation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectSearchResult():list() / client:ProjectSearchResult():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:ProjectSearchResult(data)
  local EntityMod = require("entity.project_search_result_entity")
  if data == nil then
    if self._project_search_result == nil then
      self._project_search_result = EntityMod.new(self, nil)
    end
    return self._project_search_result
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectStatus():list() / client:ProjectStatus():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:ProjectStatus(data)
  local EntityMod = require("entity.project_status_entity")
  if data == nil then
    if self._project_status == nil then
      self._project_status = EntityMod.new(self, nil)
    end
    return self._project_status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectUpdate():list() / client:ProjectUpdate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:ProjectUpdate(data)
  local EntityMod = require("entity.project_update_entity")
  if data == nil then
    if self._project_update == nil then
      self._project_update = EntityMod.new(self, nil)
    end
    return self._project_update
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PushSubscription():list() / client:PushSubscription():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:PushSubscription(data)
  local EntityMod = require("entity.push_subscription_entity")
  if data == nil then
    if self._push_subscription == nil then
      self._push_subscription = EntityMod.new(self, nil)
    end
    return self._push_subscription
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Reaction():list() / client:Reaction():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:Reaction(data)
  local EntityMod = require("entity.reaction_entity")
  if data == nil then
    if self._reaction == nil then
      self._reaction = EntityMod.new(self, nil)
    end
    return self._reaction
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Release():list() / client:Release():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:Release(data)
  local EntityMod = require("entity.release_entity")
  if data == nil then
    if self._release == nil then
      self._release = EntityMod.new(self, nil)
    end
    return self._release
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ReleaseNote():list() / client:ReleaseNote():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:ReleaseNote(data)
  local EntityMod = require("entity.release_note_entity")
  if data == nil then
    if self._release_note == nil then
      self._release_note = EntityMod.new(self, nil)
    end
    return self._release_note
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ReleasePipeline():list() / client:ReleasePipeline():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:ReleasePipeline(data)
  local EntityMod = require("entity.release_pipeline_entity")
  if data == nil then
    if self._release_pipeline == nil then
      self._release_pipeline = EntityMod.new(self, nil)
    end
    return self._release_pipeline
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ReleaseStage():list() / client:ReleaseStage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:ReleaseStage(data)
  local EntityMod = require("entity.release_stage_entity")
  if data == nil then
    if self._release_stage == nil then
      self._release_stage = EntityMod.new(self, nil)
    end
    return self._release_stage
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Roadmap():list() / client:Roadmap():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:Roadmap(data)
  local EntityMod = require("entity.roadmap_entity")
  if data == nil then
    if self._roadmap == nil then
      self._roadmap = EntityMod.new(self, nil)
    end
    return self._roadmap
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RoadmapToProject():list() / client:RoadmapToProject():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:RoadmapToProject(data)
  local EntityMod = require("entity.roadmap_to_project_entity")
  if data == nil then
    if self._roadmap_to_project == nil then
      self._roadmap_to_project = EntityMod.new(self, nil)
    end
    return self._roadmap_to_project
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SlaConfiguration():list() / client:SlaConfiguration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:SlaConfiguration(data)
  local EntityMod = require("entity.sla_configuration_entity")
  if data == nil then
    if self._sla_configuration == nil then
      self._sla_configuration = EntityMod.new(self, nil)
    end
    return self._sla_configuration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SsoUrlFromEmailResponse():list() / client:SsoUrlFromEmailResponse():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:SsoUrlFromEmailResponse(data)
  local EntityMod = require("entity.sso_url_from_email_response_entity")
  if data == nil then
    if self._sso_url_from_email_response == nil then
      self._sso_url_from_email_response = EntityMod.new(self, nil)
    end
    return self._sso_url_from_email_response
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Team():list() / client:Team():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:Team(data)
  local EntityMod = require("entity.team_entity")
  if data == nil then
    if self._team == nil then
      self._team = EntityMod.new(self, nil)
    end
    return self._team
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TeamMembership():list() / client:TeamMembership():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:TeamMembership(data)
  local EntityMod = require("entity.team_membership_entity")
  if data == nil then
    if self._team_membership == nil then
      self._team_membership = EntityMod.new(self, nil)
    end
    return self._team_membership
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Template():list() / client:Template():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:Template(data)
  local EntityMod = require("entity.template_entity")
  if data == nil then
    if self._template == nil then
      self._template = EntityMod.new(self, nil)
    end
    return self._template
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TimeSchedule():list() / client:TimeSchedule():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:TimeSchedule(data)
  local EntityMod = require("entity.time_schedule_entity")
  if data == nil then
    if self._time_schedule == nil then
      self._time_schedule = EntityMod.new(self, nil)
    end
    return self._time_schedule
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TriageResponsibility():list() / client:TriageResponsibility():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:TriageResponsibility(data)
  local EntityMod = require("entity.triage_responsibility_entity")
  if data == nil then
    if self._triage_responsibility == nil then
      self._triage_responsibility = EntityMod.new(self, nil)
    end
    return self._triage_responsibility
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UploadFile():list() / client:UploadFile():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:UploadFile(data)
  local EntityMod = require("entity.upload_file_entity")
  if data == nil then
    if self._upload_file == nil then
      self._upload_file = EntityMod.new(self, nil)
    end
    return self._upload_file
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UsageAlert():list() / client:UsageAlert():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:UsageAlert(data)
  local EntityMod = require("entity.usage_alert_entity")
  if data == nil then
    if self._usage_alert == nil then
      self._usage_alert = EntityMod.new(self, nil)
    end
    return self._usage_alert
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:User():list() / client:User():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:User(data)
  local EntityMod = require("entity.user_entity")
  if data == nil then
    if self._user == nil then
      self._user = EntityMod.new(self, nil)
    end
    return self._user
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UserSetting():list() / client:UserSetting():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:UserSetting(data)
  local EntityMod = require("entity.user_setting_entity")
  if data == nil then
    if self._user_setting == nil then
      self._user_setting = EntityMod.new(self, nil)
    end
    return self._user_setting
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ViewPreference():list() / client:ViewPreference():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:ViewPreference(data)
  local EntityMod = require("entity.view_preference_entity")
  if data == nil then
    if self._view_preference == nil then
      self._view_preference = EntityMod.new(self, nil)
    end
    return self._view_preference
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Webhook():list() / client:Webhook():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:Webhook(data)
  local EntityMod = require("entity.webhook_entity")
  if data == nil then
    if self._webhook == nil then
      self._webhook = EntityMod.new(self, nil)
    end
    return self._webhook
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WebhookFailureEvent():list() / client:WebhookFailureEvent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:WebhookFailureEvent(data)
  local EntityMod = require("entity.webhook_failure_event_entity")
  if data == nil then
    if self._webhook_failure_event == nil then
      self._webhook_failure_event = EntityMod.new(self, nil)
    end
    return self._webhook_failure_event
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkflowState():list() / client:WorkflowState():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LinearSDK:WorkflowState(data)
  local EntityMod = require("entity.workflow_state_entity")
  if data == nil then
    if self._workflow_state == nil then
      self._workflow_state = EntityMod.new(self, nil)
    end
    return self._workflow_state
  end
  return EntityMod.new(self, data)
end




function LinearSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = LinearSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return LinearSDK
