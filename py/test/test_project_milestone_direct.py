# ProjectMilestone direct test

import json
import pytest

from linear_sdk.utility.voxgig_struct import voxgig_struct as vs
from linear_sdk import LinearSDK
from linear_sdk.core import helpers
from test import runner


# main.kit.test.live.strict is true (the default is true): a live
# request that fails, or a live test missing an input it needs,
# fails the test.
# An account with no record for a test to read skips it either way.
LIVE_STRICT = True


def _live_ok(result):
    status = helpers.to_int(result.get("status"))
    return result.get("err") is None and bool(result.get("ok")) and 200 <= status < 300


class TestProjectMilestoneDirect:

    def test_should_direct_list_project_milestone(self):
        setup = _project_milestone_direct_setup([
            {"id": "direct01"},
            {"id": "direct02"},
        ])
        _skip, _reason = runner.is_control_skipped("direct", "direct-list-project_milestone", "live" if setup["live"] else "unit")
        if _skip:
            pytest.skip(_reason or "skipped via sdk-test-control.json")
            return
        if setup["live"]:
            for _live_key in ["after01", "before01", "first01", "include_archived01", "last01", "order_by01"]:
                if setup["idmap"].get(_live_key) is None:
                    runner.live_miss(LIVE_STRICT, f"Live test blocked: needs {_live_key} via LINEAR_TEST_PROJECT_MILESTONE_ENTID")

        client = setup["client"]

        params = {}
        if setup["live"]:
            params["after"] = setup["idmap"].get("after01")
        else:
            params["after"] = "direct01"
        if setup["live"]:
            params["before"] = setup["idmap"].get("before01")
        else:
            params["before"] = "direct02"
        if setup["live"]:
            params["first"] = setup["idmap"].get("first01")
        else:
            params["first"] = "direct03"
        if setup["live"]:
            params["include_archived"] = setup["idmap"].get("include_archived01")
        else:
            params["include_archived"] = "direct04"
        if setup["live"]:
            params["last"] = setup["idmap"].get("last01")
        else:
            params["last"] = "direct05"
        if setup["live"]:
            params["order_by"] = setup["idmap"].get("order_by01")
        else:
            params["order_by"] = "direct06"

        result = client.direct({
            "path": "",
            "method": "GET",
            "params": params,
        })
        if setup["live"]:
            if not _live_ok(result):
                runner.live_miss(LIVE_STRICT, "Live list failed: " + runner.live_describe(result))
            if runner.live_list(result.get("data")) is None:
                runner.live_miss(LIVE_STRICT, "Live list returned no list: " + runner.live_describe(result))
        else:
            assert result["ok"] is True
            assert helpers.to_int(result["status"]) == 200
            assert isinstance(result["data"], list)
            assert len(result["data"]) == 2
            assert len(setup["calls"]) == 1

    def test_should_direct_load_project_milestone(self):
        setup = _project_milestone_direct_setup({"id": "direct01"})
        _skip, _reason = runner.is_control_skipped("direct", "direct-load-project_milestone", "live" if setup["live"] else "unit")
        if _skip:
            pytest.skip(_reason or "skipped via sdk-test-control.json")
            return
        client = setup["client"]

        params = {}
        query = {}
        if setup["live"]:
            pass
        else:
            pass

        result = client.direct({
            "path": "",
            "method": "GET",
            "params": params,
            "query": query,
        })
        if setup["live"]:
            if not _live_ok(result):
                runner.live_miss(LIVE_STRICT, "Live load failed: " + runner.live_describe(result))
            if result.get("data") is None:
                runner.live_miss(LIVE_STRICT, "Live load returned no data: " + runner.live_describe(result))
        else:
            assert result["ok"] is True
            assert helpers.to_int(result["status"]) == 200
            assert result["data"] is not None
            if isinstance(result["data"], dict):
                assert result["data"]["id"] == "direct01"
            assert len(setup["calls"]) == 1



def _project_milestone_direct_setup(mockres):
    runner.load_env_local()

    calls = []

    env = runner.env_override({
        "LINEAR_TEST_PROJECT_MILESTONE_ENTID": {},
        "LINEAR_TEST_LIVE": "FALSE",
        "LINEAR_APIKEY": "",
    })

    live = env.get("LINEAR_TEST_LIVE") == "TRUE"

    if live:
        # sdk-test-control.json's test.client.options seeds the live
        # client; the generated fields below overwrite anything they name.
        merged_opts = dict(runner.live_client_options())
        merged_opts.update({
            "apikey": env.get("LINEAR_APIKEY"),
        })
        client = LinearSDK(merged_opts)
        idmap = env.get("LINEAR_TEST_PROJECT_MILESTONE_ENTID")
        return {
            "client": client,
            "calls": calls,
            "live": True,
            "idmap": idmap if isinstance(idmap, dict) else {},
        }

    def mock_fetch(url, init):
        calls.append({"url": url, "init": init})
        return {
            "status": 200,
            "statusText": "OK",
            "headers": {},
            "json": lambda: mockres if mockres is not None else {"id": "direct01"},
            "body": "mock",
        }, None

    client = LinearSDK({
        "base": "http://localhost:8080",
        "system": {
            "fetch": mock_fetch,
        },
    })

    return {
        "client": client,
        "calls": calls,
        "live": False,
        "idmap": {},
    }
