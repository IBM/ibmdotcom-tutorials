import { type HTMLChakraProps, type RecipeProps, type UnstyledProp } from "../../styled-system";
export declare const PropsProvider: import("react").Provider<Record<string, any>>, withContext: <T, P>(Component: React.ElementType<any>, options?: import("../..").JsxFactoryOptions<P> | undefined) => import("react").ForwardRefExoticComponent<import("react").PropsWithoutRef<P> & import("react").RefAttributes<T>>;
export interface BadgeBaseProps extends RecipeProps<"badge">, UnstyledProp {
}
export interface BadgeProps extends HTMLChakraProps<"span", BadgeBaseProps> {
}
export declare const Badge: import("react").ForwardRefExoticComponent<BadgeProps & import("react").RefAttributes<HTMLSpanElement>>;
export declare const BadgePropsProvider: React.Provider<BadgeBaseProps>;
