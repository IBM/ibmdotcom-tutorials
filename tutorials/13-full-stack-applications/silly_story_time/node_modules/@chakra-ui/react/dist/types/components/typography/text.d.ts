import type { Assign } from "@ark-ui/react";
import { type HTMLChakraProps, type RecipeProps } from "../../styled-system";
export interface TextProps extends Assign<HTMLChakraProps<"p">, RecipeProps<"text">> {
}
export declare const Text: import("react").ForwardRefExoticComponent<TextProps & import("react").RefAttributes<HTMLParagraphElement>>;
export declare const TextPropsProvider: React.Provider<TextProps>;
