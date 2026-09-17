import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { GitHubIntegrationConnectDetail, GitHubIntegrationConnectDetailCreateData, GitHubIntegrationConnectDetailUpdateData } from '../LinearTypes';
declare class GitHubIntegrationConnectDetailEntity extends LinearEntityBase<GitHubIntegrationConnectDetail> {
    constructor(client: LinearSDK, entopts: any);
    make(this: GitHubIntegrationConnectDetailEntity): GitHubIntegrationConnectDetailEntity;
    create(this: any, reqdata?: GitHubIntegrationConnectDetailCreateData, ctrl?: Control): Promise<GitHubIntegrationConnectDetailEntity>;
    update(this: any, reqdata?: GitHubIntegrationConnectDetailUpdateData, ctrl?: Control): Promise<GitHubIntegrationConnectDetailEntity>;
}
export { GitHubIntegrationConnectDetailEntity };
