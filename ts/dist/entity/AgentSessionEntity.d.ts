import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { AgentSession, AgentSessionLoadMatch, AgentSessionListMatch, AgentSessionCreateData, AgentSessionUpdateData } from '../LinearTypes';
declare class AgentSessionEntity extends LinearEntityBase<AgentSession> {
    constructor(client: LinearSDK, entopts: any);
    make(this: AgentSessionEntity): AgentSessionEntity;
    load(this: any, reqmatch?: AgentSessionLoadMatch, ctrl?: Control): Promise<AgentSessionEntity>;
    list(this: any, reqmatch?: AgentSessionListMatch, ctrl?: Control): Promise<AgentSessionEntity[]>;
    create(this: any, reqdata?: AgentSessionCreateData, ctrl?: Control): Promise<AgentSessionEntity>;
    update(this: any, reqdata?: AgentSessionUpdateData, ctrl?: Control): Promise<AgentSessionEntity>;
}
export { AgentSessionEntity };
