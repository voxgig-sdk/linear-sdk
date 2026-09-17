import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { IssueImport, IssueImportCreateData, IssueImportUpdateData, IssueImportRemoveMatch } from '../LinearTypes';
declare class IssueImportEntity extends LinearEntityBase<IssueImport> {
    constructor(client: LinearSDK, entopts: any);
    make(this: IssueImportEntity): IssueImportEntity;
    create(this: any, reqdata?: IssueImportCreateData, ctrl?: Control): Promise<IssueImportEntity>;
    update(this: any, reqdata?: IssueImportUpdateData, ctrl?: Control): Promise<IssueImportEntity>;
    remove(this: any, reqmatch?: IssueImportRemoveMatch, ctrl?: Control): Promise<IssueImportEntity>;
}
export { IssueImportEntity };
