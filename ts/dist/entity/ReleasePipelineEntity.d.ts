import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { ReleasePipeline, ReleasePipelineLoadMatch, ReleasePipelineListMatch, ReleasePipelineCreateData, ReleasePipelineUpdateData, ReleasePipelineRemoveMatch } from '../LinearTypes';
declare class ReleasePipelineEntity extends LinearEntityBase<ReleasePipeline> {
    constructor(client: LinearSDK, entopts: any);
    make(this: ReleasePipelineEntity): ReleasePipelineEntity;
    load(this: any, reqmatch?: ReleasePipelineLoadMatch, ctrl?: Control): Promise<ReleasePipelineEntity>;
    list(this: any, reqmatch?: ReleasePipelineListMatch, ctrl?: Control): Promise<ReleasePipelineEntity[]>;
    create(this: any, reqdata?: ReleasePipelineCreateData, ctrl?: Control): Promise<ReleasePipelineEntity>;
    update(this: any, reqdata?: ReleasePipelineUpdateData, ctrl?: Control): Promise<ReleasePipelineEntity>;
    remove(this: any, reqmatch?: ReleasePipelineRemoveMatch, ctrl?: Control): Promise<ReleasePipelineEntity>;
}
export { ReleasePipelineEntity };
