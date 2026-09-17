# IntegrationTemplate entity test

import json
import os
import time

import pytest

from linear_sdk.utility.voxgig_struct import voxgig_struct as vs
from linear_sdk import LinearSDK
from linear_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestIntegrationTemplateEntity:

    def test_should_create_instance(self):
        testsdk = LinearSDK.test(None, None)
        ent = testsdk.IntegrationTemplate(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "integration_template": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = LinearSDK.test(seed, None)
        seen = list(base.IntegrationTemplate(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from linear_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = LinearSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.IntegrationTemplate(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _integration_template_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "integration_template." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set LINEAR_TEST_INTEGRATION_TEMPLATE_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        integration_template_ref01_ent = client.IntegrationTemplate(None)
        integration_template_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.integration_template"), "integration_template_ref01"))
        integration_template_ref01_data["after"] = setup["idmap"]["after01"]
        integration_template_ref01_data["before"] = setup["idmap"]["before01"]
        integration_template_ref01_data["first"] = setup["idmap"]["first01"]
        integration_template_ref01_data["include_archived"] = setup["idmap"]["include_archived01"]
        integration_template_ref01_data["last"] = setup["idmap"]["last01"]
        integration_template_ref01_data["order_by"] = setup["idmap"]["order_by01"]

        integration_template_ref01_data = helpers.to_map(runner.entity_data(integration_template_ref01_ent.create(integration_template_ref01_data, None)))
        assert integration_template_ref01_data is not None
        assert integration_template_ref01_data["id"] is not None

        # LIST
        integration_template_ref01_match = {
            "after": setup["idmap"]["after01"],
            "before": setup["idmap"]["before01"],
            "first": setup["idmap"]["first01"],
            "include_archived": setup["idmap"]["include_archived01"],
            "last": setup["idmap"]["last01"],
            "order_by": setup["idmap"]["order_by01"],
        }

        integration_template_ref01_list_result = integration_template_ref01_ent.list(integration_template_ref01_match, None)
        assert isinstance(integration_template_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(integration_template_ref01_list_result),
            {"id": integration_template_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # LOAD
        integration_template_ref01_match_dt0 = {
            "id": integration_template_ref01_data["id"],
        }
        integration_template_ref01_data_dt0_loaded = integration_template_ref01_ent.load(integration_template_ref01_match_dt0, None)
        integration_template_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(integration_template_ref01_data_dt0_loaded))
        assert integration_template_ref01_data_dt0_load_result is not None
        assert integration_template_ref01_data_dt0_load_result["id"] == integration_template_ref01_data["id"]

        # REMOVE
        integration_template_ref01_match_rm0 = {
            "id": integration_template_ref01_data["id"],
        }
        integration_template_ref01_ent.remove(integration_template_ref01_match_rm0, None)

        # LIST
        integration_template_ref01_match_rt0 = {
            "after": setup["idmap"]["after01"],
            "before": setup["idmap"]["before01"],
            "first": setup["idmap"]["first01"],
            "include_archived": setup["idmap"]["include_archived01"],
            "last": setup["idmap"]["last01"],
            "order_by": setup["idmap"]["order_by01"],
        }

        integration_template_ref01_list_rt0_result = integration_template_ref01_ent.list(integration_template_ref01_match_rt0, None)
        assert isinstance(integration_template_ref01_list_rt0_result, list)

        not_found_item = vs.select(
            runner.entity_list_to_data(integration_template_ref01_list_rt0_result),
            {"id": integration_template_ref01_data["id"]})
        assert vs.isempty(not_found_item)



def _integration_template_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/integration_template/IntegrationTemplateTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = LinearSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["integration_template01", "integration_template02", "integration_template03", "after01", "before01", "first01", "include_archived01", "last01", "order_by01"],
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
        "LINEAR_TEST_INTEGRATION_TEMPLATE_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "LINEAR_TEST_INTEGRATION_TEMPLATE_ENTID": idmap,
        "LINEAR_TEST_LIVE": "FALSE",
        "LINEAR_TEST_EXPLAIN": "FALSE",
        "LINEAR_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("LINEAR_TEST_INTEGRATION_TEMPLATE_ENTID"))
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
