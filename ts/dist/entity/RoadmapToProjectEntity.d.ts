import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { RoadmapToProject, RoadmapToProjectLoadMatch, RoadmapToProjectListMatch, RoadmapToProjectCreateData, RoadmapToProjectUpdateData, RoadmapToProjectRemoveMatch } from '../LinearTypes';
declare class RoadmapToProjectEntity extends LinearEntityBase<RoadmapToProject> {
    constructor(client: LinearSDK, entopts: any);
    make(this: RoadmapToProjectEntity): RoadmapToProjectEntity;
    load(this: any, reqmatch?: RoadmapToProjectLoadMatch, ctrl?: Control): Promise<RoadmapToProjectEntity>;
    list(this: any, reqmatch?: RoadmapToProjectListMatch, ctrl?: Control): Promise<RoadmapToProjectEntity[]>;
    create(this: any, reqdata?: RoadmapToProjectCreateData, ctrl?: Control): Promise<RoadmapToProjectEntity>;
    update(this: any, reqdata?: RoadmapToProjectUpdateData, ctrl?: Control): Promise<RoadmapToProjectEntity>;
    remove(this: any, reqmatch?: RoadmapToProjectRemoveMatch, ctrl?: Control): Promise<RoadmapToProjectEntity>;
}
export { RoadmapToProjectEntity };
