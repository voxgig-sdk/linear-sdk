# Linear SDK utility: prepare_body
require_relative 'media'
module LinearUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return LinearUtilities.raw_body(ctx.reqdata) if LinearUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
