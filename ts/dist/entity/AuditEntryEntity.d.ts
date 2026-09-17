import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { AuditEntry, AuditEntryListMatch } from '../LinearTypes';
declare class AuditEntryEntity extends LinearEntityBase<AuditEntry> {
    constructor(client: LinearSDK, entopts: any);
    make(this: AuditEntryEntity): AuditEntryEntity;
    list(this: any, reqmatch?: AuditEntryListMatch, ctrl?: Control): Promise<AuditEntryEntity[]>;
}
export { AuditEntryEntity };
