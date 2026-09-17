import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { Attachment, AttachmentLoadMatch, AttachmentListMatch, AttachmentCreateData, AttachmentUpdateData, AttachmentRemoveMatch } from '../LinearTypes';
declare class AttachmentEntity extends LinearEntityBase<Attachment> {
    constructor(client: LinearSDK, entopts: any);
    make(this: AttachmentEntity): AttachmentEntity;
    load(this: any, reqmatch?: AttachmentLoadMatch, ctrl?: Control): Promise<AttachmentEntity>;
    list(this: any, reqmatch?: AttachmentListMatch, ctrl?: Control): Promise<AttachmentEntity[]>;
    create(this: any, reqdata?: AttachmentCreateData, ctrl?: Control): Promise<AttachmentEntity>;
    update(this: any, reqdata?: AttachmentUpdateData, ctrl?: Control): Promise<AttachmentEntity>;
    remove(this: any, reqmatch?: AttachmentRemoveMatch, ctrl?: Control): Promise<AttachmentEntity>;
}
export { AttachmentEntity };
