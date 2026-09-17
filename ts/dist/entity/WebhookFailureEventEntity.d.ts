import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { WebhookFailureEvent, WebhookFailureEventListMatch } from '../LinearTypes';
declare class WebhookFailureEventEntity extends LinearEntityBase<WebhookFailureEvent> {
    constructor(client: LinearSDK, entopts: any);
    make(this: WebhookFailureEventEntity): WebhookFailureEventEntity;
    list(this: any, reqmatch?: WebhookFailureEventListMatch, ctrl?: Control): Promise<WebhookFailureEventEntity[]>;
}
export { WebhookFailureEventEntity };
