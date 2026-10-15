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
const issueEntityLiveStrict = true


type issueFailHook struct {
	sdk.BaseFeature
	unexpected int
}

func (f *issueFailHook) PreSpec(ctx *sdk.Context) {
	panic("issue hook failed")
}

func (f *issueFailHook) PreUnexpected(ctx *sdk.Context) {
	f.unexpected++
}

func TestIssueEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Issue(nil)
		if ent == nil {
			t.Fatal("expected non-nil IssueEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"issue": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for si := range base.Issue(nil).Stream("list", nil, nil) {
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
			for si := range streamSdk.Issue(nil).Stream("list", nil, nil) {
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
		for si := range sdk.TestSDK(offline, nil).Issue(nil).Stream("list", nil, nil) {
			if si.Err != nil {
				streamerr = si.Err
			}
		}
		if nil == streamerr || !strings.Contains(streamerr.Error(), "offline") {
			t.Fatalf("expected the transport failure as a stream value, got %v", streamerr)
		}

		quiet := map[string]any{"ctrl": map[string]any{"throw": false}}
		for si := range sdk.TestSDK(offline, nil).Issue(nil).Stream("list", nil, quiet) {
			if si.Err != nil {
				t.Fatalf("throw false: expected no error value, got %v", si.Err)
			}
		}

		if fhHasFeature("rbac") {
			denied := sdk.TestSDK(nil, map[string]any{
				"feature": map[string]any{"rbac": map[string]any{"active": true, "deny": true}},
			})
			var denyerr error
			for si := range denied.Issue(nil).Stream("list", nil, nil) {
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
		for range sdk.TestSDK(nil, nil).Issue(nil).Stream("list", nil, map[string]any{"ctrl": ctrl}) {
		}
		if _, has := ctrl["stream"]; has || 1 != len(ctrl) {
			t.Fatalf("the stream changed the caller's ctrl")
		}
		if 0 == len(explain) {
			t.Fatalf("the caller's explain record was not filled")
		}
	})

	t.Run("unexpected", func(t *testing.T) {
		hook := &issueFailHook{
			BaseFeature: sdk.BaseFeature{Version: "0.0.1", Name: "failhook", Active: true}}
		client := sdk.TestSDK(nil, map[string]any{"extend": []any{hook}})

		_, err := client.Issue(nil).List(nil, nil)
		if nil == err || !strings.Contains(err.Error(), "hook failed") {
			t.Fatalf("expected the hook's failure, got %v", err)
		}
		if 0 == hook.unexpected {
			t.Fatalf("PreUnexpected did not fire")
		}

		fired := hook.unexpected
		if _, err := client.Issue(nil).List(nil, map[string]any{"throw": false}); nil != err {
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
		_, err := client.Issue(nil).List(map[string]any{"after": 1}, nil)
		if sdkerr, ok := err.(*core.LinearError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := issueBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "issue." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live {
			for _, _liveKey := range []string{"after01", "attachment01", "before01", "branch_name01", "description01", "file_key01", "first01", "include_archived01", "label01", "last01", "order_by01", "permanently_delete01", "reminder_at01", "trash01", "user_email01", "user01"} {
				if setup.syntheticOnly || setup.idmap[_liveKey] == nil {
					liveMiss(t, issueEntityLiveStrict, "Live entity test blocked: needs %s via LINEAR_TEST_ISSUE_ENTID", _liveKey)
				}
			}
		}
		client := setup.client
		_ = client

		// CREATE
		issueRef01Ent := client.Issue(nil)
		issueRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "issue"}), "issue_ref01"))
		issueRef01Data["after"] = setup.idmap["after01"]
		issueRef01Data["attachment_id"] = setup.idmap["attachment01"]
		issueRef01Data["before"] = setup.idmap["before01"]
		issueRef01Data["branch_name"] = setup.idmap["branch_name01"]
		issueRef01Data["description"] = setup.idmap["description01"]
		issueRef01Data["file_key"] = setup.idmap["file_key01"]
		issueRef01Data["first"] = setup.idmap["first01"]
		issueRef01Data["include_archived"] = setup.idmap["include_archived01"]
		issueRef01Data["label_id"] = setup.idmap["label01"]
		issueRef01Data["last"] = setup.idmap["last01"]
		issueRef01Data["order_by"] = setup.idmap["order_by01"]
		issueRef01Data["permanently_delete"] = setup.idmap["permanently_delete01"]
		issueRef01Data["reminder_at"] = setup.idmap["reminder_at01"]
		issueRef01Data["trash"] = setup.idmap["trash01"]
		issueRef01Data["user_email"] = setup.idmap["user_email01"]
		issueRef01Data["user_id"] = setup.idmap["user01"]

		issueRef01DataResult, err := issueRef01Ent.Create(issueRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		issueRef01Data = core.ToMapAny(entityData(issueRef01DataResult))
		if issueRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if issueRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		issueRef01Match := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		issueRef01ListResult, err := issueRef01Ent.List(issueRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		issueRef01List, issueRef01ListOk := issueRef01ListResult.([]any)
		if !issueRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", issueRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(issueRef01List), map[string]any{"id": issueRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		issueRef01DataUp0Up := map[string]any{
			"id": issueRef01Data["id"],
		}

		issueRef01MarkdefUp0Name := "branchName"
		issueRef01MarkdefUp0Value := fmt.Sprintf("Mark01-issue_ref01_%d", setup.now)
		issueRef01DataUp0Up[issueRef01MarkdefUp0Name] = issueRef01MarkdefUp0Value

		issueRef01ResdataUp0Result, err := issueRef01Ent.Update(issueRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		issueRef01ResdataUp0 := core.ToMapAny(entityData(issueRef01ResdataUp0Result))
		if issueRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if issueRef01ResdataUp0["id"] != issueRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if issueRef01ResdataUp0[issueRef01MarkdefUp0Name] != issueRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", issueRef01MarkdefUp0Name, issueRef01ResdataUp0[issueRef01MarkdefUp0Name])
		}

		// LOAD
		issueRef01MatchDt0 := map[string]any{
			"id": issueRef01Data["id"],
		}
		issueRef01DataDt0Loaded, err := issueRef01Ent.Load(issueRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		issueRef01DataDt0LoadResult := core.ToMapAny(entityData(issueRef01DataDt0Loaded))
		if issueRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if issueRef01DataDt0LoadResult["id"] != issueRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		issueRef01MatchRm0 := map[string]any{
			"id": issueRef01Data["id"],
		}
		if v := setup.idmap["permanently_delete"]; v != nil {
			issueRef01MatchRm0["permanently_delete"] = v
		} else {
			issueRef01MatchRm0["permanently_delete"] = setup.idmap["permanently_delete01"]
		}
		_, err = issueRef01Ent.Remove(issueRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		issueRef01MatchRt0 := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		issueRef01ListRt0Result, err := issueRef01Ent.List(issueRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		issueRef01ListRt0, issueRef01ListRt0Ok := issueRef01ListRt0Result.([]any)
		if !issueRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", issueRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(issueRef01ListRt0), map[string]any{"id": issueRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func issueBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "issue", "IssueTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read issue test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse issue test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"issue01", "issue02", "issue03", "after01", "attachment01", "before01", "branch_name01", "description01", "file_key01", "first01", "include_archived01", "label01", "last01", "order_by01", "permanently_delete01", "reminder_at01", "trash01", "user_email01", "user01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("LINEAR_TEST_ISSUE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LINEAR_TEST_ISSUE_ENTID": idmap,
		"LINEAR_TEST_LIVE":      "FALSE",
		"LINEAR_TEST_EXPLAIN":   "FALSE",
		"LINEAR_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LINEAR_TEST_ISSUE_ENTID"])
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
