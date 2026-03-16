export declare function isHtmlProp(prop: unknown): boolean;
interface ResolvedPropsResult {
    styles: Record<string, any>;
    props: Record<string, any>;
}
export declare function useResolvedProps(inProps: any, cvaRecipe: any, shouldForwardProps: any): ResolvedPropsResult;
export {};
