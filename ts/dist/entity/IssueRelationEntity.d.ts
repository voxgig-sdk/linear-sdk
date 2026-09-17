import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { IssueRelation, IssueRelationLoadMatch, IssueRelationListMatch, IssueRelationCreateData, IssueRelationUpdateData, IssueRelationRemoveMatch } from '../LinearTypes';
declare class IssueRelationEntity extends LinearEntityBase<IssueRelation> {
    constructor(client: LinearSDK, entopts: any);
    make(this: IssueRelationEntity): IssueRelationEntity;
    load(this: any, reqmatch?: IssueRelationLoadMatch, ctrl?: Control): Promise<IssueRelationEntity>;
    list(this: any, reqmatch?: IssueRelationListMatch, ctrl?: Control): Promise<IssueRelationEntity[]>;
    create(this: any, reqdata?: IssueRelationCreateData, ctrl?: Control): Promise<IssueRelationEntity>;
    update(this: any, reqdata?: IssueRelationUpdateData, ctrl?: Control): Promise<IssueRelationEntity>;
    remove(this: any, reqmatch?: IssueRelationRemoveMatch, ctrl?: Control): Promise<IssueRelationEntity>;
}
export { IssueRelationEntity };
