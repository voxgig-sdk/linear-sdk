import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { InitiativeToProject, InitiativeToProjectLoadMatch, InitiativeToProjectListMatch, InitiativeToProjectCreateData, InitiativeToProjectUpdateData, InitiativeToProjectRemoveMatch } from '../LinearTypes';
declare class InitiativeToProjectEntity extends LinearEntityBase<InitiativeToProject> {
    constructor(client: LinearSDK, entopts: any);
    make(this: InitiativeToProjectEntity): InitiativeToProjectEntity;
    load(this: any, reqmatch?: InitiativeToProjectLoadMatch, ctrl?: Control): Promise<InitiativeToProjectEntity>;
    list(this: any, reqmatch?: InitiativeToProjectListMatch, ctrl?: Control): Promise<InitiativeToProjectEntity[]>;
    create(this: any, reqdata?: InitiativeToProjectCreateData, ctrl?: Control): Promise<InitiativeToProjectEntity>;
    update(this: any, reqdata?: InitiativeToProjectUpdateData, ctrl?: Control): Promise<InitiativeToProjectEntity>;
    remove(this: any, reqmatch?: InitiativeToProjectRemoveMatch, ctrl?: Control): Promise<InitiativeToProjectEntity>;
}
export { InitiativeToProjectEntity };
