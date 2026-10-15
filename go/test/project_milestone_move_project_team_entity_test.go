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
const project_milestone_move_project_teamEntityLiveStrict = true


func TestProjectMilestoneMoveProjectTeamEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ProjectMilestoneMoveProjectTeam(nil)
		if ent == nil {
			t.Fatal("expected non-nil ProjectMilestoneMoveProjectTeamEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.ProjectMilestoneMoveProjectTeam(nil).Update(map[string]any{"id": 1}, nil)
		if sdkerr, ok := err.(*core.LinearError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := project_milestone_move_project_teamBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "project_milestone_move_project_team." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live {
			liveMiss(t, project_milestone_move_project_teamEntityLiveStrict, "Live entity test blocked: %s", "the flow updates a project_milestone_move_project_team record it did not create")
		}
		client := setup.client
		_ = client

		// Bootstrap entity data from existing test data (no create step in flow).
		projectMilestoneMoveProjectTeamRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.project_milestone_move_project_team")))
		var projectMilestoneMoveProjectTeamRef01Data map[string]any
		if len(projectMilestoneMoveProjectTeamRef01DataRaw) > 0 {
			projectMilestoneMoveProjectTeamRef01Data = core.ToMapAny(projectMilestoneMoveProjectTeamRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = projectMilestoneMoveProjectTeamRef01Data

		// UPDATE
		projectMilestoneMoveProjectTeamRef01Ent := client.ProjectMilestoneMoveProjectTeam(nil)
		projectMilestoneMoveProjectTeamRef01DataUp0Up := map[string]any{
			"id": projectMilestoneMoveProjectTeamRef01Data["id"],
		}

		projectMilestoneMoveProjectTeamRef01MarkdefUp0Name := "projectId"
		projectMilestoneMoveProjectTeamRef01MarkdefUp0Value := fmt.Sprintf("Mark01-project_milestone_move_project_team_ref01_%d", setup.now)
		projectMilestoneMoveProjectTeamRef01DataUp0Up[projectMilestoneMoveProjectTeamRef01MarkdefUp0Name] = projectMilestoneMoveProjectTeamRef01MarkdefUp0Value

		projectMilestoneMoveProjectTeamRef01ResdataUp0Result, err := projectMilestoneMoveProjectTeamRef01Ent.Update(projectMilestoneMoveProjectTeamRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		projectMilestoneMoveProjectTeamRef01ResdataUp0 := core.ToMapAny(entityData(projectMilestoneMoveProjectTeamRef01ResdataUp0Result))
		if projectMilestoneMoveProjectTeamRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if projectMilestoneMoveProjectTeamRef01ResdataUp0["id"] != projectMilestoneMoveProjectTeamRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if projectMilestoneMoveProjectTeamRef01ResdataUp0[projectMilestoneMoveProjectTeamRef01MarkdefUp0Name] != projectMilestoneMoveProjectTeamRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", projectMilestoneMoveProjectTeamRef01MarkdefUp0Name, projectMilestoneMoveProjectTeamRef01ResdataUp0[projectMilestoneMoveProjectTeamRef01MarkdefUp0Name])
		}

	})
}

func project_milestone_move_project_teamBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "project_milestone_move_project_team", "ProjectMilestoneMoveProjectTeamTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read project_milestone_move_project_team test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse project_milestone_move_project_team test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"project_milestone_move_project_team01", "project_milestone_move_project_team02", "project_milestone_move_project_team03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("LINEAR_TEST_PROJECT_MILESTONE_MOVE_PROJECT_TEAM_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LINEAR_TEST_PROJECT_MILESTONE_MOVE_PROJECT_TEAM_ENTID": idmap,
		"LINEAR_TEST_LIVE":      "FALSE",
		"LINEAR_TEST_EXPLAIN":   "FALSE",
		"LINEAR_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LINEAR_TEST_PROJECT_MILESTONE_MOVE_PROJECT_TEAM_ENTID"])
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
