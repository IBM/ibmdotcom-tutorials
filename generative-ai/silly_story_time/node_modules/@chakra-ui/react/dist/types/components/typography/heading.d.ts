import type { Assign } from "@ark-ui/react";
import { type HTMLChakraProps, type RecipeProps } from "../../styled-system";
export interface HeadingProps extends Assign<HTMLChakraProps<"h2">, RecipeProps<"heading">> {
}
export declare const Heading: import("react").ForwardRefExoticComponent<HeadingProps & import("react").RefAttributes<HTMLHeadingElement>>;
export declare const HeadingPropsProvider: React.Provider<HeadingProps>;
