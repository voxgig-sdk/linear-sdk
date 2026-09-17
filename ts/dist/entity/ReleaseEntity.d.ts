import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { Release, ReleaseLoadMatch, ReleaseListMatch, ReleaseCreateData, ReleaseUpdateData, ReleaseRemoveMatch } from '../LinearTypes';
declare class ReleaseEntity extends LinearEntityBase<Release> {
    constructor(client: LinearSDK, entopts: any);
    make(this: ReleaseEntity): ReleaseEntity;
    load(this: any, reqmatch?: ReleaseLoadMatch, ctrl?: Control): Promise<ReleaseEntity>;
    list(this: any, reqmatch?: ReleaseListMatch, ctrl?: Control): Promise<ReleaseEntity[]>;
    create(this: any, reqdata?: ReleaseCreateData, ctrl?: Control): Promise<ReleaseEntity>;
    update(this: any, reqdata?: ReleaseUpdateData, ctrl?: Control): Promise<ReleaseEntity>;
    remove(this: any, reqmatch?: ReleaseRemoveMatch, ctrl?: Control): Promise<ReleaseEntity>;
}
export { ReleaseEntity };
