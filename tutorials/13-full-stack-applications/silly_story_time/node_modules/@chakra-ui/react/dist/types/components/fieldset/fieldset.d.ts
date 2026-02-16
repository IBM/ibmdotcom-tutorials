import type { Assign } from "@ark-ui/react";
import { Fieldset } from "@ark-ui/react/fieldset";
import { type HTMLChakraProps, type SlotRecipeProps } from "../../styled-system";
interface FieldsetRootBaseProps extends Assign<Fieldset.RootBaseProps, SlotRecipeProps<"fieldset">> {
}
export interface FieldsetRootProps extends HTMLChakraProps<"fieldset", FieldsetRootBaseProps> {
}
export declare const FieldsetRoot: import("react").ForwardRefExoticComponent<FieldsetRootProps & import("react").RefAttributes<HTMLFieldSetElement>>;
export interface FieldsetErrorTextProps extends HTMLChakraProps<"span", Fieldset.ErrorTextBaseProps> {
}
export declare const FieldsetErrorText: import("react").ForwardRefExoticComponent<FieldsetErrorTextProps & import("react").RefAttributes<HTMLSpanElement>>;
export interface FieldsetHelperTextProps extends HTMLChakraProps<"span", Fieldset.HelperTextBaseProps> {
}
export declare const FieldsetHelperText: import("react").ForwardRefExoticComponent<FieldsetHelperTextProps & import("react").RefAttributes<HTMLSpanElement>>;
export interface FieldsetLegendProps extends HTMLChakraProps<"legend", Fieldset.LegendBaseProps> {
}
export declare const FieldsetLegend: import("react").ForwardRefExoticComponent<FieldsetLegendProps & import("react").RefAttributes<HTMLLegendElement>>;
export interface FieldsetContentProps extends HTMLChakraProps<"div"> {
}
export declare const FieldsetContent: import("react").ForwardRefExoticComponent<FieldsetContentProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const FieldsetContext: (props: Fieldset.ContextProps) => import("react").ReactNode;
export {};
