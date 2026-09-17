import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { AuditEntryType, AuditEntryTypeListMatch } from '../LinearTypes';
declare class AuditEntryTypeEntity extends LinearEntityBase<AuditEntryType> {
    constructor(client: LinearSDK, entopts: any);
    make(this: AuditEntryTypeEntity): AuditEntryTypeEntity;
    list(this: any, reqmatch?: AuditEntryTypeListMatch, ctrl?: Control): Promise<AuditEntryTypeEntity[]>;
}
export { AuditEntryTypeEntity };
