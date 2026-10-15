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
const git_automation_target_branchEntityLiveStrict = true


func TestGitAutomationTargetBranchEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.GitAutomationTargetBranch(nil)
		if ent == nil {
			t.Fatal("expected non-nil GitAutomationTargetBranchEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.GitAutomationTargetBranch(nil).Create(map[string]any{"branchPattern": 1, "createdAt": "x", "id": "x", "isRegex": true, "updatedAt": "x"}, nil)
		if sdkerr, ok := err.(*core.LinearError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := git_automation_target_branchBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "git_automation_target_branch." + _op, _mode); _shouldSkip {
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
		gitAutomationTargetBranchRef01Ent := client.GitAutomationTargetBranch(nil)
		gitAutomationTargetBranchRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "git_automation_target_branch"}), "git_automation_target_branch_ref01"))

		gitAutomationTargetBranchRef01DataResult, err := gitAutomationTargetBranchRef01Ent.Create(gitAutomationTargetBranchRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		gitAutomationTargetBranchRef01Data = core.ToMapAny(entityData(gitAutomationTargetBranchRef01DataResult))
		if gitAutomationTargetBranchRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if gitAutomationTargetBranchRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		gitAutomationTargetBranchRef01DataUp0Up := map[string]any{
			"id": gitAutomationTargetBranchRef01Data["id"],
		}

		gitAutomationTargetBranchRef01MarkdefUp0Name := "branchPattern"
		gitAutomationTargetBranchRef01MarkdefUp0Value := fmt.Sprintf("Mark01-git_automation_target_branch_ref01_%d", setup.now)
		gitAutomationTargetBranchRef01DataUp0Up[gitAutomationTargetBranchRef01MarkdefUp0Name] = gitAutomationTargetBranchRef01MarkdefUp0Value

		gitAutomationTargetBranchRef01ResdataUp0Result, err := gitAutomationTargetBranchRef01Ent.Update(gitAutomationTargetBranchRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		gitAutomationTargetBranchRef01ResdataUp0 := core.ToMapAny(entityData(gitAutomationTargetBranchRef01ResdataUp0Result))
		if gitAutomationTargetBranchRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if gitAutomationTargetBranchRef01ResdataUp0["id"] != gitAutomationTargetBranchRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if gitAutomationTargetBranchRef01ResdataUp0[gitAutomationTargetBranchRef01MarkdefUp0Name] != gitAutomationTargetBranchRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", gitAutomationTargetBranchRef01MarkdefUp0Name, gitAutomationTargetBranchRef01ResdataUp0[gitAutomationTargetBranchRef01MarkdefUp0Name])
		}

		// REMOVE
		gitAutomationTargetBranchRef01MatchRm0 := map[string]any{
			"id": gitAutomationTargetBranchRef01Data["id"],
		}
		_, err = gitAutomationTargetBranchRef01Ent.Remove(gitAutomationTargetBranchRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func git_automation_target_branchBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "git_automation_target_branch", "GitAutomationTargetBranchTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read git_automation_target_branch test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse git_automation_target_branch test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"git_automation_target_branch01", "git_automation_target_branch02", "git_automation_target_branch03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("LINEAR_TEST_GIT_AUTOMATION_TARGET_BRANCH_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LINEAR_TEST_GIT_AUTOMATION_TARGET_BRANCH_ENTID": idmap,
		"LINEAR_TEST_LIVE":      "FALSE",
		"LINEAR_TEST_EXPLAIN":   "FALSE",
		"LINEAR_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LINEAR_TEST_GIT_AUTOMATION_TARGET_BRANCH_ENTID"])
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
