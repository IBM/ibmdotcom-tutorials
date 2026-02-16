import { type HTMLChakraProps, type SlotRecipeProps, type SystemStyleObject, type UnstyledProp } from "../../styled-system";
declare const useTableStyles: () => Record<string, SystemStyleObject>;
export { useTableStyles };
export interface TableRootBaseProps extends SlotRecipeProps<"table">, UnstyledProp {
}
export interface TableRootProps extends HTMLChakraProps<"table", TableRootBaseProps> {
    /**
     * If `true`, the table will style its descendants with nested selectors
     */
    native?: boolean;
}
export declare const TableRoot: import("react").ForwardRefExoticComponent<TableRootProps & import("react").RefAttributes<HTMLTableElement>>;
export declare const TableRootPropsProvider: React.Provider<TableRootBaseProps>;
export interface TableRowProps extends HTMLChakraProps<"tr"> {
}
export declare const TableRow: import("react").ForwardRefExoticComponent<TableRowProps & import("react").RefAttributes<HTMLTableRowElement>>;
export interface TableScrollAreaProps extends HTMLChakraProps<"div"> {
}
export declare const TableScrollArea: import("../..").ChakraComponent<"div", {}>;
export interface TableHeaderProps extends HTMLChakraProps<"thead"> {
}
export declare const TableHeader: import("react").ForwardRefExoticComponent<TableHeaderProps & import("react").RefAttributes<HTMLTableSectionElement>>;
export interface TableFooterProps extends HTMLChakraProps<"tfoot"> {
}
export declare const TableFooter: import("react").ForwardRefExoticComponent<TableFooterProps & import("react").RefAttributes<HTMLTableSectionElement>>;
export interface TableColumnHeaderProps extends HTMLChakraProps<"th"> {
}
export declare const TableColumnHeader: import("react").ForwardRefExoticComponent<TableColumnHeaderProps & import("react").RefAttributes<HTMLTableCellElement>>;
export interface TableCellProps extends HTMLChakraProps<"td"> {
}
export declare const TableCell: import("react").ForwardRefExoticComponent<TableCellProps & import("react").RefAttributes<HTMLTableCellElement>>;
export interface TableCaptionProps extends HTMLChakraProps<"caption"> {
}
export declare const TableCaption: import("react").ForwardRefExoticComponent<TableCaptionProps & import("react").RefAttributes<HTMLTableCaptionElement>>;
export interface TableBodyProps extends HTMLChakraProps<"tbody"> {
}
export declare const TableBody: import("react").ForwardRefExoticComponent<TableBodyProps & import("react").RefAttributes<HTMLTableSectionElement>>;
export interface TableColumnGroupProps extends HTMLChakraProps<"colgroup"> {
}
export declare const TableColumnGroup: import("react").ForwardRefExoticComponent<TableColumnGroupProps & import("react").RefAttributes<HTMLTableColElement>>;
export interface TableColumnProps extends HTMLChakraProps<"col"> {
}
export declare const TableColumn: import("react").ForwardRefExoticComponent<TableColumnProps & import("react").RefAttributes<HTMLTableColElement>>;
