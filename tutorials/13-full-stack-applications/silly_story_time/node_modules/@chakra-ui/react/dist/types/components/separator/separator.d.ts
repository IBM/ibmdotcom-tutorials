import { type HTMLChakraProps, type RecipeProps, type UnstyledProp } from "../../styled-system";
export interface SeparatorBaseProps extends RecipeProps<"separator">, UnstyledProp {
}
export interface SeparatorProps extends HTMLChakraProps<"span", SeparatorBaseProps> {
}
export declare const Separator: import("react").ForwardRefExoticComponent<SeparatorProps & import("react").RefAttributes<HTMLSpanElement>>;
export declare const SeparatorPropsProvider: React.Provider<SeparatorBaseProps>;
