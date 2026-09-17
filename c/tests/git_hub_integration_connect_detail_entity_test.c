// Generated instance test for the git_hub_integration_connect_detail entity.

#include "ctest.h"

int main(void) {
  LinearSDK* sdk = test_sdk(NULL, NULL);
  CHECK(sdk != NULL, "sdk constructed");

  Entity* e = linear_git_hub_integration_connect_detail(sdk, NULL);
  CHECK(e != NULL, "entity instance");
  CHECK_STR_EQ(e->vt->get_name(e), "git_hub_integration_connect_detail", "entity get_name");

  TEST_SUMMARY("git_hub_integration_connect_detail_entity");
}
