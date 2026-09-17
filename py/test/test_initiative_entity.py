# Initiative entity test

import json
import os
import time

import pytest

from linear_sdk.utility.voxgig_struct import voxgig_struct as vs
from linear_sdk import LinearSDK
from linear_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestInitiativeEntity:

    def test_should_create_instance(self):
        testsdk = LinearSDK.test(None, None)
        ent = testsdk.Initiative(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "initiative": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = LinearSDK.test(seed, None)
        seen = list(base.Initiative(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from linear_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = LinearSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.Initiative(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _initiative_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "update", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "initiative." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set LINEAR_TEST_INITIATIVE_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        initiative_ref01_ent = client.Initiative(None)
        initiative_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.initiative"), "initiative_ref01"))
        initiative_ref01_data["after"] = setup["idmap"]["after01"]
        initiative_ref01_data["before"] = setup["idmap"]["before01"]
        initiative_ref01_data["first"] = setup["idmap"]["first01"]
        initiative_ref01_data["include_archived"] = setup["idmap"]["include_archived01"]
        initiative_ref01_data["label_id"] = setup["idmap"]["label01"]
        initiative_ref01_data["last"] = setup["idmap"]["last01"]
        initiative_ref01_data["lead_team_id"] = setup["idmap"]["lead_team01"]
        initiative_ref01_data["mode"] = setup["idmap"]["mode01"]
        initiative_ref01_data["order_by"] = setup["idmap"]["order_by01"]

        initiative_ref01_data = helpers.to_map(runner.entity_data(initiative_ref01_ent.create(initiative_ref01_data, None)))
        assert initiative_ref01_data is not None
        assert initiative_ref01_data["id"] is not None

        # LIST
        initiative_ref01_match = {
            "after": setup["idmap"]["after01"],
            "before": setup["idmap"]["before01"],
            "first": setup["idmap"]["first01"],
            "include_archived": setup["idmap"]["include_archived01"],
            "last": setup["idmap"]["last01"],
            "order_by": setup["idmap"]["order_by01"],
        }

        initiative_ref01_list_result = initiative_ref01_ent.list(initiative_ref01_match, None)
        assert isinstance(initiative_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(initiative_ref01_list_result),
            {"id": initiative_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # UPDATE
        initiative_ref01_data_up0_up = {
            "id": initiative_ref01_data["id"],
        }

        initiative_ref01_markdef_up0_name = "color"
        initiative_ref01_markdef_up0_value = "Mark01-initiative_ref01_" + str(setup["now"])
        initiative_ref01_data_up0_up[initiative_ref01_markdef_up0_name] = initiative_ref01_markdef_up0_value

        initiative_ref01_resdata_up0 = helpers.to_map(runner.entity_data(initiative_ref01_ent.update(initiative_ref01_data_up0_up, None)))
        assert initiative_ref01_resdata_up0 is not None
        assert initiative_ref01_resdata_up0["id"] == initiative_ref01_data_up0_up["id"]
        assert initiative_ref01_resdata_up0[initiative_ref01_markdef_up0_name] == initiative_ref01_markdef_up0_value

        # LOAD
        initiative_ref01_match_dt0 = {
            "id": initiative_ref01_data["id"],
        }
        initiative_ref01_data_dt0_loaded = initiative_ref01_ent.load(initiative_ref01_match_dt0, None)
        initiative_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(initiative_ref01_data_dt0_loaded))
        assert initiative_ref01_data_dt0_load_result is not None
        assert initiative_ref01_data_dt0_load_result["id"] == initiative_ref01_data["id"]

        # REMOVE
        initiative_ref01_match_rm0 = {
            "id": initiative_ref01_data["id"],
        }
        initiative_ref01_ent.remove(initiative_ref01_match_rm0, None)

        # LIST
        initiative_ref01_match_rt0 = {
            "after": setup["idmap"]["after01"],
            "before": setup["idmap"]["before01"],
            "first": setup["idmap"]["first01"],
            "include_archived": setup["idmap"]["include_archived01"],
            "last": setup["idmap"]["last01"],
            "order_by": setup["idmap"]["order_by01"],
        }

        initiative_ref01_list_rt0_result = initiative_ref01_ent.list(initiative_ref01_match_rt0, None)
        assert isinstance(initiative_ref01_list_rt0_result, list)

        not_found_item = vs.select(
            runner.entity_list_to_data(initiative_ref01_list_rt0_result),
            {"id": initiative_ref01_data["id"]})
        assert vs.isempty(not_found_item)



def _initiative_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/initiative/InitiativeTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = LinearSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["initiative01", "initiative02", "initiative03", "after01", "before01", "first01", "include_archived01", "label01", "last01", "lead_team01", "mode01", "order_by01"],
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
        "LINEAR_TEST_INITIATIVE_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "LINEAR_TEST_INITIATIVE_ENTID": idmap,
        "LINEAR_TEST_LIVE": "FALSE",
        "LINEAR_TEST_EXPLAIN": "FALSE",
        "LINEAR_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("LINEAR_TEST_INITIATIVE_ENTID"))
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
