export declare function mapEntries<A, B, K extends string | number | symbol>(obj: {
    [key in K]: A;
}, f: (key: K, val: A) => [K, B]): {
    [key in K]: B;
};
