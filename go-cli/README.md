# linear-cli

boru-driven command-line client **and** interactive REPL for the Linear
SDK. Each command line is parsed as a single [boru](https://github.com/boru-lang/boru)
expression and evaluated against the live API; run it with no arguments to drop
into a REPL. Built on `github.com/boru-lang/boru/eng/go` and the sibling Go SDK
at `../go`.

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/linear-cli)
make build

# 2. See usage (words, entities, env vars)
./linear-cli --help

# 3. Provide credentials once, via the environment
export LINEAR_APIKEY=sk_live_xxx

# 4. Each command line is ONE boru expression, run against the API:
./linear-cli list access_key_release
./linear-cli load 1 access_key_release            # {id:1} shorthand
./linear-cli load '{id:1}' access_key_release       # explicit match map
./linear-cli list access_key_release_pipeline

# 5. Override the API base URL for a single call
LINEAR_BASE=https://api.example.com ./linear-cli list access_key_release

# 6. No arguments -> interactive REPL
./linear-cli
linear> list access_key_release
linear> /quit
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: your first query in under a minute

1. **Build the binary.** From this `go-cli/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/linear-cli
   ```

2. **Set your API key** (read from the environment):

   ```sh
   export LINEAR_APIKEY=sk_live_xxx
   ```

3. **Run a query.** Evaluate an boru expression against the API (or run with no
   arguments to open the REPL):

   ```sh
   ./dist/*/linear-cli list access_key_release
   ```

4. **Go interactive.** Run the binary with no arguments to open the REPL, then
   type `/help` for the word and entity lists and `/quit` to leave.

That is the whole loop: *build → set key → evaluate boru expressions*.

## How-to guides

### List the records of an entity

```sh
./linear-cli list access_key_release
```

`list <entity>` returns the first page of records. `<entity>` is a bareword —
it is auto-quoted as an boru atom, so no quotes are needed.

### Load a single record

```sh
./linear-cli load 1 access_key_release          # scalar shorthand for {id:1}
./linear-cli load '{id:1}' access_key_release     # explicit match map
```

The query is either a **scalar** (`1`, treated as `{id:1}`) or a **match map**
(`{id:1}`, `{slug:"acme"}`). Quote the map so your shell passes it through intact.

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export LINEAR_APIKEY=sk_live_xxx            # API key
export LINEAR_BASE=https://api.example.com  # optional: override the API base URL
./linear-cli list access_key_release
```

Both are injectable by a secrets vault, so the key never has to be typed inline.

### Explore interactively with the REPL

Run with no arguments to open a REPL (prompt `linear>`). Each line is
evaluated as its own boru expression:

```text
$ ./linear-cli
linear> list access_key_release
linear> /help
linear> /quit
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

### Discover the available entities

`/help` in the REPL prints the full entity list, or see [Entities](#entities)
below — this SDK exposes 87 entities.

## Reference

### Words

The CLI registers these boru words, each bound to the SDK:

| Word     | Signatures                                    | Returns                        |
|----------|-----------------------------------------------|--------------------------------|
| `list`   | `list <entity>` · `list <query> <entity>`     | First page of records          |
| `load`   | `load <entity>` · `load <query> <entity>`     | A single record                |
| `update` | `update <query> <entity>`                     | Update a record, return it     |

- `<entity>` is a bareword, auto-quoted as an boru atom (e.g. `access_key_release`).
- `<query>` is either a **Map** (`{id:1}`) or a **Scalar** (`1`, treated as
  `{id:1}`). A scalar is always wrapped as `{id:<value>}`.

### Environment variables

| Variable | Purpose |
|----------|---------|
| `LINEAR_APIKEY` | API key sent with every request. |
| `LINEAR_BASE` | Optional override of the API base URL. |

Unset variables fall back to the SDK's built-in defaults.

### CLI flags

- `--help` / `-h` — print usage (words, entities, env vars) and exit.

### REPL commands

Meta-commands use the `/` prefix (everything else on a line is evaluated as boru):

- `/quit` / `/q` / `/exit` — exit the REPL
- `/help` / `/h` / `/?`     — show the word list, entity list and meta commands

### Exit codes

| Code | Meaning |
|------|---------|
| `0` | Success (also the normal REPL exit). |
| `1` | Parse error, word-registration error, or an API/evaluation error. |

### Build targets

| Target | Result |
|--------|--------|
| `make build` | Native binary at `dist/<os>-<arch>/linear-cli`. |
| `make build-all` | linux/darwin/windows x amd64/arm64, each under its own `dist/<os>-<arch>/`. |
| `make clean` | Remove `dist/` and any stray binaries. |

### Entities

The 87 entities this SDK exposes (any is valid as `<entity>`):

access_key_release access_key_release_pipeline agent_activity agent_session agent_skill application attachment audit_entry audit_entry_type auth_resolver_response authentication_session_response comment create_or_join_organization_response custom_view customer customer_need customer_status customer_tier cycle diff document document_search_result email_intake_address email_user_account_auth_challenge_response emoji entity_external_link external_user favorite git_automation_state git_automation_target_branch git_hub_integration_connect_detail initiative initiative_label initiative_lead_team_change_impact initiative_relation initiative_to_project initiative_update integration integration_template integrations_setting issue issue_import issue_label issue_priority_value issue_relation issue_search_result issue_to_release logout_response notification notification_subscription o_auth_application organization organization_domain organization_invite organization_meta passkey_login_start_response project project_label project_milestone project_milestone_move_project_team project_relation project_search_result project_status project_update push_subscription reaction release release_note release_pipeline release_stage roadmap roadmap_to_project sla_configuration sso_url_from_email_response team team_membership template time_schedule triage_responsibility upload_file usage_alert user user_setting view_preference webhook webhook_failure_event workflow_state

## Explanation

### Why boru?

The whole command line is one [boru](https://github.com/boru-lang/boru) expression,
not a fixed `verb --flag` grammar. That means the same binary works one-shot
(`./linear-cli <expr>`) and interactively (the REPL), and expressions compose the
same way in both. `list` / `load` / `update` are ordinary boru *words* bound to
the SDK — adding SDK operations is adding words, not re-parsing flags.

### How it is wired

`main.go` builds the SDK client (configured from the environment), creates an
boru registry, and `words.go` registers `list` / `load` / `update` as native
words that dispatch on the entity atom and call the sibling Go SDK at `../go`.
Results are unwrapped from their `Entity` wrappers to plain data before being
printed.

### Output format

Each result value is printed as its boru string form (a JSON-like rendering of
the record or list of records). One-shot mode prints to stdout; errors go to
stderr with a non-zero exit code.

## Generated by

sdkgen `go-cli` target. See the target source under `.sdk/src/cmp/go-cli/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-cli/`.
