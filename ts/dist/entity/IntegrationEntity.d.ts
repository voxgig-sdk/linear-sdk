import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { Integration, IntegrationLoadMatch, IntegrationListMatch, IntegrationCreateData, IntegrationUpdateData, IntegrationRemoveMatch } from '../LinearTypes';
declare class IntegrationEntity extends LinearEntityBase<Integration> {
    constructor(client: LinearSDK, entopts: any);
    make(this: IntegrationEntity): IntegrationEntity;
    load(this: any, reqmatch?: IntegrationLoadMatch, ctrl?: Control): Promise<IntegrationEntity>;
    list(this: any, reqmatch?: IntegrationListMatch, ctrl?: Control): Promise<IntegrationEntity[]>;
    create(this: any, reqdata?: IntegrationCreateData, ctrl?: Control): Promise<IntegrationEntity>;
    update(this: any, reqdata?: IntegrationUpdateData, ctrl?: Control): Promise<IntegrationEntity>;
    remove(this: any, reqmatch?: IntegrationRemoveMatch, ctrl?: Control): Promise<IntegrationEntity>;
}
export { IntegrationEntity };
