export interface Issue {
    archivedAt?: any;
    assignee?: Record<string, any>;
    branchName: string;
    canceledAt?: any;
    completedAt?: any;
    createdAt: any;
    creator?: Record<string, any>;
    description?: string;
    dueDate?: any;
    estimate?: number;
    id: string;
    identifier: string;
    number: number;
    priority: number;
    state?: Record<string, any>;
    team?: Record<string, any>;
    title: string;
    updatedAt: any;
    url: string;
}
export interface IssueLoadMatch {
    id: string;
}
export interface IssueListMatch {
    after?: string;
    first?: number;
}
export interface IssueCreateData {
    archivedAt?: any;
    assignee?: Record<string, any>;
    branchName: string;
    canceledAt?: any;
    completedAt?: any;
    createdAt: any;
    creator?: Record<string, any>;
    description?: string;
    dueDate?: any;
    estimate?: number;
    id: string;
    identifier: string;
    number: number;
    priority: number;
    state?: Record<string, any>;
    team?: Record<string, any>;
    title: string;
    updatedAt: any;
    url: string;
}
export interface IssueUpdateData {
    id: string;
    archivedAt?: any;
    assignee?: Record<string, any>;
    branchName?: string;
    canceledAt?: any;
    completedAt?: any;
    createdAt?: any;
    creator?: Record<string, any>;
    description?: string;
    dueDate?: any;
    estimate?: number;
    identifier?: string;
    number?: number;
    priority?: number;
    state?: Record<string, any>;
    team?: Record<string, any>;
    title?: string;
    updatedAt?: any;
    url?: string;
}
export interface Team {
    description?: string;
    id: string;
    key: string;
    name: string;
}
export interface TeamLoadMatch {
    id: string;
}
export interface TeamListMatch {
    after?: string;
    first?: number;
}
