export declare const isObject: (v: any) => v is Record<string, any>;
export declare const isCssVar: (v: string) => boolean;
export declare const isString: (v: any) => v is string;
type AnyFunction = (...args: any[]) => any;
export declare const isFunction: (v: any) => v is AnyFunction;
export {};
