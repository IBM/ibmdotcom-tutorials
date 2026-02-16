import type { Assign } from "@ark-ui/react";
import { SegmentGroup as ArkSegmentGroup } from "@ark-ui/react/segment-group";
import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useSegmentGroupStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useSegmentGroupStyles };
export interface SegmentGroupRootProviderBaseProps extends Assign<ArkSegmentGroup.RootProviderBaseProps, SlotRecipeProps<"segmentGroup">>, UnstyledProp {
}
export interface SegmentGroupRootProviderProps extends HTMLChakraProps<"div", SegmentGroupRootProviderBaseProps> {
}
export declare const SegmentGroupRootProvider: import("react").ForwardRefExoticComponent<SegmentGroupRootProviderProps & import("react").RefAttributes<HTMLDivElement>>;
export interface SegmentGroupRootBaseProps extends Assign<ArkSegmentGroup.RootBaseProps, SlotRecipeProps<"segmentGroup">>, UnstyledProp {
}
export interface SegmentGroupRootProps extends HTMLChakraProps<"div", SegmentGroupRootBaseProps> {
}
export declare const SegmentGroupRoot: import("react").ForwardRefExoticComponent<SegmentGroupRootProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const SegmentGroupPropsProvider: React.Provider<SegmentGroupRootBaseProps>;
export interface SegmentGroupItemProps extends HTMLChakraProps<"label", ArkSegmentGroup.ItemBaseProps> {
}
export declare const SegmentGroupItem: import("react").ForwardRefExoticComponent<SegmentGroupItemProps & import("react").RefAttributes<HTMLLabelElement>>;
export interface SegmentGroupItemTextProps extends HTMLChakraProps<"span", ArkSegmentGroup.ItemTextBaseProps> {
}
export declare const SegmentGroupItemText: import("react").ForwardRefExoticComponent<SegmentGroupItemTextProps & import("react").RefAttributes<HTMLSpanElement>>;
export interface SegmentGroupIndicatorProps extends HTMLChakraProps<"div", ArkSegmentGroup.IndicatorBaseProps> {
}
export declare const SegmentGroupIndicator: import("react").ForwardRefExoticComponent<SegmentGroupIndicatorProps & import("react").RefAttributes<HTMLSpanElement>>;
interface Item {
    value: string;
    label: React.ReactNode;
    disabled?: boolean;
}
export interface SegmentGroupItemsProps extends Omit<SegmentGroupItemProps, "value"> {
    items: Array<string | Item>;
}
export declare const SegmentGroupItems: (props: SegmentGroupItemsProps) => import("react/jsx-runtime").JSX.Element;
export declare const SegmentGroupItemHiddenInput: import("react").ForwardRefExoticComponent<ArkSegmentGroup.ItemHiddenInputProps & import("react").RefAttributes<HTMLInputElement>>;
export declare const SegmentGroupContext: (props: ArkSegmentGroup.ContextProps) => import("react").ReactNode;
export declare const SegmentGroupItemContext: (props: ArkSegmentGroup.ItemContextProps) => import("react").ReactNode;
export interface SegmentGroupValueChangeDetails extends ArkSegmentGroup.ValueChangeDetails {
}
