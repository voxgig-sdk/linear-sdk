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
const attachmentEntityLiveStrict = true


type attachmentFailHook struct {
	sdk.BaseFeature
	unexpected int
}

func (f *attachmentFailHook) PreSpec(ctx *sdk.Context) {
	panic("attachment hook failed")
}

func (f *attachmentFailHook) PreUnexpected(ctx *sdk.Context) {
	f.unexpected++
}

func TestAttachmentEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Attachment(nil)
		if ent == nil {
			t.Fatal("expected non-nil AttachmentEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"attachment": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for si := range base.Attachment(nil).Stream("list", nil, nil) {
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
			for si := range streamSdk.Attachment(nil).Stream("list", nil, nil) {
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
		for si := range sdk.TestSDK(offline, nil).Attachment(nil).Stream("list", nil, nil) {
			if si.Err != nil {
				streamerr = si.Err
			}
		}
		if nil == streamerr || !strings.Contains(streamerr.Error(), "offline") {
			t.Fatalf("expected the transport failure as a stream value, got %v", streamerr)
		}

		quiet := map[string]any{"ctrl": map[string]any{"throw": false}}
		for si := range sdk.TestSDK(offline, nil).Attachment(nil).Stream("list", nil, quiet) {
			if si.Err != nil {
				t.Fatalf("throw false: expected no error value, got %v", si.Err)
			}
		}

		if fhHasFeature("rbac") {
			denied := sdk.TestSDK(nil, map[string]any{
				"feature": map[string]any{"rbac": map[string]any{"active": true, "deny": true}},
			})
			var denyerr error
			for si := range denied.Attachment(nil).Stream("list", nil, nil) {
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
		for range sdk.TestSDK(nil, nil).Attachment(nil).Stream("list", nil, map[string]any{"ctrl": ctrl}) {
		}
		if _, has := ctrl["stream"]; has || 1 != len(ctrl) {
			t.Fatalf("the stream changed the caller's ctrl")
		}
		if 0 == len(explain) {
			t.Fatalf("the caller's explain record was not filled")
		}
	})

	t.Run("unexpected", func(t *testing.T) {
		hook := &attachmentFailHook{
			BaseFeature: sdk.BaseFeature{Version: "0.0.1", Name: "failhook", Active: true}}
		client := sdk.TestSDK(nil, map[string]any{"extend": []any{hook}})

		_, err := client.Attachment(nil).List(nil, nil)
		if nil == err || !strings.Contains(err.Error(), "hook failed") {
			t.Fatalf("expected the hook's failure, got %v", err)
		}
		if 0 == hook.unexpected {
			t.Fatalf("PreUnexpected did not fire")
		}

		fired := hook.unexpected
		if _, err := client.Attachment(nil).List(nil, map[string]any{"throw": false}); nil != err {
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
		_, err := client.Attachment(nil).List(map[string]any{"after": 1}, nil)
		if sdkerr, ok := err.(*core.LinearError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := attachmentBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "attachment." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live {
			for _, _liveKey := range []string{"after01", "before01", "channel01", "conversation01", "create_as_user01", "display_icon_url01", "first01", "include_archived01", "issue01", "jira_issue01", "last01", "link_kind01", "message01", "number01", "order_by01", "part01", "project_path_with_namespace01", "sync_to_comment_thread01", "ticket01", "title01", "url01"} {
				if setup.syntheticOnly || setup.idmap[_liveKey] == nil {
					liveMiss(t, attachmentEntityLiveStrict, "Live entity test blocked: needs %s via LINEAR_TEST_ATTACHMENT_ENTID", _liveKey)
				}
			}
		}
		client := setup.client
		_ = client

		// CREATE
		attachmentRef01Ent := client.Attachment(nil)
		attachmentRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "attachment"}), "attachment_ref01"))
		attachmentRef01Data["after"] = setup.idmap["after01"]
		attachmentRef01Data["before"] = setup.idmap["before01"]
		attachmentRef01Data["channel_id"] = setup.idmap["channel01"]
		attachmentRef01Data["conversation_id"] = setup.idmap["conversation01"]
		attachmentRef01Data["create_as_user"] = setup.idmap["create_as_user01"]
		attachmentRef01Data["display_icon_url"] = setup.idmap["display_icon_url01"]
		attachmentRef01Data["first"] = setup.idmap["first01"]
		attachmentRef01Data["include_archived"] = setup.idmap["include_archived01"]
		attachmentRef01Data["issue_id"] = setup.idmap["issue01"]
		attachmentRef01Data["jira_issue_id"] = setup.idmap["jira_issue01"]
		attachmentRef01Data["last"] = setup.idmap["last01"]
		attachmentRef01Data["link_kind"] = setup.idmap["link_kind01"]
		attachmentRef01Data["message_id"] = setup.idmap["message01"]
		attachmentRef01Data["number"] = setup.idmap["number01"]
		attachmentRef01Data["order_by"] = setup.idmap["order_by01"]
		attachmentRef01Data["part_id"] = setup.idmap["part01"]
		attachmentRef01Data["project_path_with_namespace"] = setup.idmap["project_path_with_namespace01"]
		attachmentRef01Data["sync_to_comment_thread"] = setup.idmap["sync_to_comment_thread01"]
		attachmentRef01Data["ticket_id"] = setup.idmap["ticket01"]
		attachmentRef01Data["title"] = setup.idmap["title01"]
		attachmentRef01Data["url"] = setup.idmap["url01"]

		attachmentRef01DataResult, err := attachmentRef01Ent.Create(attachmentRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		attachmentRef01Data = core.ToMapAny(entityData(attachmentRef01DataResult))
		if attachmentRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if attachmentRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		attachmentRef01Match := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		attachmentRef01ListResult, err := attachmentRef01Ent.List(attachmentRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		attachmentRef01List, attachmentRef01ListOk := attachmentRef01ListResult.([]any)
		if !attachmentRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", attachmentRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(attachmentRef01List), map[string]any{"id": attachmentRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		attachmentRef01DataUp0Up := map[string]any{
			"id": attachmentRef01Data["id"],
		}

		attachmentRef01MarkdefUp0Name := "bodyData"
		attachmentRef01MarkdefUp0Value := fmt.Sprintf("Mark01-attachment_ref01_%d", setup.now)
		attachmentRef01DataUp0Up[attachmentRef01MarkdefUp0Name] = attachmentRef01MarkdefUp0Value

		attachmentRef01ResdataUp0Result, err := attachmentRef01Ent.Update(attachmentRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		attachmentRef01ResdataUp0 := core.ToMapAny(entityData(attachmentRef01ResdataUp0Result))
		if attachmentRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if attachmentRef01ResdataUp0["id"] != attachmentRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if attachmentRef01ResdataUp0[attachmentRef01MarkdefUp0Name] != attachmentRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", attachmentRef01MarkdefUp0Name, attachmentRef01ResdataUp0[attachmentRef01MarkdefUp0Name])
		}

		// LOAD
		attachmentRef01MatchDt0 := map[string]any{
			"id": attachmentRef01Data["id"],
		}
		attachmentRef01DataDt0Loaded, err := attachmentRef01Ent.Load(attachmentRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		attachmentRef01DataDt0LoadResult := core.ToMapAny(entityData(attachmentRef01DataDt0Loaded))
		if attachmentRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if attachmentRef01DataDt0LoadResult["id"] != attachmentRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		attachmentRef01MatchRm0 := map[string]any{
			"id": attachmentRef01Data["id"],
		}
		_, err = attachmentRef01Ent.Remove(attachmentRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		attachmentRef01MatchRt0 := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		attachmentRef01ListRt0Result, err := attachmentRef01Ent.List(attachmentRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		attachmentRef01ListRt0, attachmentRef01ListRt0Ok := attachmentRef01ListRt0Result.([]any)
		if !attachmentRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", attachmentRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(attachmentRef01ListRt0), map[string]any{"id": attachmentRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func attachmentBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "attachment", "AttachmentTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read attachment test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse attachment test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"attachment01", "attachment02", "attachment03", "after01", "before01", "channel01", "conversation01", "create_as_user01", "display_icon_url01", "first01", "include_archived01", "issue01", "jira_issue01", "last01", "link_kind01", "message01", "number01", "order_by01", "part01", "project_path_with_namespace01", "sync_to_comment_thread01", "ticket01", "title01", "url01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("LINEAR_TEST_ATTACHMENT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LINEAR_TEST_ATTACHMENT_ENTID": idmap,
		"LINEAR_TEST_LIVE":      "FALSE",
		"LINEAR_TEST_EXPLAIN":   "FALSE",
		"LINEAR_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LINEAR_TEST_ATTACHMENT_ENTID"])
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
