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

// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const sso_url_from_email_responseEntityLiveStrict = true


func TestSsoUrlFromEmailResponseEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.SsoUrlFromEmailResponse(nil)
		if ent == nil {
			t.Fatal("expected non-nil SsoUrlFromEmailResponseEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.SsoUrlFromEmailResponse(nil).Load(map[string]any{"email": 1, "type": "x"}, nil)
		if sdkerr, ok := err.(*core.LinearError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := sso_url_from_email_responseBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "sso_url_from_email_response." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		client := setup.client
		_ = client

		// Bootstrap entity data from existing test data (no create step in flow).
		ssoUrlFromEmailResponseRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.sso_url_from_email_response")))
		var ssoUrlFromEmailResponseRef01Data map[string]any
		if len(ssoUrlFromEmailResponseRef01DataRaw) > 0 {
			ssoUrlFromEmailResponseRef01Data = core.ToMapAny(ssoUrlFromEmailResponseRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = ssoUrlFromEmailResponseRef01Data

		// LOAD
		ssoUrlFromEmailResponseRef01Ent := client.SsoUrlFromEmailResponse(nil)
		ssoUrlFromEmailResponseRef01MatchDt0 := map[string]any{}
		if v := setup.idmap["email"]; v != nil {
			ssoUrlFromEmailResponseRef01MatchDt0["email"] = v
		} else {
			ssoUrlFromEmailResponseRef01MatchDt0["email"] = setup.idmap["email01"]
		}
		if v := setup.idmap["is_desktop"]; v != nil {
			ssoUrlFromEmailResponseRef01MatchDt0["is_desktop"] = v
		} else {
			ssoUrlFromEmailResponseRef01MatchDt0["is_desktop"] = setup.idmap["is_desktop01"]
		}
		if v := setup.idmap["type"]; v != nil {
			ssoUrlFromEmailResponseRef01MatchDt0["type"] = v
		} else {
			ssoUrlFromEmailResponseRef01MatchDt0["type"] = setup.idmap["type01"]
		}
		ssoUrlFromEmailResponseRef01DataDt0Loaded, err := ssoUrlFromEmailResponseRef01Ent.Load(ssoUrlFromEmailResponseRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if ssoUrlFromEmailResponseRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func sso_url_from_email_responseBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "sso_url_from_email_response", "SsoUrlFromEmailResponseTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read sso_url_from_email_response test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse sso_url_from_email_response test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"sso_url_from_email_response01", "sso_url_from_email_response02", "sso_url_from_email_response03", "email01", "is_desktop01", "type01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("LINEAR_TEST_SSO_URL_FROM_EMAIL_RESPONSE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LINEAR_TEST_SSO_URL_FROM_EMAIL_RESPONSE_ENTID": idmap,
		"LINEAR_TEST_LIVE":      "FALSE",
		"LINEAR_TEST_EXPLAIN":   "FALSE",
		"LINEAR_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LINEAR_TEST_SSO_URL_FROM_EMAIL_RESPONSE_ENTID"])
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
