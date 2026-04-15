/**
 * Recursively parse a string to extract Panda token references (curly or with the `token` function syntax)
 * Allows nested token references, e.g. `token(colors.xxx.yyy, token(colors.aaa.bbb, blue))`
 * Properly ignore CSS vars in fallback syntax, e.g. `token(colors.xxx.yyy, var(--some-var, var(--can-be-nested, blue)))`
 */
export declare const expandTokenReferences: (str: string, resolve: (path: string) => string | undefined) => string;
