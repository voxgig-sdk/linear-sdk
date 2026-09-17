import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { UserSetting, UserSettingLoadMatch, UserSettingCreateData, UserSettingUpdateData } from '../LinearTypes';
declare class UserSettingEntity extends LinearEntityBase<UserSetting> {
    constructor(client: LinearSDK, entopts: any);
    make(this: UserSettingEntity): UserSettingEntity;
    load(this: any, reqmatch?: UserSettingLoadMatch, ctrl?: Control): Promise<UserSettingEntity>;
    create(this: any, reqdata?: UserSettingCreateData, ctrl?: Control): Promise<UserSettingEntity>;
    update(this: any, reqdata?: UserSettingUpdateData, ctrl?: Control): Promise<UserSettingEntity>;
}
export { UserSettingEntity };
