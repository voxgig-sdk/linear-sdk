import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { Roadmap, RoadmapLoadMatch, RoadmapListMatch, RoadmapCreateData, RoadmapUpdateData, RoadmapRemoveMatch } from '../LinearTypes';
declare class RoadmapEntity extends LinearEntityBase<Roadmap> {
    constructor(client: LinearSDK, entopts: any);
    make(this: RoadmapEntity): RoadmapEntity;
    load(this: any, reqmatch?: RoadmapLoadMatch, ctrl?: Control): Promise<RoadmapEntity>;
    list(this: any, reqmatch?: RoadmapListMatch, ctrl?: Control): Promise<RoadmapEntity[]>;
    create(this: any, reqdata?: RoadmapCreateData, ctrl?: Control): Promise<RoadmapEntity>;
    update(this: any, reqdata?: RoadmapUpdateData, ctrl?: Control): Promise<RoadmapEntity>;
    remove(this: any, reqmatch?: RoadmapRemoveMatch, ctrl?: Control): Promise<RoadmapEntity>;
}
export { RoadmapEntity };
