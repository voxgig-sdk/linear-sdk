import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { AuthenticationSessionResponse, AuthenticationSessionResponseListMatch } from '../LinearTypes';
declare class AuthenticationSessionResponseEntity extends LinearEntityBase<AuthenticationSessionResponse> {
    constructor(client: LinearSDK, entopts: any);
    make(this: AuthenticationSessionResponseEntity): AuthenticationSessionResponseEntity;
    list(this: any, reqmatch?: AuthenticationSessionResponseListMatch, ctrl?: Control): Promise<AuthenticationSessionResponseEntity[]>;
}
export { AuthenticationSessionResponseEntity };
