import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { Reaction, ReactionCreateData, ReactionRemoveMatch } from '../LinearTypes';
declare class ReactionEntity extends LinearEntityBase<Reaction> {
    constructor(client: LinearSDK, entopts: any);
    make(this: ReactionEntity): ReactionEntity;
    create(this: any, reqdata?: ReactionCreateData, ctrl?: Control): Promise<ReactionEntity>;
    remove(this: any, reqmatch?: ReactionRemoveMatch, ctrl?: Control): Promise<ReactionEntity>;
}
export { ReactionEntity };
