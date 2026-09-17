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

func TestInitiativeLeadTeamChangeImpactEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.InitiativeLeadTeamChangeImpact(nil)
		if ent == nil {
			t.Fatal("expected non-nil InitiativeLeadTeamChangeImpactEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := initiative_lead_team_change_impactBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "initiative_lead_team_change_impact." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set LINEAR_TEST_INITIATIVE_LEAD_TEAM_CHANGE_IMPACT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		initiativeLeadTeamChangeImpactRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.initiative_lead_team_change_impact")))
		var initiativeLeadTeamChangeImpactRef01Data map[string]any
		if len(initiativeLeadTeamChangeImpactRef01DataRaw) > 0 {
			initiativeLeadTeamChangeImpactRef01Data = core.ToMapAny(initiativeLeadTeamChangeImpactRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = initiativeLeadTeamChangeImpactRef01Data

		// LOAD
		initiativeLeadTeamChangeImpactRef01Ent := client.InitiativeLeadTeamChangeImpact(nil)
		initiativeLeadTeamChangeImpactRef01MatchDt0 := map[string]any{
			"id": initiativeLeadTeamChangeImpactRef01Data["id"],
		}
		initiativeLeadTeamChangeImpactRef01DataDt0Loaded, err := initiativeLeadTeamChangeImpactRef01Ent.Load(initiativeLeadTeamChangeImpactRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		initiativeLeadTeamChangeImpactRef01DataDt0LoadResult := core.ToMapAny(entityData(initiativeLeadTeamChangeImpactRef01DataDt0Loaded))
		if initiativeLeadTeamChangeImpactRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if initiativeLeadTeamChangeImpactRef01DataDt0LoadResult["id"] != initiativeLeadTeamChangeImpactRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func initiative_lead_team_change_impactBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "initiative_lead_team_change_impact", "InitiativeLeadTeamChangeImpactTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read initiative_lead_team_change_impact test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse initiative_lead_team_change_impact test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"initiative_lead_team_change_impact01", "initiative_lead_team_change_impact02", "initiative_lead_team_change_impact03", "lead_team01"},
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
	entidEnvRaw := os.Getenv("LINEAR_TEST_INITIATIVE_LEAD_TEAM_CHANGE_IMPACT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LINEAR_TEST_INITIATIVE_LEAD_TEAM_CHANGE_IMPACT_ENTID": idmap,
		"LINEAR_TEST_LIVE":      "FALSE",
		"LINEAR_TEST_EXPLAIN":   "FALSE",
		"LINEAR_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LINEAR_TEST_INITIATIVE_LEAD_TEAM_CHANGE_IMPACT_ENTID"])
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
