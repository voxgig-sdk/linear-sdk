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

func TestEmailIntakeAddressEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.EmailIntakeAddress(nil)
		if ent == nil {
			t.Fatal("expected non-nil EmailIntakeAddressEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := email_intake_addressBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "email_intake_address." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set LINEAR_TEST_EMAIL_INTAKE_ADDRESS_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		emailIntakeAddressRef01Ent := client.EmailIntakeAddress(nil)
		emailIntakeAddressRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "email_intake_address"}), "email_intake_address_ref01"))

		emailIntakeAddressRef01DataResult, err := emailIntakeAddressRef01Ent.Create(emailIntakeAddressRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		emailIntakeAddressRef01Data = core.ToMapAny(entityData(emailIntakeAddressRef01DataResult))
		if emailIntakeAddressRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if emailIntakeAddressRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		emailIntakeAddressRef01DataUp0Up := map[string]any{
			"id": emailIntakeAddressRef01Data["id"],
		}

		emailIntakeAddressRef01MarkdefUp0Name := "address"
		emailIntakeAddressRef01MarkdefUp0Value := fmt.Sprintf("Mark01-email_intake_address_ref01_%d", setup.now)
		emailIntakeAddressRef01DataUp0Up[emailIntakeAddressRef01MarkdefUp0Name] = emailIntakeAddressRef01MarkdefUp0Value

		emailIntakeAddressRef01ResdataUp0Result, err := emailIntakeAddressRef01Ent.Update(emailIntakeAddressRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		emailIntakeAddressRef01ResdataUp0 := core.ToMapAny(entityData(emailIntakeAddressRef01ResdataUp0Result))
		if emailIntakeAddressRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if emailIntakeAddressRef01ResdataUp0["id"] != emailIntakeAddressRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if emailIntakeAddressRef01ResdataUp0[emailIntakeAddressRef01MarkdefUp0Name] != emailIntakeAddressRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", emailIntakeAddressRef01MarkdefUp0Name, emailIntakeAddressRef01ResdataUp0[emailIntakeAddressRef01MarkdefUp0Name])
		}

		// LOAD
		emailIntakeAddressRef01MatchDt0 := map[string]any{
			"id": emailIntakeAddressRef01Data["id"],
		}
		emailIntakeAddressRef01DataDt0Loaded, err := emailIntakeAddressRef01Ent.Load(emailIntakeAddressRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		emailIntakeAddressRef01DataDt0LoadResult := core.ToMapAny(entityData(emailIntakeAddressRef01DataDt0Loaded))
		if emailIntakeAddressRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if emailIntakeAddressRef01DataDt0LoadResult["id"] != emailIntakeAddressRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		emailIntakeAddressRef01MatchRm0 := map[string]any{
			"id": emailIntakeAddressRef01Data["id"],
		}
		_, err = emailIntakeAddressRef01Ent.Remove(emailIntakeAddressRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func email_intake_addressBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "email_intake_address", "EmailIntakeAddressTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read email_intake_address test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse email_intake_address test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"email_intake_address01", "email_intake_address02", "email_intake_address03"},
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
	entidEnvRaw := os.Getenv("LINEAR_TEST_EMAIL_INTAKE_ADDRESS_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LINEAR_TEST_EMAIL_INTAKE_ADDRESS_ENTID": idmap,
		"LINEAR_TEST_LIVE":      "FALSE",
		"LINEAR_TEST_EXPLAIN":   "FALSE",
		"LINEAR_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LINEAR_TEST_EMAIL_INTAKE_ADDRESS_ENTID"])
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
