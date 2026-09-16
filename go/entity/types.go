// Typed models for the Linear SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/linear-sdk/go/core"
)

// Issue is the typed data model for the issue entity.
type Issue struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Assignee *map[string]any `json:"assignee,omitempty"`
	BranchName string `json:"branchName"`
	CanceledAt *any `json:"canceledAt,omitempty"`
	CompletedAt *any `json:"completedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	Description *string `json:"description,omitempty"`
	DueDate *any `json:"dueDate,omitempty"`
	Estimate *float64 `json:"estimate,omitempty"`
	Id string `json:"id"`
	Identifier string `json:"identifier"`
	Number float64 `json:"number"`
	Priority float64 `json:"priority"`
	State *map[string]any `json:"state,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	Title string `json:"title"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
}

// IssueLoadMatch is the typed request payload for Issue.LoadTyped.
type IssueLoadMatch struct {
	Id string `json:"id"`
}

// IssueListMatch is the typed request payload for Issue.ListTyped.
type IssueListMatch struct {
	After *string `json:"after,omitempty"`
	First *int `json:"first,omitempty"`
}

// IssueCreateData is the typed request payload for Issue.CreateTyped.
type IssueCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Assignee *map[string]any `json:"assignee,omitempty"`
	BranchName string `json:"branchName"`
	CanceledAt *any `json:"canceledAt,omitempty"`
	CompletedAt *any `json:"completedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	Description *string `json:"description,omitempty"`
	DueDate *any `json:"dueDate,omitempty"`
	Estimate *float64 `json:"estimate,omitempty"`
	Id string `json:"id"`
	Identifier string `json:"identifier"`
	Number float64 `json:"number"`
	Priority float64 `json:"priority"`
	State *map[string]any `json:"state,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	Title string `json:"title"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
}

// IssueUpdateData is the typed request payload for Issue.UpdateTyped.
type IssueUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Assignee *map[string]any `json:"assignee,omitempty"`
	BranchName *string `json:"branchName,omitempty"`
	CanceledAt *any `json:"canceledAt,omitempty"`
	CompletedAt *any `json:"completedAt,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	Description *string `json:"description,omitempty"`
	DueDate *any `json:"dueDate,omitempty"`
	Estimate *float64 `json:"estimate,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
	Number *float64 `json:"number,omitempty"`
	Priority *float64 `json:"priority,omitempty"`
	State *map[string]any `json:"state,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	Title *string `json:"title,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	Url *string `json:"url,omitempty"`
}

// Team is the typed data model for the team entity.
type Team struct {
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	Key string `json:"key"`
	Name string `json:"name"`
}

// TeamLoadMatch is the typed request payload for Team.LoadTyped.
type TeamLoadMatch struct {
	Id string `json:"id"`
}

// TeamListMatch is the typed request payload for Team.ListTyped.
type TeamListMatch struct {
	After *string `json:"after,omitempty"`
	First *int `json:"first,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
