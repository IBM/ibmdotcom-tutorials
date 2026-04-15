"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoizeWithArgs = void 0;
const memoize_js_1 = require("./memoize.js");
/**
 * Create a memoized function with args
 *
 * @example
 * import { memoizeWithArgs } from 'proxy-memoize';
 *
 * const fn = memoizeWithArgs((a, b) => ({ sum: a.v + b.v, diff: a.v - b.v }));
 *
 * @param options
 * @param options.size - (default: 1)
 */
const memoizeWithArgs = (fnWithArgs, options) => {
    const fn = (0, memoize_js_1.memoize)((args) => fnWithArgs(...args), {
        ...options,
        noWeakMap: true,
    });
    return (...args) => fn(args);
};
exports.memoizeWithArgs = memoizeWithArgs;
