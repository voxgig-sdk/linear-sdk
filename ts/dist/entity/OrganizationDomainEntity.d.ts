import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { OrganizationDomain, OrganizationDomainCreateData, OrganizationDomainUpdateData, OrganizationDomainRemoveMatch } from '../LinearTypes';
declare class OrganizationDomainEntity extends LinearEntityBase<OrganizationDomain> {
    constructor(client: LinearSDK, entopts: any);
    make(this: OrganizationDomainEntity): OrganizationDomainEntity;
    create(this: any, reqdata?: OrganizationDomainCreateData, ctrl?: Control): Promise<OrganizationDomainEntity>;
    update(this: any, reqdata?: OrganizationDomainUpdateData, ctrl?: Control): Promise<OrganizationDomainEntity>;
    remove(this: any, reqmatch?: OrganizationDomainRemoveMatch, ctrl?: Control): Promise<OrganizationDomainEntity>;
}
export { OrganizationDomainEntity };
