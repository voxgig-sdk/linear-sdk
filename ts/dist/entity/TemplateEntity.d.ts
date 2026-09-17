import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { Template, TemplateLoadMatch, TemplateListMatch, TemplateCreateData, TemplateUpdateData, TemplateRemoveMatch } from '../LinearTypes';
declare class TemplateEntity extends LinearEntityBase<Template> {
    constructor(client: LinearSDK, entopts: any);
    make(this: TemplateEntity): TemplateEntity;
    load(this: any, reqmatch?: TemplateLoadMatch, ctrl?: Control): Promise<TemplateEntity>;
    list(this: any, reqmatch?: TemplateListMatch, ctrl?: Control): Promise<TemplateEntity[]>;
    create(this: any, reqdata?: TemplateCreateData, ctrl?: Control): Promise<TemplateEntity>;
    update(this: any, reqdata?: TemplateUpdateData, ctrl?: Control): Promise<TemplateEntity>;
    remove(this: any, reqmatch?: TemplateRemoveMatch, ctrl?: Control): Promise<TemplateEntity>;
}
export { TemplateEntity };
