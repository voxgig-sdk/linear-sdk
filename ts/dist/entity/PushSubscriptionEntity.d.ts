import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { PushSubscription, PushSubscriptionCreateData, PushSubscriptionRemoveMatch } from '../LinearTypes';
declare class PushSubscriptionEntity extends LinearEntityBase<PushSubscription> {
    constructor(client: LinearSDK, entopts: any);
    make(this: PushSubscriptionEntity): PushSubscriptionEntity;
    create(this: any, reqdata?: PushSubscriptionCreateData, ctrl?: Control): Promise<PushSubscriptionEntity>;
    remove(this: any, reqmatch?: PushSubscriptionRemoveMatch, ctrl?: Control): Promise<PushSubscriptionEntity>;
}
export { PushSubscriptionEntity };
