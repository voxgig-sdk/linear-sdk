// Generated instance test for the git_automation_target_branch entity.

#include "ctest.h"

int main(void) {
  LinearSDK* sdk = test_sdk(NULL, NULL);
  CHECK(sdk != NULL, "sdk constructed");

  Entity* e = linear_git_automation_target_branch(sdk, NULL);
  CHECK(e != NULL, "entity instance");
  CHECK_STR_EQ(e->vt->get_name(e), "git_automation_target_branch", "entity get_name");

  TEST_SUMMARY("git_automation_target_branch_entity");
}
