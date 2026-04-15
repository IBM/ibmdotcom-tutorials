import { memoize } from './memoize.js';
type Options = Omit<NonNullable<Parameters<typeof memoize>[1]>, 'noWeakMap'>;
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
export declare const memoizeWithArgs: <Args extends unknown[], Result>(fnWithArgs: (...args: Args) => Result, options?: Options) => (...args: Args) => Result;
export {};
