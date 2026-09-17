# Attachment entity test

require "minitest/autorun"
require "json"
require_relative "../Linear_sdk"
require_relative "runner"

class AttachmentEntityTest < Minitest::Test
  def test_create_instance
    testsdk = LinearSDK.test(nil, nil)
    ent = testsdk.Attachment(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "attachment" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = LinearSDK.test(seed, nil)
    seen = base.Attachment(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = LinearConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = LinearSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.Attachment(nil).stream("list", nil, nil).each do |item|
        if item.is_a?(Array)
          got.concat(item)
        else
          got << item
        end
      end
      assert_equal 3, got.length
    end
  end

  def test_basic_flow
    setup = attachment_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "attachment." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set LINEAR_TEST_ATTACHMENT_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    attachment_ref01_ent = client.Attachment(nil)
    attachment_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.attachment"), "attachment_ref01"))
    attachment_ref01_data["after"] = setup[:idmap]["after01"]
    attachment_ref01_data["before"] = setup[:idmap]["before01"]
    attachment_ref01_data["channel_id"] = setup[:idmap]["channel01"]
    attachment_ref01_data["conversation_id"] = setup[:idmap]["conversation01"]
    attachment_ref01_data["create_as_user"] = setup[:idmap]["create_as_user01"]
    attachment_ref01_data["display_icon_url"] = setup[:idmap]["display_icon_url01"]
    attachment_ref01_data["first"] = setup[:idmap]["first01"]
    attachment_ref01_data["include_archived"] = setup[:idmap]["include_archived01"]
    attachment_ref01_data["issue_id"] = setup[:idmap]["issue01"]
    attachment_ref01_data["jira_issue_id"] = setup[:idmap]["jira_issue01"]
    attachment_ref01_data["last"] = setup[:idmap]["last01"]
    attachment_ref01_data["link_kind"] = setup[:idmap]["link_kind01"]
    attachment_ref01_data["message_id"] = setup[:idmap]["message01"]
    attachment_ref01_data["number"] = setup[:idmap]["number01"]
    attachment_ref01_data["order_by"] = setup[:idmap]["order_by01"]
    attachment_ref01_data["part_id"] = setup[:idmap]["part01"]
    attachment_ref01_data["project_path_with_namespace"] = setup[:idmap]["project_path_with_namespace01"]
    attachment_ref01_data["sync_to_comment_thread"] = setup[:idmap]["sync_to_comment_thread01"]
    attachment_ref01_data["ticket_id"] = setup[:idmap]["ticket01"]
    attachment_ref01_data["title"] = setup[:idmap]["title01"]
    attachment_ref01_data["url"] = setup[:idmap]["url01"]

    attachment_ref01_data_result = attachment_ref01_ent.create(attachment_ref01_data, nil)
    attachment_ref01_data = Helpers.to_map(attachment_ref01_data_result.respond_to?(:data_get) ? attachment_ref01_data_result.data_get : attachment_ref01_data_result)
    assert !attachment_ref01_data.nil?
    assert !attachment_ref01_data["id"].nil?

    # LIST
    attachment_ref01_match = {
      "after" => setup[:idmap]["after01"],
      "before" => setup[:idmap]["before01"],
      "first" => setup[:idmap]["first01"],
      "include_archived" => setup[:idmap]["include_archived01"],
      "last" => setup[:idmap]["last01"],
      "order_by" => setup[:idmap]["order_by01"],
    }

    attachment_ref01_list_result = attachment_ref01_ent.list(attachment_ref01_match, nil)
    assert attachment_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(attachment_ref01_list_result),
      { "id" => attachment_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    attachment_ref01_data_up0_up = {
      "id" => attachment_ref01_data["id"],
    }

    attachment_ref01_markdef_up0_name = "bodyData"
    attachment_ref01_markdef_up0_value = "Mark01-attachment_ref01_#{setup[:now]}"
    attachment_ref01_data_up0_up[attachment_ref01_markdef_up0_name] = attachment_ref01_markdef_up0_value

    attachment_ref01_resdata_up0_result = attachment_ref01_ent.update(attachment_ref01_data_up0_up, nil)
    attachment_ref01_resdata_up0 = Helpers.to_map(attachment_ref01_resdata_up0_result.respond_to?(:data_get) ? attachment_ref01_resdata_up0_result.data_get : attachment_ref01_resdata_up0_result)
    assert !attachment_ref01_resdata_up0.nil?
    assert_equal attachment_ref01_resdata_up0["id"], attachment_ref01_data_up0_up["id"]
    assert_equal attachment_ref01_resdata_up0[attachment_ref01_markdef_up0_name], attachment_ref01_markdef_up0_value

    # LOAD
    attachment_ref01_match_dt0 = {
      "id" => attachment_ref01_data["id"],
    }
    attachment_ref01_data_dt0_loaded = attachment_ref01_ent.load(attachment_ref01_match_dt0, nil)
    attachment_ref01_data_dt0_load_result = Helpers.to_map(attachment_ref01_data_dt0_loaded.respond_to?(:data_get) ? attachment_ref01_data_dt0_loaded.data_get : attachment_ref01_data_dt0_loaded)
    assert !attachment_ref01_data_dt0_load_result.nil?
    assert_equal attachment_ref01_data_dt0_load_result["id"], attachment_ref01_data["id"]

    # REMOVE
    attachment_ref01_match_rm0 = {
      "id" => attachment_ref01_data["id"],
    }
    attachment_ref01_ent.remove(attachment_ref01_match_rm0, nil)

    # LIST
    attachment_ref01_match_rt0 = {
      "after" => setup[:idmap]["after01"],
      "before" => setup[:idmap]["before01"],
      "first" => setup[:idmap]["first01"],
      "include_archived" => setup[:idmap]["include_archived01"],
      "last" => setup[:idmap]["last01"],
      "order_by" => setup[:idmap]["order_by01"],
    }

    attachment_ref01_list_rt0_result = attachment_ref01_ent.list(attachment_ref01_match_rt0, nil)
    assert attachment_ref01_list_rt0_result.is_a?(Array)

    not_found_item = Vs.select(
      Runner.entity_list_to_data(attachment_ref01_list_rt0_result),
      { "id" => attachment_ref01_data["id"] })
    assert Vs.isempty(not_found_item)

  end
end

def attachment_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "attachment", "AttachmentTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = LinearSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["attachment01", "attachment02", "attachment03", "after01", "before01", "channel01", "conversation01", "create_as_user01", "display_icon_url01", "first01", "include_archived01", "issue01", "jira_issue01", "last01", "link_kind01", "message01", "number01", "order_by01", "part01", "project_path_with_namespace01", "sync_to_comment_thread01", "ticket01", "title01", "url01"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["LINEAR_TEST_ATTACHMENT_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "LINEAR_TEST_ATTACHMENT_ENTID" => idmap,
    "LINEAR_TEST_LIVE" => "FALSE",
    "LINEAR_TEST_EXPLAIN" => "FALSE",
    "LINEAR_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["LINEAR_TEST_ATTACHMENT_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["LINEAR_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
        "apikey" => env["LINEAR_APIKEY"],
      },
      extra || {},
    ])
    client = LinearSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["LINEAR_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["LINEAR_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
