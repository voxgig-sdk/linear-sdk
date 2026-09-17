import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { InitiativeLeadTeamChangeImpact, InitiativeLeadTeamChangeImpactLoadMatch } from '../LinearTypes';
declare class InitiativeLeadTeamChangeImpactEntity extends LinearEntityBase<InitiativeLeadTeamChangeImpact> {
    constructor(client: LinearSDK, entopts: any);
    make(this: InitiativeLeadTeamChangeImpactEntity): InitiativeLeadTeamChangeImpactEntity;
    load(this: any, reqmatch?: InitiativeLeadTeamChangeImpactLoadMatch, ctrl?: Control): Promise<InitiativeLeadTeamChangeImpactEntity>;
}
export { InitiativeLeadTeamChangeImpactEntity };
