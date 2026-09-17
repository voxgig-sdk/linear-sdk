import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { EntityExternalLink, EntityExternalLinkLoadMatch, EntityExternalLinkCreateData, EntityExternalLinkUpdateData, EntityExternalLinkRemoveMatch } from '../LinearTypes';
declare class EntityExternalLinkEntity extends LinearEntityBase<EntityExternalLink> {
    constructor(client: LinearSDK, entopts: any);
    make(this: EntityExternalLinkEntity): EntityExternalLinkEntity;
    load(this: any, reqmatch?: EntityExternalLinkLoadMatch, ctrl?: Control): Promise<EntityExternalLinkEntity>;
    create(this: any, reqdata?: EntityExternalLinkCreateData, ctrl?: Control): Promise<EntityExternalLinkEntity>;
    update(this: any, reqdata?: EntityExternalLinkUpdateData, ctrl?: Control): Promise<EntityExternalLinkEntity>;
    remove(this: any, reqmatch?: EntityExternalLinkRemoveMatch, ctrl?: Control): Promise<EntityExternalLinkEntity>;
}
export { EntityExternalLinkEntity };
