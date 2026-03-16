import { type HTMLChakraProps, type RecipeProps, type UnstyledProp } from "../../styled-system";
export interface SpinnerProps extends HTMLChakraProps<"span">, UnstyledProp, RecipeProps<"spinner"> {
}
export declare const Spinner: import("react").ForwardRefExoticComponent<SpinnerProps & import("react").RefAttributes<HTMLSpanElement>>;
export declare const SpinnerPropsProvider: React.Provider<SpinnerProps>;
