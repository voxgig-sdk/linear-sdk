package sdktest

import (
	"encoding/json"
	"os"
	"strings"
	"testing"

	sdk "github.com/voxgig-sdk/linear-sdk/go"
	"github.com/voxgig-sdk/linear-sdk/go/core"
)

func TestNotificationSubscriptionDirect(t *testing.T) {
	t.Run("direct-list-notification_subscription", func(t *testing.T) {
		setup := notification_subscriptionDirectSetup(map[string]any{"id": "direct01"})
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		if _shouldSkip, _reason := isControlSkipped("direct", "direct-list-notification_subscription", _mode); _shouldSkip {
			if _reason == "" {
				_reason = "skipped via sdk-test-control.json"
			}
			t.Skip(_reason)
			return
		}
		if setup.live {
			for _, _liveKey := range []string{"after01", "before01", "first01", "includeArchived01", "last01", "orderBy01"} {
				if v := setup.idmap[_liveKey]; v == nil {
					t.Skipf("live test needs %s via *_ENTID env var (synthetic IDs only)", _liveKey)
					return
				}
			}
		}
		client := setup.client

		variables := map[string]any{}
		if setup.live {
		variables["after"] = setup.idmap["after01"]
		variables["before"] = setup.idmap["before01"]
		variables["first"] = setup.idmap["first01"]
		variables["includeArchived"] = setup.idmap["includeArchived01"]
		variables["last"] = setup.idmap["last01"]
		variables["orderBy"] = setup.idmap["orderBy01"]
		} else {
		variables["after"] = "direct01"
		variables["before"] = "direct02"
		variables["first"] = "direct03"
		variables["includeArchived"] = "direct04"
		variables["last"] = "direct05"
		variables["orderBy"] = "direct06"
		}

		result, err := client.Graphql("query NotificationSubscriptionList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { notificationSubscriptions(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...NotificationSubscriptionFields } pageInfo { endCursor hasNextPage } } } fragment NotificationSubscriptionFields on NotificationSubscription { active archivedAt contextViewType createdAt customView { id } customer { id } cycle { id } id initiative { id } label { id } project { id } subscriber { id } team { id } updatedAt user { id } userContextViewType }", variables, nil)

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
			if !strings.Contains(bodyStr, "direct02") {
				t.Fatalf("expected body to contain direct02, got %v", bodyStr)
			}
			if !strings.Contains(bodyStr, "direct03") {
				t.Fatalf("expected body to contain direct03, got %v", bodyStr)
			}
			if !strings.Contains(bodyStr, "direct04") {
				t.Fatalf("expected body to contain direct04, got %v", bodyStr)
			}
			if !strings.Contains(bodyStr, "direct05") {
				t.Fatalf("expected body to contain direct05, got %v", bodyStr)
			}
			if !strings.Contains(bodyStr, "direct06") {
				t.Fatalf("expected body to contain direct06, got %v", bodyStr)
			}
		}
	})

	t.Run("direct-load-notification_subscription", func(t *testing.T) {
		setup := notification_subscriptionDirectSetup(map[string]any{"id": "direct01"})
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		if _shouldSkip, _reason := isControlSkipped("direct", "direct-load-notification_subscription", _mode); _shouldSkip {
			if _reason == "" {
				_reason = "skipped via sdk-test-control.json"
			}
			t.Skip(_reason)
			return
		}
		if setup.live {
			for _, _liveKey := range []string{"notification_subscription01"} {
				if v := setup.idmap[_liveKey]; v == nil {
					t.Skipf("live test needs %s via *_ENTID env var (synthetic IDs only)", _liveKey)
					return
				}
			}
		}
		client := setup.client

		variables := map[string]any{}
		if setup.live {
		variables["id"] = setup.idmap["notification_subscription01"]
		} else {
		variables["id"] = "direct01"
		}

		result, err := client.Graphql("query NotificationSubscriptionLoad($id: String!) { notificationSubscription(id: $id) { ...NotificationSubscriptionFields } } fragment NotificationSubscriptionFields on NotificationSubscription { active archivedAt contextViewType createdAt customView { id } customer { id } cycle { id } id initiative { id } label { id } project { id } subscriber { id } team { id } updatedAt user { id } userContextViewType }", variables, nil)

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

type notification_subscriptionDirectSetupResult struct {
	client *sdk.LinearSDK
	calls  *[]map[string]any
	live   bool
	idmap  map[string]any
}

func notification_subscriptionDirectSetup(mockres any) *notification_subscriptionDirectSetupResult {
	loadEnvLocal()

	calls := &[]map[string]any{}

	env := envOverride(map[string]any{
		"LINEAR_TEST_NOTIFICATION_SUBSCRIPTION_ENTID": map[string]any{},
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
		if entidRaw, ok := env["LINEAR_TEST_NOTIFICATION_SUBSCRIPTION_ENTID"]; ok {
			if entidStr, ok := entidRaw.(string); ok && strings.HasPrefix(entidStr, "{") {
				json.Unmarshal([]byte(entidStr), &idmap)
			} else if entidMap, ok := entidRaw.(map[string]any); ok {
				idmap = entidMap
			}
		}

		return &notification_subscriptionDirectSetupResult{client: client, calls: calls, live: true, idmap: idmap}
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

	return &notification_subscriptionDirectSetupResult{client: client, calls: calls, live: false, idmap: map[string]any{}}
}

var _ = os.Getenv
var _ = json.Unmarshal
