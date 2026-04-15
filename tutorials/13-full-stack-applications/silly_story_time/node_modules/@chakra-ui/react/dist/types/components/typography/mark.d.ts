import type { Assign } from "@ark-ui/react";
import { type HTMLChakraProps, type RecipeProps } from "../../styled-system";
export interface MarkProps extends Assign<HTMLChakraProps<"mark">, RecipeProps<"mark">> {
}
export declare const Mark: import("react").ForwardRefExoticComponent<MarkProps & import("react").RefAttributes<HTMLElement>>;
export declare const MarkPropsProvider: React.Provider<MarkProps>;
