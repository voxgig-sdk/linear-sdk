// Generated instance test for the email_user_account_auth_challenge_response entity.

#include "ctest.h"

int main(void) {
  LinearSDK* sdk = test_sdk(NULL, NULL);
  CHECK(sdk != NULL, "sdk constructed");

  Entity* e = linear_email_user_account_auth_challenge_response(sdk, NULL);
  CHECK(e != NULL, "entity instance");
  CHECK_STR_EQ(e->vt->get_name(e), "email_user_account_auth_challenge_response", "entity get_name");

  if (!v_is_noval(getp(getp(shared_config(), "feature"), "validate"))) {
    PNError* verr = NULL;
    Entity* ve = linear_email_user_account_auth_challenge_response(test_sdk(NULL, cmap(1, "feature",
      cmap(1, "validate", cmap(1, "active", v_bool(true))))), NULL);
    ve->vt->create(ve, cmap(2, "authType", v_num(1), "success", v_bool(true)), NULL, &verr);
    CHECK(NULL != verr && 0 == strcmp(verr->code, "validate_failed"),
      "an invalid request fails with validate_failed");
  }

  TEST_SUMMARY("email_user_account_auth_challenge_response_entity");
}
