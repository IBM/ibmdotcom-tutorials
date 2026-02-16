import type { TokenDictionary, Utility, UtilityConfig } from "./types";
interface Options {
    tokens: TokenDictionary;
    config: UtilityConfig;
}
export declare function createUtility(options: Options): Utility;
export {};
