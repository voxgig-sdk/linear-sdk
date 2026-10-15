# AccessKeyReleasePipeline entity test

import json
import os
import time

import pytest

from linear_sdk.utility.voxgig_struct import voxgig_struct as vs
from linear_sdk import LinearSDK
from linear_sdk.core import helpers
from linear_sdk.config import shared_config
from linear_sdk.feature.base_feature import LinearBaseFeature

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner



# main.kit.test.live.strict is true (the default is true): a live
# request that fails, or a live test missing an input it needs,
# fails the test.
# An account with no record for a test to read skips it either way.
LIVE_STRICT = True


class TestAccessKeyReleasePipelineEntity:

    def test_should_create_instance(self):
        testsdk = LinearSDK.test(None, None)
        ent = testsdk.AccessKeyReleasePipeline(None)
        assert ent is not None

    def test_should_refuse_an_invalid_request(self):
        if "validate" not in (shared_config().get("feature") or {}):
            pytest.skip("feature not present in this SDK: validate")
        client = LinearSDK.test(
            None, {"feature": {"validate": {"active": True}}})
        with pytest.raises(Exception) as err:
            client.AccessKeyReleasePipeline(None).load({"id": 1}, None)
        assert "validate_failed" == getattr(err.value, "code", None)

    def test_should_run_basic_flow(self):
        setup = _access_key_release_pipeline_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "access_key_release_pipeline." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        if setup["live"]:
            runner.live_miss(LIVE_STRICT, "Live entity test blocked: " + "the flow loads a access_key_release_pipeline record it has no list to find")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        access_key_release_pipeline_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.access_key_release_pipeline")))
        access_key_release_pipeline_ref01_data = None
        if len(access_key_release_pipeline_ref01_data_raw) > 0:
            access_key_release_pipeline_ref01_data = helpers.to_map(access_key_release_pipeline_ref01_data_raw[0][1])

        # LOAD
        access_key_release_pipeline_ref01_ent = client.AccessKeyReleasePipeline(None)
        access_key_release_pipeline_ref01_match_dt0 = {
            "id": access_key_release_pipeline_ref01_data["id"],
        }
        access_key_release_pipeline_ref01_data_dt0_loaded = access_key_release_pipeline_ref01_ent.load(access_key_release_pipeline_ref01_match_dt0, None)
        access_key_release_pipeline_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(access_key_release_pipeline_ref01_data_dt0_loaded))
        assert access_key_release_pipeline_ref01_data_dt0_load_result is not None
        assert access_key_release_pipeline_ref01_data_dt0_load_result["id"] == access_key_release_pipeline_ref01_data["id"]



def _access_key_release_pipeline_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/access_key_release_pipeline/AccessKeyReleasePipelineTestData.json")
    with open(entity_data_file, "r", encoding="utf-8") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = LinearSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["access_key_release_pipeline01", "access_key_release_pipeline02", "access_key_release_pipeline03"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Whether *_ENTID supplied the idmap, read before env_override consumes
    # it: without it, the ids a live flow binds are the fixture's synthetic ones.
    _entid_env_raw = os.environ.get(
        "LINEAR_TEST_ACCESS_KEY_RELEASE_PIPELINE_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "LINEAR_TEST_ACCESS_KEY_RELEASE_PIPELINE_ENTID": idmap,
        "LINEAR_TEST_LIVE": "FALSE",
        "LINEAR_TEST_EXPLAIN": "FALSE",
        "LINEAR_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("LINEAR_TEST_ACCESS_KEY_RELEASE_PIPELINE_ENTID"))
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
