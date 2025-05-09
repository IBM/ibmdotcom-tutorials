import type { Assign } from "@ark-ui/react";
import { Switch as ArkSwitch } from "@ark-ui/react/switch";
import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useSwitchStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useSwitchStyles };
export interface SwitchRootProviderBaseProps extends Assign<ArkSwitch.RootProviderBaseProps, SlotRecipeProps<"switch">>, UnstyledProp {
}
export interface SwitchRootProviderProps extends HTMLChakraProps<"label", SwitchRootProviderBaseProps> {
}
export declare const SwitchRootProvider: import("react").ForwardRefExoticComponent<SwitchRootProviderProps & import("react").RefAttributes<HTMLLabelElement>>;
export interface SwitchRootBaseProps extends Assign<ArkSwitch.RootBaseProps, SlotRecipeProps<"switch">>, UnstyledProp {
}
export interface SwitchRootProps extends HTMLChakraProps<"label", SwitchRootBaseProps> {
}
export declare const SwitchRoot: import("react").ForwardRefExoticComponent<SwitchRootProps & import("react").RefAttributes<HTMLLabelElement>>;
export declare const SwitchPropsProvider: React.Provider<SwitchRootBaseProps>;
export interface SwitchLabelProps extends HTMLChakraProps<"span", ArkSwitch.LabelBaseProps> {
}
export declare const SwitchLabel: import("react").ForwardRefExoticComponent<SwitchLabelProps & import("react").RefAttributes<HTMLSpanElement>>;
export interface SwitchThumbProps extends HTMLChakraProps<"span", ArkSwitch.ThumbBaseProps> {
}
export declare const SwitchThumb: import("react").ForwardRefExoticComponent<SwitchThumbProps & import("react").RefAttributes<HTMLSpanElement>>;
export interface SwitchControlProps extends HTMLChakraProps<"span", ArkSwitch.ControlBaseProps> {
}
export declare const SwitchControl: import("react").ForwardRefExoticComponent<SwitchControlProps & import("react").RefAttributes<HTMLSpanElement>>;
export interface SwitchIndicatorProps extends HTMLChakraProps<"span"> {
    fallback?: React.ReactNode;
}
export declare const SwitchIndicator: import("react").ForwardRefExoticComponent<SwitchIndicatorProps & import("react").RefAttributes<HTMLSpanElement>>;
export interface SwitchThumbIndicatorProps extends HTMLChakraProps<"span"> {
    fallback?: React.ReactNode;
}
export declare const SwitchThumbIndicator: import("react").ForwardRefExoticComponent<SwitchThumbIndicatorProps & import("react").RefAttributes<HTMLSpanElement>>;
export declare const SwitchContext: (props: ArkSwitch.ContextProps) => import("react").ReactNode;
export declare const SwitchHiddenInput: import("react").ForwardRefExoticComponent<ArkSwitch.HiddenInputProps & import("react").RefAttributes<HTMLInputElement>>;
export interface SwitchCheckedChangeDetails extends ArkSwitch.CheckedChangeDetails {
}
