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

func TestRoadmapToProjectEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.RoadmapToProject(nil)
		if ent == nil {
			t.Fatal("expected non-nil RoadmapToProjectEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"roadmap_to_project": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.RoadmapToProject(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.RoadmapToProject(nil).Stream("list", nil, nil) {
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
		setup := roadmap_to_projectBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "roadmap_to_project." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set LINEAR_TEST_ROADMAP_TO_PROJECT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		roadmapToProjectRef01Ent := client.RoadmapToProject(nil)
		roadmapToProjectRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "roadmap_to_project"}), "roadmap_to_project_ref01"))
		roadmapToProjectRef01Data["after"] = setup.idmap["after01"]
		roadmapToProjectRef01Data["before"] = setup.idmap["before01"]
		roadmapToProjectRef01Data["first"] = setup.idmap["first01"]
		roadmapToProjectRef01Data["include_archived"] = setup.idmap["include_archived01"]
		roadmapToProjectRef01Data["last"] = setup.idmap["last01"]
		roadmapToProjectRef01Data["order_by"] = setup.idmap["order_by01"]

		roadmapToProjectRef01DataResult, err := roadmapToProjectRef01Ent.Create(roadmapToProjectRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		roadmapToProjectRef01Data = core.ToMapAny(entityData(roadmapToProjectRef01DataResult))
		if roadmapToProjectRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if roadmapToProjectRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		roadmapToProjectRef01Match := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		roadmapToProjectRef01ListResult, err := roadmapToProjectRef01Ent.List(roadmapToProjectRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		roadmapToProjectRef01List, roadmapToProjectRef01ListOk := roadmapToProjectRef01ListResult.([]any)
		if !roadmapToProjectRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", roadmapToProjectRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(roadmapToProjectRef01List), map[string]any{"id": roadmapToProjectRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		roadmapToProjectRef01DataUp0Up := map[string]any{
			"id": roadmapToProjectRef01Data["id"],
		}

		roadmapToProjectRef01MarkdefUp0Name := "sortOrder"
		roadmapToProjectRef01MarkdefUp0Value := fmt.Sprintf("Mark01-roadmap_to_project_ref01_%d", setup.now)
		roadmapToProjectRef01DataUp0Up[roadmapToProjectRef01MarkdefUp0Name] = roadmapToProjectRef01MarkdefUp0Value

		roadmapToProjectRef01ResdataUp0Result, err := roadmapToProjectRef01Ent.Update(roadmapToProjectRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		roadmapToProjectRef01ResdataUp0 := core.ToMapAny(entityData(roadmapToProjectRef01ResdataUp0Result))
		if roadmapToProjectRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if roadmapToProjectRef01ResdataUp0["id"] != roadmapToProjectRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if roadmapToProjectRef01ResdataUp0[roadmapToProjectRef01MarkdefUp0Name] != roadmapToProjectRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", roadmapToProjectRef01MarkdefUp0Name, roadmapToProjectRef01ResdataUp0[roadmapToProjectRef01MarkdefUp0Name])
		}

		// LOAD
		roadmapToProjectRef01MatchDt0 := map[string]any{
			"id": roadmapToProjectRef01Data["id"],
		}
		roadmapToProjectRef01DataDt0Loaded, err := roadmapToProjectRef01Ent.Load(roadmapToProjectRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		roadmapToProjectRef01DataDt0LoadResult := core.ToMapAny(entityData(roadmapToProjectRef01DataDt0Loaded))
		if roadmapToProjectRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if roadmapToProjectRef01DataDt0LoadResult["id"] != roadmapToProjectRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		roadmapToProjectRef01MatchRm0 := map[string]any{
			"id": roadmapToProjectRef01Data["id"],
		}
		_, err = roadmapToProjectRef01Ent.Remove(roadmapToProjectRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		roadmapToProjectRef01MatchRt0 := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		roadmapToProjectRef01ListRt0Result, err := roadmapToProjectRef01Ent.List(roadmapToProjectRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		roadmapToProjectRef01ListRt0, roadmapToProjectRef01ListRt0Ok := roadmapToProjectRef01ListRt0Result.([]any)
		if !roadmapToProjectRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", roadmapToProjectRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(roadmapToProjectRef01ListRt0), map[string]any{"id": roadmapToProjectRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func roadmap_to_projectBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "roadmap_to_project", "RoadmapToProjectTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read roadmap_to_project test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse roadmap_to_project test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"roadmap_to_project01", "roadmap_to_project02", "roadmap_to_project03", "after01", "before01", "first01", "include_archived01", "last01", "order_by01"},
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
	entidEnvRaw := os.Getenv("LINEAR_TEST_ROADMAP_TO_PROJECT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LINEAR_TEST_ROADMAP_TO_PROJECT_ENTID": idmap,
		"LINEAR_TEST_LIVE":      "FALSE",
		"LINEAR_TEST_EXPLAIN":   "FALSE",
		"LINEAR_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LINEAR_TEST_ROADMAP_TO_PROJECT_ENTID"])
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
