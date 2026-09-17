import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { EmailIntakeAddress, EmailIntakeAddressLoadMatch, EmailIntakeAddressCreateData, EmailIntakeAddressUpdateData, EmailIntakeAddressRemoveMatch } from '../LinearTypes';
declare class EmailIntakeAddressEntity extends LinearEntityBase<EmailIntakeAddress> {
    constructor(client: LinearSDK, entopts: any);
    make(this: EmailIntakeAddressEntity): EmailIntakeAddressEntity;
    load(this: any, reqmatch?: EmailIntakeAddressLoadMatch, ctrl?: Control): Promise<EmailIntakeAddressEntity>;
    create(this: any, reqdata?: EmailIntakeAddressCreateData, ctrl?: Control): Promise<EmailIntakeAddressEntity>;
    update(this: any, reqdata?: EmailIntakeAddressUpdateData, ctrl?: Control): Promise<EmailIntakeAddressEntity>;
    remove(this: any, reqmatch?: EmailIntakeAddressRemoveMatch, ctrl?: Control): Promise<EmailIntakeAddressEntity>;
}
export { EmailIntakeAddressEntity };
