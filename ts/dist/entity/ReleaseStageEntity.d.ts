import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { ReleaseStage, ReleaseStageLoadMatch, ReleaseStageListMatch, ReleaseStageCreateData, ReleaseStageUpdateData } from '../LinearTypes';
declare class ReleaseStageEntity extends LinearEntityBase<ReleaseStage> {
    constructor(client: LinearSDK, entopts: any);
    make(this: ReleaseStageEntity): ReleaseStageEntity;
    load(this: any, reqmatch?: ReleaseStageLoadMatch, ctrl?: Control): Promise<ReleaseStageEntity>;
    list(this: any, reqmatch?: ReleaseStageListMatch, ctrl?: Control): Promise<ReleaseStageEntity[]>;
    create(this: any, reqdata?: ReleaseStageCreateData, ctrl?: Control): Promise<ReleaseStageEntity>;
    update(this: any, reqdata?: ReleaseStageUpdateData, ctrl?: Control): Promise<ReleaseStageEntity>;
}
export { ReleaseStageEntity };
