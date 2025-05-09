import type { Assign } from "@ark-ui/react";
import { Toast as ArkToast, type CreateToasterProps, type CreateToasterReturn, type ToasterBaseProps, createToaster } from "@ark-ui/react/toast";
import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
export { createToaster, type CreateToasterProps, type CreateToasterReturn };
declare const useToastStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useToastStyles };
export interface ToasterProps extends HTMLChakraProps<"div", ToasterBaseProps> {
}
export declare const Toaster: React.FC<ToasterProps>;
export interface ToastRootBaseProps extends Assign<ArkToast.RootBaseProps, SlotRecipeProps<"toast">>, UnstyledProp {
}
export interface ToastRootProps extends HTMLChakraProps<"div", ToastRootBaseProps> {
}
export declare const ToastRoot: import("react").ForwardRefExoticComponent<ToastRootProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ToastCloseTriggerProps extends HTMLChakraProps<"button", ArkToast.CloseTriggerProps> {
}
export declare const ToastCloseTrigger: import("react").ForwardRefExoticComponent<ToastCloseTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface ToastTitleProps extends HTMLChakraProps<"div", ArkToast.TitleProps> {
}
export declare const ToastTitle: import("react").ForwardRefExoticComponent<ToastTitleProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ToastDescriptionProps extends HTMLChakraProps<"div", ArkToast.DescriptionProps> {
}
export declare const ToastDescription: import("react").ForwardRefExoticComponent<ToastDescriptionProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ToastActionTriggerProps extends HTMLChakraProps<"button", ArkToast.ActionTriggerProps> {
}
export declare const ToastActionTrigger: import("react").ForwardRefExoticComponent<ToastActionTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface ToastIndicatorProps extends HTMLChakraProps<"span"> {
}
export declare const ToastIndicator: import("react").ForwardRefExoticComponent<ToastIndicatorProps & import("react").RefAttributes<HTMLSpanElement>>;
