package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Linear",
			"slug": "linear",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"debug": map[string]any{
				"options": map[string]any{
					"active": false,
					"max": 100,
					"redact": []any{
						"authorization",
						"cookie",
						"set-cookie",
						"api-key",
						"apikey",
						"x-api-key",
						"idempotency-key",
					},
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"onEntry": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"idempotency": map[string]any{
				"options": map[string]any{
					"active": false,
					"header": "Idempotency-Key",
					"methods": []any{
						"POST",
						"PUT",
						"PATCH",
						"DELETE",
					},
					"ops": []any{
						"create",
						"update",
						"remove",
					},
				},
				"optspec": map[string]any{
					"keygen": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"metrics": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"paging": map[string]any{
				"options": map[string]any{
					"active": false,
					"afterVar": "after",
					"cursorParam": "cursor",
					"firstVar": "first",
					"limitParam": "limit",
					"pageParam": "page",
					"startPage": 1,
				},
				"optspec": map[string]any{
					"limit": "`$NUMBER`",
					"ops": "`$LIST`",
				},
				"strict": false,
				"transport": "none",
			},
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://api.linear.app/graphql",
			"auth": map[string]any{
				"prefix": "",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"issue": map[string]any{},
				"team": map[string]any{},
			},
		},
		"entity": map[string]any{
			"issue": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archivedAt",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "assignee",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "branchName",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "canceledAt",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "completedAt",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "createdAt",
						"req": true,
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "creator",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "dueDate",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "estimate",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "identifier",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "number",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "priority",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "state",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "team",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "title",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updatedAt",
						"req": true,
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "url",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "issue",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"graphql": map[string]any{
									"doc": "mutation IssueCreate($input: IssueCreateInput!) { issueCreate(input: $input) { issue { ...IssueFields } success } } fragment IssueFields on Issue { archivedAt assignee { id } branchName canceledAt completedAt createdAt creator { id } description dueDate estimate id identifier number priority state { id } team { id } title updatedAt url }",
									"field": "issueCreate",
									"optype": "mutation",
									"vars": []any{
										map[string]any{
											"from": "",
											"gqltype": "IssueCreateInput!",
											"name": "input",
										},
									},
								},
								"kind": "graphql",
								"method": "POST",
								"orig": "issueCreate",
								"segments": []any{},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data.issueCreate.issue`",
								},
								"parts": []any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "first",
											"orig": "first",
											"type": "`$INTEGER`",
										},
									},
								},
								"graphql": map[string]any{
									"doc": "query IssueList($first: Int, $after: String) { issues(first: $first, after: $after) { edges { node { ...IssueFields } } pageInfo { endCursor hasNextPage } } } fragment IssueFields on Issue { archivedAt assignee { id } branchName canceledAt completedAt createdAt creator { id } description dueDate estimate id identifier number priority state { id } team { id } title updatedAt url }",
									"field": "issues",
									"optype": "query",
									"page": map[string]any{
										"cursor": "pageInfo.endCursor",
										"more": "pageInfo.hasNextPage",
										"nodes": "edges",
										"style": "relay",
									},
									"vars": []any{
										map[string]any{
											"from": "first",
											"gqltype": "Int",
											"name": "first",
										},
										map[string]any{
											"from": "after",
											"gqltype": "String",
											"name": "after",
										},
									},
								},
								"kind": "graphql",
								"method": "POST",
								"orig": "issues",
								"segments": []any{},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data.issues.edges`",
								},
								"parts": []any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"graphql": map[string]any{
									"doc": "query IssueLoad($id: String!) { issue(id: $id) { ...IssueFields } } fragment IssueFields on Issue { archivedAt assignee { id } branchName canceledAt completedAt createdAt creator { id } description dueDate estimate id identifier number priority state { id } team { id } title updatedAt url }",
									"field": "issue",
									"optype": "query",
									"vars": []any{
										map[string]any{
											"from": "id",
											"gqltype": "String!",
											"name": "id",
										},
									},
								},
								"kind": "graphql",
								"method": "POST",
								"orig": "issue",
								"segments": []any{},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data.issue`",
								},
								"parts": []any{},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"graphql": map[string]any{
									"doc": "mutation IssueUpdate($id: String!, $input: IssueUpdateInput!) { issueUpdate(id: $id, input: $input) { issue { ...IssueFields } success } } fragment IssueFields on Issue { archivedAt assignee { id } branchName canceledAt completedAt createdAt creator { id } description dueDate estimate id identifier number priority state { id } team { id } title updatedAt url }",
									"field": "issueUpdate",
									"optype": "mutation",
									"vars": []any{
										map[string]any{
											"from": "id",
											"gqltype": "String!",
											"name": "id",
										},
										map[string]any{
											"from": "",
											"gqltype": "IssueUpdateInput!",
											"name": "input",
										},
									},
								},
								"kind": "graphql",
								"method": "POST",
								"orig": "issueUpdate",
								"segments": []any{},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data.issueUpdate.issue`",
								},
								"parts": []any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"team": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "key",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "team",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "first",
											"orig": "first",
											"type": "`$INTEGER`",
										},
									},
								},
								"graphql": map[string]any{
									"doc": "query TeamList($first: Int, $after: String) { teams(first: $first, after: $after) { ...TeamFields } } fragment TeamFields on Team { description id key name }",
									"field": "teams",
									"optype": "query",
									"vars": []any{
										map[string]any{
											"from": "first",
											"gqltype": "Int",
											"name": "first",
										},
										map[string]any{
											"from": "after",
											"gqltype": "String",
											"name": "after",
										},
									},
								},
								"kind": "graphql",
								"method": "POST",
								"orig": "teams",
								"segments": []any{},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data.teams`",
								},
								"parts": []any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"graphql": map[string]any{
									"doc": "query TeamLoad($id: String!) { team(id: $id) { ...TeamFields } } fragment TeamFields on Team { description id key name }",
									"field": "team",
									"optype": "query",
									"vars": []any{
										map[string]any{
											"from": "id",
											"gqltype": "String!",
											"name": "id",
										},
									},
								},
								"kind": "graphql",
								"method": "POST",
								"orig": "team",
								"segments": []any{},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data.team`",
								},
								"parts": []any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "debug":
		if NewDebugFeatureFunc != nil {
			return NewDebugFeatureFunc()
		}
	case "idempotency":
		if NewIdempotencyFeatureFunc != nil {
			return NewIdempotencyFeatureFunc()
		}
	case "metrics":
		if NewMetricsFeatureFunc != nil {
			return NewMetricsFeatureFunc()
		}
	case "paging":
		if NewPagingFeatureFunc != nil {
			return NewPagingFeatureFunc()
		}
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
