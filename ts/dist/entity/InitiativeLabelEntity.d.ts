import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { InitiativeLabel, InitiativeLabelLoadMatch, InitiativeLabelListMatch, InitiativeLabelCreateData, InitiativeLabelUpdateData, InitiativeLabelRemoveMatch } from '../LinearTypes';
declare class InitiativeLabelEntity extends LinearEntityBase<InitiativeLabel> {
    constructor(client: LinearSDK, entopts: any);
    make(this: InitiativeLabelEntity): InitiativeLabelEntity;
    load(this: any, reqmatch?: InitiativeLabelLoadMatch, ctrl?: Control): Promise<InitiativeLabelEntity>;
    list(this: any, reqmatch?: InitiativeLabelListMatch, ctrl?: Control): Promise<InitiativeLabelEntity[]>;
    create(this: any, reqdata?: InitiativeLabelCreateData, ctrl?: Control): Promise<InitiativeLabelEntity>;
    update(this: any, reqdata?: InitiativeLabelUpdateData, ctrl?: Control): Promise<InitiativeLabelEntity>;
    remove(this: any, reqmatch?: InitiativeLabelRemoveMatch, ctrl?: Control): Promise<InitiativeLabelEntity>;
}
export { InitiativeLabelEntity };
