// Generated instance test for the organization_meta entity.

#include "ctest.h"

int main(void) {
  LinearSDK* sdk = test_sdk(NULL, NULL);
  CHECK(sdk != NULL, "sdk constructed");

  Entity* e = linear_organization_meta(sdk, NULL);
  CHECK(e != NULL, "entity instance");
  CHECK_STR_EQ(e->vt->get_name(e), "organization_meta", "entity get_name");

  TEST_SUMMARY("organization_meta_entity");
}
