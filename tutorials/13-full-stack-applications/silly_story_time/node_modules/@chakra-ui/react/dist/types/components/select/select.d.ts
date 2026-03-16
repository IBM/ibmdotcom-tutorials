import type { Assign, CollectionItem } from "@ark-ui/react";
import { Select as ArkSelect } from "@ark-ui/react/select";
import type { JSX } from "react";
import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useSelectStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useSelectStyles };
export interface SelectRootProviderBaseProps<T extends CollectionItem = any> extends Assign<ArkSelect.RootProviderBaseProps<T>, SlotRecipeProps<"select">>, UnstyledProp {
}
export interface SelectRootProviderProps<T extends CollectionItem = any> extends HTMLChakraProps<"div", SelectRootProviderBaseProps<T>> {
}
interface SelectRootProviderComponent {
    <T extends CollectionItem>(props: SelectRootProviderProps<T>): JSX.Element;
}
export declare const SelectRootProvider: SelectRootProviderComponent;
export interface SelectRootBaseProps<T extends CollectionItem = any> extends Assign<ArkSelect.RootBaseProps<T>, SlotRecipeProps<"select">>, UnstyledProp {
}
export interface SelectRootProps<T extends CollectionItem = any> extends HTMLChakraProps<"div", SelectRootBaseProps<T>> {
}
export interface SelectRootComponent {
    <T extends CollectionItem>(props: SelectRootProps<T> & React.RefAttributes<HTMLDivElement>): JSX.Element;
}
export declare const SelectRoot: SelectRootComponent;
export declare const SelectPropsProvider: React.Provider<SelectRootBaseProps>;
export interface SelectTriggerProps extends HTMLChakraProps<"button", ArkSelect.TriggerBaseProps> {
}
export declare const SelectTrigger: import("react").ForwardRefExoticComponent<SelectTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface SelectPositionerProps extends HTMLChakraProps<"div", ArkSelect.PositionerBaseProps> {
}
export declare const SelectPositioner: import("react").ForwardRefExoticComponent<SelectPositionerProps & import("react").RefAttributes<HTMLDivElement>>;
export interface SelectContentProps extends HTMLChakraProps<"div", ArkSelect.ContentBaseProps> {
}
export declare const SelectContent: import("react").ForwardRefExoticComponent<SelectContentProps & import("react").RefAttributes<HTMLDivElement>>;
export interface SelectValueTextProps extends HTMLChakraProps<"span", ArkSelect.ValueTextBaseProps> {
}
export declare const SelectValueText: import("react").ForwardRefExoticComponent<SelectValueTextProps & import("react").RefAttributes<HTMLSpanElement>>;
export interface SelectClearTriggerProps extends HTMLChakraProps<"button", ArkSelect.ClearTriggerBaseProps> {
}
export declare const SelectClearTrigger: import("react").ForwardRefExoticComponent<SelectClearTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface SelectItemGroupProps extends HTMLChakraProps<"div", ArkSelect.ItemGroupBaseProps> {
}
export declare const SelectItemGroup: import("react").ForwardRefExoticComponent<SelectItemGroupProps & import("react").RefAttributes<HTMLDivElement>>;
export interface SelectItemGroupLabelProps extends HTMLChakraProps<"div", ArkSelect.ItemGroupLabelBaseProps> {
}
export declare const SelectItemGroupLabel: import("react").ForwardRefExoticComponent<SelectItemGroupLabelProps & import("react").RefAttributes<HTMLDivElement>>;
export interface SelectItemProps extends HTMLChakraProps<"div", ArkSelect.ItemBaseProps> {
}
export declare const SelectItem: import("react").ForwardRefExoticComponent<SelectItemProps & import("react").RefAttributes<HTMLDivElement>>;
export interface SelectItemTextProps extends HTMLChakraProps<"div", ArkSelect.ItemTextBaseProps> {
}
export declare const SelectItemText: import("react").ForwardRefExoticComponent<SelectItemTextProps & import("react").RefAttributes<HTMLDivElement>>;
export interface SelectItemIndicatorProps extends HTMLChakraProps<"div", ArkSelect.ItemIndicatorBaseProps> {
}
export declare const SelectItemIndicator: import("react").ForwardRefExoticComponent<SelectItemIndicatorProps & import("react").RefAttributes<HTMLDivElement>>;
export interface SelectIndicatorGroupProps extends HTMLChakraProps<"div"> {
}
export declare const SelectIndicatorGroup: import("react").ForwardRefExoticComponent<SelectIndicatorGroupProps & import("react").RefAttributes<HTMLDivElement>>;
export interface SelectIndicatorProps extends HTMLChakraProps<"div", ArkSelect.ItemIndicatorBaseProps> {
}
export declare const SelectIndicator: import("react").ForwardRefExoticComponent<SelectItemIndicatorProps & import("react").RefAttributes<HTMLDivElement>>;
export interface SelectControlProps extends HTMLChakraProps<"div", ArkSelect.ControlBaseProps> {
}
export declare const SelectControl: import("react").ForwardRefExoticComponent<SelectControlProps & import("react").RefAttributes<HTMLDivElement>>;
export interface SelectLabelProps extends HTMLChakraProps<"label", ArkSelect.LabelBaseProps> {
}
export declare const SelectLabel: import("react").ForwardRefExoticComponent<SelectLabelProps & import("react").RefAttributes<HTMLLabelElement>>;
export declare const SelectContext: <T extends unknown>(props: ArkSelect.ContextProps<T>) => import("react").ReactNode;
export declare const SelectHiddenSelect: import("react").ForwardRefExoticComponent<ArkSelect.HiddenSelectProps & import("react").RefAttributes<HTMLSelectElement>>;
export declare const SelectItemContext: (props: ArkSelect.ItemContextProps) => import("react").ReactNode;
export interface SelectHighlightChangeDetails<T extends CollectionItem = any> extends ArkSelect.HighlightChangeDetails<T> {
}
export interface SelectValueChangeDetails<T extends CollectionItem = any> extends ArkSelect.ValueChangeDetails<T> {
}
export interface SelectOpenChangeDetails extends ArkSelect.OpenChangeDetails {
}
