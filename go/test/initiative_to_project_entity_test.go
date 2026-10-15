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
const initiative_to_projectEntityLiveStrict = true


type initiative_to_projectFailHook struct {
	sdk.BaseFeature
	unexpected int
}

func (f *initiative_to_projectFailHook) PreSpec(ctx *sdk.Context) {
	panic("initiative_to_project hook failed")
}

func (f *initiative_to_projectFailHook) PreUnexpected(ctx *sdk.Context) {
	f.unexpected++
}

func TestInitiativeToProjectEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.InitiativeToProject(nil)
		if ent == nil {
			t.Fatal("expected non-nil InitiativeToProjectEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"initiative_to_project": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for si := range base.InitiativeToProject(nil).Stream("list", nil, nil) {
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
			for si := range streamSdk.InitiativeToProject(nil).Stream("list", nil, nil) {
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
		for si := range sdk.TestSDK(offline, nil).InitiativeToProject(nil).Stream("list", nil, nil) {
			if si.Err != nil {
				streamerr = si.Err
			}
		}
		if nil == streamerr || !strings.Contains(streamerr.Error(), "offline") {
			t.Fatalf("expected the transport failure as a stream value, got %v", streamerr)
		}

		quiet := map[string]any{"ctrl": map[string]any{"throw": false}}
		for si := range sdk.TestSDK(offline, nil).InitiativeToProject(nil).Stream("list", nil, quiet) {
			if si.Err != nil {
				t.Fatalf("throw false: expected no error value, got %v", si.Err)
			}
		}

		if fhHasFeature("rbac") {
			denied := sdk.TestSDK(nil, map[string]any{
				"feature": map[string]any{"rbac": map[string]any{"active": true, "deny": true}},
			})
			var denyerr error
			for si := range denied.InitiativeToProject(nil).Stream("list", nil, nil) {
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
		for range sdk.TestSDK(nil, nil).InitiativeToProject(nil).Stream("list", nil, map[string]any{"ctrl": ctrl}) {
		}
		if _, has := ctrl["stream"]; has || 1 != len(ctrl) {
			t.Fatalf("the stream changed the caller's ctrl")
		}
		if 0 == len(explain) {
			t.Fatalf("the caller's explain record was not filled")
		}
	})

	t.Run("unexpected", func(t *testing.T) {
		hook := &initiative_to_projectFailHook{
			BaseFeature: sdk.BaseFeature{Version: "0.0.1", Name: "failhook", Active: true}}
		client := sdk.TestSDK(nil, map[string]any{"extend": []any{hook}})

		_, err := client.InitiativeToProject(nil).List(nil, nil)
		if nil == err || !strings.Contains(err.Error(), "hook failed") {
			t.Fatalf("expected the hook's failure, got %v", err)
		}
		if 0 == hook.unexpected {
			t.Fatalf("PreUnexpected did not fire")
		}

		fired := hook.unexpected
		if _, err := client.InitiativeToProject(nil).List(nil, map[string]any{"throw": false}); nil != err {
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
		_, err := client.InitiativeToProject(nil).List(map[string]any{"after": 1}, nil)
		if sdkerr, ok := err.(*core.LinearError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := initiative_to_projectBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "initiative_to_project." + _op, _mode); _shouldSkip {
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
					liveMiss(t, initiative_to_projectEntityLiveStrict, "Live entity test blocked: needs %s via LINEAR_TEST_INITIATIVE_TO_PROJECT_ENTID", _liveKey)
				}
			}
		}
		client := setup.client
		_ = client

		// CREATE
		initiativeToProjectRef01Ent := client.InitiativeToProject(nil)
		initiativeToProjectRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "initiative_to_project"}), "initiative_to_project_ref01"))
		initiativeToProjectRef01Data["after"] = setup.idmap["after01"]
		initiativeToProjectRef01Data["before"] = setup.idmap["before01"]
		initiativeToProjectRef01Data["first"] = setup.idmap["first01"]
		initiativeToProjectRef01Data["include_archived"] = setup.idmap["include_archived01"]
		initiativeToProjectRef01Data["last"] = setup.idmap["last01"]
		initiativeToProjectRef01Data["order_by"] = setup.idmap["order_by01"]

		initiativeToProjectRef01DataResult, err := initiativeToProjectRef01Ent.Create(initiativeToProjectRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		initiativeToProjectRef01Data = core.ToMapAny(entityData(initiativeToProjectRef01DataResult))
		if initiativeToProjectRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if initiativeToProjectRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		initiativeToProjectRef01Match := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		initiativeToProjectRef01ListResult, err := initiativeToProjectRef01Ent.List(initiativeToProjectRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		initiativeToProjectRef01List, initiativeToProjectRef01ListOk := initiativeToProjectRef01ListResult.([]any)
		if !initiativeToProjectRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", initiativeToProjectRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(initiativeToProjectRef01List), map[string]any{"id": initiativeToProjectRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		initiativeToProjectRef01DataUp0Up := map[string]any{
			"id": initiativeToProjectRef01Data["id"],
		}

		initiativeToProjectRef01MarkdefUp0Name := "sortOrder"
		initiativeToProjectRef01MarkdefUp0Value := fmt.Sprintf("Mark01-initiative_to_project_ref01_%d", setup.now)
		initiativeToProjectRef01DataUp0Up[initiativeToProjectRef01MarkdefUp0Name] = initiativeToProjectRef01MarkdefUp0Value

		initiativeToProjectRef01ResdataUp0Result, err := initiativeToProjectRef01Ent.Update(initiativeToProjectRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		initiativeToProjectRef01ResdataUp0 := core.ToMapAny(entityData(initiativeToProjectRef01ResdataUp0Result))
		if initiativeToProjectRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if initiativeToProjectRef01ResdataUp0["id"] != initiativeToProjectRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if initiativeToProjectRef01ResdataUp0[initiativeToProjectRef01MarkdefUp0Name] != initiativeToProjectRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", initiativeToProjectRef01MarkdefUp0Name, initiativeToProjectRef01ResdataUp0[initiativeToProjectRef01MarkdefUp0Name])
		}

		// LOAD
		initiativeToProjectRef01MatchDt0 := map[string]any{
			"id": initiativeToProjectRef01Data["id"],
		}
		initiativeToProjectRef01DataDt0Loaded, err := initiativeToProjectRef01Ent.Load(initiativeToProjectRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		initiativeToProjectRef01DataDt0LoadResult := core.ToMapAny(entityData(initiativeToProjectRef01DataDt0Loaded))
		if initiativeToProjectRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if initiativeToProjectRef01DataDt0LoadResult["id"] != initiativeToProjectRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		initiativeToProjectRef01MatchRm0 := map[string]any{
			"id": initiativeToProjectRef01Data["id"],
		}
		_, err = initiativeToProjectRef01Ent.Remove(initiativeToProjectRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		initiativeToProjectRef01MatchRt0 := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		initiativeToProjectRef01ListRt0Result, err := initiativeToProjectRef01Ent.List(initiativeToProjectRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		initiativeToProjectRef01ListRt0, initiativeToProjectRef01ListRt0Ok := initiativeToProjectRef01ListRt0Result.([]any)
		if !initiativeToProjectRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", initiativeToProjectRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(initiativeToProjectRef01ListRt0), map[string]any{"id": initiativeToProjectRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func initiative_to_projectBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "initiative_to_project", "InitiativeToProjectTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read initiative_to_project test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse initiative_to_project test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"initiative_to_project01", "initiative_to_project02", "initiative_to_project03", "after01", "before01", "first01", "include_archived01", "last01", "order_by01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("LINEAR_TEST_INITIATIVE_TO_PROJECT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LINEAR_TEST_INITIATIVE_TO_PROJECT_ENTID": idmap,
		"LINEAR_TEST_LIVE":      "FALSE",
		"LINEAR_TEST_EXPLAIN":   "FALSE",
		"LINEAR_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LINEAR_TEST_INITIATIVE_TO_PROJECT_ENTID"])
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
