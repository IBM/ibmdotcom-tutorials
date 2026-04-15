export interface CssVar {
    var: string;
    ref: string;
}
export interface CssVarOptions {
    fallback?: string;
    prefix?: string;
}
export declare function cssVar(name: string, options?: CssVarOptions): CssVar;
