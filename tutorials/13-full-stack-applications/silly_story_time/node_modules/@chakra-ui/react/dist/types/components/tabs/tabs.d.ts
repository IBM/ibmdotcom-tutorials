import type { Assign } from "@ark-ui/react";
import { Tabs as ArkTabs } from "@ark-ui/react/tabs";
import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useTabsStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useTabsStyles };
export interface TabsRootProviderBaseProps extends Assign<ArkTabs.RootProviderBaseProps, SlotRecipeProps<"tabs">>, UnstyledProp {
}
export interface TabsRootProviderProps extends HTMLChakraProps<"div", TabsRootProviderBaseProps> {
}
export declare const TabsRootProvider: import("react").ForwardRefExoticComponent<TabsRootProviderProps & import("react").RefAttributes<HTMLDivElement>>;
export interface TabsRootBaseProps extends Assign<ArkTabs.RootBaseProps, SlotRecipeProps<"tabs">>, UnstyledProp {
}
export interface TabsRootProps extends HTMLChakraProps<"div", TabsRootBaseProps> {
}
export declare const TabsRoot: import("react").ForwardRefExoticComponent<TabsRootProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const TabsPropsProvider: React.Provider<TabsRootBaseProps>;
export interface TabsTriggerProps extends HTMLChakraProps<"button", ArkTabs.TriggerBaseProps> {
}
export declare const TabsTrigger: import("react").ForwardRefExoticComponent<TabsTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface TabsContentProps extends HTMLChakraProps<"div", ArkTabs.ContentBaseProps> {
}
export declare const TabsContent: import("react").ForwardRefExoticComponent<TabsContentProps & import("react").RefAttributes<HTMLDivElement>>;
export interface TabsContentGroupProps extends HTMLChakraProps<"div"> {
}
export declare const TabsContentGroup: import("react").ForwardRefExoticComponent<TabsContentGroupProps & import("react").RefAttributes<HTMLDivElement>>;
export interface TabsListProps extends HTMLChakraProps<"div", ArkTabs.ListBaseProps> {
}
export declare const TabsList: import("react").ForwardRefExoticComponent<TabsListProps & import("react").RefAttributes<HTMLDivElement>>;
export interface TabsIndicatorProps extends HTMLChakraProps<"div", ArkTabs.ListBaseProps> {
}
export declare const TabsIndicator: import("react").ForwardRefExoticComponent<TabsIndicatorProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const TabsContext: (props: ArkTabs.ContextProps) => import("react").ReactNode;
export interface TabsValueChangeDetails extends ArkTabs.ValueChangeDetails {
}
