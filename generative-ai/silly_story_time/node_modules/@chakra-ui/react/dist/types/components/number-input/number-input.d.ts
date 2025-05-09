import type { Assign } from "@ark-ui/react";
import { NumberInput as ArkNumberInput } from "@ark-ui/react/number-input";
import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useNumberInputStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useNumberInputStyles };
export interface NumberInputRootProviderBaseProps extends Assign<ArkNumberInput.RootProviderBaseProps, SlotRecipeProps<"numberInput">>, UnstyledProp {
}
export interface NumberInputRootProviderProps extends HTMLChakraProps<"div", NumberInputRootProviderBaseProps> {
}
export declare const NumberInputRootProvider: import("react").ForwardRefExoticComponent<NumberInputRootProviderProps & import("react").RefAttributes<HTMLDivElement>>;
export interface NumberInputRootBaseProps extends Assign<ArkNumberInput.RootBaseProps, SlotRecipeProps<"numberInput">>, UnstyledProp {
}
export interface NumberInputRootProps extends HTMLChakraProps<"div", NumberInputRootBaseProps> {
}
export declare const NumberInputRoot: import("react").ForwardRefExoticComponent<NumberInputRootProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const NumberInputPropsProvider: React.Provider<NumberInputRootBaseProps>;
export interface NumberInputLabelProps extends HTMLChakraProps<"label", ArkNumberInput.LabelBaseProps> {
}
export declare const NumberInputLabel: import("react").ForwardRefExoticComponent<NumberInputLabelProps & import("react").RefAttributes<HTMLLabelElement>>;
export interface NumberInputInputProps extends HTMLChakraProps<"input", ArkNumberInput.InputBaseProps> {
}
export declare const NumberInputInput: import("react").ForwardRefExoticComponent<NumberInputInputProps & import("react").RefAttributes<HTMLInputElement>>;
export interface NumberInputIncrementTriggerProps extends HTMLChakraProps<"button", ArkNumberInput.IncrementTriggerBaseProps> {
}
export declare const NumberInputIncrementTrigger: import("react").ForwardRefExoticComponent<NumberInputIncrementTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface NumberInputDecrementTriggerProps extends HTMLChakraProps<"button", ArkNumberInput.DecrementTriggerBaseProps> {
}
export declare const NumberInputDecrementTrigger: import("react").ForwardRefExoticComponent<NumberInputDecrementTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface NumberInputControlProps extends HTMLChakraProps<"div", ArkNumberInput.ControlBaseProps> {
}
export declare const NumberInputControl: import("react").ForwardRefExoticComponent<NumberInputControlProps & import("react").RefAttributes<HTMLDivElement>>;
export interface NumberInputScrubberProps extends HTMLChakraProps<"div", ArkNumberInput.ScrubberBaseProps> {
}
export declare const NumberInputScrubber: import("react").ForwardRefExoticComponent<NumberInputScrubberProps & import("react").RefAttributes<HTMLDivElement>>;
export interface NumberInputValueTextProps extends HTMLChakraProps<"span", ArkNumberInput.ValueTextBaseProps> {
}
export declare const NumberInputValueText: import("react").ForwardRefExoticComponent<NumberInputValueTextProps & import("react").RefAttributes<HTMLSpanElement>>;
export declare const NumberInputContext: (props: ArkNumberInput.ContextProps) => import("react").ReactNode;
export interface NumberInputValueChangeDetails extends ArkNumberInput.ValueChangeDetails {
}
export interface NumberInputFocusChangeDetails extends ArkNumberInput.FocusChangeDetails {
}
export interface NumberInputValueInvalidDetails extends ArkNumberInput.ValueInvalidDetails {
}
