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

func TestGitHubIntegrationConnectDetailEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.GitHubIntegrationConnectDetail(nil)
		if ent == nil {
			t.Fatal("expected non-nil GitHubIntegrationConnectDetailEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := git_hub_integration_connect_detailBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "git_hub_integration_connect_detail." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set LINEAR_TEST_GIT_HUB_INTEGRATION_CONNECT_DETAIL_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		gitHubIntegrationConnectDetailRef01Ent := client.GitHubIntegrationConnectDetail(nil)
		gitHubIntegrationConnectDetailRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "git_hub_integration_connect_detail"}), "git_hub_integration_connect_detail_ref01"))
		gitHubIntegrationConnectDetailRef01Data["code"] = setup.idmap["code01"]
		gitHubIntegrationConnectDetailRef01Data["custom_view_id"] = setup.idmap["custom_view01"]
		gitHubIntegrationConnectDetailRef01Data["initiative_id"] = setup.idmap["initiative01"]
		gitHubIntegrationConnectDetailRef01Data["integration_id"] = setup.idmap["integration01"]
		gitHubIntegrationConnectDetailRef01Data["project_id"] = setup.idmap["project01"]
		gitHubIntegrationConnectDetailRef01Data["redirect_uri"] = setup.idmap["redirect_uri01"]
		gitHubIntegrationConnectDetailRef01Data["service"] = setup.idmap["service01"]
		gitHubIntegrationConnectDetailRef01Data["should_use_v2_auth"] = setup.idmap["should_use_v2_auth01"]
		gitHubIntegrationConnectDetailRef01Data["team_id"] = setup.idmap["team01"]

		gitHubIntegrationConnectDetailRef01DataResult, err := gitHubIntegrationConnectDetailRef01Ent.Create(gitHubIntegrationConnectDetailRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		gitHubIntegrationConnectDetailRef01Data = core.ToMapAny(entityData(gitHubIntegrationConnectDetailRef01DataResult))
		if gitHubIntegrationConnectDetailRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// UPDATE
		gitHubIntegrationConnectDetailRef01DataUp0Up := map[string]any{
			"integration_id": setup.idmap["integration_id"],
		}

		gitHubIntegrationConnectDetailRef01MarkdefUp0Name := "lostRepositoryNames"
		gitHubIntegrationConnectDetailRef01MarkdefUp0Value := fmt.Sprintf("Mark01-git_hub_integration_connect_detail_ref01_%d", setup.now)
		gitHubIntegrationConnectDetailRef01DataUp0Up[gitHubIntegrationConnectDetailRef01MarkdefUp0Name] = gitHubIntegrationConnectDetailRef01MarkdefUp0Value

		gitHubIntegrationConnectDetailRef01ResdataUp0Result, err := gitHubIntegrationConnectDetailRef01Ent.Update(gitHubIntegrationConnectDetailRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		gitHubIntegrationConnectDetailRef01ResdataUp0 := core.ToMapAny(entityData(gitHubIntegrationConnectDetailRef01ResdataUp0Result))
		if gitHubIntegrationConnectDetailRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if gitHubIntegrationConnectDetailRef01ResdataUp0[gitHubIntegrationConnectDetailRef01MarkdefUp0Name] != gitHubIntegrationConnectDetailRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", gitHubIntegrationConnectDetailRef01MarkdefUp0Name, gitHubIntegrationConnectDetailRef01ResdataUp0[gitHubIntegrationConnectDetailRef01MarkdefUp0Name])
		}

	})
}

func git_hub_integration_connect_detailBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "git_hub_integration_connect_detail", "GitHubIntegrationConnectDetailTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read git_hub_integration_connect_detail test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse git_hub_integration_connect_detail test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"git_hub_integration_connect_detail01", "git_hub_integration_connect_detail02", "git_hub_integration_connect_detail03", "code01", "custom_view01", "initiative01", "integration01", "project01", "redirect_uri01", "service01", "should_use_v2_auth01", "team01"},
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
	entidEnvRaw := os.Getenv("LINEAR_TEST_GIT_HUB_INTEGRATION_CONNECT_DETAIL_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LINEAR_TEST_GIT_HUB_INTEGRATION_CONNECT_DETAIL_ENTID": idmap,
		"LINEAR_TEST_LIVE":      "FALSE",
		"LINEAR_TEST_EXPLAIN":   "FALSE",
		"LINEAR_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LINEAR_TEST_GIT_HUB_INTEGRATION_CONNECT_DETAIL_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add integration_id alias for update test.
	if idmapResolved["integration_id"] == nil {
		idmapResolved["integration_id"] = idmapResolved["integration01"]
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
