import type { SemanticTokenDefinition, TokenCategory, TokenDefinition, TokenDictionary } from "./types";
interface Options {
    prefix?: string;
    breakpoints?: Record<string, string>;
    tokens?: TokenDefinition;
    semanticTokens?: SemanticTokenDefinition;
}
export declare function createTokenDictionary(options: Options): TokenDictionary;
export declare const tokenCategories: TokenCategory[];
export {};
