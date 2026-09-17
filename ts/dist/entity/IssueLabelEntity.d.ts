import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { IssueLabel, IssueLabelLoadMatch, IssueLabelListMatch, IssueLabelCreateData, IssueLabelUpdateData, IssueLabelRemoveMatch } from '../LinearTypes';
declare class IssueLabelEntity extends LinearEntityBase<IssueLabel> {
    constructor(client: LinearSDK, entopts: any);
    make(this: IssueLabelEntity): IssueLabelEntity;
    load(this: any, reqmatch?: IssueLabelLoadMatch, ctrl?: Control): Promise<IssueLabelEntity>;
    list(this: any, reqmatch?: IssueLabelListMatch, ctrl?: Control): Promise<IssueLabelEntity[]>;
    create(this: any, reqdata?: IssueLabelCreateData, ctrl?: Control): Promise<IssueLabelEntity>;
    update(this: any, reqdata?: IssueLabelUpdateData, ctrl?: Control): Promise<IssueLabelEntity>;
    remove(this: any, reqmatch?: IssueLabelRemoveMatch, ctrl?: Control): Promise<IssueLabelEntity>;
}
export { IssueLabelEntity };
