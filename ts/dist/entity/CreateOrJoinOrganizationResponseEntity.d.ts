import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { CreateOrJoinOrganizationResponse, CreateOrJoinOrganizationResponseCreateData, CreateOrJoinOrganizationResponseUpdateData } from '../LinearTypes';
declare class CreateOrJoinOrganizationResponseEntity extends LinearEntityBase<CreateOrJoinOrganizationResponse> {
    constructor(client: LinearSDK, entopts: any);
    make(this: CreateOrJoinOrganizationResponseEntity): CreateOrJoinOrganizationResponseEntity;
    create(this: any, reqdata?: CreateOrJoinOrganizationResponseCreateData, ctrl?: Control): Promise<CreateOrJoinOrganizationResponseEntity>;
    update(this: any, reqdata?: CreateOrJoinOrganizationResponseUpdateData, ctrl?: Control): Promise<CreateOrJoinOrganizationResponseEntity>;
}
export { CreateOrJoinOrganizationResponseEntity };
