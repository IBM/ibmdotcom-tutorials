import type { Assign } from "@ark-ui/react";
import { Field as ArkField } from "@ark-ui/react/field";
import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useFieldStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useFieldStyles };
export interface FieldRootBaseProps extends Assign<ArkField.RootBaseProps, SlotRecipeProps<"field">>, UnstyledProp {
}
export interface FieldRootProps extends HTMLChakraProps<"div", FieldRootBaseProps> {
}
export declare const FieldRoot: import("react").ForwardRefExoticComponent<FieldRootProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const FieldPropsProvider: React.Provider<FieldRootBaseProps>;
export interface FieldLabelProps extends HTMLChakraProps<"label", ArkField.LabelBaseProps> {
}
export declare const FieldLabel: import("react").ForwardRefExoticComponent<FieldLabelProps & import("react").RefAttributes<HTMLLabelElement>>;
export interface FieldHelperTextProps extends HTMLChakraProps<"div", ArkField.HelperTextBaseProps> {
}
export declare const FieldHelperText: import("react").ForwardRefExoticComponent<FieldHelperTextProps & import("react").RefAttributes<HTMLDivElement>>;
export interface FieldErrorTextProps extends HTMLChakraProps<"div", ArkField.ErrorTextBaseProps> {
}
export declare const FieldErrorText: import("react").ForwardRefExoticComponent<FieldErrorTextProps & import("react").RefAttributes<HTMLDivElement>>;
export interface FieldErrorIconProps extends HTMLChakraProps<"svg"> {
}
export declare const FieldErrorIcon: import("react").ForwardRefExoticComponent<import("..").IconProps & import("react").RefAttributes<SVGSVGElement>>;
export interface FieldRequiredIndicatorProps extends HTMLChakraProps<"span"> {
    fallback?: React.ReactNode;
}
export declare const FieldRequiredIndicator: import("react").ForwardRefExoticComponent<FieldRequiredIndicatorProps & import("react").RefAttributes<HTMLSpanElement>>;
