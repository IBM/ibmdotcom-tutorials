import type { Assign } from "@ark-ui/react";
import { RadioGroup as ArkRadioGroup, type UseRadioGroupContext, type UseRadioGroupItemContext } from "@ark-ui/react/radio-group";
import type { JSX } from "react";
import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useRadioCardStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useRadioCardStyles };
export interface RadioCardRootProviderBaseProps extends Assign<ArkRadioGroup.RootProviderBaseProps, SlotRecipeProps<"radioCard">>, UnstyledProp {
}
export interface RadioCardRootProviderProps extends HTMLChakraProps<"div", RadioCardRootProviderBaseProps> {
}
export declare const RadioCardRootProvider: import("react").ForwardRefExoticComponent<RadioCardRootProviderProps & import("react").RefAttributes<HTMLDivElement>>;
export interface RadioCardRootBaseProps extends Assign<ArkRadioGroup.RootBaseProps, SlotRecipeProps<"radioCard">>, UnstyledProp {
}
export interface RadioCardRootProps extends HTMLChakraProps<"div", RadioCardRootBaseProps> {
}
export declare const RadioCardRoot: import("react").ForwardRefExoticComponent<RadioCardRootProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const RadioCardPropsProvider: React.Provider<RadioCardRootBaseProps>;
export interface RadioCardLabelProps extends HTMLChakraProps<"div", ArkRadioGroup.LabelBaseProps> {
}
export declare const RadioCardLabel: import("react").ForwardRefExoticComponent<RadioCardLabelProps & import("react").RefAttributes<HTMLDivElement>>;
export interface RadioCardItemProps extends HTMLChakraProps<"div", ArkRadioGroup.ItemBaseProps> {
}
export declare const RadioCardItem: import("react").ForwardRefExoticComponent<RadioCardItemProps & import("react").RefAttributes<HTMLDivElement>>;
export interface RadioCardItemTextProps extends HTMLChakraProps<"span", ArkRadioGroup.ItemTextBaseProps> {
}
export declare const RadioCardItemText: import("react").ForwardRefExoticComponent<RadioCardItemTextProps & import("react").RefAttributes<HTMLSpanElement>>;
export interface RadioCardItemDescriptionProps extends HTMLChakraProps<"div"> {
}
export declare const RadioCardItemDescription: import("react").ForwardRefExoticComponent<RadioCardItemDescriptionProps & import("react").RefAttributes<HTMLSpanElement>>;
export interface RadioCardItemControlProps extends HTMLChakraProps<"div", ArkRadioGroup.ItemControlBaseProps> {
}
export declare const RadioCardItemControl: import("react").ForwardRefExoticComponent<RadioCardItemControlProps & import("react").RefAttributes<HTMLDivElement>>;
export interface RadioCardItemContentProps extends HTMLChakraProps<"div"> {
}
export declare const RadioCardItemContent: import("react").ForwardRefExoticComponent<RadioCardItemContentProps & import("react").RefAttributes<HTMLDivElement>>;
export interface RadioCardItemAddonProps extends HTMLChakraProps<"div"> {
}
export declare const RadioCardItemAddon: import("react").ForwardRefExoticComponent<RadioCardItemAddonProps & import("react").RefAttributes<HTMLElement>>;
export interface RadioCardItemIndicatorProps extends HTMLChakraProps<"span"> {
    checked?: React.ReactElement;
}
export declare const RadioCardItemIndicator: import("react").ForwardRefExoticComponent<RadioCardItemIndicatorProps & import("react").RefAttributes<HTMLSpanElement>>;
export interface RadioCardContextProps {
    children: (context: UseRadioGroupContext) => JSX.Element;
}
export declare const RadioCardContext: React.FC<RadioCardContextProps>;
export interface RadioCardItemContextProps {
    children: (context: UseRadioGroupItemContext) => JSX.Element;
}
export declare const RadioCardItemContext: React.FC<RadioCardItemContextProps>;
export declare const RadioCardItemHiddenInput: import("react").ForwardRefExoticComponent<ArkRadioGroup.ItemHiddenInputProps & import("react").RefAttributes<HTMLInputElement>>;
export interface RadioCardValueChangeDetails extends ArkRadioGroup.ValueChangeDetails {
}
