import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { Application, ApplicationLoadMatch } from '../LinearTypes';
declare class ApplicationEntity extends LinearEntityBase<Application> {
    constructor(client: LinearSDK, entopts: any);
    make(this: ApplicationEntity): ApplicationEntity;
    load(this: any, reqmatch?: ApplicationLoadMatch, ctrl?: Control): Promise<ApplicationEntity>;
}
export { ApplicationEntity };
