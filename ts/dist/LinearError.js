"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinearError = void 0;
class LinearError extends Error {
    isLinearError = true;
    sdk = 'Linear';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.LinearError = LinearError;
//# sourceMappingURL=LinearError.js.map