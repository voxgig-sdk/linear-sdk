# Linear SDK exists test

require "minitest/autorun"
require_relative "../Linear_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = LinearSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
