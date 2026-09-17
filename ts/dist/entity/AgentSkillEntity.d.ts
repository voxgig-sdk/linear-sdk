import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { AgentSkill, AgentSkillLoadMatch, AgentSkillListMatch, AgentSkillCreateData, AgentSkillUpdateData, AgentSkillRemoveMatch } from '../LinearTypes';
declare class AgentSkillEntity extends LinearEntityBase<AgentSkill> {
    constructor(client: LinearSDK, entopts: any);
    make(this: AgentSkillEntity): AgentSkillEntity;
    load(this: any, reqmatch?: AgentSkillLoadMatch, ctrl?: Control): Promise<AgentSkillEntity>;
    list(this: any, reqmatch?: AgentSkillListMatch, ctrl?: Control): Promise<AgentSkillEntity[]>;
    create(this: any, reqdata?: AgentSkillCreateData, ctrl?: Control): Promise<AgentSkillEntity>;
    update(this: any, reqdata?: AgentSkillUpdateData, ctrl?: Control): Promise<AgentSkillEntity>;
    remove(this: any, reqmatch?: AgentSkillRemoveMatch, ctrl?: Control): Promise<AgentSkillEntity>;
}
export { AgentSkillEntity };
