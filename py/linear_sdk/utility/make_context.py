# Linear SDK utility: make_context

from linear_sdk.core.context import LinearContext


def make_context_util(ctxmap, basectx):
    return LinearContext(ctxmap, basectx)
