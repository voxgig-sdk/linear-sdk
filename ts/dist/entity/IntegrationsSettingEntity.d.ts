import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { IntegrationsSetting, IntegrationsSettingLoadMatch, IntegrationsSettingCreateData, IntegrationsSettingUpdateData } from '../LinearTypes';
declare class IntegrationsSettingEntity extends LinearEntityBase<IntegrationsSetting> {
    constructor(client: LinearSDK, entopts: any);
    make(this: IntegrationsSettingEntity): IntegrationsSettingEntity;
    load(this: any, reqmatch?: IntegrationsSettingLoadMatch, ctrl?: Control): Promise<IntegrationsSettingEntity>;
    create(this: any, reqdata?: IntegrationsSettingCreateData, ctrl?: Control): Promise<IntegrationsSettingEntity>;
    update(this: any, reqdata?: IntegrationsSettingUpdateData, ctrl?: Control): Promise<IntegrationsSettingEntity>;
}
export { IntegrationsSettingEntity };
