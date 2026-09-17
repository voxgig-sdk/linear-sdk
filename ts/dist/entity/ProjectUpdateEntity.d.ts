import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { ProjectUpdate, ProjectUpdateLoadMatch, ProjectUpdateListMatch, ProjectUpdateCreateData, ProjectUpdateUpdateData, ProjectUpdateRemoveMatch } from '../LinearTypes';
declare class ProjectUpdateEntity extends LinearEntityBase<ProjectUpdate> {
    constructor(client: LinearSDK, entopts: any);
    make(this: ProjectUpdateEntity): ProjectUpdateEntity;
    load(this: any, reqmatch?: ProjectUpdateLoadMatch, ctrl?: Control): Promise<ProjectUpdateEntity>;
    list(this: any, reqmatch?: ProjectUpdateListMatch, ctrl?: Control): Promise<ProjectUpdateEntity[]>;
    create(this: any, reqdata?: ProjectUpdateCreateData, ctrl?: Control): Promise<ProjectUpdateEntity>;
    update(this: any, reqdata?: ProjectUpdateUpdateData, ctrl?: Control): Promise<ProjectUpdateEntity>;
    remove(this: any, reqmatch?: ProjectUpdateRemoveMatch, ctrl?: Control): Promise<ProjectUpdateEntity>;
}
export { ProjectUpdateEntity };
