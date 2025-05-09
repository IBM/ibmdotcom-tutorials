import type { CompositionStyles } from "./composition";
import type { GlobalStyleIdentityFn, KeyframeIdentityFn, SystemStyleIdentityFn } from "./css.types";
import type { RecipeIdentityFn, SlotRecipeIdentityFn } from "./recipe.types";
import type { ConditionRecord, SemanticTokenDefinition, SystemConfig, TokenDefinition } from "./types";
export declare const defineConditions: <T extends ConditionRecord>(v: T) => T;
export declare const defineRecipe: RecipeIdentityFn;
export declare const defineSlotRecipe: SlotRecipeIdentityFn;
export declare const defineKeyframes: KeyframeIdentityFn;
export declare const defineGlobalStyles: GlobalStyleIdentityFn;
export declare const defineStyle: SystemStyleIdentityFn;
export declare const defineTextStyles: (v: CompositionStyles["textStyles"]) => import("./composition").TextStyles;
export declare const defineAnimationStyles: (v: CompositionStyles["animationStyles"]) => import("./composition").AnimationStyles;
export declare const defineLayerStyles: (v: CompositionStyles["layerStyles"]) => import("./composition").LayerStyles;
type ProxyValue<T> = {
    <Value>(definition: Value extends T ? Value : T): Value;
} & {
    [K in keyof Required<T>]: <Value>(definition: Value extends T[K] ? Value : T[K]) => Value;
};
export declare const defineTokens: ProxyValue<TokenDefinition>;
export declare const defineSemanticTokens: ProxyValue<SemanticTokenDefinition>;
export declare const defineConfig: (v: SystemConfig) => SystemConfig;
export declare const mergeConfigs: (...configs: SystemConfig[]) => SystemConfig;
export {};
