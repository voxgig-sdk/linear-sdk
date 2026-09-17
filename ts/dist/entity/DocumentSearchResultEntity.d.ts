import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { DocumentSearchResult, DocumentSearchResultListMatch } from '../LinearTypes';
declare class DocumentSearchResultEntity extends LinearEntityBase<DocumentSearchResult> {
    constructor(client: LinearSDK, entopts: any);
    make(this: DocumentSearchResultEntity): DocumentSearchResultEntity;
    list(this: any, reqmatch?: DocumentSearchResultListMatch, ctrl?: Control): Promise<DocumentSearchResultEntity[]>;
}
export { DocumentSearchResultEntity };
