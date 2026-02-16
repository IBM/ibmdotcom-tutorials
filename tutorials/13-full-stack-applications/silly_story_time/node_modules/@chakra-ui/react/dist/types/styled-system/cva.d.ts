import { type Dict } from "../utils";
import type { RecipeCreatorFn } from "./recipe.types";
import type { Condition, CssFn, Layers } from "./types";
interface Options {
    normalize: (styles: Dict) => Dict;
    css: CssFn;
    conditions: Condition;
    layers: Layers;
}
export declare function createRecipeFn(options: Options): RecipeCreatorFn;
export {};
