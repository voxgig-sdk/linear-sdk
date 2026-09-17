import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { IssueSearchResult, IssueSearchResultListMatch } from '../LinearTypes';
declare class IssueSearchResultEntity extends LinearEntityBase<IssueSearchResult> {
    constructor(client: LinearSDK, entopts: any);
    make(this: IssueSearchResultEntity): IssueSearchResultEntity;
    list(this: any, reqmatch?: IssueSearchResultListMatch, ctrl?: Control): Promise<IssueSearchResultEntity[]>;
}
export { IssueSearchResultEntity };
