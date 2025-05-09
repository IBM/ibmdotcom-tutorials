"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceNewProxy = exports.getUntracked = exports.memoizeWithArgs = exports.memoize = void 0;
var memoize_js_1 = require("./memoize.js");
Object.defineProperty(exports, "memoize", { enumerable: true, get: function () { return memoize_js_1.memoize; } });
var memoizeWithArgs_js_1 = require("./memoizeWithArgs.js");
Object.defineProperty(exports, "memoizeWithArgs", { enumerable: true, get: function () { return memoizeWithArgs_js_1.memoizeWithArgs; } });
/**
 * This is to unwrap a proxy object and return an original object.
 * It returns null if not relevant.
 *
 * [Notes]
 * This function is for debugging purpose.
 * It's not supposed to be used in production and it's subject to change.
 *
 * @example
 * import { memoize, getUntracked } from 'proxy-memoize';
 *
 * const fn = memoize(obj => {
 *   console.log(getUntracked(obj));
 *   return { sum: obj.a + obj.b, diff: obj.a - obj.b };
 * });
 */
var proxy_compare_1 = require("proxy-compare");
Object.defineProperty(exports, "getUntracked", { enumerable: true, get: function () { return proxy_compare_1.getUntracked; } });
/**
 * This is to replace newProxy function in upstream library, proxy-compare.
 * Use it at your own risk.
 *
 * [Notes]
 * See related discussoin: https://github.com/dai-shi/proxy-compare/issues/40
 */
var proxy_compare_2 = require("proxy-compare");
Object.defineProperty(exports, "replaceNewProxy", { enumerable: true, get: function () { return proxy_compare_2.replaceNewProxy; } });
