-- Linear SDK error

local json = require("dkjson")

local LinearError = {}
LinearError.__index = LinearError

-- Reachable for a debugger, absent from the table itself: the context holds
-- the live spec and options, and an error is what gets dumped or encoded.
local CONTEXT = setmetatable({}, { __mode = "k" })


function LinearError.new(code, msg, ctx)
  local self = setmetatable({}, LinearError)
  self.is_sdk_error = true
  self.sdk = "Linear"
  self.code = code or ""
  self.msg = msg or ""
  self.result = nil
  self.spec = nil
  CONTEXT[self] = ctx
  return self
end


function LinearError:context()
  return CONTEXT[self]
end


function LinearError:error()
  return self.msg
end


-- What make_error attached is already cleaned; the context is not part of
-- the record.
function LinearError:to_table()
  return {
    sdk = self.sdk,
    code = self.code,
    msg = self.msg,
    status = self.status,
    result = self.result,
    spec = self.spec,
  }
end


function LinearError:to_json()
  return json.encode(self:to_table())
end


function LinearError:__tostring()
  return self.msg
end


function LinearError.__tojson(self)
  return self:to_json()
end


return LinearError
