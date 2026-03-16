import type { Assign } from "@ark-ui/react";
import { Popover as ArkPopover } from "@ark-ui/react/popover";
import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const usePopoverStyles: () => Record<string, import("../..").SystemStyleObject>;
export { usePopoverStyles };
export interface PopoverRootProviderBaseProps extends Assign<ArkPopover.RootProviderBaseProps, SlotRecipeProps<"popover">>, UnstyledProp {
}
export interface PopoverRootProviderProps extends PopoverRootProviderBaseProps {
    children: React.ReactNode;
}
export declare const PopoverRootProvider: import("react").FC<PopoverRootProviderProps>;
export interface PopoverRootBaseProps extends Assign<ArkPopover.RootBaseProps, SlotRecipeProps<"popover">>, UnstyledProp {
}
export interface PopoverRootProps extends PopoverRootBaseProps {
    children: React.ReactNode;
}
export declare const PopoverRoot: import("react").FC<PopoverRootProps>;
export declare const PopoverPropsProvider: React.Provider<PopoverRootBaseProps>;
export interface PopoverTriggerProps extends HTMLChakraProps<"button", ArkPopover.TriggerBaseProps> {
}
export declare const PopoverTrigger: import("react").ForwardRefExoticComponent<PopoverTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface PopoverPositionerProps extends HTMLChakraProps<"div", ArkPopover.PositionerBaseProps> {
}
export declare const PopoverPositioner: import("react").ForwardRefExoticComponent<PopoverPositionerProps & import("react").RefAttributes<HTMLDivElement>>;
export interface PopoverContentProps extends HTMLChakraProps<"div", ArkPopover.ContentBaseProps> {
}
export declare const PopoverContent: import("react").ForwardRefExoticComponent<PopoverContentProps & import("react").RefAttributes<HTMLDivElement>>;
export interface PopoverArrowTipProps extends HTMLChakraProps<"div", ArkPopover.ArrowTipBaseProps> {
}
export declare const PopoverArrowTip: import("react").ForwardRefExoticComponent<PopoverArrowTipProps & import("react").RefAttributes<HTMLDivElement>>;
export interface PopoverArrowProps extends HTMLChakraProps<"div", ArkPopover.ArrowBaseProps> {
}
export declare const PopoverArrow: import("react").ForwardRefExoticComponent<PopoverArrowProps & import("react").RefAttributes<HTMLDivElement>>;
export interface PopoverCloseTriggerProps extends HTMLChakraProps<"button", ArkPopover.CloseTriggerBaseProps> {
}
export declare const PopoverCloseTrigger: import("react").ForwardRefExoticComponent<PopoverCloseTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface PopoverIndicatorProps extends HTMLChakraProps<"div", ArkPopover.IndicatorBaseProps> {
}
export declare const PopoverIndicator: import("react").ForwardRefExoticComponent<PopoverIndicatorProps & import("react").RefAttributes<HTMLDivElement>>;
export interface PopoverTitleProps extends HTMLChakraProps<"div", ArkPopover.TitleBaseProps> {
}
export declare const PopoverTitle: import("react").ForwardRefExoticComponent<PopoverTitleProps & import("react").RefAttributes<HTMLDivElement>>;
export interface PopoverDescriptionProps extends HTMLChakraProps<"div", ArkPopover.DescriptionBaseProps> {
}
export declare const PopoverDescription: import("react").ForwardRefExoticComponent<PopoverDescriptionProps & import("react").RefAttributes<HTMLDivElement>>;
export interface PopoverFooterProps extends HTMLChakraProps<"footer"> {
}
export declare const PopoverFooter: import("react").ForwardRefExoticComponent<PopoverFooterProps & import("react").RefAttributes<HTMLDivElement>>;
export interface PopoverHeaderProps extends HTMLChakraProps<"div", ArkPopover.TitleBaseProps> {
}
export declare const PopoverHeader: import("react").ForwardRefExoticComponent<PopoverHeaderProps & import("react").RefAttributes<HTMLDivElement>>;
export interface PopoverBodyProps extends HTMLChakraProps<"div"> {
}
export declare const PopoverBody: import("react").ForwardRefExoticComponent<PopoverBodyProps & import("react").RefAttributes<HTMLDivElement>>;
export interface PopoverAnchorProps extends HTMLChakraProps<"div", ArkPopover.AnchorBaseProps> {
}
export declare const PopoverAnchor: import("react").ForwardRefExoticComponent<PopoverAnchorProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const PopoverContext: (props: ArkPopover.ContextProps) => import("react").ReactNode;
export interface PopoverOpenChangeDetails extends ArkPopover.OpenChangeDetails {
}
