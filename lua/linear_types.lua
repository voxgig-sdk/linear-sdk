-- Typed models for the Linear SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Issue
---@field archivedAt? any
---@field assignee? table
---@field branchName string
---@field canceledAt? any
---@field completedAt? any
---@field createdAt any
---@field creator? table
---@field description? string
---@field dueDate? any
---@field estimate? number
---@field id string
---@field identifier string
---@field number number
---@field priority number
---@field state? table
---@field team? table
---@field title string
---@field updatedAt any
---@field url string

---@class IssueLoadMatch
---@field id string

---@class IssueListMatch
---@field after? string
---@field first? number

---@class IssueCreateData
---@field archivedAt? any
---@field assignee? table
---@field branchName string
---@field canceledAt? any
---@field completedAt? any
---@field createdAt any
---@field creator? table
---@field description? string
---@field dueDate? any
---@field estimate? number
---@field id string
---@field identifier string
---@field number number
---@field priority number
---@field state? table
---@field team? table
---@field title string
---@field updatedAt any
---@field url string

---@class IssueUpdateData
---@field id string
---@field archivedAt? any
---@field assignee? table
---@field branchName? string
---@field canceledAt? any
---@field completedAt? any
---@field createdAt? any
---@field creator? table
---@field description? string
---@field dueDate? any
---@field estimate? number
---@field identifier? string
---@field number? number
---@field priority? number
---@field state? table
---@field team? table
---@field title? string
---@field updatedAt? any
---@field url? string

---@class Team
---@field description? string
---@field id string
---@field key string
---@field name string

---@class TeamLoadMatch
---@field id string

---@class TeamListMatch
---@field after? string
---@field first? number

local M = {}

return M
