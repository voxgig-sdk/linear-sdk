// Generated instance test for the git_automation_state entity.

#include "ctest.h"

int main(void) {
  LinearSDK* sdk = test_sdk(NULL, NULL);
  CHECK(sdk != NULL, "sdk constructed");

  Entity* e = linear_git_automation_state(sdk, NULL);
  CHECK(e != NULL, "entity instance");
  CHECK_STR_EQ(e->vt->get_name(e), "git_automation_state", "entity get_name");

  TEST_SUMMARY("git_automation_state_entity");
}
