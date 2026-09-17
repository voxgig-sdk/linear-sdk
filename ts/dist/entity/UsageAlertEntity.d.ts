import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { UsageAlert, UsageAlertLoadMatch, UsageAlertListMatch } from '../LinearTypes';
declare class UsageAlertEntity extends LinearEntityBase<UsageAlert> {
    constructor(client: LinearSDK, entopts: any);
    make(this: UsageAlertEntity): UsageAlertEntity;
    load(this: any, reqmatch?: UsageAlertLoadMatch, ctrl?: Control): Promise<UsageAlertEntity>;
    list(this: any, reqmatch?: UsageAlertListMatch, ctrl?: Control): Promise<UsageAlertEntity[]>;
}
export { UsageAlertEntity };
