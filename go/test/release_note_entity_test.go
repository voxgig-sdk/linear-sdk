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

func TestReleaseNoteEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ReleaseNote(nil)
		if ent == nil {
			t.Fatal("expected non-nil ReleaseNoteEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"release_note": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.ReleaseNote(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.ReleaseNote(nil).Stream("list", nil, nil) {
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
		setup := release_noteBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "release_note." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set LINEAR_TEST_RELEASE_NOTE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		releaseNoteRef01Ent := client.ReleaseNote(nil)
		releaseNoteRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "release_note"}), "release_note_ref01"))
		releaseNoteRef01Data["after"] = setup.idmap["after01"]
		releaseNoteRef01Data["before"] = setup.idmap["before01"]
		releaseNoteRef01Data["first"] = setup.idmap["first01"]
		releaseNoteRef01Data["include_archived"] = setup.idmap["include_archived01"]
		releaseNoteRef01Data["last"] = setup.idmap["last01"]
		releaseNoteRef01Data["order_by"] = setup.idmap["order_by01"]

		releaseNoteRef01DataResult, err := releaseNoteRef01Ent.Create(releaseNoteRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		releaseNoteRef01Data = core.ToMapAny(entityData(releaseNoteRef01DataResult))
		if releaseNoteRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if releaseNoteRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		releaseNoteRef01Match := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		releaseNoteRef01ListResult, err := releaseNoteRef01Ent.List(releaseNoteRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		releaseNoteRef01List, releaseNoteRef01ListOk := releaseNoteRef01ListResult.([]any)
		if !releaseNoteRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", releaseNoteRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(releaseNoteRef01List), map[string]any{"id": releaseNoteRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		releaseNoteRef01DataUp0Up := map[string]any{
			"id": releaseNoteRef01Data["id"],
		}

		releaseNoteRef01MarkdefUp0Name := "generationStatus"
		releaseNoteRef01MarkdefUp0Value := fmt.Sprintf("Mark01-release_note_ref01_%d", setup.now)
		releaseNoteRef01DataUp0Up[releaseNoteRef01MarkdefUp0Name] = releaseNoteRef01MarkdefUp0Value

		releaseNoteRef01ResdataUp0Result, err := releaseNoteRef01Ent.Update(releaseNoteRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		releaseNoteRef01ResdataUp0 := core.ToMapAny(entityData(releaseNoteRef01ResdataUp0Result))
		if releaseNoteRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if releaseNoteRef01ResdataUp0["id"] != releaseNoteRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if releaseNoteRef01ResdataUp0[releaseNoteRef01MarkdefUp0Name] != releaseNoteRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", releaseNoteRef01MarkdefUp0Name, releaseNoteRef01ResdataUp0[releaseNoteRef01MarkdefUp0Name])
		}

		// LOAD
		releaseNoteRef01MatchDt0 := map[string]any{
			"id": releaseNoteRef01Data["id"],
		}
		releaseNoteRef01DataDt0Loaded, err := releaseNoteRef01Ent.Load(releaseNoteRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		releaseNoteRef01DataDt0LoadResult := core.ToMapAny(entityData(releaseNoteRef01DataDt0Loaded))
		if releaseNoteRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if releaseNoteRef01DataDt0LoadResult["id"] != releaseNoteRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		releaseNoteRef01MatchRm0 := map[string]any{
			"id": releaseNoteRef01Data["id"],
		}
		_, err = releaseNoteRef01Ent.Remove(releaseNoteRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		releaseNoteRef01MatchRt0 := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		releaseNoteRef01ListRt0Result, err := releaseNoteRef01Ent.List(releaseNoteRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		releaseNoteRef01ListRt0, releaseNoteRef01ListRt0Ok := releaseNoteRef01ListRt0Result.([]any)
		if !releaseNoteRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", releaseNoteRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(releaseNoteRef01ListRt0), map[string]any{"id": releaseNoteRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func release_noteBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "release_note", "ReleaseNoteTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read release_note test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse release_note test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"release_note01", "release_note02", "release_note03", "after01", "before01", "first01", "include_archived01", "last01", "order_by01"},
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
	entidEnvRaw := os.Getenv("LINEAR_TEST_RELEASE_NOTE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LINEAR_TEST_RELEASE_NOTE_ENTID": idmap,
		"LINEAR_TEST_LIVE":      "FALSE",
		"LINEAR_TEST_EXPLAIN":   "FALSE",
		"LINEAR_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LINEAR_TEST_RELEASE_NOTE_ENTID"])
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
