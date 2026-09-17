import { LinearEntityBase } from '../LinearEntityBase';
import type { LinearSDK } from '../LinearSDK';
import type { Control } from '../types';
import type { Emoji, EmojiLoadMatch, EmojiListMatch, EmojiCreateData, EmojiRemoveMatch } from '../LinearTypes';
declare class EmojiEntity extends LinearEntityBase<Emoji> {
    constructor(client: LinearSDK, entopts: any);
    make(this: EmojiEntity): EmojiEntity;
    load(this: any, reqmatch?: EmojiLoadMatch, ctrl?: Control): Promise<EmojiEntity>;
    list(this: any, reqmatch?: EmojiListMatch, ctrl?: Control): Promise<EmojiEntity[]>;
    create(this: any, reqdata?: EmojiCreateData, ctrl?: Control): Promise<EmojiEntity>;
    remove(this: any, reqmatch?: EmojiRemoveMatch, ctrl?: Control): Promise<EmojiEntity>;
}
export { EmojiEntity };
