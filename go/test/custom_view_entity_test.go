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

func TestCustomViewEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CustomView(nil)
		if ent == nil {
			t.Fatal("expected non-nil CustomViewEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"custom_view": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.CustomView(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.CustomView(nil).Stream("list", nil, nil) {
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
		setup := custom_viewBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "custom_view." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set LINEAR_TEST_CUSTOM_VIEW_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		customViewRef01Ent := client.CustomView(nil)
		customViewRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "custom_view"}), "custom_view_ref01"))
		customViewRef01Data["after"] = setup.idmap["after01"]
		customViewRef01Data["before"] = setup.idmap["before01"]
		customViewRef01Data["first"] = setup.idmap["first01"]
		customViewRef01Data["include_archived"] = setup.idmap["include_archived01"]
		customViewRef01Data["last"] = setup.idmap["last01"]
		customViewRef01Data["order_by"] = setup.idmap["order_by01"]

		customViewRef01DataResult, err := customViewRef01Ent.Create(customViewRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		customViewRef01Data = core.ToMapAny(entityData(customViewRef01DataResult))
		if customViewRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if customViewRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		customViewRef01Match := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		customViewRef01ListResult, err := customViewRef01Ent.List(customViewRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		customViewRef01List, customViewRef01ListOk := customViewRef01ListResult.([]any)
		if !customViewRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", customViewRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(customViewRef01List), map[string]any{"id": customViewRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		customViewRef01DataUp0Up := map[string]any{
			"id": customViewRef01Data["id"],
		}

		customViewRef01MarkdefUp0Name := "color"
		customViewRef01MarkdefUp0Value := fmt.Sprintf("Mark01-custom_view_ref01_%d", setup.now)
		customViewRef01DataUp0Up[customViewRef01MarkdefUp0Name] = customViewRef01MarkdefUp0Value

		customViewRef01ResdataUp0Result, err := customViewRef01Ent.Update(customViewRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		customViewRef01ResdataUp0 := core.ToMapAny(entityData(customViewRef01ResdataUp0Result))
		if customViewRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if customViewRef01ResdataUp0["id"] != customViewRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if customViewRef01ResdataUp0[customViewRef01MarkdefUp0Name] != customViewRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", customViewRef01MarkdefUp0Name, customViewRef01ResdataUp0[customViewRef01MarkdefUp0Name])
		}

		// LOAD
		customViewRef01MatchDt0 := map[string]any{
			"id": customViewRef01Data["id"],
		}
		customViewRef01DataDt0Loaded, err := customViewRef01Ent.Load(customViewRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		customViewRef01DataDt0LoadResult := core.ToMapAny(entityData(customViewRef01DataDt0Loaded))
		if customViewRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if customViewRef01DataDt0LoadResult["id"] != customViewRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		customViewRef01MatchRm0 := map[string]any{
			"id": customViewRef01Data["id"],
		}
		_, err = customViewRef01Ent.Remove(customViewRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		customViewRef01MatchRt0 := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		customViewRef01ListRt0Result, err := customViewRef01Ent.List(customViewRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		customViewRef01ListRt0, customViewRef01ListRt0Ok := customViewRef01ListRt0Result.([]any)
		if !customViewRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", customViewRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(customViewRef01ListRt0), map[string]any{"id": customViewRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func custom_viewBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "custom_view", "CustomViewTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read custom_view test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse custom_view test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"custom_view01", "custom_view02", "custom_view03", "after01", "before01", "first01", "include_archived01", "last01", "order_by01"},
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
	entidEnvRaw := os.Getenv("LINEAR_TEST_CUSTOM_VIEW_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LINEAR_TEST_CUSTOM_VIEW_ENTID": idmap,
		"LINEAR_TEST_LIVE":      "FALSE",
		"LINEAR_TEST_EXPLAIN":   "FALSE",
		"LINEAR_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LINEAR_TEST_CUSTOM_VIEW_ENTID"])
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
