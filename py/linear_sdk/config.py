# Linear SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Linear",
            "slug": "linear",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "debug": {
        "options": {
          "active": False,
          "max": 100,
          "redact": [
            "authorization",
            "cookie",
            "set-cookie",
            "api-key",
            "apikey",
            "x-api-key",
            "idempotency-key",
          ],
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "onEntry": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "idempotency": {
        "options": {
          "active": False,
          "header": "Idempotency-Key",
          "methods": [
            "POST",
            "PUT",
            "PATCH",
            "DELETE",
          ],
          "ops": [
            "create",
            "update",
            "remove",
          ],
        },
        "optspec": {
          "keygen": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "metrics": {
        "options": {
          "active": False,
        },
        "optspec": {
          "now": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "paging": {
        "options": {
          "active": False,
          "afterVar": "after",
          "cursorParam": "cursor",
          "firstVar": "first",
          "limitParam": "limit",
          "pageParam": "page",
          "startPage": 1,
        },
        "optspec": {
          "limit": "`$NUMBER`",
          "ops": "`$LIST`",
        },
        "strict": False,
        "transport": "none",
      },
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://api.linear.app/graphql",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "issue": {},
                "team": {},
            },
        },
        "entity": {
      "issue": {
        "fields": [
          {
            "name": "archivedAt",
            "type": "`$ANY`",
          },
          {
            "name": "assignee",
            "type": "`$OBJECT`",
          },
          {
            "name": "branchName",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "canceledAt",
            "type": "`$ANY`",
          },
          {
            "name": "completedAt",
            "type": "`$ANY`",
          },
          {
            "name": "createdAt",
            "req": True,
            "type": "`$ANY`",
          },
          {
            "name": "creator",
            "type": "`$OBJECT`",
          },
          {
            "name": "description",
            "type": "`$STRING`",
          },
          {
            "name": "dueDate",
            "type": "`$ANY`",
          },
          {
            "name": "estimate",
            "type": "`$NUMBER`",
          },
          {
            "name": "id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "identifier",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "number",
            "req": True,
            "type": "`$NUMBER`",
          },
          {
            "name": "priority",
            "req": True,
            "type": "`$NUMBER`",
          },
          {
            "name": "state",
            "type": "`$OBJECT`",
          },
          {
            "name": "team",
            "type": "`$OBJECT`",
          },
          {
            "name": "title",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "updatedAt",
            "req": True,
            "type": "`$ANY`",
          },
          {
            "name": "url",
            "req": True,
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "issue",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "graphql": {
                  "doc": "mutation IssueCreate($input: IssueCreateInput!) { issueCreate(input: $input) { issue { ...IssueFields } success } } fragment IssueFields on Issue { archivedAt assignee { id } branchName canceledAt completedAt createdAt creator { id } description dueDate estimate id identifier number priority state { id } team { id } title updatedAt url }",
                  "field": "issueCreate",
                  "optype": "mutation",
                  "vars": [
                    {
                      "from": "",
                      "gqltype": "IssueCreateInput!",
                      "name": "input",
                    },
                  ],
                },
                "kind": "graphql",
                "method": "POST",
                "orig": "issueCreate",
                "segments": [],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data.issueCreate.issue`",
                },
                "parts": [],
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "after",
                      "orig": "after",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "param",
                      "name": "first",
                      "orig": "first",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "graphql": {
                  "doc": "query IssueList($first: Int, $after: String) { issues(first: $first, after: $after) { edges { node { ...IssueFields } } pageInfo { endCursor hasNextPage } } } fragment IssueFields on Issue { archivedAt assignee { id } branchName canceledAt completedAt createdAt creator { id } description dueDate estimate id identifier number priority state { id } team { id } title updatedAt url }",
                  "field": "issues",
                  "optype": "query",
                  "page": {
                    "cursor": "pageInfo.endCursor",
                    "more": "pageInfo.hasNextPage",
                    "nodes": "edges",
                    "style": "relay",
                  },
                  "vars": [
                    {
                      "from": "first",
                      "gqltype": "Int",
                      "name": "first",
                    },
                    {
                      "from": "after",
                      "gqltype": "String",
                      "name": "after",
                    },
                  ],
                },
                "kind": "graphql",
                "method": "POST",
                "orig": "issues",
                "segments": [],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data.issues.edges`",
                },
                "parts": [],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "graphql": {
                  "doc": "query IssueLoad($id: String!) { issue(id: $id) { ...IssueFields } } fragment IssueFields on Issue { archivedAt assignee { id } branchName canceledAt completedAt createdAt creator { id } description dueDate estimate id identifier number priority state { id } team { id } title updatedAt url }",
                  "field": "issue",
                  "optype": "query",
                  "vars": [
                    {
                      "from": "id",
                      "gqltype": "String!",
                      "name": "id",
                    },
                  ],
                },
                "kind": "graphql",
                "method": "POST",
                "orig": "issue",
                "segments": [],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data.issue`",
                },
                "parts": [],
              },
            ],
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "graphql": {
                  "doc": "mutation IssueUpdate($id: String!, $input: IssueUpdateInput!) { issueUpdate(id: $id, input: $input) { issue { ...IssueFields } success } } fragment IssueFields on Issue { archivedAt assignee { id } branchName canceledAt completedAt createdAt creator { id } description dueDate estimate id identifier number priority state { id } team { id } title updatedAt url }",
                  "field": "issueUpdate",
                  "optype": "mutation",
                  "vars": [
                    {
                      "from": "id",
                      "gqltype": "String!",
                      "name": "id",
                    },
                    {
                      "from": "",
                      "gqltype": "IssueUpdateInput!",
                      "name": "input",
                    },
                  ],
                },
                "kind": "graphql",
                "method": "POST",
                "orig": "issueUpdate",
                "segments": [],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data.issueUpdate.issue`",
                },
                "parts": [],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "team": {
        "fields": [
          {
            "name": "description",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "key",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "team",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "after",
                      "orig": "after",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "param",
                      "name": "first",
                      "orig": "first",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "graphql": {
                  "doc": "query TeamList($first: Int, $after: String) { teams(first: $first, after: $after) { ...TeamFields } } fragment TeamFields on Team { description id key name }",
                  "field": "teams",
                  "optype": "query",
                  "vars": [
                    {
                      "from": "first",
                      "gqltype": "Int",
                      "name": "first",
                    },
                    {
                      "from": "after",
                      "gqltype": "String",
                      "name": "after",
                    },
                  ],
                },
                "kind": "graphql",
                "method": "POST",
                "orig": "teams",
                "segments": [],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data.teams`",
                },
                "parts": [],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "graphql": {
                  "doc": "query TeamLoad($id: String!) { team(id: $id) { ...TeamFields } } fragment TeamFields on Team { description id key name }",
                  "field": "team",
                  "optype": "query",
                  "vars": [
                    {
                      "from": "id",
                      "gqltype": "String!",
                      "name": "id",
                    },
                  ],
                },
                "kind": "graphql",
                "method": "POST",
                "orig": "team",
                "segments": [],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data.team`",
                },
                "parts": [],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
