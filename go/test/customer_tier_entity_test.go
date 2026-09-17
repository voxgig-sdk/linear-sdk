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

func TestCustomerTierEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CustomerTier(nil)
		if ent == nil {
			t.Fatal("expected non-nil CustomerTierEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"customer_tier": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.CustomerTier(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.CustomerTier(nil).Stream("list", nil, nil) {
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
		setup := customer_tierBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "customer_tier." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set LINEAR_TEST_CUSTOMER_TIER_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		customerTierRef01Ent := client.CustomerTier(nil)
		customerTierRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "customer_tier"}), "customer_tier_ref01"))
		customerTierRef01Data["after"] = setup.idmap["after01"]
		customerTierRef01Data["before"] = setup.idmap["before01"]
		customerTierRef01Data["first"] = setup.idmap["first01"]
		customerTierRef01Data["include_archived"] = setup.idmap["include_archived01"]
		customerTierRef01Data["last"] = setup.idmap["last01"]
		customerTierRef01Data["order_by"] = setup.idmap["order_by01"]

		customerTierRef01DataResult, err := customerTierRef01Ent.Create(customerTierRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		customerTierRef01Data = core.ToMapAny(entityData(customerTierRef01DataResult))
		if customerTierRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if customerTierRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		customerTierRef01Match := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		customerTierRef01ListResult, err := customerTierRef01Ent.List(customerTierRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		customerTierRef01List, customerTierRef01ListOk := customerTierRef01ListResult.([]any)
		if !customerTierRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", customerTierRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(customerTierRef01List), map[string]any{"id": customerTierRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		customerTierRef01DataUp0Up := map[string]any{
			"id": customerTierRef01Data["id"],
		}

		customerTierRef01MarkdefUp0Name := "color"
		customerTierRef01MarkdefUp0Value := fmt.Sprintf("Mark01-customer_tier_ref01_%d", setup.now)
		customerTierRef01DataUp0Up[customerTierRef01MarkdefUp0Name] = customerTierRef01MarkdefUp0Value

		customerTierRef01ResdataUp0Result, err := customerTierRef01Ent.Update(customerTierRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		customerTierRef01ResdataUp0 := core.ToMapAny(entityData(customerTierRef01ResdataUp0Result))
		if customerTierRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if customerTierRef01ResdataUp0["id"] != customerTierRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if customerTierRef01ResdataUp0[customerTierRef01MarkdefUp0Name] != customerTierRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", customerTierRef01MarkdefUp0Name, customerTierRef01ResdataUp0[customerTierRef01MarkdefUp0Name])
		}

		// LOAD
		customerTierRef01MatchDt0 := map[string]any{
			"id": customerTierRef01Data["id"],
		}
		customerTierRef01DataDt0Loaded, err := customerTierRef01Ent.Load(customerTierRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		customerTierRef01DataDt0LoadResult := core.ToMapAny(entityData(customerTierRef01DataDt0Loaded))
		if customerTierRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if customerTierRef01DataDt0LoadResult["id"] != customerTierRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		customerTierRef01MatchRm0 := map[string]any{
			"id": customerTierRef01Data["id"],
		}
		_, err = customerTierRef01Ent.Remove(customerTierRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		customerTierRef01MatchRt0 := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		customerTierRef01ListRt0Result, err := customerTierRef01Ent.List(customerTierRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		customerTierRef01ListRt0, customerTierRef01ListRt0Ok := customerTierRef01ListRt0Result.([]any)
		if !customerTierRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", customerTierRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(customerTierRef01ListRt0), map[string]any{"id": customerTierRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func customer_tierBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "customer_tier", "CustomerTierTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read customer_tier test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse customer_tier test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"customer_tier01", "customer_tier02", "customer_tier03", "after01", "before01", "first01", "include_archived01", "last01", "order_by01"},
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
	entidEnvRaw := os.Getenv("LINEAR_TEST_CUSTOMER_TIER_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LINEAR_TEST_CUSTOMER_TIER_ENTID": idmap,
		"LINEAR_TEST_LIVE":      "FALSE",
		"LINEAR_TEST_EXPLAIN":   "FALSE",
		"LINEAR_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LINEAR_TEST_CUSTOMER_TIER_ENTID"])
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
