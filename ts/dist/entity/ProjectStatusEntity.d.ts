import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { ProjectStatus, ProjectStatusLoadMatch, ProjectStatusListMatch, ProjectStatusCreateData, ProjectStatusUpdateData } from '../LinearTypes';
declare class ProjectStatusEntity extends LinearEntityBase<ProjectStatus> {
    constructor(client: LinearSDK, entopts: any);
    make(this: ProjectStatusEntity): ProjectStatusEntity;
    load(this: any, reqmatch?: ProjectStatusLoadMatch, ctrl?: Control): Promise<ProjectStatusEntity>;
    list(this: any, reqmatch?: ProjectStatusListMatch, ctrl?: Control): Promise<ProjectStatusEntity[]>;
    create(this: any, reqdata?: ProjectStatusCreateData, ctrl?: Control): Promise<ProjectStatusEntity>;
    update(this: any, reqdata?: ProjectStatusUpdateData, ctrl?: Control): Promise<ProjectStatusEntity>;
}
export { ProjectStatusEntity };
