import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useListStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useListStyles };
export interface ListRootBaseProps extends SlotRecipeProps<"list">, UnstyledProp {
}
export interface ListRootProps extends HTMLChakraProps<"ul", ListRootBaseProps> {
}
export declare const ListRoot: import("react").ForwardRefExoticComponent<ListRootProps & import("react").RefAttributes<HTMLUListElement>>;
export declare const ListRootPropsProvider: React.Provider<ListRootBaseProps>;
export interface ListItemProps extends HTMLChakraProps<"li"> {
}
export declare const ListItem: import("react").ForwardRefExoticComponent<ListItemProps & import("react").RefAttributes<HTMLLIElement>>;
export interface ListIndicatorProps extends HTMLChakraProps<"span"> {
}
export declare const ListIndicator: import("react").ForwardRefExoticComponent<ListIndicatorProps & import("react").RefAttributes<HTMLSpanElement>>;
