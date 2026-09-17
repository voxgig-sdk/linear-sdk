import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { CustomerTier, CustomerTierLoadMatch, CustomerTierListMatch, CustomerTierCreateData, CustomerTierUpdateData, CustomerTierRemoveMatch } from '../LinearTypes';
declare class CustomerTierEntity extends LinearEntityBase<CustomerTier> {
    constructor(client: LinearSDK, entopts: any);
    make(this: CustomerTierEntity): CustomerTierEntity;
    load(this: any, reqmatch?: CustomerTierLoadMatch, ctrl?: Control): Promise<CustomerTierEntity>;
    list(this: any, reqmatch?: CustomerTierListMatch, ctrl?: Control): Promise<CustomerTierEntity[]>;
    create(this: any, reqdata?: CustomerTierCreateData, ctrl?: Control): Promise<CustomerTierEntity>;
    update(this: any, reqdata?: CustomerTierUpdateData, ctrl?: Control): Promise<CustomerTierEntity>;
    remove(this: any, reqmatch?: CustomerTierRemoveMatch, ctrl?: Control): Promise<CustomerTierEntity>;
}
export { CustomerTierEntity };
