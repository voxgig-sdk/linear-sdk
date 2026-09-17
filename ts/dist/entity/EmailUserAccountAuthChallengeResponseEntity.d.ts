import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { EmailUserAccountAuthChallengeResponse, EmailUserAccountAuthChallengeResponseCreateData } from '../LinearTypes';
declare class EmailUserAccountAuthChallengeResponseEntity extends LinearEntityBase<EmailUserAccountAuthChallengeResponse> {
    constructor(client: LinearSDK, entopts: any);
    make(this: EmailUserAccountAuthChallengeResponseEntity): EmailUserAccountAuthChallengeResponseEntity;
    create(this: any, reqdata?: EmailUserAccountAuthChallengeResponseCreateData, ctrl?: Control): Promise<EmailUserAccountAuthChallengeResponseEntity>;
}
export { EmailUserAccountAuthChallengeResponseEntity };
