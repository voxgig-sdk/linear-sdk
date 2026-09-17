import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { Diff, DiffLoadMatch } from '../LinearTypes';
declare class DiffEntity extends LinearEntityBase<Diff> {
    constructor(client: LinearSDK, entopts: any);
    make(this: DiffEntity): DiffEntity;
    load(this: any, reqmatch?: DiffLoadMatch, ctrl?: Control): Promise<DiffEntity>;
}
export { DiffEntity };
