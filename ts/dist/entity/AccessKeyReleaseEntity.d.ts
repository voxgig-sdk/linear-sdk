import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { AccessKeyRelease, AccessKeyReleaseLoadMatch, AccessKeyReleaseListMatch, AccessKeyReleaseCreateData } from '../LinearTypes';
declare class AccessKeyReleaseEntity extends LinearEntityBase<AccessKeyRelease> {
    constructor(client: LinearSDK, entopts: any);
    make(this: AccessKeyReleaseEntity): AccessKeyReleaseEntity;
    load(this: any, reqmatch?: AccessKeyReleaseLoadMatch, ctrl?: Control): Promise<AccessKeyReleaseEntity>;
    list(this: any, reqmatch?: AccessKeyReleaseListMatch, ctrl?: Control): Promise<AccessKeyReleaseEntity[]>;
    create(this: any, reqdata?: AccessKeyReleaseCreateData, ctrl?: Control): Promise<AccessKeyReleaseEntity>;
}
export { AccessKeyReleaseEntity };
