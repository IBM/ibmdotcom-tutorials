import { type HTMLChakraProps, type RecipeProps, type UnstyledProp } from "../../styled-system";
export interface LinkBaseProps extends RecipeProps<"link">, UnstyledProp {
}
export interface LinkProps extends HTMLChakraProps<"a", LinkBaseProps> {
}
export declare const Link: import("react").ForwardRefExoticComponent<LinkProps & import("react").RefAttributes<HTMLAnchorElement>>;
export declare const LinkPropsProvider: React.Provider<LinkProps>;
