# frozen_string_literal: true

# Typed models for the Linear SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Issue entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] assignee
#   @return [Hash, nil]
#
# @!attribute [rw] branchName
#   @return [String]
#
# @!attribute [rw] canceledAt
#   @return [Object, nil]
#
# @!attribute [rw] completedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] dueDate
#   @return [Object, nil]
#
# @!attribute [rw] estimate
#   @return [Float, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [String]
#
# @!attribute [rw] number
#   @return [Float]
#
# @!attribute [rw] priority
#   @return [Float]
#
# @!attribute [rw] state
#   @return [Hash, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
Issue = Struct.new(
  :archivedAt,
  :assignee,
  :branchName,
  :canceledAt,
  :completedAt,
  :createdAt,
  :creator,
  :description,
  :dueDate,
  :estimate,
  :id,
  :identifier,
  :number,
  :priority,
  :state,
  :team,
  :title,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for Issue#load.
#
# @!attribute [rw] id
#   @return [String]
IssueLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Issue#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
IssueListMatch = Struct.new(
  :after,
  :first,
  keyword_init: true
)

# Request payload for Issue#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] assignee
#   @return [Hash, nil]
#
# @!attribute [rw] branchName
#   @return [String]
#
# @!attribute [rw] canceledAt
#   @return [Object, nil]
#
# @!attribute [rw] completedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] dueDate
#   @return [Object, nil]
#
# @!attribute [rw] estimate
#   @return [Float, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [String]
#
# @!attribute [rw] number
#   @return [Float]
#
# @!attribute [rw] priority
#   @return [Float]
#
# @!attribute [rw] state
#   @return [Hash, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
IssueCreateData = Struct.new(
  :archivedAt,
  :assignee,
  :branchName,
  :canceledAt,
  :completedAt,
  :createdAt,
  :creator,
  :description,
  :dueDate,
  :estimate,
  :id,
  :identifier,
  :number,
  :priority,
  :state,
  :team,
  :title,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for Issue#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] assignee
#   @return [Hash, nil]
#
# @!attribute [rw] branchName
#   @return [String, nil]
#
# @!attribute [rw] canceledAt
#   @return [Object, nil]
#
# @!attribute [rw] completedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] dueDate
#   @return [Object, nil]
#
# @!attribute [rw] estimate
#   @return [Float, nil]
#
# @!attribute [rw] identifier
#   @return [String, nil]
#
# @!attribute [rw] number
#   @return [Float, nil]
#
# @!attribute [rw] priority
#   @return [Float, nil]
#
# @!attribute [rw] state
#   @return [Hash, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
IssueUpdateData = Struct.new(
  :id,
  :archivedAt,
  :assignee,
  :branchName,
  :canceledAt,
  :completedAt,
  :createdAt,
  :creator,
  :description,
  :dueDate,
  :estimate,
  :identifier,
  :number,
  :priority,
  :state,
  :team,
  :title,
  :updatedAt,
  :url,
  keyword_init: true
)

# Team entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] key
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
Team = Struct.new(
  :description,
  :id,
  :key,
  :name,
  keyword_init: true
)

# Request payload for Team#load.
#
# @!attribute [rw] id
#   @return [String]
TeamLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Team#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
TeamListMatch = Struct.new(
  :after,
  :first,
  keyword_init: true
)

