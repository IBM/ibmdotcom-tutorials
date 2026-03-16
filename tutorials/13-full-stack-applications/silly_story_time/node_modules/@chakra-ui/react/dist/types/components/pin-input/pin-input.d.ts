import type { Assign } from "@ark-ui/react";
import { PinInput as ArkPinInput } from "@ark-ui/react/pin-input";
import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const usePinInputStyles: () => Record<string, import("../..").SystemStyleObject>;
export { usePinInputStyles };
export interface PinInputRootProviderBaseProps extends Assign<ArkPinInput.RootProviderBaseProps, SlotRecipeProps<"pinInput">>, UnstyledProp {
}
export interface PinInputRootProviderProps extends HTMLChakraProps<"div", PinInputRootProviderBaseProps> {
}
export declare const PinInputRootProvider: import("react").ForwardRefExoticComponent<PinInputRootProviderProps & import("react").RefAttributes<HTMLDivElement>>;
export interface PinInputRootBaseProps extends Assign<ArkPinInput.RootBaseProps, SlotRecipeProps<"pinInput">>, UnstyledProp {
}
export interface PinInputRootProps extends HTMLChakraProps<"div", PinInputRootBaseProps> {
}
export declare const PinInputRoot: import("react").ForwardRefExoticComponent<PinInputRootProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const PinInputPropsProvider: React.Provider<PinInputRootBaseProps>;
export interface PinInputControlProps extends HTMLChakraProps<"div", ArkPinInput.ControlBaseProps> {
}
export declare const PinInputControl: import("react").ForwardRefExoticComponent<PinInputControlProps & import("react").RefAttributes<HTMLDivElement>>;
export interface PinInputInputProps extends HTMLChakraProps<"input", ArkPinInput.InputBaseProps> {
}
export declare const PinInputInput: import("react").ForwardRefExoticComponent<PinInputInputProps & import("react").RefAttributes<HTMLInputElement>>;
export interface PinInputLabelProps extends HTMLChakraProps<"label"> {
}
export declare const PinInputLabel: import("react").ForwardRefExoticComponent<PinInputLabelProps & import("react").RefAttributes<HTMLLabelElement>>;
export declare const PinInputContext: (props: ArkPinInput.ContextProps) => import("react").ReactNode;
export declare const PinInputHiddenInput: import("react").ForwardRefExoticComponent<ArkPinInput.HiddenInputProps & import("react").RefAttributes<HTMLInputElement>>;
export interface PinInputValueChangeDetails extends ArkPinInput.ValueChangeDetails {
}
