import { type WalkObjectStopFn } from "./walk-object";
export declare function flatten(values: Record<string, Record<string, any>>, stop?: WalkObjectStopFn): Record<string, any>;
