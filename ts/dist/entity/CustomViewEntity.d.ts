import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { CustomView, CustomViewLoadMatch, CustomViewListMatch, CustomViewCreateData, CustomViewUpdateData, CustomViewRemoveMatch } from '../LinearTypes';
declare class CustomViewEntity extends LinearEntityBase<CustomView> {
    constructor(client: LinearSDK, entopts: any);
    make(this: CustomViewEntity): CustomViewEntity;
    load(this: any, reqmatch?: CustomViewLoadMatch, ctrl?: Control): Promise<CustomViewEntity>;
    list(this: any, reqmatch?: CustomViewListMatch, ctrl?: Control): Promise<CustomViewEntity[]>;
    create(this: any, reqdata?: CustomViewCreateData, ctrl?: Control): Promise<CustomViewEntity>;
    update(this: any, reqdata?: CustomViewUpdateData, ctrl?: Control): Promise<CustomViewEntity>;
    remove(this: any, reqmatch?: CustomViewRemoveMatch, ctrl?: Control): Promise<CustomViewEntity>;
}
export { CustomViewEntity };
