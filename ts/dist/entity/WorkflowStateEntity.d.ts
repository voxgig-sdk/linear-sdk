import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { WorkflowState, WorkflowStateLoadMatch, WorkflowStateListMatch, WorkflowStateCreateData, WorkflowStateUpdateData } from '../LinearTypes';
declare class WorkflowStateEntity extends LinearEntityBase<WorkflowState> {
    constructor(client: LinearSDK, entopts: any);
    make(this: WorkflowStateEntity): WorkflowStateEntity;
    load(this: any, reqmatch?: WorkflowStateLoadMatch, ctrl?: Control): Promise<WorkflowStateEntity>;
    list(this: any, reqmatch?: WorkflowStateListMatch, ctrl?: Control): Promise<WorkflowStateEntity[]>;
    create(this: any, reqdata?: WorkflowStateCreateData, ctrl?: Control): Promise<WorkflowStateEntity>;
    update(this: any, reqdata?: WorkflowStateUpdateData, ctrl?: Control): Promise<WorkflowStateEntity>;
}
export { WorkflowStateEntity };
