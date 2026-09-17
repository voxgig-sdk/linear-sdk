import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { OrganizationInvite, OrganizationInviteLoadMatch, OrganizationInviteListMatch, OrganizationInviteCreateData, OrganizationInviteUpdateData, OrganizationInviteRemoveMatch } from '../LinearTypes';
declare class OrganizationInviteEntity extends LinearEntityBase<OrganizationInvite> {
    constructor(client: LinearSDK, entopts: any);
    make(this: OrganizationInviteEntity): OrganizationInviteEntity;
    load(this: any, reqmatch?: OrganizationInviteLoadMatch, ctrl?: Control): Promise<OrganizationInviteEntity>;
    list(this: any, reqmatch?: OrganizationInviteListMatch, ctrl?: Control): Promise<OrganizationInviteEntity[]>;
    create(this: any, reqdata?: OrganizationInviteCreateData, ctrl?: Control): Promise<OrganizationInviteEntity>;
    update(this: any, reqdata?: OrganizationInviteUpdateData, ctrl?: Control): Promise<OrganizationInviteEntity>;
    remove(this: any, reqmatch?: OrganizationInviteRemoveMatch, ctrl?: Control): Promise<OrganizationInviteEntity>;
}
export { OrganizationInviteEntity };
