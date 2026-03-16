import type { AnyFunction } from "./types";
export declare function callAll<T extends AnyFunction>(...fns: (T | undefined)[]): (...args: Parameters<T>) => void;
