# Linear SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/debug_feature'
require_relative 'feature/idempotency_feature'
require_relative 'feature/metrics_feature'
require_relative 'feature/paging_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module LinearFeatures
  def self.make_feature(name)
    case name
    when "base"
      LinearBaseFeature.new
    when "debug"
      LinearDebugFeature.new
    when "idempotency"
      LinearIdempotencyFeature.new
    when "metrics"
      LinearMetricsFeature.new
    when "paging"
      LinearPagingFeature.new
    when "ratelimit"
      LinearRatelimitFeature.new
    when "retry"
      LinearRetryFeature.new
    when "test"
      LinearTestFeature.new
    when "timeout"
      LinearTimeoutFeature.new
    else
      LinearBaseFeature.new
    end
  end
end
