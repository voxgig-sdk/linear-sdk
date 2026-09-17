// Generated instance test for the organization_domain entity.

#include "ctest.h"

int main(void) {
  LinearSDK* sdk = test_sdk(NULL, NULL);
  CHECK(sdk != NULL, "sdk constructed");

  Entity* e = linear_organization_domain(sdk, NULL);
  CHECK(e != NULL, "entity instance");
  CHECK_STR_EQ(e->vt->get_name(e), "organization_domain", "entity get_name");

  TEST_SUMMARY("organization_domain_entity");
}
