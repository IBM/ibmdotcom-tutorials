import { Ref } from 'react';
type PossibleRef<T> = Ref<T | null> | undefined;
export declare function composeRefs<T>(...refs: PossibleRef<T>[]): (node: T | null) => void;
export {};
