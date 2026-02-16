import type { RecipeCreatorFn, SlotRecipeCreatorFn } from "./recipe.types";
interface Options {
    cva: RecipeCreatorFn;
}
export declare const getSlotCompoundVariant: <T extends {
    css: any;
}>(compoundVariants: T[], slotName: string) => (T & {
    css: any;
})[];
export declare function createSlotRecipeFn(options: Options): SlotRecipeCreatorFn;
export {};
