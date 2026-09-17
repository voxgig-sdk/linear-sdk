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

func TestReleasePipelineEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ReleasePipeline(nil)
		if ent == nil {
			t.Fatal("expected non-nil ReleasePipelineEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"release_pipeline": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.ReleasePipeline(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.ReleasePipeline(nil).Stream("list", nil, nil) {
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
		setup := release_pipelineBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "release_pipeline." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set LINEAR_TEST_RELEASE_PIPELINE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		releasePipelineRef01Ent := client.ReleasePipeline(nil)
		releasePipelineRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "release_pipeline"}), "release_pipeline_ref01"))
		releasePipelineRef01Data["after"] = setup.idmap["after01"]
		releasePipelineRef01Data["before"] = setup.idmap["before01"]
		releasePipelineRef01Data["first"] = setup.idmap["first01"]
		releasePipelineRef01Data["include_archived"] = setup.idmap["include_archived01"]
		releasePipelineRef01Data["last"] = setup.idmap["last01"]
		releasePipelineRef01Data["order_by"] = setup.idmap["order_by01"]

		releasePipelineRef01DataResult, err := releasePipelineRef01Ent.Create(releasePipelineRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		releasePipelineRef01Data = core.ToMapAny(entityData(releasePipelineRef01DataResult))
		if releasePipelineRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if releasePipelineRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		releasePipelineRef01Match := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		releasePipelineRef01ListResult, err := releasePipelineRef01Ent.List(releasePipelineRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		releasePipelineRef01List, releasePipelineRef01ListOk := releasePipelineRef01ListResult.([]any)
		if !releasePipelineRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", releasePipelineRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(releasePipelineRef01List), map[string]any{"id": releasePipelineRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		releasePipelineRef01DataUp0Up := map[string]any{
			"id": releasePipelineRef01Data["id"],
		}

		releasePipelineRef01MarkdefUp0Name := "includePathPatterns"
		releasePipelineRef01MarkdefUp0Value := fmt.Sprintf("Mark01-release_pipeline_ref01_%d", setup.now)
		releasePipelineRef01DataUp0Up[releasePipelineRef01MarkdefUp0Name] = releasePipelineRef01MarkdefUp0Value

		releasePipelineRef01ResdataUp0Result, err := releasePipelineRef01Ent.Update(releasePipelineRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		releasePipelineRef01ResdataUp0 := core.ToMapAny(entityData(releasePipelineRef01ResdataUp0Result))
		if releasePipelineRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if releasePipelineRef01ResdataUp0["id"] != releasePipelineRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if releasePipelineRef01ResdataUp0[releasePipelineRef01MarkdefUp0Name] != releasePipelineRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", releasePipelineRef01MarkdefUp0Name, releasePipelineRef01ResdataUp0[releasePipelineRef01MarkdefUp0Name])
		}

		// LOAD
		releasePipelineRef01MatchDt0 := map[string]any{
			"id": releasePipelineRef01Data["id"],
		}
		releasePipelineRef01DataDt0Loaded, err := releasePipelineRef01Ent.Load(releasePipelineRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		releasePipelineRef01DataDt0LoadResult := core.ToMapAny(entityData(releasePipelineRef01DataDt0Loaded))
		if releasePipelineRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if releasePipelineRef01DataDt0LoadResult["id"] != releasePipelineRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		releasePipelineRef01MatchRm0 := map[string]any{
			"id": releasePipelineRef01Data["id"],
		}
		_, err = releasePipelineRef01Ent.Remove(releasePipelineRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		releasePipelineRef01MatchRt0 := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		releasePipelineRef01ListRt0Result, err := releasePipelineRef01Ent.List(releasePipelineRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		releasePipelineRef01ListRt0, releasePipelineRef01ListRt0Ok := releasePipelineRef01ListRt0Result.([]any)
		if !releasePipelineRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", releasePipelineRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(releasePipelineRef01ListRt0), map[string]any{"id": releasePipelineRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func release_pipelineBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "release_pipeline", "ReleasePipelineTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read release_pipeline test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse release_pipeline test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"release_pipeline01", "release_pipeline02", "release_pipeline03", "after01", "before01", "first01", "include_archived01", "last01", "order_by01"},
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
	entidEnvRaw := os.Getenv("LINEAR_TEST_RELEASE_PIPELINE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LINEAR_TEST_RELEASE_PIPELINE_ENTID": idmap,
		"LINEAR_TEST_LIVE":      "FALSE",
		"LINEAR_TEST_EXPLAIN":   "FALSE",
		"LINEAR_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LINEAR_TEST_RELEASE_PIPELINE_ENTID"])
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
