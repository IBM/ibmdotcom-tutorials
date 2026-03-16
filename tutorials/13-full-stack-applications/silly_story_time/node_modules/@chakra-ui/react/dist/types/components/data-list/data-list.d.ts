import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useDataListStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useDataListStyles };
export interface DataListRootBaseProps extends SlotRecipeProps<"dataList">, UnstyledProp {
}
export interface DataListRootProps extends HTMLChakraProps<"dl", DataListRootBaseProps> {
}
export declare const DataListRoot: import("react").ForwardRefExoticComponent<DataListRootProps & import("react").RefAttributes<HTMLDListElement>>;
export declare const DataListPropsProvider: React.Provider<DataListRootBaseProps>;
export interface DataListItemProps extends HTMLChakraProps<"div"> {
}
export declare const DataListItem: import("react").ForwardRefExoticComponent<DataListItemProps & import("react").RefAttributes<HTMLDivElement>>;
export interface DataListItemLabelProps extends HTMLChakraProps<"dt"> {
}
export declare const DataListItemLabel: import("react").ForwardRefExoticComponent<DataListItemLabelProps & import("react").RefAttributes<HTMLDivElement>>;
export interface DataListItemValueProps extends HTMLChakraProps<"dd"> {
}
export declare const DataListItemValue: import("react").ForwardRefExoticComponent<DataListItemValueProps & import("react").RefAttributes<HTMLDivElement>>;
