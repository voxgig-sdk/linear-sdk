// Generated instance test for the access_key_release_pipeline entity.

#include "ctest.h"

int main(void) {
  LinearSDK* sdk = test_sdk(NULL, NULL);
  CHECK(sdk != NULL, "sdk constructed");

  Entity* e = linear_access_key_release_pipeline(sdk, NULL);
  CHECK(e != NULL, "entity instance");
  CHECK_STR_EQ(e->vt->get_name(e), "access_key_release_pipeline", "entity get_name");

  TEST_SUMMARY("access_key_release_pipeline_entity");
}
