import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { InitiativeRelation, InitiativeRelationLoadMatch, InitiativeRelationListMatch, InitiativeRelationCreateData, InitiativeRelationUpdateData, InitiativeRelationRemoveMatch } from '../LinearTypes';
declare class InitiativeRelationEntity extends LinearEntityBase<InitiativeRelation> {
    constructor(client: LinearSDK, entopts: any);
    make(this: InitiativeRelationEntity): InitiativeRelationEntity;
    load(this: any, reqmatch?: InitiativeRelationLoadMatch, ctrl?: Control): Promise<InitiativeRelationEntity>;
    list(this: any, reqmatch?: InitiativeRelationListMatch, ctrl?: Control): Promise<InitiativeRelationEntity[]>;
    create(this: any, reqdata?: InitiativeRelationCreateData, ctrl?: Control): Promise<InitiativeRelationEntity>;
    update(this: any, reqdata?: InitiativeRelationUpdateData, ctrl?: Control): Promise<InitiativeRelationEntity>;
    remove(this: any, reqmatch?: InitiativeRelationRemoveMatch, ctrl?: Control): Promise<InitiativeRelationEntity>;
}
export { InitiativeRelationEntity };
