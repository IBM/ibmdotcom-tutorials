import * as React from "react";
import { type HTMLChakraProps, type RecipeProps } from "../../styled-system";
export interface IconProps extends HTMLChakraProps<"svg">, RecipeProps<"icon"> {
}
/**
 * The Icon component renders as an svg element to help define your own custom components.
 *
 * @see Docs https://chakra-ui.com/docs/components/icon#using-the-icon-component
 */
export declare const Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
export declare const IconPropsProvider: React.Provider<IconProps>;
