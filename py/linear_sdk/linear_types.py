# Typed models for the Linear SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class IssueRequired(TypedDict):
    branchName: str
    createdAt: Any
    id: str
    identifier: str
    number: float
    priority: float
    title: str
    updatedAt: Any
    url: str


class Issue(IssueRequired, total=False):
    archivedAt: Any
    assignee: dict
    canceledAt: Any
    completedAt: Any
    creator: dict
    description: str
    dueDate: Any
    estimate: float
    state: dict
    team: dict


class IssueLoadMatch(TypedDict):
    id: str


class IssueListMatch(TypedDict, total=False):
    after: str
    first: int


class IssueCreateDataRequired(TypedDict):
    branchName: str
    createdAt: Any
    id: str
    identifier: str
    number: float
    priority: float
    title: str
    updatedAt: Any
    url: str


class IssueCreateData(IssueCreateDataRequired, total=False):
    archivedAt: Any
    assignee: dict
    canceledAt: Any
    completedAt: Any
    creator: dict
    description: str
    dueDate: Any
    estimate: float
    state: dict
    team: dict


class IssueUpdateDataRequired(TypedDict):
    id: str


class IssueUpdateData(IssueUpdateDataRequired, total=False):
    archivedAt: Any
    assignee: dict
    branchName: str
    canceledAt: Any
    completedAt: Any
    createdAt: Any
    creator: dict
    description: str
    dueDate: Any
    estimate: float
    identifier: str
    number: float
    priority: float
    state: dict
    team: dict
    title: str
    updatedAt: Any
    url: str


class TeamRequired(TypedDict):
    id: str
    key: str
    name: str


class Team(TeamRequired, total=False):
    description: str


class TeamLoadMatch(TypedDict):
    id: str


class TeamListMatch(TypedDict, total=False):
    after: str
    first: int
