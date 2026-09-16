<?php
declare(strict_types=1);

// Linear SDK configuration

class LinearConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Linear",
                "slug" => "linear",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "debug" => [
          'options' => [
            'active' => false,
            'max' => 100,
            'redact' => [
              'authorization',
              'cookie',
              'set-cookie',
              'api-key',
              'apikey',
              'x-api-key',
              'idempotency-key',
            ],
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'onEntry' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'none',
        ],
                "idempotency" => [
          'options' => [
            'active' => false,
            'header' => 'Idempotency-Key',
            'methods' => [
              'POST',
              'PUT',
              'PATCH',
              'DELETE',
            ],
            'ops' => [
              'create',
              'update',
              'remove',
            ],
          ],
          'optspec' => [
            'keygen' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'none',
        ],
                "metrics" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'none',
        ],
                "paging" => [
          'options' => [
            'active' => false,
            'afterVar' => 'after',
            'cursorParam' => 'cursor',
            'firstVar' => 'first',
            'limitParam' => 'limit',
            'pageParam' => 'page',
            'startPage' => 1,
          ],
          'optspec' => [
            'limit' => '`$NUMBER`',
            'ops' => '`$LIST`',
          ],
          'strict' => false,
          'transport' => 'none',
        ],
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://api.linear.app/graphql",
                "auth" => [
                    "prefix" => "",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "issue" => [],
                    "team" => [],
                ],
            ],
            "entity" => [
        'issue' => [
          'fields' => [
            [
              'name' => 'archivedAt',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'assignee',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'branchName',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'canceledAt',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'completedAt',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'createdAt',
              'req' => true,
              'type' => '`$ANY`',
            ],
            [
              'name' => 'creator',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'dueDate',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'estimate',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'identifier',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'number',
              'req' => true,
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'priority',
              'req' => true,
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'state',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'team',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'title',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'updatedAt',
              'req' => true,
              'type' => '`$ANY`',
            ],
            [
              'name' => 'url',
              'req' => true,
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'issue',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [],
                  'graphql' => [
                    'doc' => 'mutation IssueCreate($input: IssueCreateInput!) { issueCreate(input: $input) { issue { ...IssueFields } success } } fragment IssueFields on Issue { archivedAt assignee { id } branchName canceledAt completedAt createdAt creator { id } description dueDate estimate id identifier number priority state { id } team { id } title updatedAt url }',
                    'field' => 'issueCreate',
                    'optype' => 'mutation',
                    'vars' => [
                      [
                        'from' => '',
                        'gqltype' => 'IssueCreateInput!',
                        'name' => 'input',
                      ],
                    ],
                  ],
                  'kind' => 'graphql',
                  'method' => 'POST',
                  'orig' => 'issueCreate',
                  'segments' => [],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data.issueCreate.issue`',
                  ],
                  'parts' => [],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'after',
                        'orig' => 'after',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'param',
                        'name' => 'first',
                        'orig' => 'first',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'graphql' => [
                    'doc' => 'query IssueList($first: Int, $after: String) { issues(first: $first, after: $after) { edges { node { ...IssueFields } } pageInfo { endCursor hasNextPage } } } fragment IssueFields on Issue { archivedAt assignee { id } branchName canceledAt completedAt createdAt creator { id } description dueDate estimate id identifier number priority state { id } team { id } title updatedAt url }',
                    'field' => 'issues',
                    'optype' => 'query',
                    'page' => [
                      'cursor' => 'pageInfo.endCursor',
                      'more' => 'pageInfo.hasNextPage',
                      'nodes' => 'edges',
                      'style' => 'relay',
                    ],
                    'vars' => [
                      [
                        'from' => 'first',
                        'gqltype' => 'Int',
                        'name' => 'first',
                      ],
                      [
                        'from' => 'after',
                        'gqltype' => 'String',
                        'name' => 'after',
                      ],
                    ],
                  ],
                  'kind' => 'graphql',
                  'method' => 'POST',
                  'orig' => 'issues',
                  'segments' => [],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data.issues.edges`',
                  ],
                  'parts' => [],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'graphql' => [
                    'doc' => 'query IssueLoad($id: String!) { issue(id: $id) { ...IssueFields } } fragment IssueFields on Issue { archivedAt assignee { id } branchName canceledAt completedAt createdAt creator { id } description dueDate estimate id identifier number priority state { id } team { id } title updatedAt url }',
                    'field' => 'issue',
                    'optype' => 'query',
                    'vars' => [
                      [
                        'from' => 'id',
                        'gqltype' => 'String!',
                        'name' => 'id',
                      ],
                    ],
                  ],
                  'kind' => 'graphql',
                  'method' => 'POST',
                  'orig' => 'issue',
                  'segments' => [],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data.issue`',
                  ],
                  'parts' => [],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'graphql' => [
                    'doc' => 'mutation IssueUpdate($id: String!, $input: IssueUpdateInput!) { issueUpdate(id: $id, input: $input) { issue { ...IssueFields } success } } fragment IssueFields on Issue { archivedAt assignee { id } branchName canceledAt completedAt createdAt creator { id } description dueDate estimate id identifier number priority state { id } team { id } title updatedAt url }',
                    'field' => 'issueUpdate',
                    'optype' => 'mutation',
                    'vars' => [
                      [
                        'from' => 'id',
                        'gqltype' => 'String!',
                        'name' => 'id',
                      ],
                      [
                        'from' => '',
                        'gqltype' => 'IssueUpdateInput!',
                        'name' => 'input',
                      ],
                    ],
                  ],
                  'kind' => 'graphql',
                  'method' => 'POST',
                  'orig' => 'issueUpdate',
                  'segments' => [],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data.issueUpdate.issue`',
                  ],
                  'parts' => [],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'team' => [
          'fields' => [
            [
              'name' => 'description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'key',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'team',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'after',
                        'orig' => 'after',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'param',
                        'name' => 'first',
                        'orig' => 'first',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'graphql' => [
                    'doc' => 'query TeamList($first: Int, $after: String) { teams(first: $first, after: $after) { ...TeamFields } } fragment TeamFields on Team { description id key name }',
                    'field' => 'teams',
                    'optype' => 'query',
                    'vars' => [
                      [
                        'from' => 'first',
                        'gqltype' => 'Int',
                        'name' => 'first',
                      ],
                      [
                        'from' => 'after',
                        'gqltype' => 'String',
                        'name' => 'after',
                      ],
                    ],
                  ],
                  'kind' => 'graphql',
                  'method' => 'POST',
                  'orig' => 'teams',
                  'segments' => [],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data.teams`',
                  ],
                  'parts' => [],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'graphql' => [
                    'doc' => 'query TeamLoad($id: String!) { team(id: $id) { ...TeamFields } } fragment TeamFields on Team { description id key name }',
                    'field' => 'team',
                    'optype' => 'query',
                    'vars' => [
                      [
                        'from' => 'id',
                        'gqltype' => 'String!',
                        'name' => 'id',
                      ],
                    ],
                  ],
                  'kind' => 'graphql',
                  'method' => 'POST',
                  'orig' => 'team',
                  'segments' => [],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data.team`',
                  ],
                  'parts' => [],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return LinearFeatures::make_feature($name);
    }
}
