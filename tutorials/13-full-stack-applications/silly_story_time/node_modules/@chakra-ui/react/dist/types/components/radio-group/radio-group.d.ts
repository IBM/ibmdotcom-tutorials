import type { Assign } from "@ark-ui/react";
import { RadioGroup as ArkRadioGroup, type UseRadioGroupContext, type UseRadioGroupItemContext } from "@ark-ui/react/radio-group";
import type { JSX } from "react";
import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useRadioGroupStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useRadioGroupStyles };
export interface RadioGroupRootProviderBaseProps extends Assign<ArkRadioGroup.RootProviderBaseProps, SlotRecipeProps<"radioGroup">>, UnstyledProp {
}
export interface RadioGroupRootProviderProps extends HTMLChakraProps<"div", RadioGroupRootProviderBaseProps> {
}
export declare const RadioGroupRootProvider: import("react").ForwardRefExoticComponent<RadioGroupRootProviderProps & import("react").RefAttributes<HTMLDivElement>>;
export interface RadioGroupRootBaseProps extends Assign<ArkRadioGroup.RootBaseProps, SlotRecipeProps<"radioGroup">>, UnstyledProp {
}
export interface RadioGroupRootProps extends HTMLChakraProps<"div", RadioGroupRootBaseProps> {
}
export declare const RadioGroupRoot: import("react").ForwardRefExoticComponent<RadioGroupRootProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const RadioGroupPropsProvider: React.Provider<RadioGroupRootBaseProps>;
export interface RadioGroupLabelProps extends HTMLChakraProps<"div", ArkRadioGroup.LabelBaseProps> {
}
export declare const RadioGroupLabel: import("react").ForwardRefExoticComponent<RadioGroupLabelProps & import("react").RefAttributes<HTMLDivElement>>;
export interface RadioGroupItemProps extends HTMLChakraProps<"div", ArkRadioGroup.ItemBaseProps> {
}
export declare const RadioGroupItem: import("react").ForwardRefExoticComponent<RadioGroupItemProps & import("react").RefAttributes<HTMLDivElement>>;
export interface RadioGroupItemTextProps extends HTMLChakraProps<"span", ArkRadioGroup.ItemTextBaseProps> {
}
export declare const RadioGroupItemText: import("react").ForwardRefExoticComponent<RadioGroupItemTextProps & import("react").RefAttributes<HTMLSpanElement>>;
export interface RadioGroupItemControlProps extends HTMLChakraProps<"div", ArkRadioGroup.ItemControlBaseProps> {
}
export declare const RadioGroupItemControl: import("react").ForwardRefExoticComponent<RadioGroupItemControlProps & import("react").RefAttributes<HTMLDivElement>>;
export interface RadioGroupItemIndicatorProps extends HTMLChakraProps<"span"> {
}
export declare const RadioGroupItemIndicator: import("react").ForwardRefExoticComponent<RadioGroupItemIndicatorProps & import("react").RefAttributes<HTMLSpanElement>>;
export interface RadioGroupContextProps {
    children: (context: UseRadioGroupContext) => JSX.Element;
}
export declare const RadioGroupContext: React.FC<RadioGroupContextProps>;
export interface RadioGroupItemContextProps {
    children: (context: UseRadioGroupItemContext) => JSX.Element;
}
export declare const RadioGroupItemContext: React.FC<RadioGroupItemContextProps>;
export declare const RadioGroupItemHiddenInput: import("react").ForwardRefExoticComponent<ArkRadioGroup.ItemHiddenInputProps & import("react").RefAttributes<HTMLInputElement>>;
export interface RadioGroupValueChangeDetails extends ArkRadioGroup.ValueChangeDetails {
}
