# UserSetting entity test

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


class TestUserSettingEntity:

    def test_should_create_instance(self):
        testsdk = LinearSDK.test(None, None)
        ent = testsdk.UserSetting(None)
        assert ent is not None

    def test_should_refuse_an_invalid_request(self):
        if "validate" not in (shared_config().get("feature") or {}):
            pytest.skip("feature not present in this SDK: validate")
        client = LinearSDK.test(
            None, {"feature": {"validate": {"active": True}}})
        with pytest.raises(Exception) as err:
            client.UserSetting(None).load({"autoAssignToSelf": "x", "id": "x"}, None)
        assert "validate_failed" == getattr(err.value, "code", None)

    def test_should_run_basic_flow(self):
        setup = _user_setting_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "update", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "user_setting." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        if setup["live"]:
            for _live_key in ["category01", "channel01", "subscribe01"]:
                if setup.get("synthetic_only") or setup["idmap"].get(_live_key) is None:
                    runner.live_miss(LIVE_STRICT, f"Live entity test blocked: needs {_live_key} via LINEAR_TEST_USER_SETTING_ENTID")
        client = setup["client"]

        # CREATE
        user_setting_ref01_ent = client.UserSetting(None)
        user_setting_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.user_setting"), "user_setting_ref01"))
        user_setting_ref01_data["category"] = setup["idmap"]["category01"]
        user_setting_ref01_data["channel"] = setup["idmap"]["channel01"]
        user_setting_ref01_data["subscribe"] = setup["idmap"]["subscribe01"]

        user_setting_ref01_data = helpers.to_map(runner.entity_data(user_setting_ref01_ent.create(user_setting_ref01_data, None)))
        assert user_setting_ref01_data is not None
        assert user_setting_ref01_data["id"] is not None

        # UPDATE
        user_setting_ref01_data_up0_up = {
            "id": user_setting_ref01_data["id"],
        }

        user_setting_ref01_markdef_up0_name = "calendarHash"
        user_setting_ref01_markdef_up0_value = "Mark01-user_setting_ref01_" + str(setup["now"])
        user_setting_ref01_data_up0_up[user_setting_ref01_markdef_up0_name] = user_setting_ref01_markdef_up0_value

        user_setting_ref01_resdata_up0 = helpers.to_map(runner.entity_data(user_setting_ref01_ent.update(user_setting_ref01_data_up0_up, None)))
        assert user_setting_ref01_resdata_up0 is not None
        assert user_setting_ref01_resdata_up0["id"] == user_setting_ref01_data_up0_up["id"]
        assert user_setting_ref01_resdata_up0[user_setting_ref01_markdef_up0_name] == user_setting_ref01_markdef_up0_value

        # LOAD
        user_setting_ref01_match_dt0 = {
            "id": user_setting_ref01_data["id"],
        }
        user_setting_ref01_data_dt0_loaded = user_setting_ref01_ent.load(user_setting_ref01_match_dt0, None)
        user_setting_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(user_setting_ref01_data_dt0_loaded))
        assert user_setting_ref01_data_dt0_load_result is not None
        assert user_setting_ref01_data_dt0_load_result["id"] == user_setting_ref01_data["id"]



def _user_setting_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/user_setting/UserSettingTestData.json")
    with open(entity_data_file, "r", encoding="utf-8") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = LinearSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["user_setting01", "user_setting02", "user_setting03", "category01", "channel01", "subscribe01"],
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
        "LINEAR_TEST_USER_SETTING_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "LINEAR_TEST_USER_SETTING_ENTID": idmap,
        "LINEAR_TEST_LIVE": "FALSE",
        "LINEAR_TEST_EXPLAIN": "FALSE",
        "LINEAR_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("LINEAR_TEST_USER_SETTING_ENTID"))
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
