import { type HTMLChakraProps, type RecipeProps, type UnstyledProp } from "../../styled-system";
export interface InputBaseProps extends RecipeProps<"input">, UnstyledProp {
}
export interface InputProps extends HTMLChakraProps<"input", InputBaseProps> {
}
export declare const Input: import("react").ForwardRefExoticComponent<InputProps & import("react").RefAttributes<HTMLInputElement>>;
export declare const InputPropsProvider: React.Provider<InputProps>;
