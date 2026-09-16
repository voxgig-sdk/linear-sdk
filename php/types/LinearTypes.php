<?php
declare(strict_types=1);

// Typed models for the Linear SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Issue entity data model. */
class Issue
{
    public mixed $archivedAt = null;
    public ?array $assignee = null;
    public string $branchName;
    public mixed $canceledAt = null;
    public mixed $completedAt = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public ?string $description = null;
    public mixed $dueDate = null;
    public ?float $estimate = null;
    public string $id;
    public string $identifier;
    public float $number;
    public float $priority;
    public ?array $state = null;
    public ?array $team = null;
    public string $title;
    public mixed $updatedAt;
    public string $url;
}

/** Request payload for Issue#load. */
class IssueLoadMatch
{
    public string $id;
}

/** Request payload for Issue#list. */
class IssueListMatch
{
    public ?string $after = null;
    public ?int $first = null;
}

/** Request payload for Issue#create. */
class IssueCreateData
{
    public mixed $archivedAt = null;
    public ?array $assignee = null;
    public string $branchName;
    public mixed $canceledAt = null;
    public mixed $completedAt = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public ?string $description = null;
    public mixed $dueDate = null;
    public ?float $estimate = null;
    public string $id;
    public string $identifier;
    public float $number;
    public float $priority;
    public ?array $state = null;
    public ?array $team = null;
    public string $title;
    public mixed $updatedAt;
    public string $url;
}

/** Request payload for Issue#update. */
class IssueUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public ?array $assignee = null;
    public ?string $branchName = null;
    public mixed $canceledAt = null;
    public mixed $completedAt = null;
    public mixed $createdAt = null;
    public ?array $creator = null;
    public ?string $description = null;
    public mixed $dueDate = null;
    public ?float $estimate = null;
    public ?string $identifier = null;
    public ?float $number = null;
    public ?float $priority = null;
    public ?array $state = null;
    public ?array $team = null;
    public ?string $title = null;
    public mixed $updatedAt = null;
    public ?string $url = null;
}

/** Team entity data model. */
class Team
{
    public ?string $description = null;
    public string $id;
    public string $key;
    public string $name;
}

/** Request payload for Team#load. */
class TeamLoadMatch
{
    public string $id;
}

/** Request payload for Team#list. */
class TeamListMatch
{
    public ?string $after = null;
    public ?int $first = null;
}

