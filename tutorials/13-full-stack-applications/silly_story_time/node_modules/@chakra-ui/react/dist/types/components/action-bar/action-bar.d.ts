import type { Assign } from "@ark-ui/react";
import { Popover as ArkPopover } from "@ark-ui/react/popover";
import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useActionBarStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useActionBarStyles };
export interface ActionBarRootProviderBaseProps extends Assign<ArkPopover.RootProviderBaseProps, SlotRecipeProps<"actionBar">>, UnstyledProp {
}
export interface ActionBarRootProviderProps extends ActionBarRootProviderBaseProps {
}
export declare const ActionBarRootProvider: import("react").FC<ActionBarRootProviderBaseProps>;
export interface ActionBarRootBaseProps extends Assign<ArkPopover.RootBaseProps, SlotRecipeProps<"actionBar">>, UnstyledProp {
}
export interface ActionBarRootProps extends Omit<ActionBarRootBaseProps, "positioning"> {
    children: React.ReactNode;
}
export declare const ActionBarRoot: import("react").FC<ActionBarRootProps>;
export declare const ActionBarPropsProvider: React.Provider<ActionBarRootBaseProps>;
export interface ActionBarPositionerProps extends HTMLChakraProps<"div"> {
}
export declare const ActionBarPositioner: import("react").ForwardRefExoticComponent<ActionBarPositionerProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ActionBarContentProps extends HTMLChakraProps<"div", ArkPopover.ContentBaseProps> {
}
export declare const ActionBarContent: import("react").ForwardRefExoticComponent<ActionBarContentProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ActionBarSeparatorProps extends HTMLChakraProps<"div"> {
}
export declare const ActionBarSeparator: import("react").ForwardRefExoticComponent<ActionBarSeparatorProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ActionBarSelectionTriggerProps extends HTMLChakraProps<"button"> {
}
export declare const ActionBarSelectionTrigger: import("react").ForwardRefExoticComponent<ActionBarSelectionTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface ActionBarCloseTriggerProps extends HTMLChakraProps<"button", ArkPopover.CloseTriggerProps> {
}
export declare const ActionBarCloseTrigger: import("react").ForwardRefExoticComponent<ActionBarCloseTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export declare const ActionBarContext: (props: ArkPopover.ContextProps) => import("react").ReactNode;
export interface ActionBarOpenChangeDetails extends ArkPopover.OpenChangeDetails {
}
