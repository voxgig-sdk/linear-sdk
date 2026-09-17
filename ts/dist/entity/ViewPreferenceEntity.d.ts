import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { ViewPreference, ViewPreferenceLoadMatch, ViewPreferenceCreateData, ViewPreferenceUpdateData, ViewPreferenceRemoveMatch } from '../LinearTypes';
declare class ViewPreferenceEntity extends LinearEntityBase<ViewPreference> {
    constructor(client: LinearSDK, entopts: any);
    make(this: ViewPreferenceEntity): ViewPreferenceEntity;
    load(this: any, reqmatch?: ViewPreferenceLoadMatch, ctrl?: Control): Promise<ViewPreferenceEntity>;
    create(this: any, reqdata?: ViewPreferenceCreateData, ctrl?: Control): Promise<ViewPreferenceEntity>;
    update(this: any, reqdata?: ViewPreferenceUpdateData, ctrl?: Control): Promise<ViewPreferenceEntity>;
    remove(this: any, reqmatch?: ViewPreferenceRemoveMatch, ctrl?: Control): Promise<ViewPreferenceEntity>;
}
export { ViewPreferenceEntity };
