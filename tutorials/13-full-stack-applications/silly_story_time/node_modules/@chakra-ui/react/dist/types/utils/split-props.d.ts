import type { Dict } from "./types";
type PredicateFn<T> = (key: T) => boolean;
export interface SplitPropsFn {
    <T extends Dict, K extends keyof T>(props: T, keys: K[]): [Pick<T, K>, Omit<T, K>];
    <T extends Dict, K extends PredicateFn<keyof T>>(props: T, keys: K): [Dict, Dict];
}
export declare const splitProps: SplitPropsFn;
export declare const createSplitProps: <T>(keys: (keyof T)[]) => <Props extends Partial<T>>(props: Props) => [T, Omit<Props, keyof T>];
export {};
