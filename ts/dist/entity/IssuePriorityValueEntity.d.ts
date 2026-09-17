import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { IssuePriorityValue, IssuePriorityValueListMatch } from '../LinearTypes';
declare class IssuePriorityValueEntity extends LinearEntityBase<IssuePriorityValue> {
    constructor(client: LinearSDK, entopts: any);
    make(this: IssuePriorityValueEntity): IssuePriorityValueEntity;
    list(this: any, reqmatch?: IssuePriorityValueListMatch, ctrl?: Control): Promise<IssuePriorityValueEntity[]>;
}
export { IssuePriorityValueEntity };
