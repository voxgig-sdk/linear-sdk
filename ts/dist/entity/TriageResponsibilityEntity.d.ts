import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { TriageResponsibility, TriageResponsibilityLoadMatch, TriageResponsibilityListMatch, TriageResponsibilityCreateData, TriageResponsibilityUpdateData, TriageResponsibilityRemoveMatch } from '../LinearTypes';
declare class TriageResponsibilityEntity extends LinearEntityBase<TriageResponsibility> {
    constructor(client: LinearSDK, entopts: any);
    make(this: TriageResponsibilityEntity): TriageResponsibilityEntity;
    load(this: any, reqmatch?: TriageResponsibilityLoadMatch, ctrl?: Control): Promise<TriageResponsibilityEntity>;
    list(this: any, reqmatch?: TriageResponsibilityListMatch, ctrl?: Control): Promise<TriageResponsibilityEntity[]>;
    create(this: any, reqdata?: TriageResponsibilityCreateData, ctrl?: Control): Promise<TriageResponsibilityEntity>;
    update(this: any, reqdata?: TriageResponsibilityUpdateData, ctrl?: Control): Promise<TriageResponsibilityEntity>;
    remove(this: any, reqmatch?: TriageResponsibilityRemoveMatch, ctrl?: Control): Promise<TriageResponsibilityEntity>;
}
export { TriageResponsibilityEntity };
