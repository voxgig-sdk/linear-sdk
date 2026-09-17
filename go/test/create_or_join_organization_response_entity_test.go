package sdktest

import (
	"encoding/json"
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

func TestCreateOrJoinOrganizationResponseEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CreateOrJoinOrganizationResponse(nil)
		if ent == nil {
			t.Fatal("expected non-nil CreateOrJoinOrganizationResponseEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := create_or_join_organization_responseBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "create_or_join_organization_response." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set LINEAR_TEST_CREATE_OR_JOIN_ORGANIZATION_RESPONSE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		createOrJoinOrganizationResponseRef01Ent := client.CreateOrJoinOrganizationResponse(nil)
		createOrJoinOrganizationResponseRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "create_or_join_organization_response"}), "create_or_join_organization_response_ref01"))
		createOrJoinOrganizationResponseRef01Data["organization_id"] = setup.idmap["organization01"]

		createOrJoinOrganizationResponseRef01DataResult, err := createOrJoinOrganizationResponseRef01Ent.Create(createOrJoinOrganizationResponseRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		createOrJoinOrganizationResponseRef01Data = core.ToMapAny(entityData(createOrJoinOrganizationResponseRef01DataResult))
		if createOrJoinOrganizationResponseRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// UPDATE
		createOrJoinOrganizationResponseRef01DataUp0Up := map[string]any{
			"organization_id": setup.idmap["organization_id"],
		}

		createOrJoinOrganizationResponseRef01ResdataUp0Result, err := createOrJoinOrganizationResponseRef01Ent.Update(createOrJoinOrganizationResponseRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		createOrJoinOrganizationResponseRef01ResdataUp0 := core.ToMapAny(entityData(createOrJoinOrganizationResponseRef01ResdataUp0Result))
		if createOrJoinOrganizationResponseRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}

	})
}

func create_or_join_organization_responseBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "create_or_join_organization_response", "CreateOrJoinOrganizationResponseTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read create_or_join_organization_response test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse create_or_join_organization_response test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"create_or_join_organization_response01", "create_or_join_organization_response02", "create_or_join_organization_response03", "organization01"},
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
	entidEnvRaw := os.Getenv("LINEAR_TEST_CREATE_OR_JOIN_ORGANIZATION_RESPONSE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LINEAR_TEST_CREATE_OR_JOIN_ORGANIZATION_RESPONSE_ENTID": idmap,
		"LINEAR_TEST_LIVE":      "FALSE",
		"LINEAR_TEST_EXPLAIN":   "FALSE",
		"LINEAR_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LINEAR_TEST_CREATE_OR_JOIN_ORGANIZATION_RESPONSE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add organization_id alias for update test.
	if idmapResolved["organization_id"] == nil {
		idmapResolved["organization_id"] = idmapResolved["organization01"]
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
