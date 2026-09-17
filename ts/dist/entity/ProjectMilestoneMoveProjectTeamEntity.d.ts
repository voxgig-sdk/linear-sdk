import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { ProjectMilestoneMoveProjectTeam, ProjectMilestoneMoveProjectTeamUpdateData } from '../LinearTypes';
declare class ProjectMilestoneMoveProjectTeamEntity extends LinearEntityBase<ProjectMilestoneMoveProjectTeam> {
    constructor(client: LinearSDK, entopts: any);
    make(this: ProjectMilestoneMoveProjectTeamEntity): ProjectMilestoneMoveProjectTeamEntity;
    update(this: any, reqdata?: ProjectMilestoneMoveProjectTeamUpdateData, ctrl?: Control): Promise<ProjectMilestoneMoveProjectTeamEntity>;
}
export { ProjectMilestoneMoveProjectTeamEntity };
