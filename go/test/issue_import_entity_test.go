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
const issue_importEntityLiveStrict = true


func TestIssueImportEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.IssueImport(nil)
		if ent == nil {
			t.Fatal("expected non-nil IssueImportEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.IssueImport(nil).Update(map[string]any{"id": 1}, nil)
		if sdkerr, ok := err.(*core.LinearError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := issue_importBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "issue_import." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live {
			for _, _liveKey := range []string{"linear_source_organization01"} {
				if setup.syntheticOnly || setup.idmap[_liveKey] == nil {
					liveMiss(t, issue_importEntityLiveStrict, "Live entity test blocked: needs %s via LINEAR_TEST_ISSUE_IMPORT_ENTID", _liveKey)
				}
			}
		}
		if setup.live {
			liveMiss(t, issue_importEntityLiveStrict, "Live entity test blocked: %s", "the flow updates a issue_import record it did not create")
		}
		client := setup.client
		_ = client

		// Bootstrap entity data from existing test data (no create step in flow).
		issueImportRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.issue_import")))
		var issueImportRef01Data map[string]any
		if len(issueImportRef01DataRaw) > 0 {
			issueImportRef01Data = core.ToMapAny(issueImportRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = issueImportRef01Data

		// UPDATE
		issueImportRef01Ent := client.IssueImport(nil)
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
		[]any{"issue_import01", "issue_import02", "issue_import03", "linear_source_organization01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
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
