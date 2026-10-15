// Generated instance test for the git_automation_state entity.

#include "ctest.h"

int main(void) {
  LinearSDK* sdk = test_sdk(NULL, NULL);
  CHECK(sdk != NULL, "sdk constructed");

  Entity* e = linear_git_automation_state(sdk, NULL);
  CHECK(e != NULL, "entity instance");
  CHECK_STR_EQ(e->vt->get_name(e), "git_automation_state", "entity get_name");

  if (!v_is_noval(getp(getp(shared_config(), "feature"), "validate"))) {
    PNError* verr = NULL;
    Entity* ve = linear_git_automation_state(test_sdk(NULL, cmap(1, "feature",
      cmap(1, "validate", cmap(1, "active", v_bool(true))))), NULL);
    ve->vt->create(ve, cmap(4, "createdAt", v_str("x"), "event", v_num(1), "id", v_str("x"), "updatedAt", v_str("x")), NULL, &verr);
    CHECK(NULL != verr && 0 == strcmp(verr->code, "validate_failed"),
      "an invalid request fails with validate_failed");
  }

  TEST_SUMMARY("git_automation_state_entity");
}
