// Generated direct-call test for the issue_search_result entity (mirrors the
// rust TestDirect generator; unit mode uses a mock system.fetch transport).

#include "ctest.h"

#include <stdlib.h>
#include <string.h>

static int CALLS = 0;
static char LAST_URL[1024];

// Mock transport: records the call, returns 200 + the ud response as json.
static voxgig_value* issue_search_result_mock(void* ud, voxgig_value* args) {
  CALLS++;
  voxgig_value* url = voxgig_getelem(args, v_int(0), NULL);
  if (voxgig_is_string(url)) {
    snprintf(LAST_URL, sizeof(LAST_URL), "%s", voxgig_as_string(url));
  }
  voxgig_value* data = (voxgig_value*)ud;
  return cmap(4,
    "status", v_num(200),
    "statusText", v_str("OK"),
    "headers", v_map(),
    "json", json_thunk(data));
}

static LinearSDK* issue_search_result_direct_setup(voxgig_value* mockres) {
  voxgig_value* opts = cmap(2,
    "base", v_str("http://localhost:8080"),
    "system", cmap(1, "fetch", vfn(issue_search_result_mock, mockres)));
  return linear_sdk_new(opts);
}

int main(void) {

  // LIST
  {
    CALLS = 0;
    voxgig_value* mockres = clist(2,
      cmap(1, "id", v_str("direct01")),
      cmap(1, "id", v_str("direct02")));
    LinearSDK* sdk = issue_search_result_direct_setup(mockres);
    voxgig_value* params = v_map();
    setp(params, "after", v_str("direct01"));
    setp(params, "before", v_str("direct02"));
    setp(params, "first", v_str("direct03"));
    setp(params, "include_archived", v_str("direct04"));
    setp(params, "include_comment", v_str("direct05"));
    setp(params, "last", v_str("direct06"));
    setp(params, "order_by", v_str("direct07"));
    setp(params, "team_id", v_str("direct08"));
    setp(params, "term", v_str("direct09"));
    PNError* err = NULL;
    voxgig_value* result = sdk_direct(sdk, cmap(3,
      "path", v_str(""),
      "method", v_str("GET"),
      "params", params), &err);
    CHECK(err == NULL, "list: no error");
    voxgig_value* okv = getp(result, "ok");
    CHECK(voxgig_is_bool(okv) && voxgig_as_bool(okv), "list: ok true");
    CHECK_INT_EQ(to_int(getp(result, "status")), 200, "list: status 200");
    voxgig_value* data = getp(result, "data");
    CHECK(voxgig_is_list(data), "list: data is array");
    CHECK_INT_EQ(voxgig_size(data), 2, "list: 2 items");
    CHECK_INT_EQ(CALLS, 1, "list: one call");
    CHECK(strstr(LAST_URL, "direct01") != NULL, "list: url has direct01");
    CHECK(strstr(LAST_URL, "direct02") != NULL, "list: url has direct02");
    CHECK(strstr(LAST_URL, "direct03") != NULL, "list: url has direct03");
    CHECK(strstr(LAST_URL, "direct04") != NULL, "list: url has direct04");
    CHECK(strstr(LAST_URL, "direct05") != NULL, "list: url has direct05");
    CHECK(strstr(LAST_URL, "direct06") != NULL, "list: url has direct06");
    CHECK(strstr(LAST_URL, "direct07") != NULL, "list: url has direct07");
    CHECK(strstr(LAST_URL, "direct08") != NULL, "list: url has direct08");
    CHECK(strstr(LAST_URL, "direct09") != NULL, "list: url has direct09");
  }

  TEST_SUMMARY("linear_issue_search_result_direct");
}
