import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { PasskeyLoginStartResponse, PasskeyLoginStartResponseUpdateData } from '../LinearTypes';
declare class PasskeyLoginStartResponseEntity extends LinearEntityBase<PasskeyLoginStartResponse> {
    constructor(client: LinearSDK, entopts: any);
    make(this: PasskeyLoginStartResponseEntity): PasskeyLoginStartResponseEntity;
    update(this: any, reqdata?: PasskeyLoginStartResponseUpdateData, ctrl?: Control): Promise<PasskeyLoginStartResponseEntity>;
}
export { PasskeyLoginStartResponseEntity };
