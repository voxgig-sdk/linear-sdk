# Linear SDK feature factory

from linear_sdk.feature.base_feature import LinearBaseFeature
from linear_sdk.feature.debug_feature import LinearDebugFeature
from linear_sdk.feature.idempotency_feature import LinearIdempotencyFeature
from linear_sdk.feature.metrics_feature import LinearMetricsFeature
from linear_sdk.feature.paging_feature import LinearPagingFeature
from linear_sdk.feature.ratelimit_feature import LinearRatelimitFeature
from linear_sdk.feature.retry_feature import LinearRetryFeature
from linear_sdk.feature.test_feature import LinearTestFeature
from linear_sdk.feature.timeout_feature import LinearTimeoutFeature


_FEATURES = {
    "base": lambda: LinearBaseFeature(),
    "debug": lambda: LinearDebugFeature(),
    "idempotency": lambda: LinearIdempotencyFeature(),
    "metrics": lambda: LinearMetricsFeature(),
    "paging": lambda: LinearPagingFeature(),
    "ratelimit": lambda: LinearRatelimitFeature(),
    "retry": lambda: LinearRetryFeature(),
    "test": lambda: LinearTestFeature(),
    "timeout": lambda: LinearTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
