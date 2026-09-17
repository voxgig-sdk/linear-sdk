// Generated instance test for the auth_resolver_response entity.

#include "ctest.h"

int main(void) {
  LinearSDK* sdk = test_sdk(NULL, NULL);
  CHECK(sdk != NULL, "sdk constructed");

  Entity* e = linear_auth_resolver_response(sdk, NULL);
  CHECK(e != NULL, "entity instance");
  CHECK_STR_EQ(e->vt->get_name(e), "auth_resolver_response", "entity get_name");

  TEST_SUMMARY("auth_resolver_response_entity");
}
