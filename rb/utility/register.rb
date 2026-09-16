# Linear SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

LinearUtility.registrar = ->(u) {
  u.clean = LinearUtilities::Clean
  u.done = LinearUtilities::Done
  u.make_error = LinearUtilities::MakeError
  u.feature_add = LinearUtilities::FeatureAdd
  u.feature_hook = LinearUtilities::FeatureHook
  u.feature_init = LinearUtilities::FeatureInit
  u.fetcher = LinearUtilities::Fetcher
  u.make_fetch_def = LinearUtilities::MakeFetchDef
  u.make_context = LinearUtilities::MakeContext
  u.make_options = LinearUtilities::MakeOptions
  u.make_request = LinearUtilities::MakeRequest
  u.make_response = LinearUtilities::MakeResponse
  u.make_result = LinearUtilities::MakeResult
  u.make_point = LinearUtilities::MakePoint
  u.make_spec = LinearUtilities::MakeSpec
  u.make_url = LinearUtilities::MakeUrl
  u.param = LinearUtilities::Param
  u.prepare_auth = LinearUtilities::PrepareAuth
  u.prepare_body = LinearUtilities::PrepareBody
  u.prepare_headers = LinearUtilities::PrepareHeaders
  u.prepare_method = LinearUtilities::PrepareMethod
  u.prepare_params = LinearUtilities::PrepareParams
  u.prepare_path = LinearUtilities::PreparePath
  u.prepare_query = LinearUtilities::PrepareQuery
  u.graphql_body = LinearUtilities::GraphqlBody
  u.graphql_errors = LinearUtilities::GraphqlErrors
  u.result_basic = LinearUtilities::ResultBasic
  u.result_body = LinearUtilities::ResultBody
  u.result_headers = LinearUtilities::ResultHeaders
  u.transform_request = LinearUtilities::TransformRequest
  u.transform_response = LinearUtilities::TransformResponse
}
