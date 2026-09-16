# Linear SDK utility: make_context
require_relative '../core/context'
module LinearUtilities
  MakeContext = ->(ctxmap, basectx) {
    LinearContext.new(ctxmap, basectx)
  }
end
