import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { TeamMembership, TeamMembershipLoadMatch, TeamMembershipListMatch, TeamMembershipCreateData, TeamMembershipUpdateData, TeamMembershipRemoveMatch } from '../LinearTypes';
declare class TeamMembershipEntity extends LinearEntityBase<TeamMembership> {
    constructor(client: LinearSDK, entopts: any);
    make(this: TeamMembershipEntity): TeamMembershipEntity;
    load(this: any, reqmatch?: TeamMembershipLoadMatch, ctrl?: Control): Promise<TeamMembershipEntity>;
    list(this: any, reqmatch?: TeamMembershipListMatch, ctrl?: Control): Promise<TeamMembershipEntity[]>;
    create(this: any, reqdata?: TeamMembershipCreateData, ctrl?: Control): Promise<TeamMembershipEntity>;
    update(this: any, reqdata?: TeamMembershipUpdateData, ctrl?: Control): Promise<TeamMembershipEntity>;
    remove(this: any, reqmatch?: TeamMembershipRemoveMatch, ctrl?: Control): Promise<TeamMembershipEntity>;
}
export { TeamMembershipEntity };
