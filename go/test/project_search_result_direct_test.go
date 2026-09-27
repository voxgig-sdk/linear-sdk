package sdktest

import (
	"encoding/json"
	"os"
	"strings"
	"testing"

	sdk "github.com/voxgig-sdk/linear-sdk/go"
	"github.com/voxgig-sdk/linear-sdk/go/core"
)

func TestProjectSearchResultDirect(t *testing.T) {
	t.Run("direct-list-project_search_result", func(t *testing.T) {
		setup := project_search_resultDirectSetup([]any{
			map[string]any{"id": "direct01"},
			map[string]any{"id": "direct02"},
		})
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		if _shouldSkip, _reason := isControlSkipped("direct", "direct-list-project_search_result", _mode); _shouldSkip {
			if _reason == "" {
				_reason = "skipped via sdk-test-control.json"
			}
			t.Skip(_reason)
			return
		}
		if setup.live {
			for _, _liveKey := range []string{"after01", "before01", "first01", "include_archived01", "include_comment01", "last01", "order_by01", "team01", "term01"} {
				if v := setup.idmap[_liveKey]; v == nil {
					t.Skipf("live test needs %s via *_ENTID env var (synthetic IDs only)", _liveKey)
					return
				}
			}
		}
		client := setup.client

		params := map[string]any{}
		if setup.live {
			params["after"] = setup.idmap["after01"]
		} else {
			params["after"] = "direct01"
		}
		if setup.live {
			params["before"] = setup.idmap["before01"]
		} else {
			params["before"] = "direct02"
		}
		if setup.live {
			params["first"] = setup.idmap["first01"]
		} else {
			params["first"] = "direct03"
		}
		if setup.live {
			params["include_archived"] = setup.idmap["include_archived01"]
		} else {
			params["include_archived"] = "direct04"
		}
		if setup.live {
			params["include_comment"] = setup.idmap["include_comment01"]
		} else {
			params["include_comment"] = "direct05"
		}
		if setup.live {
			params["last"] = setup.idmap["last01"]
		} else {
			params["last"] = "direct06"
		}
		if setup.live {
			params["order_by"] = setup.idmap["order_by01"]
		} else {
			params["order_by"] = "direct07"
		}
		if setup.live {
			params["team_id"] = setup.idmap["team01"]
		} else {
			params["team_id"] = "direct08"
		}
		if setup.live {
			params["term"] = setup.idmap["term01"]
		} else {
			params["term"] = "direct09"
		}

		result, err := client.Direct(map[string]any{
			"path":   "",
			"method": "GET",
			"params": params,
		})
		if setup.live {
			// Live-mode leniency is a model decision
			// (main.kit.test.live.strict): synthetic IDs 4xx constantly
			// against an arbitrary public API, so the default SKIPS here.
			// A project that owns its test server sets strict and FAILS.
			if err != nil {
				t.Fatalf("list call failed (likely synthetic IDs against live API): %v", err)
			}
			if result["ok"] != true {
				t.Fatalf("list call not ok (likely synthetic IDs against live API): %v", result)
			}
			status := core.ToInt(result["status"])
			if status < 200 || status >= 300 {
				t.Fatalf("expected 2xx status, got %v", result["status"])
			}
		} else {
			if err != nil {
				t.Fatalf("direct failed: %v", err)
			}
			if result["ok"] != true {
				t.Fatalf("expected ok to be true, got %v", result["ok"])
			}
			if core.ToInt(result["status"]) != 200 {
				t.Fatalf("expected status 200, got %v", result["status"])
			}
		}

		if !setup.live {
			if dataList, ok := result["data"].([]any); ok {
				if len(dataList) != 2 {
					t.Fatalf("expected 2 items, got %d", len(dataList))
				}
			} else {
				t.Fatalf("expected data to be an array, got %T", result["data"])
			}

			if len(*setup.calls) != 1 {
				t.Fatalf("expected 1 call, got %d", len(*setup.calls))
			}
			call := (*setup.calls)[0]
			if initMap, ok := call["init"].(map[string]any); ok {
				if initMap["method"] != "GET" {
					t.Fatalf("expected method GET, got %v", initMap["method"])
				}
			}
			if url, ok := call["url"].(string); ok {
				if !strings.Contains(url, "direct01") {
					t.Fatalf("expected url to contain direct01, got %v", url)
				}
				if !strings.Contains(url, "direct02") {
					t.Fatalf("expected url to contain direct02, got %v", url)
				}
				if !strings.Contains(url, "direct03") {
					t.Fatalf("expected url to contain direct03, got %v", url)
				}
				if !strings.Contains(url, "direct04") {
					t.Fatalf("expected url to contain direct04, got %v", url)
				}
				if !strings.Contains(url, "direct05") {
					t.Fatalf("expected url to contain direct05, got %v", url)
				}
				if !strings.Contains(url, "direct06") {
					t.Fatalf("expected url to contain direct06, got %v", url)
				}
				if !strings.Contains(url, "direct07") {
					t.Fatalf("expected url to contain direct07, got %v", url)
				}
				if !strings.Contains(url, "direct08") {
					t.Fatalf("expected url to contain direct08, got %v", url)
				}
				if !strings.Contains(url, "direct09") {
					t.Fatalf("expected url to contain direct09, got %v", url)
				}
			}
		}
	})

}

type project_search_resultDirectSetupResult struct {
	client *sdk.LinearSDK
	calls  *[]map[string]any
	live   bool
	idmap  map[string]any
}

func project_search_resultDirectSetup(mockres any) *project_search_resultDirectSetupResult {
	loadEnvLocal()

	calls := &[]map[string]any{}

	env := envOverride(map[string]any{
		"LINEAR_TEST_PROJECT_SEARCH_RESULT_ENTID": map[string]any{},
		"LINEAR_TEST_LIVE":    "FALSE",
		"LINEAR_APIKEY":       "",
	})

	live := env["LINEAR_TEST_LIVE"] == "TRUE"

	if live {
		// sdk-test-control.json's test.client.options seeds the live
		// client; the generated fields below overwrite anything they name.
		mergedOpts := map[string]any{}
		for k, v := range liveClientOptions() {
			mergedOpts[k] = v
		}
		for k, v := range map[string]any{
			"apikey": env["LINEAR_APIKEY"],
		} {
			mergedOpts[k] = v
		}
		client := sdk.NewLinearSDK(mergedOpts)

		idmap := map[string]any{}
		if entidRaw, ok := env["LINEAR_TEST_PROJECT_SEARCH_RESULT_ENTID"]; ok {
			if entidStr, ok := entidRaw.(string); ok && strings.HasPrefix(entidStr, "{") {
				json.Unmarshal([]byte(entidStr), &idmap)
			} else if entidMap, ok := entidRaw.(map[string]any); ok {
				idmap = entidMap
			}
		}

		return &project_search_resultDirectSetupResult{client: client, calls: calls, live: true, idmap: idmap}
	}

	mockFetch := func(url string, init map[string]any) (map[string]any, error) {
		*calls = append(*calls, map[string]any{"url": url, "init": init})
		return map[string]any{
			"status":     200,
			"statusText": "OK",
			"headers":    map[string]any{},
			"json": (func() any)(func() any {
				if mockres != nil {
					return mockres
				}
				return map[string]any{"id": "direct01"}
			}),
		}, nil
	}

	client := sdk.NewLinearSDK(map[string]any{
		"base": "http://localhost:8080",
		"system": map[string]any{
			"fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
		},
	})

	return &project_search_resultDirectSetupResult{client: client, calls: calls, live: false, idmap: map[string]any{}}
}

var _ = os.Getenv
var _ = json.Unmarshal
