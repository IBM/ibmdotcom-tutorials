import type { Assign } from "@ark-ui/react";
import { HoverCard as ArkHoverCard } from "@ark-ui/react/hover-card";
import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useHoverCardStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useHoverCardStyles };
export interface HoverCardRootProviderBaseProps extends Assign<ArkHoverCard.RootProviderBaseProps, SlotRecipeProps<"hoverCard">>, UnstyledProp {
}
export interface HoverCardRootProviderProps extends HoverCardRootProviderBaseProps {
    children: React.ReactNode;
}
export declare const HoverCardRootProvider: import("react").FC<HoverCardRootProviderProps>;
export interface HoverCardRootBaseProps extends Assign<ArkHoverCard.RootBaseProps, SlotRecipeProps<"hoverCard">>, UnstyledProp {
}
export interface HoverCardRootProps extends HoverCardRootBaseProps {
    children: React.ReactNode;
}
export declare const HoverCardRoot: import("react").FC<HoverCardRootProps>;
export declare const HoverCardPropsProvider: React.Provider<HoverCardRootBaseProps>;
export interface HoverCardTriggerProps extends HTMLChakraProps<"button", ArkHoverCard.TriggerBaseProps> {
}
export declare const HoverCardTrigger: import("react").ForwardRefExoticComponent<HoverCardTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface HoverCardPositionerProps extends HTMLChakraProps<"div", ArkHoverCard.PositionerBaseProps> {
}
export declare const HoverCardPositioner: import("react").ForwardRefExoticComponent<HoverCardPositionerProps & import("react").RefAttributes<HTMLDivElement>>;
export interface HoverCardContentProps extends HTMLChakraProps<"section", ArkHoverCard.ContentBaseProps> {
}
export declare const HoverCardContent: import("react").ForwardRefExoticComponent<HoverCardContentProps & import("react").RefAttributes<HTMLDivElement>>;
export interface HoverCardArrowTipProps extends HTMLChakraProps<"div", ArkHoverCard.ArrowTipBaseProps> {
}
export declare const HoverCardArrowTip: import("react").ForwardRefExoticComponent<HoverCardArrowTipProps & import("react").RefAttributes<HTMLDivElement>>;
export interface HoverCardArrowProps extends HTMLChakraProps<"div", ArkHoverCard.ArrowBaseProps> {
}
export declare const HoverCardArrow: import("react").ForwardRefExoticComponent<HoverCardArrowProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const HoverCardContext: (props: ArkHoverCard.ContextProps) => import("react").ReactNode;
export interface HoverCardOpenChangeDetails extends ArkHoverCard.OpenChangeDetails {
}
