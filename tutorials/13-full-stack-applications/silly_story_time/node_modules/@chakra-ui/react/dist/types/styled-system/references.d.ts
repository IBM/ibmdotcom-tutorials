import type { Token } from "./types";
export declare const TOKEN_PATH_REGEX: RegExp;
export declare const getReferences: (value: string) => string[];
export declare const hasReference: (value: string) => boolean;
export declare function expandReferences(token: Token): any;
