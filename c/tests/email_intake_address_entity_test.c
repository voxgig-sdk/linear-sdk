// Generated instance test for the email_intake_address entity.

#include "ctest.h"

int main(void) {
  LinearSDK* sdk = test_sdk(NULL, NULL);
  CHECK(sdk != NULL, "sdk constructed");

  Entity* e = linear_email_intake_address(sdk, NULL);
  CHECK(e != NULL, "entity instance");
  CHECK_STR_EQ(e->vt->get_name(e), "email_intake_address", "entity get_name");

  TEST_SUMMARY("email_intake_address_entity");
}
