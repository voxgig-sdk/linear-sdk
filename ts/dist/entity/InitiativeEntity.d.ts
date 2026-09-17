import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { Initiative, InitiativeLoadMatch, InitiativeListMatch, InitiativeCreateData, InitiativeUpdateData, InitiativeRemoveMatch } from '../LinearTypes';
declare class InitiativeEntity extends LinearEntityBase<Initiative> {
    constructor(client: LinearSDK, entopts: any);
    make(this: InitiativeEntity): InitiativeEntity;
    load(this: any, reqmatch?: InitiativeLoadMatch, ctrl?: Control): Promise<InitiativeEntity>;
    list(this: any, reqmatch?: InitiativeListMatch, ctrl?: Control): Promise<InitiativeEntity[]>;
    create(this: any, reqdata?: InitiativeCreateData, ctrl?: Control): Promise<InitiativeEntity>;
    update(this: any, reqdata?: InitiativeUpdateData, ctrl?: Control): Promise<InitiativeEntity>;
    remove(this: any, reqmatch?: InitiativeRemoveMatch, ctrl?: Control): Promise<InitiativeEntity>;
}
export { InitiativeEntity };
