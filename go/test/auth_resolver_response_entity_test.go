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
const auth_resolver_responseEntityLiveStrict = true


func TestAuthResolverResponseEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.AuthResolverResponse(nil)
		if ent == nil {
			t.Fatal("expected non-nil AuthResolverResponseEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.AuthResolverResponse(nil).Load(map[string]any{"allowDomainAccess": "x", "id": "x"}, nil)
		if sdkerr, ok := err.(*core.LinearError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := auth_resolver_responseBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "auth_resolver_response." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live {
			for _, _liveKey := range []string{"auth01", "response01"} {
				if setup.syntheticOnly || setup.idmap[_liveKey] == nil {
					liveMiss(t, auth_resolver_responseEntityLiveStrict, "Live entity test blocked: needs %s via LINEAR_TEST_AUTH_RESOLVER_RESPONSE_ENTID", _liveKey)
				}
			}
		}
		if setup.live {
			liveMiss(t, auth_resolver_responseEntityLiveStrict, "Live entity test blocked: %s", "the flow updates a auth_resolver_response record it did not create")
		}
		client := setup.client
		_ = client

		// Bootstrap entity data from existing test data (no create step in flow).
		authResolverResponseRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.auth_resolver_response")))
		var authResolverResponseRef01Data map[string]any
		if len(authResolverResponseRef01DataRaw) > 0 {
			authResolverResponseRef01Data = core.ToMapAny(authResolverResponseRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = authResolverResponseRef01Data

		// UPDATE
		authResolverResponseRef01Ent := client.AuthResolverResponse(nil)
		authResolverResponseRef01DataUp0Up := map[string]any{
			"id": authResolverResponseRef01Data["id"],
			"auth_id": setup.idmap["auth_id"],
			"response": setup.idmap["response"],
		}

		authResolverResponseRef01MarkdefUp0Name := "email"
		authResolverResponseRef01MarkdefUp0Value := fmt.Sprintf("Mark01-auth_resolver_response_ref01_%d", setup.now)
		authResolverResponseRef01DataUp0Up[authResolverResponseRef01MarkdefUp0Name] = authResolverResponseRef01MarkdefUp0Value

		authResolverResponseRef01ResdataUp0Result, err := authResolverResponseRef01Ent.Update(authResolverResponseRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		authResolverResponseRef01ResdataUp0 := core.ToMapAny(entityData(authResolverResponseRef01ResdataUp0Result))
		if authResolverResponseRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if authResolverResponseRef01ResdataUp0["id"] != authResolverResponseRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if authResolverResponseRef01ResdataUp0[authResolverResponseRef01MarkdefUp0Name] != authResolverResponseRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", authResolverResponseRef01MarkdefUp0Name, authResolverResponseRef01ResdataUp0[authResolverResponseRef01MarkdefUp0Name])
		}

		// LOAD
		authResolverResponseRef01MatchDt0 := map[string]any{
			"id": authResolverResponseRef01Data["id"],
		}
		authResolverResponseRef01DataDt0Loaded, err := authResolverResponseRef01Ent.Load(authResolverResponseRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		authResolverResponseRef01DataDt0LoadResult := core.ToMapAny(entityData(authResolverResponseRef01DataDt0Loaded))
		if authResolverResponseRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if authResolverResponseRef01DataDt0LoadResult["id"] != authResolverResponseRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func auth_resolver_responseBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "auth_resolver_response", "AuthResolverResponseTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read auth_resolver_response test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse auth_resolver_response test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"auth_resolver_response01", "auth_resolver_response02", "auth_resolver_response03", "auth01", "response01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("LINEAR_TEST_AUTH_RESOLVER_RESPONSE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LINEAR_TEST_AUTH_RESOLVER_RESPONSE_ENTID": idmap,
		"LINEAR_TEST_LIVE":      "FALSE",
		"LINEAR_TEST_EXPLAIN":   "FALSE",
		"LINEAR_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LINEAR_TEST_AUTH_RESOLVER_RESPONSE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add auth_id alias for update test.
	if idmapResolved["auth_id"] == nil {
		idmapResolved["auth_id"] = idmapResolved["auth01"]
	}
	// Add response alias for update test.
	if idmapResolved["response"] == nil {
		idmapResolved["response"] = idmapResolved["response01"]
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
