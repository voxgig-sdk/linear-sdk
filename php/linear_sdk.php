<?php
declare(strict_types=1);

// Linear SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class LinearSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new LinearUtility();
        $this->_utility = $utility;

        $config = LinearConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = LinearHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = LinearHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!LinearFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, LinearFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return LinearUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = LinearHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = LinearHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = LinearHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new LinearSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new LinearError($op . "_allow",
                "LinearSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = LinearHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = LinearHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new LinearError("graphql_error",
                "LinearSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_access_key_release = null;

    // Canonical facade: $client->AccessKeyRelease()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->access_key_release()
    // resolves here too.
    public function AccessKeyRelease($data = null)
    {
        require_once __DIR__ . '/entity/access_key_release_entity.php';
        if ($data === null) {
            if ($this->_access_key_release === null) {
                $this->_access_key_release = new AccessKeyReleaseEntity($this, null);
            }
            return $this->_access_key_release;
        }
        return new AccessKeyReleaseEntity($this, $data);
    }


    private $_access_key_release_pipeline = null;

    // Canonical facade: $client->AccessKeyReleasePipeline()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->access_key_release_pipeline()
    // resolves here too.
    public function AccessKeyReleasePipeline($data = null)
    {
        require_once __DIR__ . '/entity/access_key_release_pipeline_entity.php';
        if ($data === null) {
            if ($this->_access_key_release_pipeline === null) {
                $this->_access_key_release_pipeline = new AccessKeyReleasePipelineEntity($this, null);
            }
            return $this->_access_key_release_pipeline;
        }
        return new AccessKeyReleasePipelineEntity($this, $data);
    }


    private $_agent_activity = null;

    // Canonical facade: $client->AgentActivity()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent_activity()
    // resolves here too.
    public function AgentActivity($data = null)
    {
        require_once __DIR__ . '/entity/agent_activity_entity.php';
        if ($data === null) {
            if ($this->_agent_activity === null) {
                $this->_agent_activity = new AgentActivityEntity($this, null);
            }
            return $this->_agent_activity;
        }
        return new AgentActivityEntity($this, $data);
    }


    private $_agent_session = null;

    // Canonical facade: $client->AgentSession()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent_session()
    // resolves here too.
    public function AgentSession($data = null)
    {
        require_once __DIR__ . '/entity/agent_session_entity.php';
        if ($data === null) {
            if ($this->_agent_session === null) {
                $this->_agent_session = new AgentSessionEntity($this, null);
            }
            return $this->_agent_session;
        }
        return new AgentSessionEntity($this, $data);
    }


    private $_agent_skill = null;

    // Canonical facade: $client->AgentSkill()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent_skill()
    // resolves here too.
    public function AgentSkill($data = null)
    {
        require_once __DIR__ . '/entity/agent_skill_entity.php';
        if ($data === null) {
            if ($this->_agent_skill === null) {
                $this->_agent_skill = new AgentSkillEntity($this, null);
            }
            return $this->_agent_skill;
        }
        return new AgentSkillEntity($this, $data);
    }


    private $_application = null;

    // Canonical facade: $client->Application()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->application()
    // resolves here too.
    public function Application($data = null)
    {
        require_once __DIR__ . '/entity/application_entity.php';
        if ($data === null) {
            if ($this->_application === null) {
                $this->_application = new ApplicationEntity($this, null);
            }
            return $this->_application;
        }
        return new ApplicationEntity($this, $data);
    }


    private $_attachment = null;

    // Canonical facade: $client->Attachment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->attachment()
    // resolves here too.
    public function Attachment($data = null)
    {
        require_once __DIR__ . '/entity/attachment_entity.php';
        if ($data === null) {
            if ($this->_attachment === null) {
                $this->_attachment = new AttachmentEntity($this, null);
            }
            return $this->_attachment;
        }
        return new AttachmentEntity($this, $data);
    }


    private $_audit_entry = null;

    // Canonical facade: $client->AuditEntry()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->audit_entry()
    // resolves here too.
    public function AuditEntry($data = null)
    {
        require_once __DIR__ . '/entity/audit_entry_entity.php';
        if ($data === null) {
            if ($this->_audit_entry === null) {
                $this->_audit_entry = new AuditEntryEntity($this, null);
            }
            return $this->_audit_entry;
        }
        return new AuditEntryEntity($this, $data);
    }


    private $_audit_entry_type = null;

    // Canonical facade: $client->AuditEntryType()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->audit_entry_type()
    // resolves here too.
    public function AuditEntryType($data = null)
    {
        require_once __DIR__ . '/entity/audit_entry_type_entity.php';
        if ($data === null) {
            if ($this->_audit_entry_type === null) {
                $this->_audit_entry_type = new AuditEntryTypeEntity($this, null);
            }
            return $this->_audit_entry_type;
        }
        return new AuditEntryTypeEntity($this, $data);
    }


    private $_auth_resolver_response = null;

    // Canonical facade: $client->AuthResolverResponse()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->auth_resolver_response()
    // resolves here too.
    public function AuthResolverResponse($data = null)
    {
        require_once __DIR__ . '/entity/auth_resolver_response_entity.php';
        if ($data === null) {
            if ($this->_auth_resolver_response === null) {
                $this->_auth_resolver_response = new AuthResolverResponseEntity($this, null);
            }
            return $this->_auth_resolver_response;
        }
        return new AuthResolverResponseEntity($this, $data);
    }


    private $_authentication_session_response = null;

    // Canonical facade: $client->AuthenticationSessionResponse()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->authentication_session_response()
    // resolves here too.
    public function AuthenticationSessionResponse($data = null)
    {
        require_once __DIR__ . '/entity/authentication_session_response_entity.php';
        if ($data === null) {
            if ($this->_authentication_session_response === null) {
                $this->_authentication_session_response = new AuthenticationSessionResponseEntity($this, null);
            }
            return $this->_authentication_session_response;
        }
        return new AuthenticationSessionResponseEntity($this, $data);
    }


    private $_comment = null;

    // Canonical facade: $client->Comment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->comment()
    // resolves here too.
    public function Comment($data = null)
    {
        require_once __DIR__ . '/entity/comment_entity.php';
        if ($data === null) {
            if ($this->_comment === null) {
                $this->_comment = new CommentEntity($this, null);
            }
            return $this->_comment;
        }
        return new CommentEntity($this, $data);
    }


    private $_create_or_join_organization_response = null;

    // Canonical facade: $client->CreateOrJoinOrganizationResponse()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->create_or_join_organization_response()
    // resolves here too.
    public function CreateOrJoinOrganizationResponse($data = null)
    {
        require_once __DIR__ . '/entity/create_or_join_organization_response_entity.php';
        if ($data === null) {
            if ($this->_create_or_join_organization_response === null) {
                $this->_create_or_join_organization_response = new CreateOrJoinOrganizationResponseEntity($this, null);
            }
            return $this->_create_or_join_organization_response;
        }
        return new CreateOrJoinOrganizationResponseEntity($this, $data);
    }


    private $_custom_view = null;

    // Canonical facade: $client->CustomView()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->custom_view()
    // resolves here too.
    public function CustomView($data = null)
    {
        require_once __DIR__ . '/entity/custom_view_entity.php';
        if ($data === null) {
            if ($this->_custom_view === null) {
                $this->_custom_view = new CustomViewEntity($this, null);
            }
            return $this->_custom_view;
        }
        return new CustomViewEntity($this, $data);
    }


    private $_customer = null;

    // Canonical facade: $client->Customer()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->customer()
    // resolves here too.
    public function Customer($data = null)
    {
        require_once __DIR__ . '/entity/customer_entity.php';
        if ($data === null) {
            if ($this->_customer === null) {
                $this->_customer = new CustomerEntity($this, null);
            }
            return $this->_customer;
        }
        return new CustomerEntity($this, $data);
    }


    private $_customer_need = null;

    // Canonical facade: $client->CustomerNeed()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->customer_need()
    // resolves here too.
    public function CustomerNeed($data = null)
    {
        require_once __DIR__ . '/entity/customer_need_entity.php';
        if ($data === null) {
            if ($this->_customer_need === null) {
                $this->_customer_need = new CustomerNeedEntity($this, null);
            }
            return $this->_customer_need;
        }
        return new CustomerNeedEntity($this, $data);
    }


    private $_customer_status = null;

    // Canonical facade: $client->CustomerStatus()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->customer_status()
    // resolves here too.
    public function CustomerStatus($data = null)
    {
        require_once __DIR__ . '/entity/customer_status_entity.php';
        if ($data === null) {
            if ($this->_customer_status === null) {
                $this->_customer_status = new CustomerStatusEntity($this, null);
            }
            return $this->_customer_status;
        }
        return new CustomerStatusEntity($this, $data);
    }


    private $_customer_tier = null;

    // Canonical facade: $client->CustomerTier()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->customer_tier()
    // resolves here too.
    public function CustomerTier($data = null)
    {
        require_once __DIR__ . '/entity/customer_tier_entity.php';
        if ($data === null) {
            if ($this->_customer_tier === null) {
                $this->_customer_tier = new CustomerTierEntity($this, null);
            }
            return $this->_customer_tier;
        }
        return new CustomerTierEntity($this, $data);
    }


    private $_cycle = null;

    // Canonical facade: $client->Cycle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cycle()
    // resolves here too.
    public function Cycle($data = null)
    {
        require_once __DIR__ . '/entity/cycle_entity.php';
        if ($data === null) {
            if ($this->_cycle === null) {
                $this->_cycle = new CycleEntity($this, null);
            }
            return $this->_cycle;
        }
        return new CycleEntity($this, $data);
    }


    private $_diff = null;

    // Canonical facade: $client->Diff()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->diff()
    // resolves here too.
    public function Diff($data = null)
    {
        require_once __DIR__ . '/entity/diff_entity.php';
        if ($data === null) {
            if ($this->_diff === null) {
                $this->_diff = new DiffEntity($this, null);
            }
            return $this->_diff;
        }
        return new DiffEntity($this, $data);
    }


    private $_document = null;

    // Canonical facade: $client->Document()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->document()
    // resolves here too.
    public function Document($data = null)
    {
        require_once __DIR__ . '/entity/document_entity.php';
        if ($data === null) {
            if ($this->_document === null) {
                $this->_document = new DocumentEntity($this, null);
            }
            return $this->_document;
        }
        return new DocumentEntity($this, $data);
    }


    private $_document_search_result = null;

    // Canonical facade: $client->DocumentSearchResult()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->document_search_result()
    // resolves here too.
    public function DocumentSearchResult($data = null)
    {
        require_once __DIR__ . '/entity/document_search_result_entity.php';
        if ($data === null) {
            if ($this->_document_search_result === null) {
                $this->_document_search_result = new DocumentSearchResultEntity($this, null);
            }
            return $this->_document_search_result;
        }
        return new DocumentSearchResultEntity($this, $data);
    }


    private $_email_intake_address = null;

    // Canonical facade: $client->EmailIntakeAddress()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->email_intake_address()
    // resolves here too.
    public function EmailIntakeAddress($data = null)
    {
        require_once __DIR__ . '/entity/email_intake_address_entity.php';
        if ($data === null) {
            if ($this->_email_intake_address === null) {
                $this->_email_intake_address = new EmailIntakeAddressEntity($this, null);
            }
            return $this->_email_intake_address;
        }
        return new EmailIntakeAddressEntity($this, $data);
    }


    private $_email_user_account_auth_challenge_response = null;

    // Canonical facade: $client->EmailUserAccountAuthChallengeResponse()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->email_user_account_auth_challenge_response()
    // resolves here too.
    public function EmailUserAccountAuthChallengeResponse($data = null)
    {
        require_once __DIR__ . '/entity/email_user_account_auth_challenge_response_entity.php';
        if ($data === null) {
            if ($this->_email_user_account_auth_challenge_response === null) {
                $this->_email_user_account_auth_challenge_response = new EmailUserAccountAuthChallengeResponseEntity($this, null);
            }
            return $this->_email_user_account_auth_challenge_response;
        }
        return new EmailUserAccountAuthChallengeResponseEntity($this, $data);
    }


    private $_emoji = null;

    // Canonical facade: $client->Emoji()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->emoji()
    // resolves here too.
    public function Emoji($data = null)
    {
        require_once __DIR__ . '/entity/emoji_entity.php';
        if ($data === null) {
            if ($this->_emoji === null) {
                $this->_emoji = new EmojiEntity($this, null);
            }
            return $this->_emoji;
        }
        return new EmojiEntity($this, $data);
    }


    private $_entity_external_link = null;

    // Canonical facade: $client->EntityExternalLink()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->entity_external_link()
    // resolves here too.
    public function EntityExternalLink($data = null)
    {
        require_once __DIR__ . '/entity/entity_external_link_entity.php';
        if ($data === null) {
            if ($this->_entity_external_link === null) {
                $this->_entity_external_link = new EntityExternalLinkEntity($this, null);
            }
            return $this->_entity_external_link;
        }
        return new EntityExternalLinkEntity($this, $data);
    }


    private $_external_user = null;

    // Canonical facade: $client->ExternalUser()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->external_user()
    // resolves here too.
    public function ExternalUser($data = null)
    {
        require_once __DIR__ . '/entity/external_user_entity.php';
        if ($data === null) {
            if ($this->_external_user === null) {
                $this->_external_user = new ExternalUserEntity($this, null);
            }
            return $this->_external_user;
        }
        return new ExternalUserEntity($this, $data);
    }


    private $_favorite = null;

    // Canonical facade: $client->Favorite()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->favorite()
    // resolves here too.
    public function Favorite($data = null)
    {
        require_once __DIR__ . '/entity/favorite_entity.php';
        if ($data === null) {
            if ($this->_favorite === null) {
                $this->_favorite = new FavoriteEntity($this, null);
            }
            return $this->_favorite;
        }
        return new FavoriteEntity($this, $data);
    }


    private $_git_automation_state = null;

    // Canonical facade: $client->GitAutomationState()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->git_automation_state()
    // resolves here too.
    public function GitAutomationState($data = null)
    {
        require_once __DIR__ . '/entity/git_automation_state_entity.php';
        if ($data === null) {
            if ($this->_git_automation_state === null) {
                $this->_git_automation_state = new GitAutomationStateEntity($this, null);
            }
            return $this->_git_automation_state;
        }
        return new GitAutomationStateEntity($this, $data);
    }


    private $_git_automation_target_branch = null;

    // Canonical facade: $client->GitAutomationTargetBranch()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->git_automation_target_branch()
    // resolves here too.
    public function GitAutomationTargetBranch($data = null)
    {
        require_once __DIR__ . '/entity/git_automation_target_branch_entity.php';
        if ($data === null) {
            if ($this->_git_automation_target_branch === null) {
                $this->_git_automation_target_branch = new GitAutomationTargetBranchEntity($this, null);
            }
            return $this->_git_automation_target_branch;
        }
        return new GitAutomationTargetBranchEntity($this, $data);
    }


    private $_git_hub_integration_connect_detail = null;

    // Canonical facade: $client->GitHubIntegrationConnectDetail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->git_hub_integration_connect_detail()
    // resolves here too.
    public function GitHubIntegrationConnectDetail($data = null)
    {
        require_once __DIR__ . '/entity/git_hub_integration_connect_detail_entity.php';
        if ($data === null) {
            if ($this->_git_hub_integration_connect_detail === null) {
                $this->_git_hub_integration_connect_detail = new GitHubIntegrationConnectDetailEntity($this, null);
            }
            return $this->_git_hub_integration_connect_detail;
        }
        return new GitHubIntegrationConnectDetailEntity($this, $data);
    }


    private $_initiative = null;

    // Canonical facade: $client->Initiative()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->initiative()
    // resolves here too.
    public function Initiative($data = null)
    {
        require_once __DIR__ . '/entity/initiative_entity.php';
        if ($data === null) {
            if ($this->_initiative === null) {
                $this->_initiative = new InitiativeEntity($this, null);
            }
            return $this->_initiative;
        }
        return new InitiativeEntity($this, $data);
    }


    private $_initiative_label = null;

    // Canonical facade: $client->InitiativeLabel()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->initiative_label()
    // resolves here too.
    public function InitiativeLabel($data = null)
    {
        require_once __DIR__ . '/entity/initiative_label_entity.php';
        if ($data === null) {
            if ($this->_initiative_label === null) {
                $this->_initiative_label = new InitiativeLabelEntity($this, null);
            }
            return $this->_initiative_label;
        }
        return new InitiativeLabelEntity($this, $data);
    }


    private $_initiative_lead_team_change_impact = null;

    // Canonical facade: $client->InitiativeLeadTeamChangeImpact()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->initiative_lead_team_change_impact()
    // resolves here too.
    public function InitiativeLeadTeamChangeImpact($data = null)
    {
        require_once __DIR__ . '/entity/initiative_lead_team_change_impact_entity.php';
        if ($data === null) {
            if ($this->_initiative_lead_team_change_impact === null) {
                $this->_initiative_lead_team_change_impact = new InitiativeLeadTeamChangeImpactEntity($this, null);
            }
            return $this->_initiative_lead_team_change_impact;
        }
        return new InitiativeLeadTeamChangeImpactEntity($this, $data);
    }


    private $_initiative_relation = null;

    // Canonical facade: $client->InitiativeRelation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->initiative_relation()
    // resolves here too.
    public function InitiativeRelation($data = null)
    {
        require_once __DIR__ . '/entity/initiative_relation_entity.php';
        if ($data === null) {
            if ($this->_initiative_relation === null) {
                $this->_initiative_relation = new InitiativeRelationEntity($this, null);
            }
            return $this->_initiative_relation;
        }
        return new InitiativeRelationEntity($this, $data);
    }


    private $_initiative_to_project = null;

    // Canonical facade: $client->InitiativeToProject()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->initiative_to_project()
    // resolves here too.
    public function InitiativeToProject($data = null)
    {
        require_once __DIR__ . '/entity/initiative_to_project_entity.php';
        if ($data === null) {
            if ($this->_initiative_to_project === null) {
                $this->_initiative_to_project = new InitiativeToProjectEntity($this, null);
            }
            return $this->_initiative_to_project;
        }
        return new InitiativeToProjectEntity($this, $data);
    }


    private $_initiative_update = null;

    // Canonical facade: $client->InitiativeUpdate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->initiative_update()
    // resolves here too.
    public function InitiativeUpdate($data = null)
    {
        require_once __DIR__ . '/entity/initiative_update_entity.php';
        if ($data === null) {
            if ($this->_initiative_update === null) {
                $this->_initiative_update = new InitiativeUpdateEntity($this, null);
            }
            return $this->_initiative_update;
        }
        return new InitiativeUpdateEntity($this, $data);
    }


    private $_integration = null;

    // Canonical facade: $client->Integration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->integration()
    // resolves here too.
    public function Integration($data = null)
    {
        require_once __DIR__ . '/entity/integration_entity.php';
        if ($data === null) {
            if ($this->_integration === null) {
                $this->_integration = new IntegrationEntity($this, null);
            }
            return $this->_integration;
        }
        return new IntegrationEntity($this, $data);
    }


    private $_integration_template = null;

    // Canonical facade: $client->IntegrationTemplate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->integration_template()
    // resolves here too.
    public function IntegrationTemplate($data = null)
    {
        require_once __DIR__ . '/entity/integration_template_entity.php';
        if ($data === null) {
            if ($this->_integration_template === null) {
                $this->_integration_template = new IntegrationTemplateEntity($this, null);
            }
            return $this->_integration_template;
        }
        return new IntegrationTemplateEntity($this, $data);
    }


    private $_integrations_setting = null;

    // Canonical facade: $client->IntegrationsSetting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->integrations_setting()
    // resolves here too.
    public function IntegrationsSetting($data = null)
    {
        require_once __DIR__ . '/entity/integrations_setting_entity.php';
        if ($data === null) {
            if ($this->_integrations_setting === null) {
                $this->_integrations_setting = new IntegrationsSettingEntity($this, null);
            }
            return $this->_integrations_setting;
        }
        return new IntegrationsSettingEntity($this, $data);
    }


    private $_issue = null;

    // Canonical facade: $client->Issue()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->issue()
    // resolves here too.
    public function Issue($data = null)
    {
        require_once __DIR__ . '/entity/issue_entity.php';
        if ($data === null) {
            if ($this->_issue === null) {
                $this->_issue = new IssueEntity($this, null);
            }
            return $this->_issue;
        }
        return new IssueEntity($this, $data);
    }


    private $_issue_import = null;

    // Canonical facade: $client->IssueImport()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->issue_import()
    // resolves here too.
    public function IssueImport($data = null)
    {
        require_once __DIR__ . '/entity/issue_import_entity.php';
        if ($data === null) {
            if ($this->_issue_import === null) {
                $this->_issue_import = new IssueImportEntity($this, null);
            }
            return $this->_issue_import;
        }
        return new IssueImportEntity($this, $data);
    }


    private $_issue_label = null;

    // Canonical facade: $client->IssueLabel()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->issue_label()
    // resolves here too.
    public function IssueLabel($data = null)
    {
        require_once __DIR__ . '/entity/issue_label_entity.php';
        if ($data === null) {
            if ($this->_issue_label === null) {
                $this->_issue_label = new IssueLabelEntity($this, null);
            }
            return $this->_issue_label;
        }
        return new IssueLabelEntity($this, $data);
    }


    private $_issue_priority_value = null;

    // Canonical facade: $client->IssuePriorityValue()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->issue_priority_value()
    // resolves here too.
    public function IssuePriorityValue($data = null)
    {
        require_once __DIR__ . '/entity/issue_priority_value_entity.php';
        if ($data === null) {
            if ($this->_issue_priority_value === null) {
                $this->_issue_priority_value = new IssuePriorityValueEntity($this, null);
            }
            return $this->_issue_priority_value;
        }
        return new IssuePriorityValueEntity($this, $data);
    }


    private $_issue_relation = null;

    // Canonical facade: $client->IssueRelation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->issue_relation()
    // resolves here too.
    public function IssueRelation($data = null)
    {
        require_once __DIR__ . '/entity/issue_relation_entity.php';
        if ($data === null) {
            if ($this->_issue_relation === null) {
                $this->_issue_relation = new IssueRelationEntity($this, null);
            }
            return $this->_issue_relation;
        }
        return new IssueRelationEntity($this, $data);
    }


    private $_issue_search_result = null;

    // Canonical facade: $client->IssueSearchResult()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->issue_search_result()
    // resolves here too.
    public function IssueSearchResult($data = null)
    {
        require_once __DIR__ . '/entity/issue_search_result_entity.php';
        if ($data === null) {
            if ($this->_issue_search_result === null) {
                $this->_issue_search_result = new IssueSearchResultEntity($this, null);
            }
            return $this->_issue_search_result;
        }
        return new IssueSearchResultEntity($this, $data);
    }


    private $_issue_to_release = null;

    // Canonical facade: $client->IssueToRelease()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->issue_to_release()
    // resolves here too.
    public function IssueToRelease($data = null)
    {
        require_once __DIR__ . '/entity/issue_to_release_entity.php';
        if ($data === null) {
            if ($this->_issue_to_release === null) {
                $this->_issue_to_release = new IssueToReleaseEntity($this, null);
            }
            return $this->_issue_to_release;
        }
        return new IssueToReleaseEntity($this, $data);
    }


    private $_logout_response = null;

    // Canonical facade: $client->LogoutResponse()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->logout_response()
    // resolves here too.
    public function LogoutResponse($data = null)
    {
        require_once __DIR__ . '/entity/logout_response_entity.php';
        if ($data === null) {
            if ($this->_logout_response === null) {
                $this->_logout_response = new LogoutResponseEntity($this, null);
            }
            return $this->_logout_response;
        }
        return new LogoutResponseEntity($this, $data);
    }


    private $_notification = null;

    // Canonical facade: $client->Notification()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->notification()
    // resolves here too.
    public function Notification($data = null)
    {
        require_once __DIR__ . '/entity/notification_entity.php';
        if ($data === null) {
            if ($this->_notification === null) {
                $this->_notification = new NotificationEntity($this, null);
            }
            return $this->_notification;
        }
        return new NotificationEntity($this, $data);
    }


    private $_notification_subscription = null;

    // Canonical facade: $client->NotificationSubscription()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->notification_subscription()
    // resolves here too.
    public function NotificationSubscription($data = null)
    {
        require_once __DIR__ . '/entity/notification_subscription_entity.php';
        if ($data === null) {
            if ($this->_notification_subscription === null) {
                $this->_notification_subscription = new NotificationSubscriptionEntity($this, null);
            }
            return $this->_notification_subscription;
        }
        return new NotificationSubscriptionEntity($this, $data);
    }


    private $_o_auth_application = null;

    // Canonical facade: $client->OAuthApplication()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->o_auth_application()
    // resolves here too.
    public function OAuthApplication($data = null)
    {
        require_once __DIR__ . '/entity/o_auth_application_entity.php';
        if ($data === null) {
            if ($this->_o_auth_application === null) {
                $this->_o_auth_application = new OAuthApplicationEntity($this, null);
            }
            return $this->_o_auth_application;
        }
        return new OAuthApplicationEntity($this, $data);
    }


    private $_organization = null;

    // Canonical facade: $client->Organization()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization()
    // resolves here too.
    public function Organization($data = null)
    {
        require_once __DIR__ . '/entity/organization_entity.php';
        if ($data === null) {
            if ($this->_organization === null) {
                $this->_organization = new OrganizationEntity($this, null);
            }
            return $this->_organization;
        }
        return new OrganizationEntity($this, $data);
    }


    private $_organization_domain = null;

    // Canonical facade: $client->OrganizationDomain()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization_domain()
    // resolves here too.
    public function OrganizationDomain($data = null)
    {
        require_once __DIR__ . '/entity/organization_domain_entity.php';
        if ($data === null) {
            if ($this->_organization_domain === null) {
                $this->_organization_domain = new OrganizationDomainEntity($this, null);
            }
            return $this->_organization_domain;
        }
        return new OrganizationDomainEntity($this, $data);
    }


    private $_organization_invite = null;

    // Canonical facade: $client->OrganizationInvite()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization_invite()
    // resolves here too.
    public function OrganizationInvite($data = null)
    {
        require_once __DIR__ . '/entity/organization_invite_entity.php';
        if ($data === null) {
            if ($this->_organization_invite === null) {
                $this->_organization_invite = new OrganizationInviteEntity($this, null);
            }
            return $this->_organization_invite;
        }
        return new OrganizationInviteEntity($this, $data);
    }


    private $_organization_meta = null;

    // Canonical facade: $client->OrganizationMeta()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization_meta()
    // resolves here too.
    public function OrganizationMeta($data = null)
    {
        require_once __DIR__ . '/entity/organization_meta_entity.php';
        if ($data === null) {
            if ($this->_organization_meta === null) {
                $this->_organization_meta = new OrganizationMetaEntity($this, null);
            }
            return $this->_organization_meta;
        }
        return new OrganizationMetaEntity($this, $data);
    }


    private $_passkey_login_start_response = null;

    // Canonical facade: $client->PasskeyLoginStartResponse()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->passkey_login_start_response()
    // resolves here too.
    public function PasskeyLoginStartResponse($data = null)
    {
        require_once __DIR__ . '/entity/passkey_login_start_response_entity.php';
        if ($data === null) {
            if ($this->_passkey_login_start_response === null) {
                $this->_passkey_login_start_response = new PasskeyLoginStartResponseEntity($this, null);
            }
            return $this->_passkey_login_start_response;
        }
        return new PasskeyLoginStartResponseEntity($this, $data);
    }


    private $_project = null;

    // Canonical facade: $client->Project()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project()
    // resolves here too.
    public function Project($data = null)
    {
        require_once __DIR__ . '/entity/project_entity.php';
        if ($data === null) {
            if ($this->_project === null) {
                $this->_project = new ProjectEntity($this, null);
            }
            return $this->_project;
        }
        return new ProjectEntity($this, $data);
    }


    private $_project_label = null;

    // Canonical facade: $client->ProjectLabel()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project_label()
    // resolves here too.
    public function ProjectLabel($data = null)
    {
        require_once __DIR__ . '/entity/project_label_entity.php';
        if ($data === null) {
            if ($this->_project_label === null) {
                $this->_project_label = new ProjectLabelEntity($this, null);
            }
            return $this->_project_label;
        }
        return new ProjectLabelEntity($this, $data);
    }


    private $_project_milestone = null;

    // Canonical facade: $client->ProjectMilestone()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project_milestone()
    // resolves here too.
    public function ProjectMilestone($data = null)
    {
        require_once __DIR__ . '/entity/project_milestone_entity.php';
        if ($data === null) {
            if ($this->_project_milestone === null) {
                $this->_project_milestone = new ProjectMilestoneEntity($this, null);
            }
            return $this->_project_milestone;
        }
        return new ProjectMilestoneEntity($this, $data);
    }


    private $_project_milestone_move_project_team = null;

    // Canonical facade: $client->ProjectMilestoneMoveProjectTeam()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project_milestone_move_project_team()
    // resolves here too.
    public function ProjectMilestoneMoveProjectTeam($data = null)
    {
        require_once __DIR__ . '/entity/project_milestone_move_project_team_entity.php';
        if ($data === null) {
            if ($this->_project_milestone_move_project_team === null) {
                $this->_project_milestone_move_project_team = new ProjectMilestoneMoveProjectTeamEntity($this, null);
            }
            return $this->_project_milestone_move_project_team;
        }
        return new ProjectMilestoneMoveProjectTeamEntity($this, $data);
    }


    private $_project_relation = null;

    // Canonical facade: $client->ProjectRelation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project_relation()
    // resolves here too.
    public function ProjectRelation($data = null)
    {
        require_once __DIR__ . '/entity/project_relation_entity.php';
        if ($data === null) {
            if ($this->_project_relation === null) {
                $this->_project_relation = new ProjectRelationEntity($this, null);
            }
            return $this->_project_relation;
        }
        return new ProjectRelationEntity($this, $data);
    }


    private $_project_search_result = null;

    // Canonical facade: $client->ProjectSearchResult()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project_search_result()
    // resolves here too.
    public function ProjectSearchResult($data = null)
    {
        require_once __DIR__ . '/entity/project_search_result_entity.php';
        if ($data === null) {
            if ($this->_project_search_result === null) {
                $this->_project_search_result = new ProjectSearchResultEntity($this, null);
            }
            return $this->_project_search_result;
        }
        return new ProjectSearchResultEntity($this, $data);
    }


    private $_project_status = null;

    // Canonical facade: $client->ProjectStatus()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project_status()
    // resolves here too.
    public function ProjectStatus($data = null)
    {
        require_once __DIR__ . '/entity/project_status_entity.php';
        if ($data === null) {
            if ($this->_project_status === null) {
                $this->_project_status = new ProjectStatusEntity($this, null);
            }
            return $this->_project_status;
        }
        return new ProjectStatusEntity($this, $data);
    }


    private $_project_update = null;

    // Canonical facade: $client->ProjectUpdate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project_update()
    // resolves here too.
    public function ProjectUpdate($data = null)
    {
        require_once __DIR__ . '/entity/project_update_entity.php';
        if ($data === null) {
            if ($this->_project_update === null) {
                $this->_project_update = new ProjectUpdateEntity($this, null);
            }
            return $this->_project_update;
        }
        return new ProjectUpdateEntity($this, $data);
    }


    private $_push_subscription = null;

    // Canonical facade: $client->PushSubscription()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->push_subscription()
    // resolves here too.
    public function PushSubscription($data = null)
    {
        require_once __DIR__ . '/entity/push_subscription_entity.php';
        if ($data === null) {
            if ($this->_push_subscription === null) {
                $this->_push_subscription = new PushSubscriptionEntity($this, null);
            }
            return $this->_push_subscription;
        }
        return new PushSubscriptionEntity($this, $data);
    }


    private $_reaction = null;

    // Canonical facade: $client->Reaction()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->reaction()
    // resolves here too.
    public function Reaction($data = null)
    {
        require_once __DIR__ . '/entity/reaction_entity.php';
        if ($data === null) {
            if ($this->_reaction === null) {
                $this->_reaction = new ReactionEntity($this, null);
            }
            return $this->_reaction;
        }
        return new ReactionEntity($this, $data);
    }


    private $_release = null;

    // Canonical facade: $client->Release()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->release()
    // resolves here too.
    public function Release($data = null)
    {
        require_once __DIR__ . '/entity/release_entity.php';
        if ($data === null) {
            if ($this->_release === null) {
                $this->_release = new ReleaseEntity($this, null);
            }
            return $this->_release;
        }
        return new ReleaseEntity($this, $data);
    }


    private $_release_note = null;

    // Canonical facade: $client->ReleaseNote()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->release_note()
    // resolves here too.
    public function ReleaseNote($data = null)
    {
        require_once __DIR__ . '/entity/release_note_entity.php';
        if ($data === null) {
            if ($this->_release_note === null) {
                $this->_release_note = new ReleaseNoteEntity($this, null);
            }
            return $this->_release_note;
        }
        return new ReleaseNoteEntity($this, $data);
    }


    private $_release_pipeline = null;

    // Canonical facade: $client->ReleasePipeline()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->release_pipeline()
    // resolves here too.
    public function ReleasePipeline($data = null)
    {
        require_once __DIR__ . '/entity/release_pipeline_entity.php';
        if ($data === null) {
            if ($this->_release_pipeline === null) {
                $this->_release_pipeline = new ReleasePipelineEntity($this, null);
            }
            return $this->_release_pipeline;
        }
        return new ReleasePipelineEntity($this, $data);
    }


    private $_release_stage = null;

    // Canonical facade: $client->ReleaseStage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->release_stage()
    // resolves here too.
    public function ReleaseStage($data = null)
    {
        require_once __DIR__ . '/entity/release_stage_entity.php';
        if ($data === null) {
            if ($this->_release_stage === null) {
                $this->_release_stage = new ReleaseStageEntity($this, null);
            }
            return $this->_release_stage;
        }
        return new ReleaseStageEntity($this, $data);
    }


    private $_roadmap = null;

    // Canonical facade: $client->Roadmap()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->roadmap()
    // resolves here too.
    public function Roadmap($data = null)
    {
        require_once __DIR__ . '/entity/roadmap_entity.php';
        if ($data === null) {
            if ($this->_roadmap === null) {
                $this->_roadmap = new RoadmapEntity($this, null);
            }
            return $this->_roadmap;
        }
        return new RoadmapEntity($this, $data);
    }


    private $_roadmap_to_project = null;

    // Canonical facade: $client->RoadmapToProject()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->roadmap_to_project()
    // resolves here too.
    public function RoadmapToProject($data = null)
    {
        require_once __DIR__ . '/entity/roadmap_to_project_entity.php';
        if ($data === null) {
            if ($this->_roadmap_to_project === null) {
                $this->_roadmap_to_project = new RoadmapToProjectEntity($this, null);
            }
            return $this->_roadmap_to_project;
        }
        return new RoadmapToProjectEntity($this, $data);
    }


    private $_sla_configuration = null;

    // Canonical facade: $client->SlaConfiguration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->sla_configuration()
    // resolves here too.
    public function SlaConfiguration($data = null)
    {
        require_once __DIR__ . '/entity/sla_configuration_entity.php';
        if ($data === null) {
            if ($this->_sla_configuration === null) {
                $this->_sla_configuration = new SlaConfigurationEntity($this, null);
            }
            return $this->_sla_configuration;
        }
        return new SlaConfigurationEntity($this, $data);
    }


    private $_sso_url_from_email_response = null;

    // Canonical facade: $client->SsoUrlFromEmailResponse()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->sso_url_from_email_response()
    // resolves here too.
    public function SsoUrlFromEmailResponse($data = null)
    {
        require_once __DIR__ . '/entity/sso_url_from_email_response_entity.php';
        if ($data === null) {
            if ($this->_sso_url_from_email_response === null) {
                $this->_sso_url_from_email_response = new SsoUrlFromEmailResponseEntity($this, null);
            }
            return $this->_sso_url_from_email_response;
        }
        return new SsoUrlFromEmailResponseEntity($this, $data);
    }


    private $_team = null;

    // Canonical facade: $client->Team()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->team()
    // resolves here too.
    public function Team($data = null)
    {
        require_once __DIR__ . '/entity/team_entity.php';
        if ($data === null) {
            if ($this->_team === null) {
                $this->_team = new TeamEntity($this, null);
            }
            return $this->_team;
        }
        return new TeamEntity($this, $data);
    }


    private $_team_membership = null;

    // Canonical facade: $client->TeamMembership()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->team_membership()
    // resolves here too.
    public function TeamMembership($data = null)
    {
        require_once __DIR__ . '/entity/team_membership_entity.php';
        if ($data === null) {
            if ($this->_team_membership === null) {
                $this->_team_membership = new TeamMembershipEntity($this, null);
            }
            return $this->_team_membership;
        }
        return new TeamMembershipEntity($this, $data);
    }


    private $_template = null;

    // Canonical facade: $client->Template()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->template()
    // resolves here too.
    public function Template($data = null)
    {
        require_once __DIR__ . '/entity/template_entity.php';
        if ($data === null) {
            if ($this->_template === null) {
                $this->_template = new TemplateEntity($this, null);
            }
            return $this->_template;
        }
        return new TemplateEntity($this, $data);
    }


    private $_time_schedule = null;

    // Canonical facade: $client->TimeSchedule()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->time_schedule()
    // resolves here too.
    public function TimeSchedule($data = null)
    {
        require_once __DIR__ . '/entity/time_schedule_entity.php';
        if ($data === null) {
            if ($this->_time_schedule === null) {
                $this->_time_schedule = new TimeScheduleEntity($this, null);
            }
            return $this->_time_schedule;
        }
        return new TimeScheduleEntity($this, $data);
    }


    private $_triage_responsibility = null;

    // Canonical facade: $client->TriageResponsibility()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->triage_responsibility()
    // resolves here too.
    public function TriageResponsibility($data = null)
    {
        require_once __DIR__ . '/entity/triage_responsibility_entity.php';
        if ($data === null) {
            if ($this->_triage_responsibility === null) {
                $this->_triage_responsibility = new TriageResponsibilityEntity($this, null);
            }
            return $this->_triage_responsibility;
        }
        return new TriageResponsibilityEntity($this, $data);
    }


    private $_upload_file = null;

    // Canonical facade: $client->UploadFile()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->upload_file()
    // resolves here too.
    public function UploadFile($data = null)
    {
        require_once __DIR__ . '/entity/upload_file_entity.php';
        if ($data === null) {
            if ($this->_upload_file === null) {
                $this->_upload_file = new UploadFileEntity($this, null);
            }
            return $this->_upload_file;
        }
        return new UploadFileEntity($this, $data);
    }


    private $_usage_alert = null;

    // Canonical facade: $client->UsageAlert()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->usage_alert()
    // resolves here too.
    public function UsageAlert($data = null)
    {
        require_once __DIR__ . '/entity/usage_alert_entity.php';
        if ($data === null) {
            if ($this->_usage_alert === null) {
                $this->_usage_alert = new UsageAlertEntity($this, null);
            }
            return $this->_usage_alert;
        }
        return new UsageAlertEntity($this, $data);
    }


    private $_user = null;

    // Canonical facade: $client->User()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user()
    // resolves here too.
    public function User($data = null)
    {
        require_once __DIR__ . '/entity/user_entity.php';
        if ($data === null) {
            if ($this->_user === null) {
                $this->_user = new UserEntity($this, null);
            }
            return $this->_user;
        }
        return new UserEntity($this, $data);
    }


    private $_user_setting = null;

    // Canonical facade: $client->UserSetting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user_setting()
    // resolves here too.
    public function UserSetting($data = null)
    {
        require_once __DIR__ . '/entity/user_setting_entity.php';
        if ($data === null) {
            if ($this->_user_setting === null) {
                $this->_user_setting = new UserSettingEntity($this, null);
            }
            return $this->_user_setting;
        }
        return new UserSettingEntity($this, $data);
    }


    private $_view_preference = null;

    // Canonical facade: $client->ViewPreference()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->view_preference()
    // resolves here too.
    public function ViewPreference($data = null)
    {
        require_once __DIR__ . '/entity/view_preference_entity.php';
        if ($data === null) {
            if ($this->_view_preference === null) {
                $this->_view_preference = new ViewPreferenceEntity($this, null);
            }
            return $this->_view_preference;
        }
        return new ViewPreferenceEntity($this, $data);
    }


    private $_webhook = null;

    // Canonical facade: $client->Webhook()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->webhook()
    // resolves here too.
    public function Webhook($data = null)
    {
        require_once __DIR__ . '/entity/webhook_entity.php';
        if ($data === null) {
            if ($this->_webhook === null) {
                $this->_webhook = new WebhookEntity($this, null);
            }
            return $this->_webhook;
        }
        return new WebhookEntity($this, $data);
    }


    private $_webhook_failure_event = null;

    // Canonical facade: $client->WebhookFailureEvent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->webhook_failure_event()
    // resolves here too.
    public function WebhookFailureEvent($data = null)
    {
        require_once __DIR__ . '/entity/webhook_failure_event_entity.php';
        if ($data === null) {
            if ($this->_webhook_failure_event === null) {
                $this->_webhook_failure_event = new WebhookFailureEventEntity($this, null);
            }
            return $this->_webhook_failure_event;
        }
        return new WebhookFailureEventEntity($this, $data);
    }


    private $_workflow_state = null;

    // Canonical facade: $client->WorkflowState()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workflow_state()
    // resolves here too.
    public function WorkflowState($data = null)
    {
        require_once __DIR__ . '/entity/workflow_state_entity.php';
        if ($data === null) {
            if ($this->_workflow_state === null) {
                $this->_workflow_state = new WorkflowStateEntity($this, null);
            }
            return $this->_workflow_state;
        }
        return new WorkflowStateEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new LinearSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
