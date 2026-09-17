import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { ProjectSearchResult, ProjectSearchResultListMatch } from '../LinearTypes';
declare class ProjectSearchResultEntity extends LinearEntityBase<ProjectSearchResult> {
    constructor(client: LinearSDK, entopts: any);
    make(this: ProjectSearchResultEntity): ProjectSearchResultEntity;
    list(this: any, reqmatch?: ProjectSearchResultListMatch, ctrl?: Control): Promise<ProjectSearchResultEntity[]>;
}
export { ProjectSearchResultEntity };
