import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { AccessKeyReleasePipeline, AccessKeyReleasePipelineLoadMatch } from '../LinearTypes';
declare class AccessKeyReleasePipelineEntity extends LinearEntityBase<AccessKeyReleasePipeline> {
    constructor(client: LinearSDK, entopts: any);
    make(this: AccessKeyReleasePipelineEntity): AccessKeyReleasePipelineEntity;
    load(this: any, reqmatch?: AccessKeyReleasePipelineLoadMatch, ctrl?: Control): Promise<AccessKeyReleasePipelineEntity>;
}
export { AccessKeyReleasePipelineEntity };
