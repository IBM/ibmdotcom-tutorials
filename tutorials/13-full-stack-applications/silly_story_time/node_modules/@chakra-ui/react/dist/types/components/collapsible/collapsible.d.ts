import type { Assign } from "@ark-ui/react";
import { Collapsible as ArkCollapsible } from "@ark-ui/react/collapsible";
import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useCollapsibleStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useCollapsibleStyles };
export interface CollapsibleRootProviderBaseProps extends Assign<ArkCollapsible.RootProviderBaseProps, SlotRecipeProps<"collapsible">>, UnstyledProp {
}
export interface CollapsibleRootProviderProps extends HTMLChakraProps<"div", CollapsibleRootProviderBaseProps> {
}
export declare const CollapsibleRootProvider: import("react").ForwardRefExoticComponent<CollapsibleRootProviderProps & import("react").RefAttributes<HTMLDivElement>>;
export interface CollapsibleRootBaseProps extends Assign<ArkCollapsible.RootBaseProps, SlotRecipeProps<"collapsible">>, UnstyledProp {
}
export interface CollapsibleRootProps extends HTMLChakraProps<"div", CollapsibleRootBaseProps> {
}
export declare const CollapsibleRoot: import("react").ForwardRefExoticComponent<CollapsibleRootProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const CollapsiblePropsProvider: React.Provider<CollapsibleRootBaseProps>;
export interface CollapsibleTriggerProps extends HTMLChakraProps<"button", ArkCollapsible.TriggerBaseProps> {
}
export declare const CollapsibleTrigger: import("react").ForwardRefExoticComponent<CollapsibleTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface CollapsibleContentProps extends HTMLChakraProps<"div", ArkCollapsible.ContentBaseProps> {
}
export declare const CollapsibleContent: import("react").ForwardRefExoticComponent<CollapsibleContentProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const CollapsibleContext: (props: ArkCollapsible.ContextProps) => import("react").ReactNode;
export interface CollapsibleOpenChangeDetails extends ArkCollapsible.OpenChangeDetails {
}
