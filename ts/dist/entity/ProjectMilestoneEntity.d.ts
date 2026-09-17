import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { ProjectMilestone, ProjectMilestoneLoadMatch, ProjectMilestoneListMatch, ProjectMilestoneCreateData, ProjectMilestoneUpdateData, ProjectMilestoneRemoveMatch } from '../LinearTypes';
declare class ProjectMilestoneEntity extends LinearEntityBase<ProjectMilestone> {
    constructor(client: LinearSDK, entopts: any);
    make(this: ProjectMilestoneEntity): ProjectMilestoneEntity;
    load(this: any, reqmatch?: ProjectMilestoneLoadMatch, ctrl?: Control): Promise<ProjectMilestoneEntity>;
    list(this: any, reqmatch?: ProjectMilestoneListMatch, ctrl?: Control): Promise<ProjectMilestoneEntity[]>;
    create(this: any, reqdata?: ProjectMilestoneCreateData, ctrl?: Control): Promise<ProjectMilestoneEntity>;
    update(this: any, reqdata?: ProjectMilestoneUpdateData, ctrl?: Control): Promise<ProjectMilestoneEntity>;
    remove(this: any, reqmatch?: ProjectMilestoneRemoveMatch, ctrl?: Control): Promise<ProjectMilestoneEntity>;
}
export { ProjectMilestoneEntity };
