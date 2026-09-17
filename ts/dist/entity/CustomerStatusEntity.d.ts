import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { CustomerStatus, CustomerStatusLoadMatch, CustomerStatusListMatch, CustomerStatusCreateData, CustomerStatusUpdateData, CustomerStatusRemoveMatch } from '../LinearTypes';
declare class CustomerStatusEntity extends LinearEntityBase<CustomerStatus> {
    constructor(client: LinearSDK, entopts: any);
    make(this: CustomerStatusEntity): CustomerStatusEntity;
    load(this: any, reqmatch?: CustomerStatusLoadMatch, ctrl?: Control): Promise<CustomerStatusEntity>;
    list(this: any, reqmatch?: CustomerStatusListMatch, ctrl?: Control): Promise<CustomerStatusEntity[]>;
    create(this: any, reqdata?: CustomerStatusCreateData, ctrl?: Control): Promise<CustomerStatusEntity>;
    update(this: any, reqdata?: CustomerStatusUpdateData, ctrl?: Control): Promise<CustomerStatusEntity>;
    remove(this: any, reqmatch?: CustomerStatusRemoveMatch, ctrl?: Control): Promise<CustomerStatusEntity>;
}
export { CustomerStatusEntity };
