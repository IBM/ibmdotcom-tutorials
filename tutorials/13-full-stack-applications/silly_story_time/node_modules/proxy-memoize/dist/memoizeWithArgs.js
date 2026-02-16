import { memoize } from './memoize.js';
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
export const memoizeWithArgs = (fnWithArgs, options) => {
    const fn = memoize((args) => fnWithArgs(...args), {
        ...options,
        noWeakMap: true,
    });
    return (...args) => fn(args);
};
