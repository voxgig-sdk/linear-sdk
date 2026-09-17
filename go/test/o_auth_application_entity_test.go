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

func TestOAuthApplicationEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.OAuthApplication(nil)
		if ent == nil {
			t.Fatal("expected non-nil OAuthApplicationEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"o_auth_application": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.OAuthApplication(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.OAuthApplication(nil).Stream("list", nil, nil) {
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
		setup := o_auth_applicationBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "o_auth_application." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set LINEAR_TEST_O_AUTH_APPLICATION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		oAuthApplicationRef01Ent := client.OAuthApplication(nil)
		oAuthApplicationRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "o_auth_application"}), "o_auth_application_ref01"))

		oAuthApplicationRef01DataResult, err := oAuthApplicationRef01Ent.Create(oAuthApplicationRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		oAuthApplicationRef01Data = core.ToMapAny(entityData(oAuthApplicationRef01DataResult))
		if oAuthApplicationRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if oAuthApplicationRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		oAuthApplicationRef01Match := map[string]any{}

		oAuthApplicationRef01ListResult, err := oAuthApplicationRef01Ent.List(oAuthApplicationRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		oAuthApplicationRef01List, oAuthApplicationRef01ListOk := oAuthApplicationRef01ListResult.([]any)
		if !oAuthApplicationRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", oAuthApplicationRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(oAuthApplicationRef01List), map[string]any{"id": oAuthApplicationRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		oAuthApplicationRef01DataUp0Up := map[string]any{
			"id": oAuthApplicationRef01Data["id"],
		}

		oAuthApplicationRef01MarkdefUp0Name := "clientId"
		oAuthApplicationRef01MarkdefUp0Value := fmt.Sprintf("Mark01-o_auth_application_ref01_%d", setup.now)
		oAuthApplicationRef01DataUp0Up[oAuthApplicationRef01MarkdefUp0Name] = oAuthApplicationRef01MarkdefUp0Value

		oAuthApplicationRef01ResdataUp0Result, err := oAuthApplicationRef01Ent.Update(oAuthApplicationRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		oAuthApplicationRef01ResdataUp0 := core.ToMapAny(entityData(oAuthApplicationRef01ResdataUp0Result))
		if oAuthApplicationRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if oAuthApplicationRef01ResdataUp0["id"] != oAuthApplicationRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if oAuthApplicationRef01ResdataUp0[oAuthApplicationRef01MarkdefUp0Name] != oAuthApplicationRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", oAuthApplicationRef01MarkdefUp0Name, oAuthApplicationRef01ResdataUp0[oAuthApplicationRef01MarkdefUp0Name])
		}

		// LOAD
		oAuthApplicationRef01MatchDt0 := map[string]any{
			"id": oAuthApplicationRef01Data["id"],
		}
		oAuthApplicationRef01DataDt0Loaded, err := oAuthApplicationRef01Ent.Load(oAuthApplicationRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		oAuthApplicationRef01DataDt0LoadResult := core.ToMapAny(entityData(oAuthApplicationRef01DataDt0Loaded))
		if oAuthApplicationRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if oAuthApplicationRef01DataDt0LoadResult["id"] != oAuthApplicationRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func o_auth_applicationBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "o_auth_application", "OAuthApplicationTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read o_auth_application test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse o_auth_application test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"o_auth_application01", "o_auth_application02", "o_auth_application03"},
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
	entidEnvRaw := os.Getenv("LINEAR_TEST_O_AUTH_APPLICATION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LINEAR_TEST_O_AUTH_APPLICATION_ENTID": idmap,
		"LINEAR_TEST_LIVE":      "FALSE",
		"LINEAR_TEST_EXPLAIN":   "FALSE",
		"LINEAR_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LINEAR_TEST_O_AUTH_APPLICATION_ENTID"])
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
