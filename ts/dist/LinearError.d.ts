import { Context } from './Context';
declare class LinearError extends Error {
    isLinearError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { LinearError };
