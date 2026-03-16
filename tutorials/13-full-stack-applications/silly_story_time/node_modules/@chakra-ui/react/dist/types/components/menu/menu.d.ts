import type { Assign } from "@ark-ui/react";
import { Menu as ArkMenu } from "@ark-ui/react/menu";
import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useMenuStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useMenuStyles };
export interface MenuRootProviderBaseProps extends Assign<ArkMenu.RootProviderBaseProps, SlotRecipeProps<"menu">>, UnstyledProp {
}
export interface MenuRootProviderProps extends MenuRootProviderBaseProps {
    children: React.ReactNode;
}
export declare const MenuRootProvider: import("react").FC<MenuRootProviderProps>;
export interface MenuRootBaseProps extends Assign<ArkMenu.RootBaseProps, SlotRecipeProps<"menu">>, UnstyledProp {
}
export interface MenuRootProps extends MenuRootBaseProps {
    children: React.ReactNode;
}
export declare const MenuRoot: import("react").FC<MenuRootProps>;
export declare const MenuPropsProvider: React.Provider<MenuRootBaseProps>;
export interface MenuTriggerProps extends HTMLChakraProps<"button", ArkMenu.TriggerBaseProps> {
}
export declare const MenuTrigger: import("react").ForwardRefExoticComponent<MenuTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface MenuContextTriggerProps extends HTMLChakraProps<"div", ArkMenu.ContextTriggerBaseProps> {
}
export declare const MenuContextTrigger: import("react").ForwardRefExoticComponent<MenuContextTriggerProps & import("react").RefAttributes<HTMLElement>>;
export interface MenuPositionerProps extends HTMLChakraProps<"div", ArkMenu.PositionerBaseProps> {
}
export declare const MenuPositioner: import("react").ForwardRefExoticComponent<MenuPositionerProps & import("react").RefAttributes<HTMLDivElement>>;
export interface MenuSeparatorProps extends HTMLChakraProps<"div", ArkMenu.SeparatorBaseProps> {
}
export declare const MenuSeparator: import("react").ForwardRefExoticComponent<MenuSeparatorProps & import("react").RefAttributes<HTMLDivElement>>;
export interface MenuContentProps extends HTMLChakraProps<"div", ArkMenu.ContentBaseProps> {
}
export declare const MenuContent: import("react").ForwardRefExoticComponent<MenuContentProps & import("react").RefAttributes<HTMLDivElement>>;
export interface MenuArrowTipProps extends HTMLChakraProps<"div", ArkMenu.ArrowTipBaseProps> {
}
export declare const MenuArrowTip: import("react").ForwardRefExoticComponent<MenuArrowTipProps & import("react").RefAttributes<HTMLDivElement>>;
export interface MenuArrowProps extends HTMLChakraProps<"div", ArkMenu.ArrowBaseProps> {
}
export declare const MenuArrow: import("react").ForwardRefExoticComponent<MenuArrowProps & import("react").RefAttributes<HTMLDivElement>>;
export interface MenuIndicatorProps extends HTMLChakraProps<"div", ArkMenu.IndicatorBaseProps> {
}
export declare const MenuIndicator: import("react").ForwardRefExoticComponent<MenuIndicatorProps & import("react").RefAttributes<HTMLDivElement>>;
export interface MenuItemGroupProps extends HTMLChakraProps<"div", ArkMenu.ItemGroupBaseProps> {
}
export declare const MenuItemGroup: import("react").ForwardRefExoticComponent<MenuItemGroupProps & import("react").RefAttributes<HTMLDivElement>>;
export interface MenuItemGroupLabelProps extends HTMLChakraProps<"div", ArkMenu.ItemGroupLabelBaseProps> {
}
export declare const MenuItemGroupLabel: import("react").ForwardRefExoticComponent<MenuItemGroupLabelProps & import("react").RefAttributes<HTMLDivElement>>;
export interface MenuItemProps extends HTMLChakraProps<"div", ArkMenu.ItemBaseProps> {
}
export declare const MenuItem: import("react").ForwardRefExoticComponent<MenuItemProps & import("react").RefAttributes<HTMLDivElement>>;
export interface MenuTriggerItemProps extends HTMLChakraProps<"div", ArkMenu.TriggerItemBaseProps> {
}
export declare const MenuTriggerItem: import("react").ForwardRefExoticComponent<MenuTriggerItemProps & import("react").RefAttributes<HTMLDivElement>>;
export interface MenuItemTextProps extends HTMLChakraProps<"div", ArkMenu.ItemTextBaseProps> {
}
export declare const MenuItemText: import("react").ForwardRefExoticComponent<MenuItemTextProps & import("react").RefAttributes<HTMLDivElement>>;
export interface MenuItemCommandProps extends HTMLChakraProps<"kbd"> {
}
export declare const MenuItemCommand: import("react").ForwardRefExoticComponent<MenuItemCommandProps & import("react").RefAttributes<HTMLElement>>;
export interface MenuItemIndicatorProps extends HTMLChakraProps<"div", ArkMenu.ItemIndicatorBaseProps> {
}
export declare const MenuItemIndicator: import("react").ForwardRefExoticComponent<MenuItemIndicatorProps & import("react").RefAttributes<HTMLDivElement>>;
export interface MenuCheckboxItemProps extends HTMLChakraProps<"div", ArkMenu.CheckboxItemBaseProps> {
}
export declare const MenuCheckboxItem: import("react").ForwardRefExoticComponent<MenuCheckboxItemProps & import("react").RefAttributes<HTMLDivElement>>;
export interface MenuRadioItemGroupProps extends HTMLChakraProps<"div", ArkMenu.RadioItemGroupBaseProps> {
}
export declare const MenuRadioItemGroup: import("react").ForwardRefExoticComponent<MenuRadioItemGroupProps & import("react").RefAttributes<HTMLDivElement>>;
export interface MenuRadioItemProps extends HTMLChakraProps<"div", ArkMenu.RadioItemBaseProps> {
}
export declare const MenuRadioItem: import("react").ForwardRefExoticComponent<MenuRadioItemProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const MenuContext: (props: ArkMenu.ContextProps) => import("react").ReactNode;
export declare const MenuItemContext: (props: ArkMenu.ItemContextProps) => import("react").ReactNode;
export interface MenuOpenChangeDetails extends ArkMenu.OpenChangeDetails {
}
export interface MenuSelectionDetails extends ArkMenu.SelectionDetails {
}
export interface MenuHighlightChangeDetails extends ArkMenu.HighlightChangeDetails {
}
