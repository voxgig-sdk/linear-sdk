// Generated instance test for the passkey_login_start_response entity.

#include "ctest.h"

int main(void) {
  LinearSDK* sdk = test_sdk(NULL, NULL);
  CHECK(sdk != NULL, "sdk constructed");

  Entity* e = linear_passkey_login_start_response(sdk, NULL);
  CHECK(e != NULL, "entity instance");
  CHECK_STR_EQ(e->vt->get_name(e), "passkey_login_start_response", "entity get_name");

  if (!v_is_noval(getp(getp(shared_config(), "feature"), "validate"))) {
    PNError* verr = NULL;
    Entity* ve = linear_passkey_login_start_response(test_sdk(NULL, cmap(1, "feature",
      cmap(1, "validate", cmap(1, "active", v_bool(true))))), NULL);
    ve->vt->update(ve, cmap(1, "auth_id", v_num(1)), NULL, &verr);
    CHECK(NULL != verr && 0 == strcmp(verr->code, "validate_failed"),
      "an invalid request fails with validate_failed");
  }

  TEST_SUMMARY("passkey_login_start_response_entity");
}
