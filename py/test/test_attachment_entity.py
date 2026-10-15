# Attachment entity test

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
        raise RuntimeError("attachment hook failed")

    def PreUnexpected(self, ctx):
        self.unexpected += 1



# main.kit.test.live.strict is true (the default is true): a live
# request that fails, or a live test missing an input it needs,
# fails the test.
# An account with no record for a test to read skips it either way.
LIVE_STRICT = True


class TestAttachmentEntity:

    def test_should_create_instance(self):
        testsdk = LinearSDK.test(None, None)
        ent = testsdk.Attachment(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "attachment": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = LinearSDK.test(seed, None)
        seen = list(base.Attachment(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from linear_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = LinearSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.Attachment(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_report_a_failed_stream(self):
        offline = {"net": {"offline": True}}
        with pytest.raises(Exception, match="offline"):
            list(LinearSDK.test(offline, None).Attachment(None).stream("list", None, None))

        quiet = {"ctrl": {"throw": False}}
        list(LinearSDK.test(offline, None).Attachment(None).stream("list", None, quiet))

        if "rbac" in (shared_config().get("feature") or {}):
            denied = LinearSDK.test(
                None, {"feature": {"rbac": {"active": True, "deny": True}}})
            with pytest.raises(Exception) as err:
                list(denied.Attachment(None).stream("list", None, None))
            assert "rbac_denied" == getattr(err.value, "code", None)

    def test_should_leave_the_callers_ctrl(self):
        explain = {}
        ctrl = {"explain": explain}
        list(LinearSDK.test(None, None).Attachment(None).stream("list", None, {"ctrl": ctrl}))
        assert ["explain"] == list(ctrl.keys())
        assert explain is ctrl["explain"] and 0 < len(explain)

    def test_should_fire_pre_unexpected(self):
        hook = _FailHook()
        client = LinearSDK({"feature": {"test": {"active": True}}, "extend": [hook]})
        with pytest.raises(Exception, match="hook failed"):
            client.Attachment(None).list(None, None)
        assert 0 < hook.unexpected

        fired = hook.unexpected
        assert client.Attachment(None).list(None, {"throw": False}) is None
        assert fired < hook.unexpected

    def test_should_refuse_an_invalid_request(self):
        if "validate" not in (shared_config().get("feature") or {}):
            pytest.skip("feature not present in this SDK: validate")
        client = LinearSDK.test(
            None, {"feature": {"validate": {"active": True}}})
        with pytest.raises(Exception) as err:
            client.Attachment(None).list({"after": 1}, None)
        assert "validate_failed" == getattr(err.value, "code", None)

    def test_should_run_basic_flow(self):
        setup = _attachment_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "update", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "attachment." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        if setup["live"]:
            for _live_key in ["after01", "before01", "channel01", "conversation01", "create_as_user01", "display_icon_url01", "first01", "include_archived01", "issue01", "jira_issue01", "last01", "link_kind01", "message01", "number01", "order_by01", "part01", "project_path_with_namespace01", "sync_to_comment_thread01", "ticket01", "title01", "url01"]:
                if setup.get("synthetic_only") or setup["idmap"].get(_live_key) is None:
                    runner.live_miss(LIVE_STRICT, f"Live entity test blocked: needs {_live_key} via LINEAR_TEST_ATTACHMENT_ENTID")
        client = setup["client"]

        # CREATE
        attachment_ref01_ent = client.Attachment(None)
        attachment_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.attachment"), "attachment_ref01"))
        attachment_ref01_data["after"] = setup["idmap"]["after01"]
        attachment_ref01_data["before"] = setup["idmap"]["before01"]
        attachment_ref01_data["channel_id"] = setup["idmap"]["channel01"]
        attachment_ref01_data["conversation_id"] = setup["idmap"]["conversation01"]
        attachment_ref01_data["create_as_user"] = setup["idmap"]["create_as_user01"]
        attachment_ref01_data["display_icon_url"] = setup["idmap"]["display_icon_url01"]
        attachment_ref01_data["first"] = setup["idmap"]["first01"]
        attachment_ref01_data["include_archived"] = setup["idmap"]["include_archived01"]
        attachment_ref01_data["issue_id"] = setup["idmap"]["issue01"]
        attachment_ref01_data["jira_issue_id"] = setup["idmap"]["jira_issue01"]
        attachment_ref01_data["last"] = setup["idmap"]["last01"]
        attachment_ref01_data["link_kind"] = setup["idmap"]["link_kind01"]
        attachment_ref01_data["message_id"] = setup["idmap"]["message01"]
        attachment_ref01_data["number"] = setup["idmap"]["number01"]
        attachment_ref01_data["order_by"] = setup["idmap"]["order_by01"]
        attachment_ref01_data["part_id"] = setup["idmap"]["part01"]
        attachment_ref01_data["project_path_with_namespace"] = setup["idmap"]["project_path_with_namespace01"]
        attachment_ref01_data["sync_to_comment_thread"] = setup["idmap"]["sync_to_comment_thread01"]
        attachment_ref01_data["ticket_id"] = setup["idmap"]["ticket01"]
        attachment_ref01_data["title"] = setup["idmap"]["title01"]
        attachment_ref01_data["url"] = setup["idmap"]["url01"]

        attachment_ref01_data = helpers.to_map(runner.entity_data(attachment_ref01_ent.create(attachment_ref01_data, None)))
        assert attachment_ref01_data is not None
        assert attachment_ref01_data["id"] is not None

        # LIST
        attachment_ref01_match = {
            "after": setup["idmap"]["after01"],
            "before": setup["idmap"]["before01"],
            "first": setup["idmap"]["first01"],
            "include_archived": setup["idmap"]["include_archived01"],
            "last": setup["idmap"]["last01"],
            "order_by": setup["idmap"]["order_by01"],
        }

        attachment_ref01_list_result = attachment_ref01_ent.list(attachment_ref01_match, None)
        assert isinstance(attachment_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(attachment_ref01_list_result),
            {"id": attachment_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # UPDATE
        attachment_ref01_data_up0_up = {
            "id": attachment_ref01_data["id"],
        }

        attachment_ref01_markdef_up0_name = "bodyData"
        attachment_ref01_markdef_up0_value = "Mark01-attachment_ref01_" + str(setup["now"])
        attachment_ref01_data_up0_up[attachment_ref01_markdef_up0_name] = attachment_ref01_markdef_up0_value

        attachment_ref01_resdata_up0 = helpers.to_map(runner.entity_data(attachment_ref01_ent.update(attachment_ref01_data_up0_up, None)))
        assert attachment_ref01_resdata_up0 is not None
        assert attachment_ref01_resdata_up0["id"] == attachment_ref01_data_up0_up["id"]
        assert attachment_ref01_resdata_up0[attachment_ref01_markdef_up0_name] == attachment_ref01_markdef_up0_value

        # LOAD
        attachment_ref01_match_dt0 = {
            "id": attachment_ref01_data["id"],
        }
        attachment_ref01_data_dt0_loaded = attachment_ref01_ent.load(attachment_ref01_match_dt0, None)
        attachment_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(attachment_ref01_data_dt0_loaded))
        assert attachment_ref01_data_dt0_load_result is not None
        assert attachment_ref01_data_dt0_load_result["id"] == attachment_ref01_data["id"]

        # REMOVE
        attachment_ref01_match_rm0 = {
            "id": attachment_ref01_data["id"],
        }
        attachment_ref01_ent.remove(attachment_ref01_match_rm0, None)

        # LIST
        attachment_ref01_match_rt0 = {
            "after": setup["idmap"]["after01"],
            "before": setup["idmap"]["before01"],
            "first": setup["idmap"]["first01"],
            "include_archived": setup["idmap"]["include_archived01"],
            "last": setup["idmap"]["last01"],
            "order_by": setup["idmap"]["order_by01"],
        }

        attachment_ref01_list_rt0_result = attachment_ref01_ent.list(attachment_ref01_match_rt0, None)
        assert isinstance(attachment_ref01_list_rt0_result, list)

        not_found_item = vs.select(
            runner.entity_list_to_data(attachment_ref01_list_rt0_result),
            {"id": attachment_ref01_data["id"]})
        assert vs.isempty(not_found_item)



def _attachment_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/attachment/AttachmentTestData.json")
    with open(entity_data_file, "r", encoding="utf-8") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = LinearSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["attachment01", "attachment02", "attachment03", "after01", "before01", "channel01", "conversation01", "create_as_user01", "display_icon_url01", "first01", "include_archived01", "issue01", "jira_issue01", "last01", "link_kind01", "message01", "number01", "order_by01", "part01", "project_path_with_namespace01", "sync_to_comment_thread01", "ticket01", "title01", "url01"],
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
        "LINEAR_TEST_ATTACHMENT_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "LINEAR_TEST_ATTACHMENT_ENTID": idmap,
        "LINEAR_TEST_LIVE": "FALSE",
        "LINEAR_TEST_EXPLAIN": "FALSE",
        "LINEAR_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("LINEAR_TEST_ATTACHMENT_ENTID"))
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
