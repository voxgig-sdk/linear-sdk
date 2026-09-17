import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { AgentActivity, AgentActivityLoadMatch, AgentActivityListMatch, AgentActivityCreateData, AgentActivityUpdateData } from '../LinearTypes';
declare class AgentActivityEntity extends LinearEntityBase<AgentActivity> {
    constructor(client: LinearSDK, entopts: any);
    make(this: AgentActivityEntity): AgentActivityEntity;
    load(this: any, reqmatch?: AgentActivityLoadMatch, ctrl?: Control): Promise<AgentActivityEntity>;
    list(this: any, reqmatch?: AgentActivityListMatch, ctrl?: Control): Promise<AgentActivityEntity[]>;
    create(this: any, reqdata?: AgentActivityCreateData, ctrl?: Control): Promise<AgentActivityEntity>;
    update(this: any, reqdata?: AgentActivityUpdateData, ctrl?: Control): Promise<AgentActivityEntity>;
}
export { AgentActivityEntity };
