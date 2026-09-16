# Linear SDK exists test

import pytest
from linear_sdk import LinearSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = LinearSDK.test(None, None)
        assert testsdk is not None
