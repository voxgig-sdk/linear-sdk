import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { UploadFile, UploadFileCreateData } from '../LinearTypes';
declare class UploadFileEntity extends LinearEntityBase<UploadFile> {
    constructor(client: LinearSDK, entopts: any);
    make(this: UploadFileEntity): UploadFileEntity;
    create(this: any, reqdata?: UploadFileCreateData, ctrl?: Control): Promise<UploadFileEntity>;
}
export { UploadFileEntity };
