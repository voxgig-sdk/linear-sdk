import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { Favorite, FavoriteLoadMatch, FavoriteListMatch, FavoriteCreateData, FavoriteUpdateData, FavoriteRemoveMatch } from '../LinearTypes';
declare class FavoriteEntity extends LinearEntityBase<Favorite> {
    constructor(client: LinearSDK, entopts: any);
    make(this: FavoriteEntity): FavoriteEntity;
    load(this: any, reqmatch?: FavoriteLoadMatch, ctrl?: Control): Promise<FavoriteEntity>;
    list(this: any, reqmatch?: FavoriteListMatch, ctrl?: Control): Promise<FavoriteEntity[]>;
    create(this: any, reqdata?: FavoriteCreateData, ctrl?: Control): Promise<FavoriteEntity>;
    update(this: any, reqdata?: FavoriteUpdateData, ctrl?: Control): Promise<FavoriteEntity>;
    remove(this: any, reqmatch?: FavoriteRemoveMatch, ctrl?: Control): Promise<FavoriteEntity>;
}
export { FavoriteEntity };
