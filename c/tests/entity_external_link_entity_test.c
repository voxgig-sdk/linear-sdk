// Generated instance test for the entity_external_link entity.

#include "ctest.h"

int main(void) {
  LinearSDK* sdk = test_sdk(NULL, NULL);
  CHECK(sdk != NULL, "sdk constructed");

  Entity* e = linear_entity_external_link(sdk, NULL);
  CHECK(e != NULL, "entity instance");
  CHECK_STR_EQ(e->vt->get_name(e), "entity_external_link", "entity get_name");

  TEST_SUMMARY("entity_external_link_entity");
}
