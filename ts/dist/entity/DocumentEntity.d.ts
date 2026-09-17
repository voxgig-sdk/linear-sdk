import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { Document, DocumentLoadMatch, DocumentListMatch, DocumentCreateData, DocumentUpdateData, DocumentRemoveMatch } from '../LinearTypes';
declare class DocumentEntity extends LinearEntityBase<Document> {
    constructor(client: LinearSDK, entopts: any);
    make(this: DocumentEntity): DocumentEntity;
    load(this: any, reqmatch?: DocumentLoadMatch, ctrl?: Control): Promise<DocumentEntity>;
    list(this: any, reqmatch?: DocumentListMatch, ctrl?: Control): Promise<DocumentEntity[]>;
    create(this: any, reqdata?: DocumentCreateData, ctrl?: Control): Promise<DocumentEntity>;
    update(this: any, reqdata?: DocumentUpdateData, ctrl?: Control): Promise<DocumentEntity>;
    remove(this: any, reqmatch?: DocumentRemoveMatch, ctrl?: Control): Promise<DocumentEntity>;
}
export { DocumentEntity };
