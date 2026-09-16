// Typed models for the Linear SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types are mapped
// from the canonical type sentinels. Do not edit by hand.
//
// These are DOCUMENTARY: the SDK runtime is dynamic (ops take/return
// `voxgig_value*`), so nothing consumes these structs yet — they mirror the
// entity/op shapes for reference and IDE support. This header is standalone
// and is not #included by any generated .c.

#ifndef LINEAR_ENTITY_TYPES_H
#define LINEAR_ENTITY_TYPES_H

#include "sdk.h"

// Issue is the typed data model for the issue entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*assignee;  // optional
  char*branchname;
  voxgig_value*canceledat;  // optional
  voxgig_value*completedat;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  char*description;  // optional
  voxgig_value*duedate;  // optional
  double estimate;  // optional
  char*id;
  char*identifier;
  double number;
  double priority;
  voxgig_value*state;  // optional
  voxgig_value*team;  // optional
  char*title;
  voxgig_value*updatedat;
  char*url;
} Issue;

// IssueLoadMatch is the typed request payload for Issue.load.
typedef struct {
  char*id;
} IssueLoadMatch;

// IssueListMatch is the typed request payload for Issue.list.
typedef struct {
  char*after;  // optional
  int64_t first;  // optional
} IssueListMatch;

// IssueCreateData is the typed request payload for Issue.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*assignee;  // optional
  char*branchname;
  voxgig_value*canceledat;  // optional
  voxgig_value*completedat;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  char*description;  // optional
  voxgig_value*duedate;  // optional
  double estimate;  // optional
  char*id;
  char*identifier;
  double number;
  double priority;
  voxgig_value*state;  // optional
  voxgig_value*team;  // optional
  char*title;
  voxgig_value*updatedat;
  char*url;
} IssueCreateData;

// IssueUpdateData is the typed request payload for Issue.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  voxgig_value*assignee;  // optional
  char*branchname;  // optional
  voxgig_value*canceledat;  // optional
  voxgig_value*completedat;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*creator;  // optional
  char*description;  // optional
  voxgig_value*duedate;  // optional
  double estimate;  // optional
  char*identifier;  // optional
  double number;  // optional
  double priority;  // optional
  voxgig_value*state;  // optional
  voxgig_value*team;  // optional
  char*title;  // optional
  voxgig_value*updatedat;  // optional
  char*url;  // optional
} IssueUpdateData;

// Team is the typed data model for the team entity.
typedef struct {
  char*description;  // optional
  char*id;
  char*key;
  char*name;
} Team;

// TeamLoadMatch is the typed request payload for Team.load.
typedef struct {
  char*id;
} TeamLoadMatch;

// TeamListMatch is the typed request payload for Team.list.
typedef struct {
  char*after;  // optional
  int64_t first;  // optional
} TeamListMatch;

#endif // LINEAR_ENTITY_TYPES_H
