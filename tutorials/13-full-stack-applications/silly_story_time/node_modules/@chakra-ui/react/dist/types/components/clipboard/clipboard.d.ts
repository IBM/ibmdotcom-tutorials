import type { Assign } from "@ark-ui/react";
import { Clipboard as ArkClipboard } from "@ark-ui/react/clipboard";
import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useClipboardStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useClipboardStyles };
export interface ClipboardRootProviderBaseProps extends Assign<ArkClipboard.RootProviderBaseProps, SlotRecipeProps<"clipboard">>, UnstyledProp {
}
export interface ClipboardRootProviderProps extends HTMLChakraProps<"div", ClipboardRootProviderBaseProps> {
}
export declare const ClipboardRootProvider: import("react").ForwardRefExoticComponent<ClipboardRootProviderProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ClipboardRootBaseProps extends Assign<ArkClipboard.RootBaseProps, SlotRecipeProps<"clipboard">>, UnstyledProp {
}
export interface ClipboardRootProps extends HTMLChakraProps<"div", ClipboardRootBaseProps> {
}
export declare const ClipboardRoot: import("react").ForwardRefExoticComponent<ClipboardRootProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ClipboardPropsProvider: React.Provider<ClipboardRootBaseProps>;
export interface ClipboardTriggerProps extends HTMLChakraProps<"button", ArkClipboard.TriggerProps> {
}
export declare const ClipboardTrigger: import("react").ForwardRefExoticComponent<ClipboardTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface ClipboardControlProps extends HTMLChakraProps<"div", ArkClipboard.ControlProps> {
}
export declare const ClipboardControl: import("react").ForwardRefExoticComponent<ClipboardControlProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ClipboardIndicatorProps extends HTMLChakraProps<"div", ArkClipboard.IndicatorProps> {
}
export declare const ClipboardIndicator: import("react").ForwardRefExoticComponent<ClipboardIndicatorProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ClipboardInputProps extends HTMLChakraProps<"input", ArkClipboard.InputProps> {
}
export declare const ClipboardInput: import("react").ForwardRefExoticComponent<ClipboardInputProps & import("react").RefAttributes<HTMLInputElement>>;
export interface ClipboardLabelProps extends HTMLChakraProps<"label", ArkClipboard.LabelProps> {
}
export declare const ClipboardLabel: import("react").ForwardRefExoticComponent<ClipboardLabelProps & import("react").RefAttributes<HTMLLabelElement>>;
export declare const ClipboardContext: (props: ArkClipboard.ContextProps) => import("react").ReactNode;
export interface ClipboardCopyStatusDetails extends ArkClipboard.CopyStatusDetails {
}
export interface ClipboardValueTextProps extends HTMLChakraProps<"div", ArkClipboard.ValueTextProps> {
}
export declare const ClipboardValueText: import("react").ForwardRefExoticComponent<ClipboardValueTextProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ClipboardCopyText: import("react").ForwardRefExoticComponent<ClipboardIndicatorProps & import("react").RefAttributes<HTMLDivElement>>;
