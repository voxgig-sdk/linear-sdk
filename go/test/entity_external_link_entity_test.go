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

func TestEntityExternalLinkEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.EntityExternalLink(nil)
		if ent == nil {
			t.Fatal("expected non-nil EntityExternalLinkEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := entity_external_linkBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "entity_external_link." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set LINEAR_TEST_ENTITY_EXTERNAL_LINK_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		entityExternalLinkRef01Ent := client.EntityExternalLink(nil)
		entityExternalLinkRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "entity_external_link"}), "entity_external_link_ref01"))

		entityExternalLinkRef01DataResult, err := entityExternalLinkRef01Ent.Create(entityExternalLinkRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		entityExternalLinkRef01Data = core.ToMapAny(entityData(entityExternalLinkRef01DataResult))
		if entityExternalLinkRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if entityExternalLinkRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		entityExternalLinkRef01DataUp0Up := map[string]any{
			"id": entityExternalLinkRef01Data["id"],
		}

		entityExternalLinkRef01MarkdefUp0Name := "label"
		entityExternalLinkRef01MarkdefUp0Value := fmt.Sprintf("Mark01-entity_external_link_ref01_%d", setup.now)
		entityExternalLinkRef01DataUp0Up[entityExternalLinkRef01MarkdefUp0Name] = entityExternalLinkRef01MarkdefUp0Value

		entityExternalLinkRef01ResdataUp0Result, err := entityExternalLinkRef01Ent.Update(entityExternalLinkRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		entityExternalLinkRef01ResdataUp0 := core.ToMapAny(entityData(entityExternalLinkRef01ResdataUp0Result))
		if entityExternalLinkRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if entityExternalLinkRef01ResdataUp0["id"] != entityExternalLinkRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if entityExternalLinkRef01ResdataUp0[entityExternalLinkRef01MarkdefUp0Name] != entityExternalLinkRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", entityExternalLinkRef01MarkdefUp0Name, entityExternalLinkRef01ResdataUp0[entityExternalLinkRef01MarkdefUp0Name])
		}

		// LOAD
		entityExternalLinkRef01MatchDt0 := map[string]any{
			"id": entityExternalLinkRef01Data["id"],
		}
		entityExternalLinkRef01DataDt0Loaded, err := entityExternalLinkRef01Ent.Load(entityExternalLinkRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		entityExternalLinkRef01DataDt0LoadResult := core.ToMapAny(entityData(entityExternalLinkRef01DataDt0Loaded))
		if entityExternalLinkRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if entityExternalLinkRef01DataDt0LoadResult["id"] != entityExternalLinkRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		entityExternalLinkRef01MatchRm0 := map[string]any{
			"id": entityExternalLinkRef01Data["id"],
		}
		_, err = entityExternalLinkRef01Ent.Remove(entityExternalLinkRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func entity_external_linkBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "entity_external_link", "EntityExternalLinkTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read entity_external_link test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse entity_external_link test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"entity_external_link01", "entity_external_link02", "entity_external_link03"},
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
	entidEnvRaw := os.Getenv("LINEAR_TEST_ENTITY_EXTERNAL_LINK_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LINEAR_TEST_ENTITY_EXTERNAL_LINK_ENTID": idmap,
		"LINEAR_TEST_LIVE":      "FALSE",
		"LINEAR_TEST_EXPLAIN":   "FALSE",
		"LINEAR_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LINEAR_TEST_ENTITY_EXTERNAL_LINK_ENTID"])
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
