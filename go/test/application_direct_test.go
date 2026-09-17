package sdktest

import (
	"encoding/json"
	"os"
	"strings"
	"testing"

	sdk "github.com/voxgig-sdk/linear-sdk/go"
	"github.com/voxgig-sdk/linear-sdk/go/core"
)

func TestApplicationDirect(t *testing.T) {
	t.Run("direct-load-application", func(t *testing.T) {
		setup := applicationDirectSetup(map[string]any{"id": "direct01"})
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		if _shouldSkip, _reason := isControlSkipped("direct", "direct-load-application", _mode); _shouldSkip {
			if _reason == "" {
				_reason = "skipped via sdk-test-control.json"
			}
			t.Skip(_reason)
			return
		}
		if setup.live {
			for _, _liveKey := range []string{"clientId01"} {
				if v := setup.idmap[_liveKey]; v == nil {
					t.Skipf("live test needs %s via *_ENTID env var (synthetic IDs only)", _liveKey)
					return
				}
			}
		}
		client := setup.client

		variables := map[string]any{}
		if setup.live {
		variables["clientId"] = setup.idmap["clientId01"]
		} else {
		variables["clientId"] = "direct01"
		}

		result, err := client.Graphql("query ApplicationLoad($clientId: String!) { applicationInfo(clientId: $clientId) { ...ApplicationFields } } fragment ApplicationFields on Application { clientId description developer developerUrl id imageUrl name }", variables, nil)

		if setup.live {
			// Live mode is lenient: synthetic ids frequently fail server-side
			// validation. Skip rather than fail when the call doesn't come
			// back clean.
			if err != nil {
				t.Fatalf("graphql call failed (likely synthetic IDs against live API): %v", err)
			}
			if result["ok"] != true {
				t.Fatalf("graphql call not ok (likely synthetic IDs against live API): %v", result)
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
			if result["data"] == nil {
				t.Fatal("expected data to be non-nil")
			}
			if len(*setup.calls) != 1 {
				t.Fatalf("expected 1 call, got %d", len(*setup.calls))
			}
			call := (*setup.calls)[0]
			initMap, _ := call["init"].(map[string]any)
			if initMap["method"] != "POST" {
				t.Fatalf("expected method POST, got %v", initMap["method"])
			}
			bodyStr, _ := initMap["body"].(string)
			if !strings.Contains(bodyStr, "direct01") {
				t.Fatalf("expected body to contain direct01, got %v", bodyStr)
			}
		}
	})

}

type applicationDirectSetupResult struct {
	client *sdk.LinearSDK
	calls  *[]map[string]any
	live   bool
	idmap  map[string]any
}

func applicationDirectSetup(mockres any) *applicationDirectSetupResult {
	loadEnvLocal()

	calls := &[]map[string]any{}

	env := envOverride(map[string]any{
		"LINEAR_TEST_APPLICATION_ENTID": map[string]any{},
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
		if entidRaw, ok := env["LINEAR_TEST_APPLICATION_ENTID"]; ok {
			if entidStr, ok := entidRaw.(string); ok && strings.HasPrefix(entidStr, "{") {
				json.Unmarshal([]byte(entidStr), &idmap)
			} else if entidMap, ok := entidRaw.(map[string]any); ok {
				idmap = entidMap
			}
		}

		return &applicationDirectSetupResult{client: client, calls: calls, live: true, idmap: idmap}
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

	return &applicationDirectSetupResult{client: client, calls: calls, live: false, idmap: map[string]any{}}
}

var _ = os.Getenv
var _ = json.Unmarshal
