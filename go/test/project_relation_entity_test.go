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
const project_relationEntityLiveStrict = true


type project_relationFailHook struct {
	sdk.BaseFeature
	unexpected int
}

func (f *project_relationFailHook) PreSpec(ctx *sdk.Context) {
	panic("project_relation hook failed")
}

func (f *project_relationFailHook) PreUnexpected(ctx *sdk.Context) {
	f.unexpected++
}

func TestProjectRelationEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ProjectRelation(nil)
		if ent == nil {
			t.Fatal("expected non-nil ProjectRelationEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"project_relation": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for si := range base.ProjectRelation(nil).Stream("list", nil, nil) {
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
			for si := range streamSdk.ProjectRelation(nil).Stream("list", nil, nil) {
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
		for si := range sdk.TestSDK(offline, nil).ProjectRelation(nil).Stream("list", nil, nil) {
			if si.Err != nil {
				streamerr = si.Err
			}
		}
		if nil == streamerr || !strings.Contains(streamerr.Error(), "offline") {
			t.Fatalf("expected the transport failure as a stream value, got %v", streamerr)
		}

		quiet := map[string]any{"ctrl": map[string]any{"throw": false}}
		for si := range sdk.TestSDK(offline, nil).ProjectRelation(nil).Stream("list", nil, quiet) {
			if si.Err != nil {
				t.Fatalf("throw false: expected no error value, got %v", si.Err)
			}
		}

		if fhHasFeature("rbac") {
			denied := sdk.TestSDK(nil, map[string]any{
				"feature": map[string]any{"rbac": map[string]any{"active": true, "deny": true}},
			})
			var denyerr error
			for si := range denied.ProjectRelation(nil).Stream("list", nil, nil) {
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
		for range sdk.TestSDK(nil, nil).ProjectRelation(nil).Stream("list", nil, map[string]any{"ctrl": ctrl}) {
		}
		if _, has := ctrl["stream"]; has || 1 != len(ctrl) {
			t.Fatalf("the stream changed the caller's ctrl")
		}
		if 0 == len(explain) {
			t.Fatalf("the caller's explain record was not filled")
		}
	})

	t.Run("unexpected", func(t *testing.T) {
		hook := &project_relationFailHook{
			BaseFeature: sdk.BaseFeature{Version: "0.0.1", Name: "failhook", Active: true}}
		client := sdk.TestSDK(nil, map[string]any{"extend": []any{hook}})

		_, err := client.ProjectRelation(nil).List(nil, nil)
		if nil == err || !strings.Contains(err.Error(), "hook failed") {
			t.Fatalf("expected the hook's failure, got %v", err)
		}
		if 0 == hook.unexpected {
			t.Fatalf("PreUnexpected did not fire")
		}

		fired := hook.unexpected
		if _, err := client.ProjectRelation(nil).List(nil, map[string]any{"throw": false}); nil != err {
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
		_, err := client.ProjectRelation(nil).List(map[string]any{"after": 1}, nil)
		if sdkerr, ok := err.(*core.LinearError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := project_relationBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "project_relation." + _op, _mode); _shouldSkip {
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
					liveMiss(t, project_relationEntityLiveStrict, "Live entity test blocked: needs %s via LINEAR_TEST_PROJECT_RELATION_ENTID", _liveKey)
				}
			}
		}
		client := setup.client
		_ = client

		// CREATE
		projectRelationRef01Ent := client.ProjectRelation(nil)
		projectRelationRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "project_relation"}), "project_relation_ref01"))
		projectRelationRef01Data["after"] = setup.idmap["after01"]
		projectRelationRef01Data["before"] = setup.idmap["before01"]
		projectRelationRef01Data["first"] = setup.idmap["first01"]
		projectRelationRef01Data["include_archived"] = setup.idmap["include_archived01"]
		projectRelationRef01Data["last"] = setup.idmap["last01"]
		projectRelationRef01Data["order_by"] = setup.idmap["order_by01"]

		projectRelationRef01DataResult, err := projectRelationRef01Ent.Create(projectRelationRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		projectRelationRef01Data = core.ToMapAny(entityData(projectRelationRef01DataResult))
		if projectRelationRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if projectRelationRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		projectRelationRef01Match := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		projectRelationRef01ListResult, err := projectRelationRef01Ent.List(projectRelationRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		projectRelationRef01List, projectRelationRef01ListOk := projectRelationRef01ListResult.([]any)
		if !projectRelationRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", projectRelationRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(projectRelationRef01List), map[string]any{"id": projectRelationRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		projectRelationRef01DataUp0Up := map[string]any{
			"id": projectRelationRef01Data["id"],
		}

		projectRelationRef01MarkdefUp0Name := "anchorType"
		projectRelationRef01MarkdefUp0Value := fmt.Sprintf("Mark01-project_relation_ref01_%d", setup.now)
		projectRelationRef01DataUp0Up[projectRelationRef01MarkdefUp0Name] = projectRelationRef01MarkdefUp0Value

		projectRelationRef01ResdataUp0Result, err := projectRelationRef01Ent.Update(projectRelationRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		projectRelationRef01ResdataUp0 := core.ToMapAny(entityData(projectRelationRef01ResdataUp0Result))
		if projectRelationRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if projectRelationRef01ResdataUp0["id"] != projectRelationRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if projectRelationRef01ResdataUp0[projectRelationRef01MarkdefUp0Name] != projectRelationRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", projectRelationRef01MarkdefUp0Name, projectRelationRef01ResdataUp0[projectRelationRef01MarkdefUp0Name])
		}

		// LOAD
		projectRelationRef01MatchDt0 := map[string]any{
			"id": projectRelationRef01Data["id"],
		}
		projectRelationRef01DataDt0Loaded, err := projectRelationRef01Ent.Load(projectRelationRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		projectRelationRef01DataDt0LoadResult := core.ToMapAny(entityData(projectRelationRef01DataDt0Loaded))
		if projectRelationRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if projectRelationRef01DataDt0LoadResult["id"] != projectRelationRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		projectRelationRef01MatchRm0 := map[string]any{
			"id": projectRelationRef01Data["id"],
		}
		_, err = projectRelationRef01Ent.Remove(projectRelationRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		projectRelationRef01MatchRt0 := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		projectRelationRef01ListRt0Result, err := projectRelationRef01Ent.List(projectRelationRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		projectRelationRef01ListRt0, projectRelationRef01ListRt0Ok := projectRelationRef01ListRt0Result.([]any)
		if !projectRelationRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", projectRelationRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(projectRelationRef01ListRt0), map[string]any{"id": projectRelationRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func project_relationBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "project_relation", "ProjectRelationTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read project_relation test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse project_relation test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"project_relation01", "project_relation02", "project_relation03", "after01", "before01", "first01", "include_archived01", "last01", "order_by01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("LINEAR_TEST_PROJECT_RELATION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LINEAR_TEST_PROJECT_RELATION_ENTID": idmap,
		"LINEAR_TEST_LIVE":      "FALSE",
		"LINEAR_TEST_EXPLAIN":   "FALSE",
		"LINEAR_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LINEAR_TEST_PROJECT_RELATION_ENTID"])
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
