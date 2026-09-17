# Integration entity test

import json
import os
import time

import pytest

from linear_sdk.utility.voxgig_struct import voxgig_struct as vs
from linear_sdk import LinearSDK
from linear_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestIntegrationEntity:

    def test_should_create_instance(self):
        testsdk = LinearSDK.test(None, None)
        ent = testsdk.Integration(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "integration": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = LinearSDK.test(seed, None)
        seen = list(base.Integration(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from linear_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = LinearSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.Integration(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _integration_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "update", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "integration." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set LINEAR_TEST_INTEGRATION_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        integration_ref01_ent = client.Integration(None)
        integration_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.integration"), "integration_ref01"))
        integration_ref01_data["after"] = setup["idmap"]["after01"]
        integration_ref01_data["api_key"] = setup["idmap"]["api_key01"]
        integration_ref01_data["application_key"] = setup["idmap"]["application_key01"]
        integration_ref01_data["before"] = setup["idmap"]["before01"]
        integration_ref01_data["channel_id"] = setup["idmap"]["channel01"]
        integration_ref01_data["channel_name"] = setup["idmap"]["channel_name01"]
        integration_ref01_data["code"] = setup["idmap"]["code01"]
        integration_ref01_data["code_access"] = setup["idmap"]["code_access01"]
        integration_ref01_data["confirm_replace"] = setup["idmap"]["confirm_replace01"]
        integration_ref01_data["enabled"] = setup["idmap"]["enabled01"]
        integration_ref01_data["environment_id"] = setup["idmap"]["environment01"]
        integration_ref01_data["first"] = setup["idmap"]["first01"]
        integration_ref01_data["github_host"] = setup["idmap"]["github_host01"]
        integration_ref01_data["include_archived"] = setup["idmap"]["include_archived01"]
        integration_ref01_data["installation_id"] = setup["idmap"]["installation01"]
        integration_ref01_data["integration_id"] = setup["idmap"]["integration01"]
        integration_ref01_data["last"] = setup["idmap"]["last01"]
        integration_ref01_data["membership_type"] = setup["idmap"]["membership_type01"]
        integration_ref01_data["order_by"] = setup["idmap"]["order_by01"]
        integration_ref01_data["organization_slug"] = setup["idmap"]["organization_slug01"]
        integration_ref01_data["project_id"] = setup["idmap"]["project01"]
        integration_ref01_data["redirect_uri"] = setup["idmap"]["redirect_uri01"]
        integration_ref01_data["requested_scope"] = setup["idmap"]["requested_scope01"]
        integration_ref01_data["site"] = setup["idmap"]["site01"]
        integration_ref01_data["skip_installation_deletion"] = setup["idmap"]["skip_installation_deletion01"]
        integration_ref01_data["team_id"] = setup["idmap"]["team01"]
        integration_ref01_data["team_name"] = setup["idmap"]["team_name01"]
        integration_ref01_data["type"] = setup["idmap"]["type01"]

        integration_ref01_data = helpers.to_map(runner.entity_data(integration_ref01_ent.create(integration_ref01_data, None)))
        assert integration_ref01_data is not None
        assert integration_ref01_data["id"] is not None

        # LIST
        integration_ref01_match = {
            "after": setup["idmap"]["after01"],
            "before": setup["idmap"]["before01"],
            "first": setup["idmap"]["first01"],
            "include_archived": setup["idmap"]["include_archived01"],
            "last": setup["idmap"]["last01"],
            "order_by": setup["idmap"]["order_by01"],
        }

        integration_ref01_list_result = integration_ref01_ent.list(integration_ref01_match, None)
        assert isinstance(integration_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(integration_ref01_list_result),
            {"id": integration_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # UPDATE
        integration_ref01_data_up0_up = {
            "id": integration_ref01_data["id"],
        }

        integration_ref01_markdef_up0_name = "service"
        integration_ref01_markdef_up0_value = "Mark01-integration_ref01_" + str(setup["now"])
        integration_ref01_data_up0_up[integration_ref01_markdef_up0_name] = integration_ref01_markdef_up0_value

        integration_ref01_resdata_up0 = helpers.to_map(runner.entity_data(integration_ref01_ent.update(integration_ref01_data_up0_up, None)))
        assert integration_ref01_resdata_up0 is not None
        assert integration_ref01_resdata_up0["id"] == integration_ref01_data_up0_up["id"]
        assert integration_ref01_resdata_up0[integration_ref01_markdef_up0_name] == integration_ref01_markdef_up0_value

        # LOAD
        integration_ref01_match_dt0 = {
            "id": integration_ref01_data["id"],
        }
        integration_ref01_data_dt0_loaded = integration_ref01_ent.load(integration_ref01_match_dt0, None)
        integration_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(integration_ref01_data_dt0_loaded))
        assert integration_ref01_data_dt0_load_result is not None
        assert integration_ref01_data_dt0_load_result["id"] == integration_ref01_data["id"]

        # REMOVE
        integration_ref01_match_rm0 = {
            "id": integration_ref01_data["id"],
        }
        integration_ref01_ent.remove(integration_ref01_match_rm0, None)

        # LIST
        integration_ref01_match_rt0 = {
            "after": setup["idmap"]["after01"],
            "before": setup["idmap"]["before01"],
            "first": setup["idmap"]["first01"],
            "include_archived": setup["idmap"]["include_archived01"],
            "last": setup["idmap"]["last01"],
            "order_by": setup["idmap"]["order_by01"],
        }

        integration_ref01_list_rt0_result = integration_ref01_ent.list(integration_ref01_match_rt0, None)
        assert isinstance(integration_ref01_list_rt0_result, list)

        not_found_item = vs.select(
            runner.entity_list_to_data(integration_ref01_list_rt0_result),
            {"id": integration_ref01_data["id"]})
        assert vs.isempty(not_found_item)



def _integration_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/integration/IntegrationTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = LinearSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["integration01", "integration02", "integration03", "after01", "api_key01", "application_key01", "before01", "channel01", "channel_name01", "code01", "code_access01", "confirm_replace01", "enabled01", "environment01", "first01", "github_host01", "include_archived01", "installation01", "last01", "membership_type01", "order_by01", "organization_slug01", "project01", "redirect_uri01", "requested_scope01", "site01", "skip_installation_deletion01", "team01", "team_name01", "type01"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "LINEAR_TEST_INTEGRATION_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "LINEAR_TEST_INTEGRATION_ENTID": idmap,
        "LINEAR_TEST_LIVE": "FALSE",
        "LINEAR_TEST_EXPLAIN": "FALSE",
        "LINEAR_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("LINEAR_TEST_INTEGRATION_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("LINEAR_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("LINEAR_APIKEY"),
            },
            extra or {},
        ])
        client = LinearSDK(helpers.to_map(merged_opts))

    _live = env.get("LINEAR_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("LINEAR_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
