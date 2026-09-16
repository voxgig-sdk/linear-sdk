import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { Team, TeamLoadMatch, TeamListMatch } from '../LinearTypes';
declare class TeamEntity extends LinearEntityBase<Team> {
    constructor(client: LinearSDK, entopts: any);
    make(this: TeamEntity): TeamEntity;
    load(this: any, reqmatch?: TeamLoadMatch, ctrl?: Control): Promise<TeamEntity>;
    list(this: any, reqmatch?: TeamListMatch, ctrl?: Control): Promise<TeamEntity[]>;
}
export { TeamEntity };
