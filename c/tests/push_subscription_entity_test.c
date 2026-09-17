// Generated instance test for the push_subscription entity.

#include "ctest.h"

int main(void) {
  LinearSDK* sdk = test_sdk(NULL, NULL);
  CHECK(sdk != NULL, "sdk constructed");

  Entity* e = linear_push_subscription(sdk, NULL);
  CHECK(e != NULL, "entity instance");
  CHECK_STR_EQ(e->vt->get_name(e), "push_subscription", "entity get_name");

  TEST_SUMMARY("push_subscription_entity");
}
