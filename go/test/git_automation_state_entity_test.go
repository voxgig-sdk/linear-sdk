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
const git_automation_stateEntityLiveStrict = true


func TestGitAutomationStateEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.GitAutomationState(nil)
		if ent == nil {
			t.Fatal("expected non-nil GitAutomationStateEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.GitAutomationState(nil).Create(map[string]any{"createdAt": "x", "event": 1, "id": "x", "updatedAt": "x"}, nil)
		if sdkerr, ok := err.(*core.LinearError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := git_automation_stateBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "git_automation_state." + _op, _mode); _shouldSkip {
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
		gitAutomationStateRef01Ent := client.GitAutomationState(nil)
		gitAutomationStateRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "git_automation_state"}), "git_automation_state_ref01"))

		gitAutomationStateRef01DataResult, err := gitAutomationStateRef01Ent.Create(gitAutomationStateRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		gitAutomationStateRef01Data = core.ToMapAny(entityData(gitAutomationStateRef01DataResult))
		if gitAutomationStateRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if gitAutomationStateRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		gitAutomationStateRef01DataUp0Up := map[string]any{
			"id": gitAutomationStateRef01Data["id"],
		}

		gitAutomationStateRef01MarkdefUp0Name := "event"
		gitAutomationStateRef01MarkdefUp0Value := fmt.Sprintf("Mark01-git_automation_state_ref01_%d", setup.now)
		gitAutomationStateRef01DataUp0Up[gitAutomationStateRef01MarkdefUp0Name] = gitAutomationStateRef01MarkdefUp0Value

		gitAutomationStateRef01ResdataUp0Result, err := gitAutomationStateRef01Ent.Update(gitAutomationStateRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		gitAutomationStateRef01ResdataUp0 := core.ToMapAny(entityData(gitAutomationStateRef01ResdataUp0Result))
		if gitAutomationStateRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if gitAutomationStateRef01ResdataUp0["id"] != gitAutomationStateRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if gitAutomationStateRef01ResdataUp0[gitAutomationStateRef01MarkdefUp0Name] != gitAutomationStateRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", gitAutomationStateRef01MarkdefUp0Name, gitAutomationStateRef01ResdataUp0[gitAutomationStateRef01MarkdefUp0Name])
		}

		// REMOVE
		gitAutomationStateRef01MatchRm0 := map[string]any{
			"id": gitAutomationStateRef01Data["id"],
		}
		_, err = gitAutomationStateRef01Ent.Remove(gitAutomationStateRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func git_automation_stateBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "git_automation_state", "GitAutomationStateTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read git_automation_state test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse git_automation_state test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"git_automation_state01", "git_automation_state02", "git_automation_state03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("LINEAR_TEST_GIT_AUTOMATION_STATE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LINEAR_TEST_GIT_AUTOMATION_STATE_ENTID": idmap,
		"LINEAR_TEST_LIVE":      "FALSE",
		"LINEAR_TEST_EXPLAIN":   "FALSE",
		"LINEAR_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LINEAR_TEST_GIT_AUTOMATION_STATE_ENTID"])
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
