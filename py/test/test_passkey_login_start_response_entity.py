# PasskeyLoginStartResponse entity test

import json
import os
import time

import pytest

from linear_sdk.utility.voxgig_struct import voxgig_struct as vs
from linear_sdk import LinearSDK
from linear_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestPasskeyLoginStartResponseEntity:

    def test_should_create_instance(self):
        testsdk = LinearSDK.test(None, None)
        ent = testsdk.PasskeyLoginStartResponse(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _passkey_login_start_response_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["update"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "passkey_login_start_response." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set LINEAR_TEST_PASSKEY_LOGIN_START_RESPONSE_ENTID JSON to run live")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        passkey_login_start_response_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.passkey_login_start_response")))
        passkey_login_start_response_ref01_data = None
        if len(passkey_login_start_response_ref01_data_raw) > 0:
            passkey_login_start_response_ref01_data = helpers.to_map(passkey_login_start_response_ref01_data_raw[0][1])

        # UPDATE
        passkey_login_start_response_ref01_ent = client.PasskeyLoginStartResponse(None)
        passkey_login_start_response_ref01_data_up0_up = {
            "auth_id": setup["idmap"]["auth_id"],
        }

        passkey_login_start_response_ref01_resdata_up0 = helpers.to_map(runner.entity_data(passkey_login_start_response_ref01_ent.update(passkey_login_start_response_ref01_data_up0_up, None)))
        assert passkey_login_start_response_ref01_resdata_up0 is not None



def _passkey_login_start_response_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/passkey_login_start_response/PasskeyLoginStartResponseTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = LinearSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["passkey_login_start_response01", "passkey_login_start_response02", "passkey_login_start_response03", "auth01"],
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
        "LINEAR_TEST_PASSKEY_LOGIN_START_RESPONSE_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "LINEAR_TEST_PASSKEY_LOGIN_START_RESPONSE_ENTID": idmap,
        "LINEAR_TEST_LIVE": "FALSE",
        "LINEAR_TEST_EXPLAIN": "FALSE",
        "LINEAR_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("LINEAR_TEST_PASSKEY_LOGIN_START_RESPONSE_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("auth_id") is None:
        idmap_resolved["auth_id"] = idmap_resolved.get("auth01")

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
