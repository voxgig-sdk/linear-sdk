import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { AuthResolverResponse, AuthResolverResponseLoadMatch, AuthResolverResponseCreateData, AuthResolverResponseUpdateData } from '../LinearTypes';
declare class AuthResolverResponseEntity extends LinearEntityBase<AuthResolverResponse> {
    constructor(client: LinearSDK, entopts: any);
    make(this: AuthResolverResponseEntity): AuthResolverResponseEntity;
    load(this: any, reqmatch?: AuthResolverResponseLoadMatch, ctrl?: Control): Promise<AuthResolverResponseEntity>;
    create(this: any, reqdata?: AuthResolverResponseCreateData, ctrl?: Control): Promise<AuthResolverResponseEntity>;
    update(this: any, reqdata?: AuthResolverResponseUpdateData, ctrl?: Control): Promise<AuthResolverResponseEntity>;
}
export { AuthResolverResponseEntity };
