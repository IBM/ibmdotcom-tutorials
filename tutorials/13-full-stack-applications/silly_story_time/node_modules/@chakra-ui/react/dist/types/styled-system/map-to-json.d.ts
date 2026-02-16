export type MapToRecord<K extends Map<string, any>> = {
    [P in keyof K]: K[P] extends Map<string, infer V> ? Record<string, V> : never;
};
export declare function mapToJson<T extends Map<string, any>>(map: T): MapToRecord<T>;
