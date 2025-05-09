import type { SystemConfig, SystemContext } from "./types";
export declare function createSystem(...configs: SystemConfig[]): SystemContext;
export declare const isValidSystem: (mod: unknown) => mod is SystemContext;
