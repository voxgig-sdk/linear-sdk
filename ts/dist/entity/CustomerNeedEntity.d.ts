import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { CustomerNeed, CustomerNeedLoadMatch, CustomerNeedListMatch, CustomerNeedCreateData, CustomerNeedUpdateData, CustomerNeedRemoveMatch } from '../LinearTypes';
declare class CustomerNeedEntity extends LinearEntityBase<CustomerNeed> {
    constructor(client: LinearSDK, entopts: any);
    make(this: CustomerNeedEntity): CustomerNeedEntity;
    load(this: any, reqmatch?: CustomerNeedLoadMatch, ctrl?: Control): Promise<CustomerNeedEntity>;
    list(this: any, reqmatch?: CustomerNeedListMatch, ctrl?: Control): Promise<CustomerNeedEntity[]>;
    create(this: any, reqdata?: CustomerNeedCreateData, ctrl?: Control): Promise<CustomerNeedEntity>;
    update(this: any, reqdata?: CustomerNeedUpdateData, ctrl?: Control): Promise<CustomerNeedEntity>;
    remove(this: any, reqmatch?: CustomerNeedRemoveMatch, ctrl?: Control): Promise<CustomerNeedEntity>;
}
export { CustomerNeedEntity };
