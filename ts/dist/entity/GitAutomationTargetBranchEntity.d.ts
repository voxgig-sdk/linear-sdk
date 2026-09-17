import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { GitAutomationTargetBranch, GitAutomationTargetBranchCreateData, GitAutomationTargetBranchUpdateData, GitAutomationTargetBranchRemoveMatch } from '../LinearTypes';
declare class GitAutomationTargetBranchEntity extends LinearEntityBase<GitAutomationTargetBranch> {
    constructor(client: LinearSDK, entopts: any);
    make(this: GitAutomationTargetBranchEntity): GitAutomationTargetBranchEntity;
    create(this: any, reqdata?: GitAutomationTargetBranchCreateData, ctrl?: Control): Promise<GitAutomationTargetBranchEntity>;
    update(this: any, reqdata?: GitAutomationTargetBranchUpdateData, ctrl?: Control): Promise<GitAutomationTargetBranchEntity>;
    remove(this: any, reqmatch?: GitAutomationTargetBranchRemoveMatch, ctrl?: Control): Promise<GitAutomationTargetBranchEntity>;
}
export { GitAutomationTargetBranchEntity };
