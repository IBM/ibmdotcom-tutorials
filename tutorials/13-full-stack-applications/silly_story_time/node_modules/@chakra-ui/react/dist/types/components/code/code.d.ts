import { type HTMLChakraProps, type RecipeProps, type UnstyledProp } from "../../styled-system";
export interface CodeBaseProps extends RecipeProps<"code">, UnstyledProp {
}
export interface CodeProps extends HTMLChakraProps<"code", CodeBaseProps> {
}
export declare const Code: import("react").ForwardRefExoticComponent<CodeProps & import("react").RefAttributes<HTMLElement>>;
export declare const CodePropsProvider: React.Provider<CodeBaseProps>;
