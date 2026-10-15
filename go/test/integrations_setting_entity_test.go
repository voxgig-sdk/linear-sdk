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
const integrations_settingEntityLiveStrict = true


func TestIntegrationsSettingEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.IntegrationsSetting(nil)
		if ent == nil {
			t.Fatal("expected non-nil IntegrationsSettingEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.IntegrationsSetting(nil).Load(map[string]any{"id": 1}, nil)
		if sdkerr, ok := err.(*core.LinearError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := integrations_settingBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "integrations_setting." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		client := setup.client
		_ = client

		// CREATE
		integrationsSettingRef01Ent := client.IntegrationsSetting(nil)
		integrationsSettingRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "integrations_setting"}), "integrations_setting_ref01"))

		integrationsSettingRef01DataResult, err := integrationsSettingRef01Ent.Create(integrationsSettingRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		integrationsSettingRef01Data = core.ToMapAny(entityData(integrationsSettingRef01DataResult))
		if integrationsSettingRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if integrationsSettingRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		integrationsSettingRef01DataUp0Up := map[string]any{
			"id": integrationsSettingRef01Data["id"],
		}

		integrationsSettingRef01MarkdefUp0Name := "contextViewType"
		integrationsSettingRef01MarkdefUp0Value := fmt.Sprintf("Mark01-integrations_setting_ref01_%d", setup.now)
		integrationsSettingRef01DataUp0Up[integrationsSettingRef01MarkdefUp0Name] = integrationsSettingRef01MarkdefUp0Value

		integrationsSettingRef01ResdataUp0Result, err := integrationsSettingRef01Ent.Update(integrationsSettingRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		integrationsSettingRef01ResdataUp0 := core.ToMapAny(entityData(integrationsSettingRef01ResdataUp0Result))
		if integrationsSettingRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if integrationsSettingRef01ResdataUp0["id"] != integrationsSettingRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if integrationsSettingRef01ResdataUp0[integrationsSettingRef01MarkdefUp0Name] != integrationsSettingRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", integrationsSettingRef01MarkdefUp0Name, integrationsSettingRef01ResdataUp0[integrationsSettingRef01MarkdefUp0Name])
		}

		// LOAD
		integrationsSettingRef01MatchDt0 := map[string]any{
			"id": integrationsSettingRef01Data["id"],
		}
		integrationsSettingRef01DataDt0Loaded, err := integrationsSettingRef01Ent.Load(integrationsSettingRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		integrationsSettingRef01DataDt0LoadResult := core.ToMapAny(entityData(integrationsSettingRef01DataDt0Loaded))
		if integrationsSettingRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if integrationsSettingRef01DataDt0LoadResult["id"] != integrationsSettingRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func integrations_settingBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "integrations_setting", "IntegrationsSettingTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read integrations_setting test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse integrations_setting test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"integrations_setting01", "integrations_setting02", "integrations_setting03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("LINEAR_TEST_INTEGRATIONS_SETTING_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LINEAR_TEST_INTEGRATIONS_SETTING_ENTID": idmap,
		"LINEAR_TEST_LIVE":      "FALSE",
		"LINEAR_TEST_EXPLAIN":   "FALSE",
		"LINEAR_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LINEAR_TEST_INTEGRATIONS_SETTING_ENTID"])
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
