-- Linear SDK error

local LinearError = {}
LinearError.__index = LinearError


function LinearError.new(code, msg, ctx)
  local self = setmetatable({}, LinearError)
  self.is_sdk_error = true
  self.sdk = "Linear"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function LinearError:error()
  return self.msg
end


function LinearError:__tostring()
  return self.msg
end


return LinearError
