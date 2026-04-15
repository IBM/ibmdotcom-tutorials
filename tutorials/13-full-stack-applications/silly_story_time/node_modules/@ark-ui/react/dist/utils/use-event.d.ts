type AnyFunction = (...args: any[]) => any;
type Options = {
    /**
     * Whether to use flushSync or not
     */
    sync?: boolean;
};
/**
 * Returns a memoized callback that will flushSync the callback if sync is true
 */
export declare function useEvent<T extends AnyFunction>(callback: T | undefined, opts?: Options): T;
export {};
