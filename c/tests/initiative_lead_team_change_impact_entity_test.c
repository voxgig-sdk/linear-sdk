// Generated instance test for the initiative_lead_team_change_impact entity.

#include "ctest.h"

int main(void) {
  LinearSDK* sdk = test_sdk(NULL, NULL);
  CHECK(sdk != NULL, "sdk constructed");

  Entity* e = linear_initiative_lead_team_change_impact(sdk, NULL);
  CHECK(e != NULL, "entity instance");
  CHECK_STR_EQ(e->vt->get_name(e), "initiative_lead_team_change_impact", "entity get_name");

  TEST_SUMMARY("initiative_lead_team_change_impact_entity");
}
