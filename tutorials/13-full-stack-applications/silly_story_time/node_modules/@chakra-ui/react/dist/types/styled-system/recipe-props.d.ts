import type { RecipeProps } from "./generated/recipes.gen";
import type { RecipeKey } from "./use-recipe";
import type { SlotRecipeKey } from "./use-slot-recipe";
declare const useParentRecipeProps: () => {
    recipe?: import("./recipe.types").RecipeDefinition;
};
interface Props<T> {
    children: React.ReactNode;
    value: RecipeProps<T>;
}
declare function RecipePropsProvider<T extends RecipeKey | SlotRecipeKey>(props: Props<T>): import("react/jsx-runtime").JSX.Element;
export { RecipePropsProvider, useParentRecipeProps };
