import type { Assign } from "@ark-ui/react";
import { Dialog as ArkDialog } from "@ark-ui/react/dialog";
import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useDrawerStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useDrawerStyles };
export interface DrawerRootProviderBaseProps extends Assign<ArkDialog.RootProviderBaseProps, SlotRecipeProps<"drawer">>, UnstyledProp {
}
export interface DrawerRootProviderProps extends DrawerRootProviderBaseProps {
    children: React.ReactNode;
}
export declare const DrawerRootProvider: import("react").FC<DrawerRootProviderProps>;
export interface DrawerRootBaseProps extends Assign<ArkDialog.RootBaseProps, SlotRecipeProps<"drawer">>, UnstyledProp {
}
export interface DrawerRootProps extends DrawerRootBaseProps {
    children: React.ReactNode;
}
export declare const DrawerRoot: import("react").FC<DrawerRootProps>;
export declare const DrawerRootPropsProvider: React.Provider<DrawerRootBaseProps>;
export interface DrawerTriggerProps extends HTMLChakraProps<"button", ArkDialog.TriggerBaseProps> {
}
export declare const DrawerTrigger: import("react").ForwardRefExoticComponent<DrawerTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface DrawerPositionerProps extends HTMLChakraProps<"div", ArkDialog.PositionerBaseProps> {
}
export declare const DrawerPositioner: import("react").ForwardRefExoticComponent<DrawerPositionerProps & import("react").RefAttributes<HTMLDivElement>>;
export interface DrawerContentProps extends HTMLChakraProps<"section", ArkDialog.ContentBaseProps> {
}
export declare const DrawerContent: import("react").ForwardRefExoticComponent<DrawerContentProps & import("react").RefAttributes<HTMLDivElement>>;
export interface DrawerDescriptionProps extends HTMLChakraProps<"p", ArkDialog.DescriptionBaseProps> {
}
export declare const DrawerDescription: import("react").ForwardRefExoticComponent<DrawerDescriptionProps & import("react").RefAttributes<HTMLDivElement>>;
export interface DrawerTitleProps extends HTMLChakraProps<"h2", ArkDialog.TitleBaseProps> {
}
export declare const DrawerTitle: import("react").ForwardRefExoticComponent<DrawerTitleProps & import("react").RefAttributes<HTMLDivElement>>;
export interface DrawerCloseTriggerProps extends HTMLChakraProps<"button", ArkDialog.CloseTriggerBaseProps> {
}
export declare const DrawerCloseTrigger: import("react").ForwardRefExoticComponent<DrawerCloseTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface DrawerActionTriggerProps extends HTMLChakraProps<"button"> {
}
export declare const DrawerActionTrigger: import("react").ForwardRefExoticComponent<DrawerActionTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface DrawerBackdropProps extends HTMLChakraProps<"div", ArkDialog.BackdropBaseProps> {
}
export declare const DrawerBackdrop: import("react").ForwardRefExoticComponent<DrawerBackdropProps & import("react").RefAttributes<HTMLDivElement>>;
export interface DrawerBodyProps extends HTMLChakraProps<"div"> {
}
export declare const DrawerBody: import("react").ForwardRefExoticComponent<DrawerBodyProps & import("react").RefAttributes<HTMLDivElement>>;
export interface DrawerFooterProps extends HTMLChakraProps<"footer"> {
}
export declare const DrawerFooter: import("react").ForwardRefExoticComponent<DrawerFooterProps & import("react").RefAttributes<HTMLDivElement>>;
export interface DrawerHeaderProps extends HTMLChakraProps<"div"> {
}
export declare const DrawerHeader: import("react").ForwardRefExoticComponent<DrawerHeaderProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const DrawerContext: (props: ArkDialog.ContextProps) => import("react").ReactNode;
export interface DrawerOpenChangeDetails extends ArkDialog.OpenChangeDetails {
}
