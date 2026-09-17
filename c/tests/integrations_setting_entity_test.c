// Generated instance test for the integrations_setting entity.

#include "ctest.h"

int main(void) {
  LinearSDK* sdk = test_sdk(NULL, NULL);
  CHECK(sdk != NULL, "sdk constructed");

  Entity* e = linear_integrations_setting(sdk, NULL);
  CHECK(e != NULL, "entity instance");
  CHECK_STR_EQ(e->vt->get_name(e), "integrations_setting", "entity get_name");

  TEST_SUMMARY("integrations_setting_entity");
}
