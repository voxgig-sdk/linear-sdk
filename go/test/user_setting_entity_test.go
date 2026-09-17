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

func TestUserSettingEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.UserSetting(nil)
		if ent == nil {
			t.Fatal("expected non-nil UserSettingEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := user_settingBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "user_setting." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set LINEAR_TEST_USER_SETTING_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		userSettingRef01Ent := client.UserSetting(nil)
		userSettingRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "user_setting"}), "user_setting_ref01"))
		userSettingRef01Data["category"] = setup.idmap["category01"]
		userSettingRef01Data["channel"] = setup.idmap["channel01"]
		userSettingRef01Data["subscribe"] = setup.idmap["subscribe01"]

		userSettingRef01DataResult, err := userSettingRef01Ent.Create(userSettingRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		userSettingRef01Data = core.ToMapAny(entityData(userSettingRef01DataResult))
		if userSettingRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if userSettingRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		userSettingRef01DataUp0Up := map[string]any{
			"id": userSettingRef01Data["id"],
		}

		userSettingRef01MarkdefUp0Name := "calendarHash"
		userSettingRef01MarkdefUp0Value := fmt.Sprintf("Mark01-user_setting_ref01_%d", setup.now)
		userSettingRef01DataUp0Up[userSettingRef01MarkdefUp0Name] = userSettingRef01MarkdefUp0Value

		userSettingRef01ResdataUp0Result, err := userSettingRef01Ent.Update(userSettingRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		userSettingRef01ResdataUp0 := core.ToMapAny(entityData(userSettingRef01ResdataUp0Result))
		if userSettingRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if userSettingRef01ResdataUp0["id"] != userSettingRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if userSettingRef01ResdataUp0[userSettingRef01MarkdefUp0Name] != userSettingRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", userSettingRef01MarkdefUp0Name, userSettingRef01ResdataUp0[userSettingRef01MarkdefUp0Name])
		}

		// LOAD
		userSettingRef01MatchDt0 := map[string]any{
			"id": userSettingRef01Data["id"],
		}
		userSettingRef01DataDt0Loaded, err := userSettingRef01Ent.Load(userSettingRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		userSettingRef01DataDt0LoadResult := core.ToMapAny(entityData(userSettingRef01DataDt0Loaded))
		if userSettingRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if userSettingRef01DataDt0LoadResult["id"] != userSettingRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func user_settingBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "user_setting", "UserSettingTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read user_setting test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse user_setting test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"user_setting01", "user_setting02", "user_setting03", "category01", "channel01", "subscribe01"},
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
	entidEnvRaw := os.Getenv("LINEAR_TEST_USER_SETTING_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LINEAR_TEST_USER_SETTING_ENTID": idmap,
		"LINEAR_TEST_LIVE":      "FALSE",
		"LINEAR_TEST_EXPLAIN":   "FALSE",
		"LINEAR_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LINEAR_TEST_USER_SETTING_ENTID"])
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
