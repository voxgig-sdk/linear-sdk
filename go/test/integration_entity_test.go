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

func TestIntegrationEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Integration(nil)
		if ent == nil {
			t.Fatal("expected non-nil IntegrationEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"integration": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Integration(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Integration(nil).Stream("list", nil, nil) {
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
		setup := integrationBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "integration." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set LINEAR_TEST_INTEGRATION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		integrationRef01Ent := client.Integration(nil)
		integrationRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "integration"}), "integration_ref01"))
		integrationRef01Data["after"] = setup.idmap["after01"]
		integrationRef01Data["api_key"] = setup.idmap["api_key01"]
		integrationRef01Data["application_key"] = setup.idmap["application_key01"]
		integrationRef01Data["before"] = setup.idmap["before01"]
		integrationRef01Data["channel_id"] = setup.idmap["channel01"]
		integrationRef01Data["channel_name"] = setup.idmap["channel_name01"]
		integrationRef01Data["code"] = setup.idmap["code01"]
		integrationRef01Data["code_access"] = setup.idmap["code_access01"]
		integrationRef01Data["confirm_replace"] = setup.idmap["confirm_replace01"]
		integrationRef01Data["enabled"] = setup.idmap["enabled01"]
		integrationRef01Data["environment_id"] = setup.idmap["environment01"]
		integrationRef01Data["first"] = setup.idmap["first01"]
		integrationRef01Data["github_host"] = setup.idmap["github_host01"]
		integrationRef01Data["include_archived"] = setup.idmap["include_archived01"]
		integrationRef01Data["installation_id"] = setup.idmap["installation01"]
		integrationRef01Data["integration_id"] = setup.idmap["integration01"]
		integrationRef01Data["last"] = setup.idmap["last01"]
		integrationRef01Data["membership_type"] = setup.idmap["membership_type01"]
		integrationRef01Data["order_by"] = setup.idmap["order_by01"]
		integrationRef01Data["organization_slug"] = setup.idmap["organization_slug01"]
		integrationRef01Data["project_id"] = setup.idmap["project01"]
		integrationRef01Data["redirect_uri"] = setup.idmap["redirect_uri01"]
		integrationRef01Data["requested_scope"] = setup.idmap["requested_scope01"]
		integrationRef01Data["site"] = setup.idmap["site01"]
		integrationRef01Data["skip_installation_deletion"] = setup.idmap["skip_installation_deletion01"]
		integrationRef01Data["team_id"] = setup.idmap["team01"]
		integrationRef01Data["team_name"] = setup.idmap["team_name01"]
		integrationRef01Data["type"] = setup.idmap["type01"]

		integrationRef01DataResult, err := integrationRef01Ent.Create(integrationRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		integrationRef01Data = core.ToMapAny(entityData(integrationRef01DataResult))
		if integrationRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if integrationRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		integrationRef01Match := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		integrationRef01ListResult, err := integrationRef01Ent.List(integrationRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		integrationRef01List, integrationRef01ListOk := integrationRef01ListResult.([]any)
		if !integrationRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", integrationRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(integrationRef01List), map[string]any{"id": integrationRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		integrationRef01DataUp0Up := map[string]any{
			"id": integrationRef01Data["id"],
		}

		integrationRef01MarkdefUp0Name := "service"
		integrationRef01MarkdefUp0Value := fmt.Sprintf("Mark01-integration_ref01_%d", setup.now)
		integrationRef01DataUp0Up[integrationRef01MarkdefUp0Name] = integrationRef01MarkdefUp0Value

		integrationRef01ResdataUp0Result, err := integrationRef01Ent.Update(integrationRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		integrationRef01ResdataUp0 := core.ToMapAny(entityData(integrationRef01ResdataUp0Result))
		if integrationRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if integrationRef01ResdataUp0["id"] != integrationRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if integrationRef01ResdataUp0[integrationRef01MarkdefUp0Name] != integrationRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", integrationRef01MarkdefUp0Name, integrationRef01ResdataUp0[integrationRef01MarkdefUp0Name])
		}

		// LOAD
		integrationRef01MatchDt0 := map[string]any{
			"id": integrationRef01Data["id"],
		}
		integrationRef01DataDt0Loaded, err := integrationRef01Ent.Load(integrationRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		integrationRef01DataDt0LoadResult := core.ToMapAny(entityData(integrationRef01DataDt0Loaded))
		if integrationRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if integrationRef01DataDt0LoadResult["id"] != integrationRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		integrationRef01MatchRm0 := map[string]any{
			"id": integrationRef01Data["id"],
		}
		_, err = integrationRef01Ent.Remove(integrationRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		integrationRef01MatchRt0 := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		integrationRef01ListRt0Result, err := integrationRef01Ent.List(integrationRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		integrationRef01ListRt0, integrationRef01ListRt0Ok := integrationRef01ListRt0Result.([]any)
		if !integrationRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", integrationRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(integrationRef01ListRt0), map[string]any{"id": integrationRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func integrationBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "integration", "IntegrationTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read integration test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse integration test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"integration01", "integration02", "integration03", "after01", "api_key01", "application_key01", "before01", "channel01", "channel_name01", "code01", "code_access01", "confirm_replace01", "enabled01", "environment01", "first01", "github_host01", "include_archived01", "installation01", "last01", "membership_type01", "order_by01", "organization_slug01", "project01", "redirect_uri01", "requested_scope01", "site01", "skip_installation_deletion01", "team01", "team_name01", "type01"},
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
	entidEnvRaw := os.Getenv("LINEAR_TEST_INTEGRATION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LINEAR_TEST_INTEGRATION_ENTID": idmap,
		"LINEAR_TEST_LIVE":      "FALSE",
		"LINEAR_TEST_EXPLAIN":   "FALSE",
		"LINEAR_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LINEAR_TEST_INTEGRATION_ENTID"])
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
