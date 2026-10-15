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
const organizationEntityLiveStrict = true


func TestOrganizationEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Organization(nil)
		if ent == nil {
			t.Fatal("expected non-nil OrganizationEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.Organization(nil).Load(map[string]any{"agentAutomationEnabled": "x", "id": "x"}, nil)
		if sdkerr, ok := err.(*core.LinearError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := organizationBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "organization." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live {
			liveMiss(t, organizationEntityLiveStrict, "Live entity test blocked: %s", "the flow updates a organization record it did not create")
		}
		client := setup.client
		_ = client

		// Bootstrap entity data from existing test data (no create step in flow).
		organizationRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.organization")))
		var organizationRef01Data map[string]any
		if len(organizationRef01DataRaw) > 0 {
			organizationRef01Data = core.ToMapAny(organizationRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = organizationRef01Data

		// UPDATE
		organizationRef01Ent := client.Organization(nil)
		organizationRef01DataUp0Up := map[string]any{
			"id": organizationRef01Data["id"],
		}

		organizationRef01MarkdefUp0Name := "allowedFileUploadContentTypes"
		organizationRef01MarkdefUp0Value := fmt.Sprintf("Mark01-organization_ref01_%d", setup.now)
		organizationRef01DataUp0Up[organizationRef01MarkdefUp0Name] = organizationRef01MarkdefUp0Value

		organizationRef01ResdataUp0Result, err := organizationRef01Ent.Update(organizationRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		organizationRef01ResdataUp0 := core.ToMapAny(entityData(organizationRef01ResdataUp0Result))
		if organizationRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if organizationRef01ResdataUp0["id"] != organizationRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if organizationRef01ResdataUp0[organizationRef01MarkdefUp0Name] != organizationRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", organizationRef01MarkdefUp0Name, organizationRef01ResdataUp0[organizationRef01MarkdefUp0Name])
		}

		// LOAD
		organizationRef01MatchDt0 := map[string]any{
			"id": organizationRef01Data["id"],
		}
		organizationRef01DataDt0Loaded, err := organizationRef01Ent.Load(organizationRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		organizationRef01DataDt0LoadResult := core.ToMapAny(entityData(organizationRef01DataDt0Loaded))
		if organizationRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if organizationRef01DataDt0LoadResult["id"] != organizationRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func organizationBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "organization", "OrganizationTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read organization test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse organization test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"organization01", "organization02", "organization03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("LINEAR_TEST_ORGANIZATION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LINEAR_TEST_ORGANIZATION_ENTID": idmap,
		"LINEAR_TEST_LIVE":      "FALSE",
		"LINEAR_TEST_EXPLAIN":   "FALSE",
		"LINEAR_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LINEAR_TEST_ORGANIZATION_ENTID"])
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
