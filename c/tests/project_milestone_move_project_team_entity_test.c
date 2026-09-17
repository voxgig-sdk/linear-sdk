// Generated instance test for the project_milestone_move_project_team entity.

#include "ctest.h"

int main(void) {
  LinearSDK* sdk = test_sdk(NULL, NULL);
  CHECK(sdk != NULL, "sdk constructed");

  Entity* e = linear_project_milestone_move_project_team(sdk, NULL);
  CHECK(e != NULL, "entity instance");
  CHECK_STR_EQ(e->vt->get_name(e), "project_milestone_move_project_team", "entity get_name");

  TEST_SUMMARY("project_milestone_move_project_team_entity");
}
