// Linear SDK public API (generated).

#ifndef LINEAR_API_H
#define LINEAR_API_H

#include "sdk.h"

// Issue entity.
Entity* issue_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_issue(LinearSDK* client, voxgig_value* entopts);
voxgig_value* issue_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// Team entity.
Entity* team_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_team(LinearSDK* client, voxgig_value* entopts);
voxgig_value* team_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);

#endif // LINEAR_API_H
