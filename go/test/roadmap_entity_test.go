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

// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const roadmapEntityLiveStrict = true


type roadmapFailHook struct {
	sdk.BaseFeature
	unexpected int
}

func (f *roadmapFailHook) PreSpec(ctx *sdk.Context) {
	panic("roadmap hook failed")
}

func (f *roadmapFailHook) PreUnexpected(ctx *sdk.Context) {
	f.unexpected++
}

func TestRoadmapEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Roadmap(nil)
		if ent == nil {
			t.Fatal("expected non-nil RoadmapEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"roadmap": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for si := range base.Roadmap(nil).Stream("list", nil, nil) {
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
			for si := range streamSdk.Roadmap(nil).Stream("list", nil, nil) {
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
		for si := range sdk.TestSDK(offline, nil).Roadmap(nil).Stream("list", nil, nil) {
			if si.Err != nil {
				streamerr = si.Err
			}
		}
		if nil == streamerr || !strings.Contains(streamerr.Error(), "offline") {
			t.Fatalf("expected the transport failure as a stream value, got %v", streamerr)
		}

		quiet := map[string]any{"ctrl": map[string]any{"throw": false}}
		for si := range sdk.TestSDK(offline, nil).Roadmap(nil).Stream("list", nil, quiet) {
			if si.Err != nil {
				t.Fatalf("throw false: expected no error value, got %v", si.Err)
			}
		}

		if fhHasFeature("rbac") {
			denied := sdk.TestSDK(nil, map[string]any{
				"feature": map[string]any{"rbac": map[string]any{"active": true, "deny": true}},
			})
			var denyerr error
			for si := range denied.Roadmap(nil).Stream("list", nil, nil) {
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
		for range sdk.TestSDK(nil, nil).Roadmap(nil).Stream("list", nil, map[string]any{"ctrl": ctrl}) {
		}
		if _, has := ctrl["stream"]; has || 1 != len(ctrl) {
			t.Fatalf("the stream changed the caller's ctrl")
		}
		if 0 == len(explain) {
			t.Fatalf("the caller's explain record was not filled")
		}
	})

	t.Run("unexpected", func(t *testing.T) {
		hook := &roadmapFailHook{
			BaseFeature: sdk.BaseFeature{Version: "0.0.1", Name: "failhook", Active: true}}
		client := sdk.TestSDK(nil, map[string]any{"extend": []any{hook}})

		_, err := client.Roadmap(nil).List(nil, nil)
		if nil == err || !strings.Contains(err.Error(), "hook failed") {
			t.Fatalf("expected the hook's failure, got %v", err)
		}
		if 0 == hook.unexpected {
			t.Fatalf("PreUnexpected did not fire")
		}

		fired := hook.unexpected
		if _, err := client.Roadmap(nil).List(nil, map[string]any{"throw": false}); nil != err {
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
		_, err := client.Roadmap(nil).List(map[string]any{"after": 1}, nil)
		if sdkerr, ok := err.(*core.LinearError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := roadmapBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "roadmap." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live {
			for _, _liveKey := range []string{"after01", "before01", "first01", "include_archived01", "last01", "order_by01"} {
				if setup.syntheticOnly || setup.idmap[_liveKey] == nil {
					liveMiss(t, roadmapEntityLiveStrict, "Live entity test blocked: needs %s via LINEAR_TEST_ROADMAP_ENTID", _liveKey)
				}
			}
		}
		client := setup.client
		_ = client

		// CREATE
		roadmapRef01Ent := client.Roadmap(nil)
		roadmapRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "roadmap"}), "roadmap_ref01"))
		roadmapRef01Data["after"] = setup.idmap["after01"]
		roadmapRef01Data["before"] = setup.idmap["before01"]
		roadmapRef01Data["first"] = setup.idmap["first01"]
		roadmapRef01Data["include_archived"] = setup.idmap["include_archived01"]
		roadmapRef01Data["last"] = setup.idmap["last01"]
		roadmapRef01Data["order_by"] = setup.idmap["order_by01"]

		roadmapRef01DataResult, err := roadmapRef01Ent.Create(roadmapRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		roadmapRef01Data = core.ToMapAny(entityData(roadmapRef01DataResult))
		if roadmapRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if roadmapRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		roadmapRef01Match := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		roadmapRef01ListResult, err := roadmapRef01Ent.List(roadmapRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		roadmapRef01List, roadmapRef01ListOk := roadmapRef01ListResult.([]any)
		if !roadmapRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", roadmapRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(roadmapRef01List), map[string]any{"id": roadmapRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		roadmapRef01DataUp0Up := map[string]any{
			"id": roadmapRef01Data["id"],
		}

		roadmapRef01MarkdefUp0Name := "color"
		roadmapRef01MarkdefUp0Value := fmt.Sprintf("Mark01-roadmap_ref01_%d", setup.now)
		roadmapRef01DataUp0Up[roadmapRef01MarkdefUp0Name] = roadmapRef01MarkdefUp0Value

		roadmapRef01ResdataUp0Result, err := roadmapRef01Ent.Update(roadmapRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		roadmapRef01ResdataUp0 := core.ToMapAny(entityData(roadmapRef01ResdataUp0Result))
		if roadmapRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if roadmapRef01ResdataUp0["id"] != roadmapRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if roadmapRef01ResdataUp0[roadmapRef01MarkdefUp0Name] != roadmapRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", roadmapRef01MarkdefUp0Name, roadmapRef01ResdataUp0[roadmapRef01MarkdefUp0Name])
		}

		// LOAD
		roadmapRef01MatchDt0 := map[string]any{
			"id": roadmapRef01Data["id"],
		}
		roadmapRef01DataDt0Loaded, err := roadmapRef01Ent.Load(roadmapRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		roadmapRef01DataDt0LoadResult := core.ToMapAny(entityData(roadmapRef01DataDt0Loaded))
		if roadmapRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if roadmapRef01DataDt0LoadResult["id"] != roadmapRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		roadmapRef01MatchRm0 := map[string]any{
			"id": roadmapRef01Data["id"],
		}
		_, err = roadmapRef01Ent.Remove(roadmapRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		roadmapRef01MatchRt0 := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		roadmapRef01ListRt0Result, err := roadmapRef01Ent.List(roadmapRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		roadmapRef01ListRt0, roadmapRef01ListRt0Ok := roadmapRef01ListRt0Result.([]any)
		if !roadmapRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", roadmapRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(roadmapRef01ListRt0), map[string]any{"id": roadmapRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func roadmapBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "roadmap", "RoadmapTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read roadmap test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse roadmap test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"roadmap01", "roadmap02", "roadmap03", "after01", "before01", "first01", "include_archived01", "last01", "order_by01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("LINEAR_TEST_ROADMAP_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LINEAR_TEST_ROADMAP_ENTID": idmap,
		"LINEAR_TEST_LIVE":      "FALSE",
		"LINEAR_TEST_EXPLAIN":   "FALSE",
		"LINEAR_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LINEAR_TEST_ROADMAP_ENTID"])
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
