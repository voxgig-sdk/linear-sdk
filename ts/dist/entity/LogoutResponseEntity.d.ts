import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { LogoutResponse, LogoutResponseCreateData, LogoutResponseUpdateData } from '../LinearTypes';
declare class LogoutResponseEntity extends LinearEntityBase<LogoutResponse> {
    constructor(client: LinearSDK, entopts: any);
    make(this: LogoutResponseEntity): LogoutResponseEntity;
    create(this: any, reqdata?: LogoutResponseCreateData, ctrl?: Control): Promise<LogoutResponseEntity>;
    update(this: any, reqdata?: LogoutResponseUpdateData, ctrl?: Control): Promise<LogoutResponseEntity>;
}
export { LogoutResponseEntity };
