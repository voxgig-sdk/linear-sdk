import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { IssueToRelease, IssueToReleaseLoadMatch, IssueToReleaseListMatch, IssueToReleaseCreateData, IssueToReleaseRemoveMatch } from '../LinearTypes';
declare class IssueToReleaseEntity extends LinearEntityBase<IssueToRelease> {
    constructor(client: LinearSDK, entopts: any);
    make(this: IssueToReleaseEntity): IssueToReleaseEntity;
    load(this: any, reqmatch?: IssueToReleaseLoadMatch, ctrl?: Control): Promise<IssueToReleaseEntity>;
    list(this: any, reqmatch?: IssueToReleaseListMatch, ctrl?: Control): Promise<IssueToReleaseEntity[]>;
    create(this: any, reqdata?: IssueToReleaseCreateData, ctrl?: Control): Promise<IssueToReleaseEntity>;
    remove(this: any, reqmatch?: IssueToReleaseRemoveMatch, ctrl?: Control): Promise<IssueToReleaseEntity>;
}
export { IssueToReleaseEntity };
