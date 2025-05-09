type Predicate<R = any> = (value: any, path: string[]) => R;
export type MappedObject<T, K> = {
    [Prop in keyof T]: T[Prop] extends Array<any> ? MappedObject<T[Prop][number], K>[] : T[Prop] extends Record<string, unknown> ? MappedObject<T[Prop], K> : K;
};
export type WalkObjectStopFn = (value: any, path: string[]) => boolean;
export interface WalkObjectOptions {
    stop?: WalkObjectStopFn;
    getKey?(prop: string, value: any): string;
}
export declare function walkObject<T, K>(target: T, predicate: Predicate<K>, options?: WalkObjectOptions): MappedObject<T, ReturnType<Predicate<K>>>;
export declare function mapObject(obj: any, fn: (value: any) => any): any;
export {};
