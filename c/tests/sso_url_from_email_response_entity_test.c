// Generated instance test for the sso_url_from_email_response entity.

#include "ctest.h"

int main(void) {
  LinearSDK* sdk = test_sdk(NULL, NULL);
  CHECK(sdk != NULL, "sdk constructed");

  Entity* e = linear_sso_url_from_email_response(sdk, NULL);
  CHECK(e != NULL, "entity instance");
  CHECK_STR_EQ(e->vt->get_name(e), "sso_url_from_email_response", "entity get_name");

  TEST_SUMMARY("sso_url_from_email_response_entity");
}
