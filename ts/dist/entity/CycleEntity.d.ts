import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { Cycle, CycleLoadMatch, CycleListMatch, CycleCreateData, CycleUpdateData } from '../LinearTypes';
declare class CycleEntity extends LinearEntityBase<Cycle> {
    constructor(client: LinearSDK, entopts: any);
    make(this: CycleEntity): CycleEntity;
    load(this: any, reqmatch?: CycleLoadMatch, ctrl?: Control): Promise<CycleEntity>;
    list(this: any, reqmatch?: CycleListMatch, ctrl?: Control): Promise<CycleEntity[]>;
    create(this: any, reqdata?: CycleCreateData, ctrl?: Control): Promise<CycleEntity>;
    update(this: any, reqdata?: CycleUpdateData, ctrl?: Control): Promise<CycleEntity>;
}
export { CycleEntity };
