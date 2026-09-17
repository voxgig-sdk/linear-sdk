import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { OrganizationMeta, OrganizationMetaLoadMatch } from '../LinearTypes';
declare class OrganizationMetaEntity extends LinearEntityBase<OrganizationMeta> {
    constructor(client: LinearSDK, entopts: any);
    make(this: OrganizationMetaEntity): OrganizationMetaEntity;
    load(this: any, reqmatch?: OrganizationMetaLoadMatch, ctrl?: Control): Promise<OrganizationMetaEntity>;
}
export { OrganizationMetaEntity };
