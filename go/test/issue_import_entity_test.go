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

func TestIssueImportEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.IssueImport(nil)
		if ent == nil {
			t.Fatal("expected non-nil IssueImportEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := issue_importBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "issue_import." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set LINEAR_TEST_ISSUE_IMPORT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		issueImportRef01Ent := client.IssueImport(nil)
		issueImportRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "issue_import"}), "issue_import_ref01"))
		issueImportRef01Data["github_label"] = setup.idmap["github_label01"]
		issueImportRef01Data["github_repo_id"] = setup.idmap["github_repo01"]
		issueImportRef01Data["include_closed_issue"] = setup.idmap["include_closed_issue01"]
		issueImportRef01Data["instant_process"] = setup.idmap["instant_process01"]
		issueImportRef01Data["issue_import_id"] = setup.idmap["issue_import01"]
		issueImportRef01Data["linear_source_organization_id"] = setup.idmap["linear_source_organization01"]
		issueImportRef01Data["mapping"] = setup.idmap["mapping01"]
		issueImportRef01Data["team_id"] = setup.idmap["team01"]
		issueImportRef01Data["team_name"] = setup.idmap["team_name01"]

		issueImportRef01DataResult, err := issueImportRef01Ent.Create(issueImportRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		issueImportRef01Data = core.ToMapAny(entityData(issueImportRef01DataResult))
		if issueImportRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if issueImportRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		issueImportRef01DataUp0Up := map[string]any{
			"id": issueImportRef01Data["id"],
			"linear_source_organization_id": setup.idmap["linear_source_organization_id"],
		}

		issueImportRef01MarkdefUp0Name := "creatorId"
		issueImportRef01MarkdefUp0Value := fmt.Sprintf("Mark01-issue_import_ref01_%d", setup.now)
		issueImportRef01DataUp0Up[issueImportRef01MarkdefUp0Name] = issueImportRef01MarkdefUp0Value

		issueImportRef01ResdataUp0Result, err := issueImportRef01Ent.Update(issueImportRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		issueImportRef01ResdataUp0 := core.ToMapAny(entityData(issueImportRef01ResdataUp0Result))
		if issueImportRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if issueImportRef01ResdataUp0["id"] != issueImportRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if issueImportRef01ResdataUp0[issueImportRef01MarkdefUp0Name] != issueImportRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", issueImportRef01MarkdefUp0Name, issueImportRef01ResdataUp0[issueImportRef01MarkdefUp0Name])
		}

		// REMOVE
		issueImportRef01MatchRm0 := map[string]any{
			"id": issueImportRef01Data["id"],
		}
		_, err = issueImportRef01Ent.Remove(issueImportRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func issue_importBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "issue_import", "IssueImportTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read issue_import test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse issue_import test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"issue_import01", "issue_import02", "issue_import03", "github_label01", "github_repo01", "include_closed_issue01", "instant_process01", "linear_source_organization01", "mapping01", "team01", "team_name01"},
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
	entidEnvRaw := os.Getenv("LINEAR_TEST_ISSUE_IMPORT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LINEAR_TEST_ISSUE_IMPORT_ENTID": idmap,
		"LINEAR_TEST_LIVE":      "FALSE",
		"LINEAR_TEST_EXPLAIN":   "FALSE",
		"LINEAR_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LINEAR_TEST_ISSUE_IMPORT_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add linear_source_organization_id alias for update test.
	if idmapResolved["linear_source_organization_id"] == nil {
		idmapResolved["linear_source_organization_id"] = idmapResolved["linear_source_organization01"]
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
