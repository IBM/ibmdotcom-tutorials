import type { PropertyTransform, TransformArgs } from "./types";
export declare const colorMix: (value: string, token: TransformArgs["token"]) => {
    invalid: boolean;
    value: string;
    color?: undefined;
} | {
    invalid: boolean;
    color: string;
    value: string;
};
export declare const createColorMixTransform: (prop: string) => PropertyTransform;
