package sdktest

import (
	"encoding/json"
	"fmt"
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

func TestTeamEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Team(nil)
		if ent == nil {
			t.Fatal("expected non-nil TeamEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"team": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Team(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
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
			for item := range streamSdk.Team(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := teamBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "team." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set LINEAR_TEST_TEAM_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		teamRef01Ent := client.Team(nil)
		teamRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "team"}), "team_ref01"))
		teamRef01Data["after"] = setup.idmap["after01"]
		teamRef01Data["before"] = setup.idmap["before01"]
		teamRef01Data["copy_settings_from_team_id"] = setup.idmap["copy_settings_from_team01"]
		teamRef01Data["first"] = setup.idmap["first01"]
		teamRef01Data["include_archived"] = setup.idmap["include_archived01"]
		teamRef01Data["last"] = setup.idmap["last01"]
		teamRef01Data["order_by"] = setup.idmap["order_by01"]

		teamRef01DataResult, err := teamRef01Ent.Create(teamRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		teamRef01Data = core.ToMapAny(entityData(teamRef01DataResult))
		if teamRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if teamRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		teamRef01Match := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		teamRef01ListResult, err := teamRef01Ent.List(teamRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		teamRef01List, teamRef01ListOk := teamRef01ListResult.([]any)
		if !teamRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", teamRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(teamRef01List), map[string]any{"id": teamRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		teamRef01DataUp0Up := map[string]any{
			"id": teamRef01Data["id"],
		}

		teamRef01MarkdefUp0Name := "autoCloseStateId"
		teamRef01MarkdefUp0Value := fmt.Sprintf("Mark01-team_ref01_%d", setup.now)
		teamRef01DataUp0Up[teamRef01MarkdefUp0Name] = teamRef01MarkdefUp0Value

		teamRef01ResdataUp0Result, err := teamRef01Ent.Update(teamRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		teamRef01ResdataUp0 := core.ToMapAny(entityData(teamRef01ResdataUp0Result))
		if teamRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if teamRef01ResdataUp0["id"] != teamRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if teamRef01ResdataUp0[teamRef01MarkdefUp0Name] != teamRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", teamRef01MarkdefUp0Name, teamRef01ResdataUp0[teamRef01MarkdefUp0Name])
		}

		// LOAD
		teamRef01MatchDt0 := map[string]any{
			"id": teamRef01Data["id"],
		}
		teamRef01DataDt0Loaded, err := teamRef01Ent.Load(teamRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		teamRef01DataDt0LoadResult := core.ToMapAny(entityData(teamRef01DataDt0Loaded))
		if teamRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if teamRef01DataDt0LoadResult["id"] != teamRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		teamRef01MatchRm0 := map[string]any{
			"id": teamRef01Data["id"],
		}
		_, err = teamRef01Ent.Remove(teamRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		teamRef01MatchRt0 := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		teamRef01ListRt0Result, err := teamRef01Ent.List(teamRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		teamRef01ListRt0, teamRef01ListRt0Ok := teamRef01ListRt0Result.([]any)
		if !teamRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", teamRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(teamRef01ListRt0), map[string]any{"id": teamRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func teamBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "team", "TeamTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read team test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse team test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"team01", "team02", "team03", "after01", "before01", "copy_settings_from_team01", "first01", "include_archived01", "last01", "order_by01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("LINEAR_TEST_TEAM_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LINEAR_TEST_TEAM_ENTID": idmap,
		"LINEAR_TEST_LIVE":      "FALSE",
		"LINEAR_TEST_EXPLAIN":   "FALSE",
		"LINEAR_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LINEAR_TEST_TEAM_ENTID"])
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
