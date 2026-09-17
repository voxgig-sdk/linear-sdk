# ProjectStatus entity test

import json
import os
import time

import pytest

from linear_sdk.utility.voxgig_struct import voxgig_struct as vs
from linear_sdk import LinearSDK
from linear_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestProjectStatusEntity:

    def test_should_create_instance(self):
        testsdk = LinearSDK.test(None, None)
        ent = testsdk.ProjectStatus(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "project_status": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = LinearSDK.test(seed, None)
        seen = list(base.ProjectStatus(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from linear_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = LinearSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.ProjectStatus(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _project_status_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "update", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "project_status." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set LINEAR_TEST_PROJECT_STATUS_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        project_status_ref01_ent = client.ProjectStatus(None)
        project_status_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.project_status"), "project_status_ref01"))
        project_status_ref01_data["after"] = setup["idmap"]["after01"]
        project_status_ref01_data["before"] = setup["idmap"]["before01"]
        project_status_ref01_data["first"] = setup["idmap"]["first01"]
        project_status_ref01_data["include_archived"] = setup["idmap"]["include_archived01"]
        project_status_ref01_data["last"] = setup["idmap"]["last01"]
        project_status_ref01_data["order_by"] = setup["idmap"]["order_by01"]

        project_status_ref01_data = helpers.to_map(runner.entity_data(project_status_ref01_ent.create(project_status_ref01_data, None)))
        assert project_status_ref01_data is not None
        assert project_status_ref01_data["id"] is not None

        # LIST
        project_status_ref01_match = {
            "after": setup["idmap"]["after01"],
            "before": setup["idmap"]["before01"],
            "first": setup["idmap"]["first01"],
            "include_archived": setup["idmap"]["include_archived01"],
            "last": setup["idmap"]["last01"],
            "order_by": setup["idmap"]["order_by01"],
        }

        project_status_ref01_list_result = project_status_ref01_ent.list(project_status_ref01_match, None)
        assert isinstance(project_status_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(project_status_ref01_list_result),
            {"id": project_status_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # UPDATE
        project_status_ref01_data_up0_up = {
            "id": project_status_ref01_data["id"],
        }

        project_status_ref01_markdef_up0_name = "color"
        project_status_ref01_markdef_up0_value = "Mark01-project_status_ref01_" + str(setup["now"])
        project_status_ref01_data_up0_up[project_status_ref01_markdef_up0_name] = project_status_ref01_markdef_up0_value

        project_status_ref01_resdata_up0 = helpers.to_map(runner.entity_data(project_status_ref01_ent.update(project_status_ref01_data_up0_up, None)))
        assert project_status_ref01_resdata_up0 is not None
        assert project_status_ref01_resdata_up0["id"] == project_status_ref01_data_up0_up["id"]
        assert project_status_ref01_resdata_up0[project_status_ref01_markdef_up0_name] == project_status_ref01_markdef_up0_value

        # LOAD
        project_status_ref01_match_dt0 = {
            "id": project_status_ref01_data["id"],
        }
        project_status_ref01_data_dt0_loaded = project_status_ref01_ent.load(project_status_ref01_match_dt0, None)
        project_status_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(project_status_ref01_data_dt0_loaded))
        assert project_status_ref01_data_dt0_load_result is not None
        assert project_status_ref01_data_dt0_load_result["id"] == project_status_ref01_data["id"]



def _project_status_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/project_status/ProjectStatusTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = LinearSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["project_status01", "project_status02", "project_status03", "after01", "before01", "first01", "include_archived01", "last01", "order_by01"],
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
        "LINEAR_TEST_PROJECT_STATUS_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "LINEAR_TEST_PROJECT_STATUS_ENTID": idmap,
        "LINEAR_TEST_LIVE": "FALSE",
        "LINEAR_TEST_EXPLAIN": "FALSE",
        "LINEAR_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("LINEAR_TEST_PROJECT_STATUS_ENTID"))
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
