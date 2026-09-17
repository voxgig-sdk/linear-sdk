import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { SlaConfiguration, SlaConfigurationListMatch } from '../LinearTypes';
declare class SlaConfigurationEntity extends LinearEntityBase<SlaConfiguration> {
    constructor(client: LinearSDK, entopts: any);
    make(this: SlaConfigurationEntity): SlaConfigurationEntity;
    list(this: any, reqmatch?: SlaConfigurationListMatch, ctrl?: Control): Promise<SlaConfigurationEntity[]>;
}
export { SlaConfigurationEntity };
