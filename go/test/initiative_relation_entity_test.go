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

func TestInitiativeRelationEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.InitiativeRelation(nil)
		if ent == nil {
			t.Fatal("expected non-nil InitiativeRelationEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"initiative_relation": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.InitiativeRelation(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.InitiativeRelation(nil).Stream("list", nil, nil) {
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
		setup := initiative_relationBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "initiative_relation." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set LINEAR_TEST_INITIATIVE_RELATION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		initiativeRelationRef01Ent := client.InitiativeRelation(nil)
		initiativeRelationRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "initiative_relation"}), "initiative_relation_ref01"))
		initiativeRelationRef01Data["after"] = setup.idmap["after01"]
		initiativeRelationRef01Data["before"] = setup.idmap["before01"]
		initiativeRelationRef01Data["first"] = setup.idmap["first01"]
		initiativeRelationRef01Data["include_archived"] = setup.idmap["include_archived01"]
		initiativeRelationRef01Data["last"] = setup.idmap["last01"]
		initiativeRelationRef01Data["order_by"] = setup.idmap["order_by01"]

		initiativeRelationRef01DataResult, err := initiativeRelationRef01Ent.Create(initiativeRelationRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		initiativeRelationRef01Data = core.ToMapAny(entityData(initiativeRelationRef01DataResult))
		if initiativeRelationRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if initiativeRelationRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		initiativeRelationRef01Match := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		initiativeRelationRef01ListResult, err := initiativeRelationRef01Ent.List(initiativeRelationRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		initiativeRelationRef01List, initiativeRelationRef01ListOk := initiativeRelationRef01ListResult.([]any)
		if !initiativeRelationRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", initiativeRelationRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(initiativeRelationRef01List), map[string]any{"id": initiativeRelationRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		initiativeRelationRef01DataUp0Up := map[string]any{
			"id": initiativeRelationRef01Data["id"],
		}

		initiativeRelationRef01ResdataUp0Result, err := initiativeRelationRef01Ent.Update(initiativeRelationRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		initiativeRelationRef01ResdataUp0 := core.ToMapAny(entityData(initiativeRelationRef01ResdataUp0Result))
		if initiativeRelationRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if initiativeRelationRef01ResdataUp0["id"] != initiativeRelationRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}

		// LOAD
		initiativeRelationRef01MatchDt0 := map[string]any{
			"id": initiativeRelationRef01Data["id"],
		}
		initiativeRelationRef01DataDt0Loaded, err := initiativeRelationRef01Ent.Load(initiativeRelationRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		initiativeRelationRef01DataDt0LoadResult := core.ToMapAny(entityData(initiativeRelationRef01DataDt0Loaded))
		if initiativeRelationRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if initiativeRelationRef01DataDt0LoadResult["id"] != initiativeRelationRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		initiativeRelationRef01MatchRm0 := map[string]any{
			"id": initiativeRelationRef01Data["id"],
		}
		_, err = initiativeRelationRef01Ent.Remove(initiativeRelationRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		initiativeRelationRef01MatchRt0 := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		initiativeRelationRef01ListRt0Result, err := initiativeRelationRef01Ent.List(initiativeRelationRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		initiativeRelationRef01ListRt0, initiativeRelationRef01ListRt0Ok := initiativeRelationRef01ListRt0Result.([]any)
		if !initiativeRelationRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", initiativeRelationRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(initiativeRelationRef01ListRt0), map[string]any{"id": initiativeRelationRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func initiative_relationBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "initiative_relation", "InitiativeRelationTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read initiative_relation test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse initiative_relation test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"initiative_relation01", "initiative_relation02", "initiative_relation03", "after01", "before01", "first01", "include_archived01", "last01", "order_by01"},
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
	entidEnvRaw := os.Getenv("LINEAR_TEST_INITIATIVE_RELATION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LINEAR_TEST_INITIATIVE_RELATION_ENTID": idmap,
		"LINEAR_TEST_LIVE":      "FALSE",
		"LINEAR_TEST_EXPLAIN":   "FALSE",
		"LINEAR_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LINEAR_TEST_INITIATIVE_RELATION_ENTID"])
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
