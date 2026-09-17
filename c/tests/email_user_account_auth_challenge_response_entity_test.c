// Generated instance test for the email_user_account_auth_challenge_response entity.

#include "ctest.h"

int main(void) {
  LinearSDK* sdk = test_sdk(NULL, NULL);
  CHECK(sdk != NULL, "sdk constructed");

  Entity* e = linear_email_user_account_auth_challenge_response(sdk, NULL);
  CHECK(e != NULL, "entity instance");
  CHECK_STR_EQ(e->vt->get_name(e), "email_user_account_auth_challenge_response", "entity get_name");

  TEST_SUMMARY("email_user_account_auth_challenge_response_entity");
}
