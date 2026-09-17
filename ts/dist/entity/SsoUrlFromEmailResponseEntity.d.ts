import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { SsoUrlFromEmailResponse, SsoUrlFromEmailResponseLoadMatch } from '../LinearTypes';
declare class SsoUrlFromEmailResponseEntity extends LinearEntityBase<SsoUrlFromEmailResponse> {
    constructor(client: LinearSDK, entopts: any);
    make(this: SsoUrlFromEmailResponseEntity): SsoUrlFromEmailResponseEntity;
    load(this: any, reqmatch?: SsoUrlFromEmailResponseLoadMatch, ctrl?: Control): Promise<SsoUrlFromEmailResponseEntity>;
}
export { SsoUrlFromEmailResponseEntity };
