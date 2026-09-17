# IssueImport entity test

import json
import os
import time

import pytest

from linear_sdk.utility.voxgig_struct import voxgig_struct as vs
from linear_sdk import LinearSDK
from linear_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestIssueImportEntity:

    def test_should_create_instance(self):
        testsdk = LinearSDK.test(None, None)
        ent = testsdk.IssueImport(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _issue_import_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "update", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "issue_import." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set LINEAR_TEST_ISSUE_IMPORT_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        issue_import_ref01_ent = client.IssueImport(None)
        issue_import_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.issue_import"), "issue_import_ref01"))
        issue_import_ref01_data["github_label"] = setup["idmap"]["github_label01"]
        issue_import_ref01_data["github_repo_id"] = setup["idmap"]["github_repo01"]
        issue_import_ref01_data["include_closed_issue"] = setup["idmap"]["include_closed_issue01"]
        issue_import_ref01_data["instant_process"] = setup["idmap"]["instant_process01"]
        issue_import_ref01_data["issue_import_id"] = setup["idmap"]["issue_import01"]
        issue_import_ref01_data["linear_source_organization_id"] = setup["idmap"]["linear_source_organization01"]
        issue_import_ref01_data["mapping"] = setup["idmap"]["mapping01"]
        issue_import_ref01_data["team_id"] = setup["idmap"]["team01"]
        issue_import_ref01_data["team_name"] = setup["idmap"]["team_name01"]

        issue_import_ref01_data = helpers.to_map(runner.entity_data(issue_import_ref01_ent.create(issue_import_ref01_data, None)))
        assert issue_import_ref01_data is not None
        assert issue_import_ref01_data["id"] is not None

        # UPDATE
        issue_import_ref01_data_up0_up = {
            "id": issue_import_ref01_data["id"],
            "linear_source_organization_id": setup["idmap"]["linear_source_organization_id"],
        }

        issue_import_ref01_markdef_up0_name = "creatorId"
        issue_import_ref01_markdef_up0_value = "Mark01-issue_import_ref01_" + str(setup["now"])
        issue_import_ref01_data_up0_up[issue_import_ref01_markdef_up0_name] = issue_import_ref01_markdef_up0_value

        issue_import_ref01_resdata_up0 = helpers.to_map(runner.entity_data(issue_import_ref01_ent.update(issue_import_ref01_data_up0_up, None)))
        assert issue_import_ref01_resdata_up0 is not None
        assert issue_import_ref01_resdata_up0["id"] == issue_import_ref01_data_up0_up["id"]
        assert issue_import_ref01_resdata_up0[issue_import_ref01_markdef_up0_name] == issue_import_ref01_markdef_up0_value

        # REMOVE
        issue_import_ref01_match_rm0 = {
            "id": issue_import_ref01_data["id"],
        }
        issue_import_ref01_ent.remove(issue_import_ref01_match_rm0, None)



def _issue_import_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/issue_import/IssueImportTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = LinearSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["issue_import01", "issue_import02", "issue_import03", "github_label01", "github_repo01", "include_closed_issue01", "instant_process01", "linear_source_organization01", "mapping01", "team01", "team_name01"],
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
        "LINEAR_TEST_ISSUE_IMPORT_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "LINEAR_TEST_ISSUE_IMPORT_ENTID": idmap,
        "LINEAR_TEST_LIVE": "FALSE",
        "LINEAR_TEST_EXPLAIN": "FALSE",
        "LINEAR_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("LINEAR_TEST_ISSUE_IMPORT_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("linear_source_organization_id") is None:
        idmap_resolved["linear_source_organization_id"] = idmap_resolved.get("linear_source_organization01")

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
