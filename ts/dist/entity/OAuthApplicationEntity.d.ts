import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { OAuthApplication, OAuthApplicationLoadMatch, OAuthApplicationListMatch, OAuthApplicationCreateData, OAuthApplicationUpdateData } from '../LinearTypes';
declare class OAuthApplicationEntity extends LinearEntityBase<OAuthApplication> {
    constructor(client: LinearSDK, entopts: any);
    make(this: OAuthApplicationEntity): OAuthApplicationEntity;
    load(this: any, reqmatch?: OAuthApplicationLoadMatch, ctrl?: Control): Promise<OAuthApplicationEntity>;
    list(this: any, reqmatch?: OAuthApplicationListMatch, ctrl?: Control): Promise<OAuthApplicationEntity[]>;
    create(this: any, reqdata?: OAuthApplicationCreateData, ctrl?: Control): Promise<OAuthApplicationEntity>;
    update(this: any, reqdata?: OAuthApplicationUpdateData, ctrl?: Control): Promise<OAuthApplicationEntity>;
}
export { OAuthApplicationEntity };
