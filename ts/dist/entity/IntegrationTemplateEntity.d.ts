import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { IntegrationTemplate, IntegrationTemplateLoadMatch, IntegrationTemplateListMatch, IntegrationTemplateCreateData, IntegrationTemplateRemoveMatch } from '../LinearTypes';
declare class IntegrationTemplateEntity extends LinearEntityBase<IntegrationTemplate> {
    constructor(client: LinearSDK, entopts: any);
    make(this: IntegrationTemplateEntity): IntegrationTemplateEntity;
    load(this: any, reqmatch?: IntegrationTemplateLoadMatch, ctrl?: Control): Promise<IntegrationTemplateEntity>;
    list(this: any, reqmatch?: IntegrationTemplateListMatch, ctrl?: Control): Promise<IntegrationTemplateEntity[]>;
    create(this: any, reqdata?: IntegrationTemplateCreateData, ctrl?: Control): Promise<IntegrationTemplateEntity>;
    remove(this: any, reqmatch?: IntegrationTemplateRemoveMatch, ctrl?: Control): Promise<IntegrationTemplateEntity>;
}
export { IntegrationTemplateEntity };
