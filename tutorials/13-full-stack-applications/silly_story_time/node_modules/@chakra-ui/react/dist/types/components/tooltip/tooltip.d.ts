import type { Assign } from "@ark-ui/react";
import { Tooltip as ArkTooltip } from "@ark-ui/react/tooltip";
import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useTooltipStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useTooltipStyles };
export interface TooltipRootProviderBaseProps extends Assign<ArkTooltip.RootProviderBaseProps, SlotRecipeProps<"tooltip">>, UnstyledProp {
}
export interface TooltipRootProviderProps extends TooltipRootProviderBaseProps {
    children?: React.ReactNode;
}
export declare const TooltipRootProvider: import("react").FC<TooltipRootProviderProps>;
export interface TooltipRootBaseProps extends Assign<ArkTooltip.RootBaseProps, SlotRecipeProps<"tooltip">>, UnstyledProp {
}
export interface TooltipRootProps extends TooltipRootBaseProps {
    children?: React.ReactNode;
}
export declare const TooltipRoot: import("react").FC<TooltipRootProps>;
export declare const TooltipPropsProvider: React.Provider<TooltipRootBaseProps>;
export interface TooltipTriggerProps extends HTMLChakraProps<"button", ArkTooltip.TriggerProps> {
}
export declare const TooltipTrigger: import("react").ForwardRefExoticComponent<TooltipTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface TooltipPositionerProps extends HTMLChakraProps<"div", ArkTooltip.PositionerProps> {
}
export declare const TooltipPositioner: import("react").ForwardRefExoticComponent<TooltipPositionerProps & import("react").RefAttributes<HTMLDivElement>>;
export interface TooltipContentProps extends HTMLChakraProps<"section", ArkTooltip.ContentProps> {
}
export declare const TooltipContent: import("react").ForwardRefExoticComponent<TooltipContentProps & import("react").RefAttributes<HTMLDivElement>>;
export interface TooltipArrowTipProps extends HTMLChakraProps<"div", ArkTooltip.ArrowTipProps> {
}
export declare const TooltipArrowTip: import("react").ForwardRefExoticComponent<TooltipArrowTipProps & import("react").RefAttributes<HTMLDivElement>>;
export interface TooltipArrowProps extends HTMLChakraProps<"div", ArkTooltip.ArrowProps> {
}
export declare const TooltipArrow: import("react").ForwardRefExoticComponent<TooltipArrowProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const TooltipContext: (props: ArkTooltip.ContextProps) => import("react").ReactNode;
export interface TooltipOpenChangeDetails extends ArkTooltip.OpenChangeDetails {
}
