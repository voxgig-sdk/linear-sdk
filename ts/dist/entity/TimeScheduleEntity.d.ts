import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { TimeSchedule, TimeScheduleLoadMatch, TimeScheduleListMatch, TimeScheduleCreateData, TimeScheduleUpdateData, TimeScheduleRemoveMatch } from '../LinearTypes';
declare class TimeScheduleEntity extends LinearEntityBase<TimeSchedule> {
    constructor(client: LinearSDK, entopts: any);
    make(this: TimeScheduleEntity): TimeScheduleEntity;
    load(this: any, reqmatch?: TimeScheduleLoadMatch, ctrl?: Control): Promise<TimeScheduleEntity>;
    list(this: any, reqmatch?: TimeScheduleListMatch, ctrl?: Control): Promise<TimeScheduleEntity[]>;
    create(this: any, reqdata?: TimeScheduleCreateData, ctrl?: Control): Promise<TimeScheduleEntity>;
    update(this: any, reqdata?: TimeScheduleUpdateData, ctrl?: Control): Promise<TimeScheduleEntity>;
    remove(this: any, reqmatch?: TimeScheduleRemoveMatch, ctrl?: Control): Promise<TimeScheduleEntity>;
}
export { TimeScheduleEntity };
