import type { Assign } from "@ark-ui/react";
import { Dialog as ArkDialog } from "@ark-ui/react/dialog";
import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useDialogStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useDialogStyles };
export interface DialogRootProviderBaseProps extends Assign<ArkDialog.RootProviderProps, SlotRecipeProps<"dialog">>, UnstyledProp {
}
export interface DialogRootProviderProps extends DialogRootProviderBaseProps {
    children: React.ReactNode;
}
export declare const DialogRootProvider: import("react").FC<DialogRootProviderProps>;
export interface DialogRootBaseProps extends Assign<ArkDialog.RootProps, SlotRecipeProps<"dialog">>, UnstyledProp {
}
export interface DialogRootProps extends DialogRootBaseProps {
    children: React.ReactNode;
}
export declare const DialogRoot: import("react").FC<DialogRootProps>;
export declare const DialogPropsProvider: React.Provider<DialogRootBaseProps>;
export interface DialogTriggerProps extends HTMLChakraProps<"button", ArkDialog.TriggerBaseProps> {
}
export declare const DialogTrigger: import("react").ForwardRefExoticComponent<DialogTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface DialogPositionerProps extends HTMLChakraProps<"div", ArkDialog.PositionerBaseProps> {
}
export declare const DialogPositioner: import("react").ForwardRefExoticComponent<DialogPositionerProps & import("react").RefAttributes<HTMLDivElement>>;
export interface DialogContentProps extends HTMLChakraProps<"section", ArkDialog.ContentBaseProps> {
}
export declare const DialogContent: import("react").ForwardRefExoticComponent<DialogContentProps & import("react").RefAttributes<HTMLDivElement>>;
export interface DialogDescriptionProps extends HTMLChakraProps<"p", ArkDialog.DescriptionBaseProps> {
}
export declare const DialogDescription: import("react").ForwardRefExoticComponent<DialogDescriptionProps & import("react").RefAttributes<HTMLDivElement>>;
export interface DialogTitleProps extends HTMLChakraProps<"h2", ArkDialog.TitleBaseProps> {
}
export declare const DialogTitle: import("react").ForwardRefExoticComponent<DialogTitleProps & import("react").RefAttributes<HTMLDivElement>>;
export interface DialogCloseTriggerProps extends HTMLChakraProps<"button", ArkDialog.CloseTriggerBaseProps> {
}
export declare const DialogCloseTrigger: import("react").ForwardRefExoticComponent<DialogCloseTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface DialogActionTriggerProps extends HTMLChakraProps<"button"> {
}
export declare const DialogActionTrigger: import("react").ForwardRefExoticComponent<DialogActionTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface DialogBackdropProps extends HTMLChakraProps<"div", ArkDialog.BackdropBaseProps> {
}
export declare const DialogBackdrop: import("react").ForwardRefExoticComponent<DialogBackdropProps & import("react").RefAttributes<HTMLDivElement>>;
export interface DialogBodyProps extends HTMLChakraProps<"div"> {
}
export declare const DialogBody: import("react").ForwardRefExoticComponent<DialogBodyProps & import("react").RefAttributes<HTMLDivElement>>;
export interface DialogFooterProps extends HTMLChakraProps<"footer"> {
}
export declare const DialogFooter: import("react").ForwardRefExoticComponent<DialogFooterProps & import("react").RefAttributes<HTMLDivElement>>;
export interface DialogHeaderProps extends HTMLChakraProps<"div"> {
}
export declare const DialogHeader: import("react").ForwardRefExoticComponent<DialogHeaderProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const DialogContext: (props: ArkDialog.ContextProps) => import("react").ReactNode;
export interface DialogOpenChangeDetails extends ArkDialog.OpenChangeDetails {
}
