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

func TestIssueRelationEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.IssueRelation(nil)
		if ent == nil {
			t.Fatal("expected non-nil IssueRelationEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"issue_relation": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.IssueRelation(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.IssueRelation(nil).Stream("list", nil, nil) {
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
		setup := issue_relationBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "issue_relation." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set LINEAR_TEST_ISSUE_RELATION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		issueRelationRef01Ent := client.IssueRelation(nil)
		issueRelationRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "issue_relation"}), "issue_relation_ref01"))
		issueRelationRef01Data["after"] = setup.idmap["after01"]
		issueRelationRef01Data["before"] = setup.idmap["before01"]
		issueRelationRef01Data["first"] = setup.idmap["first01"]
		issueRelationRef01Data["include_archived"] = setup.idmap["include_archived01"]
		issueRelationRef01Data["last"] = setup.idmap["last01"]
		issueRelationRef01Data["order_by"] = setup.idmap["order_by01"]
		issueRelationRef01Data["override_created_at"] = setup.idmap["override_created_at01"]

		issueRelationRef01DataResult, err := issueRelationRef01Ent.Create(issueRelationRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		issueRelationRef01Data = core.ToMapAny(entityData(issueRelationRef01DataResult))
		if issueRelationRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if issueRelationRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		issueRelationRef01Match := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		issueRelationRef01ListResult, err := issueRelationRef01Ent.List(issueRelationRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		issueRelationRef01List, issueRelationRef01ListOk := issueRelationRef01ListResult.([]any)
		if !issueRelationRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", issueRelationRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(issueRelationRef01List), map[string]any{"id": issueRelationRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		issueRelationRef01DataUp0Up := map[string]any{
			"id": issueRelationRef01Data["id"],
		}

		issueRelationRef01MarkdefUp0Name := "type"
		issueRelationRef01MarkdefUp0Value := fmt.Sprintf("Mark01-issue_relation_ref01_%d", setup.now)
		issueRelationRef01DataUp0Up[issueRelationRef01MarkdefUp0Name] = issueRelationRef01MarkdefUp0Value

		issueRelationRef01ResdataUp0Result, err := issueRelationRef01Ent.Update(issueRelationRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		issueRelationRef01ResdataUp0 := core.ToMapAny(entityData(issueRelationRef01ResdataUp0Result))
		if issueRelationRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if issueRelationRef01ResdataUp0["id"] != issueRelationRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if issueRelationRef01ResdataUp0[issueRelationRef01MarkdefUp0Name] != issueRelationRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", issueRelationRef01MarkdefUp0Name, issueRelationRef01ResdataUp0[issueRelationRef01MarkdefUp0Name])
		}

		// LOAD
		issueRelationRef01MatchDt0 := map[string]any{
			"id": issueRelationRef01Data["id"],
		}
		issueRelationRef01DataDt0Loaded, err := issueRelationRef01Ent.Load(issueRelationRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		issueRelationRef01DataDt0LoadResult := core.ToMapAny(entityData(issueRelationRef01DataDt0Loaded))
		if issueRelationRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if issueRelationRef01DataDt0LoadResult["id"] != issueRelationRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		issueRelationRef01MatchRm0 := map[string]any{
			"id": issueRelationRef01Data["id"],
		}
		_, err = issueRelationRef01Ent.Remove(issueRelationRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		issueRelationRef01MatchRt0 := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		issueRelationRef01ListRt0Result, err := issueRelationRef01Ent.List(issueRelationRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		issueRelationRef01ListRt0, issueRelationRef01ListRt0Ok := issueRelationRef01ListRt0Result.([]any)
		if !issueRelationRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", issueRelationRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(issueRelationRef01ListRt0), map[string]any{"id": issueRelationRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func issue_relationBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "issue_relation", "IssueRelationTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read issue_relation test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse issue_relation test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"issue_relation01", "issue_relation02", "issue_relation03", "after01", "before01", "first01", "include_archived01", "last01", "order_by01", "override_created_at01"},
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
	entidEnvRaw := os.Getenv("LINEAR_TEST_ISSUE_RELATION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LINEAR_TEST_ISSUE_RELATION_ENTID": idmap,
		"LINEAR_TEST_LIVE":      "FALSE",
		"LINEAR_TEST_EXPLAIN":   "FALSE",
		"LINEAR_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LINEAR_TEST_ISSUE_RELATION_ENTID"])
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
