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

func TestIssueToReleaseEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.IssueToRelease(nil)
		if ent == nil {
			t.Fatal("expected non-nil IssueToReleaseEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"issue_to_release": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.IssueToRelease(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.IssueToRelease(nil).Stream("list", nil, nil) {
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
		setup := issue_to_releaseBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "issue_to_release." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set LINEAR_TEST_ISSUE_TO_RELEASE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		issueToReleaseRef01Ent := client.IssueToRelease(nil)
		issueToReleaseRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "issue_to_release"}), "issue_to_release_ref01"))
		issueToReleaseRef01Data["after"] = setup.idmap["after01"]
		issueToReleaseRef01Data["before"] = setup.idmap["before01"]
		issueToReleaseRef01Data["first"] = setup.idmap["first01"]
		issueToReleaseRef01Data["include_archived"] = setup.idmap["include_archived01"]
		issueToReleaseRef01Data["last"] = setup.idmap["last01"]
		issueToReleaseRef01Data["order_by"] = setup.idmap["order_by01"]

		issueToReleaseRef01DataResult, err := issueToReleaseRef01Ent.Create(issueToReleaseRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		issueToReleaseRef01Data = core.ToMapAny(entityData(issueToReleaseRef01DataResult))
		if issueToReleaseRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if issueToReleaseRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		issueToReleaseRef01Match := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		issueToReleaseRef01ListResult, err := issueToReleaseRef01Ent.List(issueToReleaseRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		issueToReleaseRef01List, issueToReleaseRef01ListOk := issueToReleaseRef01ListResult.([]any)
		if !issueToReleaseRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", issueToReleaseRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(issueToReleaseRef01List), map[string]any{"id": issueToReleaseRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// LOAD
		issueToReleaseRef01MatchDt0 := map[string]any{
			"id": issueToReleaseRef01Data["id"],
		}
		issueToReleaseRef01DataDt0Loaded, err := issueToReleaseRef01Ent.Load(issueToReleaseRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		issueToReleaseRef01DataDt0LoadResult := core.ToMapAny(entityData(issueToReleaseRef01DataDt0Loaded))
		if issueToReleaseRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if issueToReleaseRef01DataDt0LoadResult["id"] != issueToReleaseRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		issueToReleaseRef01MatchRm0 := map[string]any{
			"id": issueToReleaseRef01Data["id"],
		}
		_, err = issueToReleaseRef01Ent.Remove(issueToReleaseRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		issueToReleaseRef01MatchRt0 := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		issueToReleaseRef01ListRt0Result, err := issueToReleaseRef01Ent.List(issueToReleaseRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		issueToReleaseRef01ListRt0, issueToReleaseRef01ListRt0Ok := issueToReleaseRef01ListRt0Result.([]any)
		if !issueToReleaseRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", issueToReleaseRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(issueToReleaseRef01ListRt0), map[string]any{"id": issueToReleaseRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func issue_to_releaseBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "issue_to_release", "IssueToReleaseTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read issue_to_release test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse issue_to_release test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"issue_to_release01", "issue_to_release02", "issue_to_release03", "after01", "before01", "first01", "include_archived01", "last01", "order_by01"},
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
	entidEnvRaw := os.Getenv("LINEAR_TEST_ISSUE_TO_RELEASE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LINEAR_TEST_ISSUE_TO_RELEASE_ENTID": idmap,
		"LINEAR_TEST_LIVE":      "FALSE",
		"LINEAR_TEST_EXPLAIN":   "FALSE",
		"LINEAR_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LINEAR_TEST_ISSUE_TO_RELEASE_ENTID"])
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
