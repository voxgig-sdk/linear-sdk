# DocumentSearchResult entity test

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


class _FailHook(LinearBaseFeature):
    def __init__(self):
        super().__init__()
        self.name = "failhook"
        self.unexpected = 0

    def init(self, ctx, options):
        pass

    def PreSpec(self, ctx):
        raise RuntimeError("document_search_result hook failed")

    def PreUnexpected(self, ctx):
        self.unexpected += 1



# main.kit.test.live.strict is true (the default is true): a live
# request that fails, or a live test missing an input it needs,
# fails the test.
# An account with no record for a test to read skips it either way.
LIVE_STRICT = True


class TestDocumentSearchResultEntity:

    def test_should_create_instance(self):
        testsdk = LinearSDK.test(None, None)
        ent = testsdk.DocumentSearchResult(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "document_search_result": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = LinearSDK.test(seed, None)
        seen = list(base.DocumentSearchResult(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from linear_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = LinearSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.DocumentSearchResult(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_report_a_failed_stream(self):
        offline = {"net": {"offline": True}}
        with pytest.raises(Exception, match="offline"):
            list(LinearSDK.test(offline, None).DocumentSearchResult(None).stream("list", None, None))

        quiet = {"ctrl": {"throw": False}}
        list(LinearSDK.test(offline, None).DocumentSearchResult(None).stream("list", None, quiet))

        if "rbac" in (shared_config().get("feature") or {}):
            denied = LinearSDK.test(
                None, {"feature": {"rbac": {"active": True, "deny": True}}})
            with pytest.raises(Exception) as err:
                list(denied.DocumentSearchResult(None).stream("list", None, None))
            assert "rbac_denied" == getattr(err.value, "code", None)

    def test_should_leave_the_callers_ctrl(self):
        explain = {}
        ctrl = {"explain": explain}
        list(LinearSDK.test(None, None).DocumentSearchResult(None).stream("list", None, {"ctrl": ctrl}))
        assert ["explain"] == list(ctrl.keys())
        assert explain is ctrl["explain"] and 0 < len(explain)

    def test_should_fire_pre_unexpected(self):
        hook = _FailHook()
        client = LinearSDK({"feature": {"test": {"active": True}}, "extend": [hook]})
        with pytest.raises(Exception, match="hook failed"):
            client.DocumentSearchResult(None).list(None, None)
        assert 0 < hook.unexpected

        fired = hook.unexpected
        assert client.DocumentSearchResult(None).list(None, {"throw": False}) is None
        assert fired < hook.unexpected

    def test_should_refuse_an_invalid_request(self):
        if "validate" not in (shared_config().get("feature") or {}):
            pytest.skip("feature not present in this SDK: validate")
        client = LinearSDK.test(
            None, {"feature": {"validate": {"active": True}}})
        with pytest.raises(Exception) as err:
            client.DocumentSearchResult(None).list({"after": 1, "term": "x"}, None)
        assert "validate_failed" == getattr(err.value, "code", None)

    def test_should_run_basic_flow(self):
        setup = _document_search_result_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["list"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "document_search_result." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        if setup["live"]:
            for _live_key in ["after01", "before01", "first01", "include_archived01", "include_comment01", "last01", "order_by01", "team01", "term01"]:
                if setup.get("synthetic_only") or setup["idmap"].get(_live_key) is None:
                    runner.live_miss(LIVE_STRICT, f"Live entity test blocked: needs {_live_key} via LINEAR_TEST_DOCUMENT_SEARCH_RESULT_ENTID")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        document_search_result_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.document_search_result")))
        document_search_result_ref01_data = None
        if len(document_search_result_ref01_data_raw) > 0:
            document_search_result_ref01_data = helpers.to_map(document_search_result_ref01_data_raw[0][1])

        # LIST
        document_search_result_ref01_ent = client.DocumentSearchResult(None)
        document_search_result_ref01_match = {
            "after": setup["idmap"]["after01"],
            "before": setup["idmap"]["before01"],
            "first": setup["idmap"]["first01"],
            "include_archived": setup["idmap"]["include_archived01"],
            "include_comment": setup["idmap"]["include_comment01"],
            "last": setup["idmap"]["last01"],
            "order_by": setup["idmap"]["order_by01"],
            "team_id": setup["idmap"]["team01"],
            "term": setup["idmap"]["term01"],
        }

        document_search_result_ref01_list_result = document_search_result_ref01_ent.list(document_search_result_ref01_match, None)
        assert isinstance(document_search_result_ref01_list_result, list)



def _document_search_result_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/document_search_result/DocumentSearchResultTestData.json")
    with open(entity_data_file, "r", encoding="utf-8") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = LinearSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["document_search_result01", "document_search_result02", "document_search_result03", "after01", "before01", "first01", "include_archived01", "include_comment01", "last01", "order_by01", "team01", "term01"],
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
        "LINEAR_TEST_DOCUMENT_SEARCH_RESULT_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "LINEAR_TEST_DOCUMENT_SEARCH_RESULT_ENTID": idmap,
        "LINEAR_TEST_LIVE": "FALSE",
        "LINEAR_TEST_EXPLAIN": "FALSE",
        "LINEAR_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("LINEAR_TEST_DOCUMENT_SEARCH_RESULT_ENTID"))
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
