import { type Dict } from "../utils";
export interface UseBreakpointOptions {
    fallback?: string;
    ssr?: boolean;
    getWindow?: () => typeof window;
    breakpoints?: string[];
}
export declare function useBreakpoint(options?: UseBreakpointOptions): string;
export type UseBreakpointValueOptions = Omit<UseBreakpointOptions, "breakpoints">;
type Value<T> = Dict<T> | Array<T | null>;
export declare function useBreakpointValue<T = any>(value: Value<T>, opts?: UseBreakpointValueOptions): T | undefined;
export {};
