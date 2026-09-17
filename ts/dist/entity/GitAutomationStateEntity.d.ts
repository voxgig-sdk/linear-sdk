import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { GitAutomationState, GitAutomationStateCreateData, GitAutomationStateUpdateData, GitAutomationStateRemoveMatch } from '../LinearTypes';
declare class GitAutomationStateEntity extends LinearEntityBase<GitAutomationState> {
    constructor(client: LinearSDK, entopts: any);
    make(this: GitAutomationStateEntity): GitAutomationStateEntity;
    create(this: any, reqdata?: GitAutomationStateCreateData, ctrl?: Control): Promise<GitAutomationStateEntity>;
    update(this: any, reqdata?: GitAutomationStateUpdateData, ctrl?: Control): Promise<GitAutomationStateEntity>;
    remove(this: any, reqmatch?: GitAutomationStateRemoveMatch, ctrl?: Control): Promise<GitAutomationStateEntity>;
}
export { GitAutomationStateEntity };
