import type { Assign } from "@ark-ui/react";
import { type HTMLChakraProps, type RecipeProps, type UnstyledProp } from "../../styled-system";
export interface ColorSwatchBaseProps extends UnstyledProp, RecipeProps<"colorSwatch"> {
    value: string;
}
export interface ColorSwatchProps extends Assign<HTMLChakraProps<"span">, ColorSwatchBaseProps> {
}
export declare const ColorSwatch: import("react").ForwardRefExoticComponent<ColorSwatchProps & import("react").RefAttributes<HTMLSpanElement>>;
export declare const ColorSwatchPropsProvider: import("react").Provider<Partial<ColorSwatchProps>>;
export interface ColorSwatchMixProps extends Omit<ColorSwatchProps, "value"> {
    items: string[];
}
export declare const ColorSwatchMix: (props: ColorSwatchMixProps) => import("react/jsx-runtime").JSX.Element;
