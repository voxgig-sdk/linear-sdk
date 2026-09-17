// Generated instance test for the passkey_login_start_response entity.

#include "ctest.h"

int main(void) {
  LinearSDK* sdk = test_sdk(NULL, NULL);
  CHECK(sdk != NULL, "sdk constructed");

  Entity* e = linear_passkey_login_start_response(sdk, NULL);
  CHECK(e != NULL, "entity instance");
  CHECK_STR_EQ(e->vt->get_name(e), "passkey_login_start_response", "entity get_name");

  TEST_SUMMARY("passkey_login_start_response_entity");
}
