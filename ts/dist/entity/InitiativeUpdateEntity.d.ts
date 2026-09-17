import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { InitiativeUpdate, InitiativeUpdateLoadMatch, InitiativeUpdateListMatch, InitiativeUpdateCreateData, InitiativeUpdateUpdateData } from '../LinearTypes';
declare class InitiativeUpdateEntity extends LinearEntityBase<InitiativeUpdate> {
    constructor(client: LinearSDK, entopts: any);
    make(this: InitiativeUpdateEntity): InitiativeUpdateEntity;
    load(this: any, reqmatch?: InitiativeUpdateLoadMatch, ctrl?: Control): Promise<InitiativeUpdateEntity>;
    list(this: any, reqmatch?: InitiativeUpdateListMatch, ctrl?: Control): Promise<InitiativeUpdateEntity[]>;
    create(this: any, reqdata?: InitiativeUpdateCreateData, ctrl?: Control): Promise<InitiativeUpdateEntity>;
    update(this: any, reqdata?: InitiativeUpdateUpdateData, ctrl?: Control): Promise<InitiativeUpdateEntity>;
}
export { InitiativeUpdateEntity };
