/**
 * Create a memoized function
 *
 * @example
 * import { memoize } from 'proxy-memoize';
 *
 * const fn = memoize(obj => ({ sum: obj.a + obj.b, diff: obj.a - obj.b }));
 *
 * @param options
 * @param options.size - (default: 1)
 * @param options.noWeakMap - disable tier-1 cache (default: false)
 */
export declare function memoize<Obj extends object, Result>(fn: (obj: Obj) => Result, options?: {
    size?: number;
    noWeakMap?: boolean;
}): (obj: Obj) => Result;
