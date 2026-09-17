import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { Notification, NotificationLoadMatch, NotificationListMatch } from '../LinearTypes';
declare class NotificationEntity extends LinearEntityBase<Notification> {
    constructor(client: LinearSDK, entopts: any);
    make(this: NotificationEntity): NotificationEntity;
    load(this: any, reqmatch?: NotificationLoadMatch, ctrl?: Control): Promise<NotificationEntity>;
    list(this: any, reqmatch?: NotificationListMatch, ctrl?: Control): Promise<NotificationEntity[]>;
}
export { NotificationEntity };
