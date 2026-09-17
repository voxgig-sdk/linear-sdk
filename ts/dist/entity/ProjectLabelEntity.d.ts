import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { ProjectLabel, ProjectLabelLoadMatch, ProjectLabelListMatch, ProjectLabelCreateData, ProjectLabelUpdateData, ProjectLabelRemoveMatch } from '../LinearTypes';
declare class ProjectLabelEntity extends LinearEntityBase<ProjectLabel> {
    constructor(client: LinearSDK, entopts: any);
    make(this: ProjectLabelEntity): ProjectLabelEntity;
    load(this: any, reqmatch?: ProjectLabelLoadMatch, ctrl?: Control): Promise<ProjectLabelEntity>;
    list(this: any, reqmatch?: ProjectLabelListMatch, ctrl?: Control): Promise<ProjectLabelEntity[]>;
    create(this: any, reqdata?: ProjectLabelCreateData, ctrl?: Control): Promise<ProjectLabelEntity>;
    update(this: any, reqdata?: ProjectLabelUpdateData, ctrl?: Control): Promise<ProjectLabelEntity>;
    remove(this: any, reqmatch?: ProjectLabelRemoveMatch, ctrl?: Control): Promise<ProjectLabelEntity>;
}
export { ProjectLabelEntity };
