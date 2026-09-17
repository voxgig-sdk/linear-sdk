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

func TestCustomerEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Customer(nil)
		if ent == nil {
			t.Fatal("expected non-nil CustomerEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"customer": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Customer(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Customer(nil).Stream("list", nil, nil) {
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
		setup := customerBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "customer." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set LINEAR_TEST_CUSTOMER_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		customerRef01Ent := client.Customer(nil)
		customerRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "customer"}), "customer_ref01"))
		customerRef01Data["after"] = setup.idmap["after01"]
		customerRef01Data["before"] = setup.idmap["before01"]
		customerRef01Data["first"] = setup.idmap["first01"]
		customerRef01Data["include_archived"] = setup.idmap["include_archived01"]
		customerRef01Data["last"] = setup.idmap["last01"]
		customerRef01Data["order_by"] = setup.idmap["order_by01"]
		customerRef01Data["source_customer_id"] = setup.idmap["source_customer01"]
		customerRef01Data["target_customer_id"] = setup.idmap["target_customer01"]

		customerRef01DataResult, err := customerRef01Ent.Create(customerRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		customerRef01Data = core.ToMapAny(entityData(customerRef01DataResult))
		if customerRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if customerRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		customerRef01Match := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		customerRef01ListResult, err := customerRef01Ent.List(customerRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		customerRef01List, customerRef01ListOk := customerRef01ListResult.([]any)
		if !customerRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", customerRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(customerRef01List), map[string]any{"id": customerRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		customerRef01DataUp0Up := map[string]any{
			"id": customerRef01Data["id"],
		}

		customerRef01MarkdefUp0Name := "domains"
		customerRef01MarkdefUp0Value := fmt.Sprintf("Mark01-customer_ref01_%d", setup.now)
		customerRef01DataUp0Up[customerRef01MarkdefUp0Name] = customerRef01MarkdefUp0Value

		customerRef01ResdataUp0Result, err := customerRef01Ent.Update(customerRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		customerRef01ResdataUp0 := core.ToMapAny(entityData(customerRef01ResdataUp0Result))
		if customerRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if customerRef01ResdataUp0["id"] != customerRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if customerRef01ResdataUp0[customerRef01MarkdefUp0Name] != customerRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", customerRef01MarkdefUp0Name, customerRef01ResdataUp0[customerRef01MarkdefUp0Name])
		}

		// LOAD
		customerRef01MatchDt0 := map[string]any{
			"id": customerRef01Data["id"],
		}
		customerRef01DataDt0Loaded, err := customerRef01Ent.Load(customerRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		customerRef01DataDt0LoadResult := core.ToMapAny(entityData(customerRef01DataDt0Loaded))
		if customerRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if customerRef01DataDt0LoadResult["id"] != customerRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		customerRef01MatchRm0 := map[string]any{
			"id": customerRef01Data["id"],
		}
		_, err = customerRef01Ent.Remove(customerRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		customerRef01MatchRt0 := map[string]any{
			"after": setup.idmap["after01"],
			"before": setup.idmap["before01"],
			"first": setup.idmap["first01"],
			"include_archived": setup.idmap["include_archived01"],
			"last": setup.idmap["last01"],
			"order_by": setup.idmap["order_by01"],
		}

		customerRef01ListRt0Result, err := customerRef01Ent.List(customerRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		customerRef01ListRt0, customerRef01ListRt0Ok := customerRef01ListRt0Result.([]any)
		if !customerRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", customerRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(customerRef01ListRt0), map[string]any{"id": customerRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func customerBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "customer", "CustomerTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read customer test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse customer test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"customer01", "customer02", "customer03", "after01", "before01", "first01", "include_archived01", "last01", "order_by01", "source_customer01", "target_customer01"},
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
	entidEnvRaw := os.Getenv("LINEAR_TEST_CUSTOMER_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LINEAR_TEST_CUSTOMER_ENTID": idmap,
		"LINEAR_TEST_LIVE":      "FALSE",
		"LINEAR_TEST_EXPLAIN":   "FALSE",
		"LINEAR_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LINEAR_TEST_CUSTOMER_ENTID"])
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
