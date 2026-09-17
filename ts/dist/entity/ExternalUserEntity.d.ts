import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { ExternalUser, ExternalUserLoadMatch, ExternalUserListMatch } from '../LinearTypes';
declare class ExternalUserEntity extends LinearEntityBase<ExternalUser> {
    constructor(client: LinearSDK, entopts: any);
    make(this: ExternalUserEntity): ExternalUserEntity;
    load(this: any, reqmatch?: ExternalUserLoadMatch, ctrl?: Control): Promise<ExternalUserEntity>;
    list(this: any, reqmatch?: ExternalUserListMatch, ctrl?: Control): Promise<ExternalUserEntity[]>;
}
export { ExternalUserEntity };
