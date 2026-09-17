import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { ProjectRelation, ProjectRelationLoadMatch, ProjectRelationListMatch, ProjectRelationCreateData, ProjectRelationUpdateData, ProjectRelationRemoveMatch } from '../LinearTypes';
declare class ProjectRelationEntity extends LinearEntityBase<ProjectRelation> {
    constructor(client: LinearSDK, entopts: any);
    make(this: ProjectRelationEntity): ProjectRelationEntity;
    load(this: any, reqmatch?: ProjectRelationLoadMatch, ctrl?: Control): Promise<ProjectRelationEntity>;
    list(this: any, reqmatch?: ProjectRelationListMatch, ctrl?: Control): Promise<ProjectRelationEntity[]>;
    create(this: any, reqdata?: ProjectRelationCreateData, ctrl?: Control): Promise<ProjectRelationEntity>;
    update(this: any, reqdata?: ProjectRelationUpdateData, ctrl?: Control): Promise<ProjectRelationEntity>;
    remove(this: any, reqmatch?: ProjectRelationRemoveMatch, ctrl?: Control): Promise<ProjectRelationEntity>;
}
export { ProjectRelationEntity };
