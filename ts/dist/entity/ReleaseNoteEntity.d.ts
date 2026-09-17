import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { ReleaseNote, ReleaseNoteLoadMatch, ReleaseNoteListMatch, ReleaseNoteCreateData, ReleaseNoteUpdateData, ReleaseNoteRemoveMatch } from '../LinearTypes';
declare class ReleaseNoteEntity extends LinearEntityBase<ReleaseNote> {
    constructor(client: LinearSDK, entopts: any);
    make(this: ReleaseNoteEntity): ReleaseNoteEntity;
    load(this: any, reqmatch?: ReleaseNoteLoadMatch, ctrl?: Control): Promise<ReleaseNoteEntity>;
    list(this: any, reqmatch?: ReleaseNoteListMatch, ctrl?: Control): Promise<ReleaseNoteEntity[]>;
    create(this: any, reqdata?: ReleaseNoteCreateData, ctrl?: Control): Promise<ReleaseNoteEntity>;
    update(this: any, reqdata?: ReleaseNoteUpdateData, ctrl?: Control): Promise<ReleaseNoteEntity>;
    remove(this: any, reqmatch?: ReleaseNoteRemoveMatch, ctrl?: Control): Promise<ReleaseNoteEntity>;
}
export { ReleaseNoteEntity };
