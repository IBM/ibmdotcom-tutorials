import type { ConfigRecipes } from "./generated/recipes.gen";
import type { RecipeDefinition, RecipeVariantMap, RecipeVariantProps, SystemRecipeFn } from "./recipe.types";
export type RecipeKey = keyof ConfigRecipes | (string & {});
export interface UseRecipeOptions<K extends RecipeKey> {
    key?: K;
    recipe?: RecipeDefinition;
}
export declare function useRecipe<Options extends {
    key: RecipeKey;
    recipe?: RecipeDefinition;
}>(options: Options): Options["key"] extends keyof ConfigRecipes ? ConfigRecipes[Options["key"]] : SystemRecipeFn<{}, {}>;
export declare function useRecipe<Options extends {
    recipe: RecipeDefinition;
}>(options: Options): Options["recipe"] extends RecipeDefinition<infer T> ? SystemRecipeFn<RecipeVariantProps<Options["recipe"]>, RecipeVariantMap<T>> : never;
