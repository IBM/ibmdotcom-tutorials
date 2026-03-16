export declare function omit<T extends Record<string, any>, K extends keyof T>(object: T, keysToOmit?: K[] | readonly K[]): Omit<T, K>;
