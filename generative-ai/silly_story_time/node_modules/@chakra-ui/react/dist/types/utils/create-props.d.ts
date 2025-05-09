type StrictKeys<K extends (keyof T)[], T> = K extends (keyof T)[] ? [keyof T] extends [K[number]] ? unknown : `Missing required keys: ${Exclude<keyof T, K[number]>}` : never;
export declare const createProps: <T extends Record<never, never>>() => <K extends (keyof T)[]>(props: K & StrictKeys<K, T>) => (keyof T)[];
export {};
