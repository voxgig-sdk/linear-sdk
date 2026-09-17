import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { NotificationSubscription, NotificationSubscriptionLoadMatch, NotificationSubscriptionListMatch } from '../LinearTypes';
declare class NotificationSubscriptionEntity extends LinearEntityBase<NotificationSubscription> {
    constructor(client: LinearSDK, entopts: any);
    make(this: NotificationSubscriptionEntity): NotificationSubscriptionEntity;
    load(this: any, reqmatch?: NotificationSubscriptionLoadMatch, ctrl?: Control): Promise<NotificationSubscriptionEntity>;
    list(this: any, reqmatch?: NotificationSubscriptionListMatch, ctrl?: Control): Promise<NotificationSubscriptionEntity[]>;
}
export { NotificationSubscriptionEntity };
