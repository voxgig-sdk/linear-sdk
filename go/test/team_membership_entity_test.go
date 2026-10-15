package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/linear-sdk/go"
	"github.com/voxgig-sdk/linear-sdk/go/core"

	vs "github.com/voxgig-sdk/linear-sdk/go/utility/struct"
)

// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const team_membershipEntityLiveStrict = true


type team_membershipFailHook struct {
	sdk.BaseFeature
	unexpected int
}

func (f *team_membershipFailHook) PreSpec(ctx *sdk.Context) {
	panic("team_membership hook failed")
}

func (f *team_membershipFailHook) PreUnexpected(ctx *sdk.Context) {
	f.unexpected++
}

func TestTeamMembershipEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.TeamMembership(nil)
		if ent == nil {
			t.Fatal("expected non-nil TeamMembershipEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"team_membership": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for si := range base.TeamMembership(nil).Stream("list", nil, nil) {
			if si.Err != nil {
				t.Fatalf("stream failed: %v", si.Err)
			}
			seen = append(seen, si.Item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for si := range streamSdk.TeamMembership(nil).Stream("list", nil, nil) {
				if si.Err != nil {
					t.Fatalf("stream failed: %v", si.Err)
				}
				if sub, ok := si.Item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, si.Item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("stream-error", func(t *testing.T) {
		offline := map[string]any{"net": map[string]any{"offline": true}}
		var streamerr error
		for si := range sdk.TestSDK(offline, nil).TeamMembership(nil).Stream("list", nil, nil) {
			if si.Err != nil {
				streamerr = si.Err
			}
		}
		if nil == streamerr || !strings.Contains(streamerr.Error(), "offline") {
			t.Fatalf("expected the transport failure as a stream value, got %v", streamerr)
		}

		quiet := map[string]any{"ctrl": map[string]any{"throw": false}}
		for si := range sdk.TestSDK(offline, nil).TeamMembership(nil).Stream("list", nil, quiet) {
			if si.Err != nil {
				t.Fatalf("throw false: expected no error value, got %v", si.Err)
			}
		}

		if fhHasFeature("rbac") {
			denied := sdk.TestSDK(nil, map[string]any{
				"feature": map[string]any{"rbac": map[string]any{"active": true, "deny": true}},
			})
			var denyerr error
			for si := range denied.TeamMembership(nil).Stream("list", nil, nil) {
				if si.Err != nil {
					denyerr = si.Err
				}
			}
			if sdkerr, ok := denyerr.(*core.LinearError); !ok || "rbac_denied" != sdkerr.Code {
				t.Fatalf("expected the rbac denial as a stream value, got %v", denyerr)
			}
		}
	})

	t.Run("stream-ctrl", func(t *testing.T) {
		explain := map[string]any{}
		ctrl := map[string]any{"explain": explain}
		for range sdk.TestSDK(nil, nil).TeamMembership(nil).Stream("list", nil, map[string]any{"ctrl": ctrl}) {
		}
		if _, has := ctrl["stream"]; has || 1 != len(ctrl) {
			t.Fatalf("the stream changed the caller's ctrl")
		}
		if 0 == len(explain) {
			t.Fatalf("the caller's explain record was not filled")
		}
	})

	t.Run("unexpected", func(t *testing.T) {
		hook := &team_membershipFailHook{
			BaseFeature: sdk.BaseFeature{Version: "0.0.1", Name: "failhook", Active: true}}
		client := sdk.TestSDK(nil, map[string]any{"extend": []any{hook}})

		_, err := client.TeamMembership(nil).List(nil, nil)
		if nil == err || !strings.Contains(err.Error(), "hook failed") {
			t.Fatalf("expected the hook's failure, got %v", err)
		}
		if 0 == hook.unexpected {
			t.Fatalf("PreUnexpected did not fire")
		}

		fired := hook.unexpected
		if _, err := client.TeamMembership(nil).List(nil, map[string]any{"throw": false}); nil != err {
			t.Fatalf("throw false: expected no error, got %v", err)
		}
		if fired == hook.unexpected {
			t.Fatalf("throw false: PreUnexpected did not fire")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.TeamMembership(nil).List(map[string]any{"after": 1}, nil)
		if sdkerr, ok := err.(*core.LinearError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := team_membershipBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "team_membership." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live {
			for _, _liveKey := range []string{"after01", "also_leave_parent_team01", "before01", "first01", "include_archived01", "last01", "order_by01"} {
				if setup.syntheticOnly || setup.idmap[_liveKey] == nil {
					liveMiss(t, team_membershipEntityLiveStrict, "Live entity test blocked: needs %s via LINEAR_TEST_TEAM_MEMBERSHIP_ENTID", _liveKey)
				}
			}
		}
		client := setup.client
		_ = client

		// CREATE
		teamMembershipRef01Ent := client.TeamMembership(nil)
		teamMembershipRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "team_membership"}), "team_membership_ref01"))
		teamMembershipRef01Data["after"] = setup.idmap["after01"]
		teamMembershipRef01Data["also_leave_parent_team"] = setup.idmap["also_leave_parent_team01"]
		teamMembershipRef01Data["before"] = setup.idmap["before01"]
		teamMembershipRef01Data["first"] = setup.idmap["first01"]
		teamMembershipRef01Data["include_archived"] = setup.idmap["include_archived01"]
		teamMembershipRef01Data["last"] = setup.idmap["last01"]
		teamMembershipRef01Data["order_by"] = setup.idmap["order_by01"]

		teamMembershipRef01DataResult, err := teamMembershipRef01Ent.Create(teamMembershipRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		teamMembershipRef01Data = core.ToMapAny(entityData(teamMembershipRef01DataResult))
		if teamMembershipRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if teamMembershipRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		teamMembershipRef01Match := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		teamMembershipRef01ListResult, err := teamMembershipRef01Ent.List(teamMembershipRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		teamMembershipRef01List, teamMembershipRef01ListOk := teamMembershipRef01ListResult.([]any)
		if !teamMembershipRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", teamMembershipRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(teamMembershipRef01List), map[string]any{"id": teamMembershipRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		teamMembershipRef01DataUp0Up := map[string]any{
			"id": teamMembershipRef01Data["id"],
		}

		teamMembershipRef01ResdataUp0Result, err := teamMembershipRef01Ent.Update(teamMembershipRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		teamMembershipRef01ResdataUp0 := core.ToMapAny(entityData(teamMembershipRef01ResdataUp0Result))
		if teamMembershipRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if teamMembershipRef01ResdataUp0["id"] != teamMembershipRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}

		// LOAD
		teamMembershipRef01MatchDt0 := map[string]any{
			"id": teamMembershipRef01Data["id"],
		}
		teamMembershipRef01DataDt0Loaded, err := teamMembershipRef01Ent.Load(teamMembershipRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		teamMembershipRef01DataDt0LoadResult := core.ToMapAny(entityData(teamMembershipRef01DataDt0Loaded))
		if teamMembershipRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if teamMembershipRef01DataDt0LoadResult["id"] != teamMembershipRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		teamMembershipRef01MatchRm0 := map[string]any{
			"id": teamMembershipRef01Data["id"],
		}
		if v := setup.idmap["also_leave_parent_team"]; v != nil {
			teamMembershipRef01MatchRm0["also_leave_parent_team"] = v
		} else {
			teamMembershipRef01MatchRm0["also_leave_parent_team"] = setup.idmap["also_leave_parent_team01"]
		}
		_, err = teamMembershipRef01Ent.Remove(teamMembershipRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		teamMembershipRef01MatchRt0 := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		teamMembershipRef01ListRt0Result, err := teamMembershipRef01Ent.List(teamMembershipRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		teamMembershipRef01ListRt0, teamMembershipRef01ListRt0Ok := teamMembershipRef01ListRt0Result.([]any)
		if !teamMembershipRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", teamMembershipRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(teamMembershipRef01ListRt0), map[string]any{"id": teamMembershipRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func team_membershipBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "team_membership", "TeamMembershipTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read team_membership test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse team_membership test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"team_membership01", "team_membership02", "team_membership03", "after01", "also_leave_parent_team01", "before01", "first01", "include_archived01", "last01", "order_by01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("LINEAR_TEST_TEAM_MEMBERSHIP_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LINEAR_TEST_TEAM_MEMBERSHIP_ENTID": idmap,
		"LINEAR_TEST_LIVE":      "FALSE",
		"LINEAR_TEST_EXPLAIN":   "FALSE",
		"LINEAR_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LINEAR_TEST_TEAM_MEMBERSHIP_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["LINEAR_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["LINEAR_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewLinearSDK(core.ToMapAny(mergedOpts))
	}

	live := env["LINEAR_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["LINEAR_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
