// Generated instance test for the create_or_join_organization_response entity.

#include "ctest.h"

int main(void) {
  LinearSDK* sdk = test_sdk(NULL, NULL);
  CHECK(sdk != NULL, "sdk constructed");

  Entity* e = linear_create_or_join_organization_response(sdk, NULL);
  CHECK(e != NULL, "entity instance");
  CHECK_STR_EQ(e->vt->get_name(e), "create_or_join_organization_response", "entity get_name");

  TEST_SUMMARY("create_or_join_organization_response_entity");
}
