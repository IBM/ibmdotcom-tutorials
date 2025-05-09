import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useBreadcrumbStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useBreadcrumbStyles };
export interface BreadcrumbRootBaseProps extends SlotRecipeProps<"breadcrumb">, UnstyledProp {
}
export interface BreadcrumbRootProps extends HTMLChakraProps<"nav", BreadcrumbRootBaseProps> {
}
export declare const BreadcrumbRoot: import("react").ForwardRefExoticComponent<BreadcrumbRootProps & import("react").RefAttributes<HTMLElement>>;
export declare const BreadcrumbPropsProvider: React.Provider<BreadcrumbRootBaseProps>;
export interface BreadcrumbListProps extends HTMLChakraProps<"ol"> {
}
export declare const BreadcrumbList: import("react").ForwardRefExoticComponent<BreadcrumbListProps & import("react").RefAttributes<HTMLElement>>;
export interface BreadcrumbItemProps extends HTMLChakraProps<"li"> {
}
export declare const BreadcrumbItem: import("react").ForwardRefExoticComponent<BreadcrumbItemProps & import("react").RefAttributes<HTMLElement>>;
export interface BreadcrumbLinkProps extends HTMLChakraProps<"a"> {
}
export declare const BreadcrumbLink: import("react").ForwardRefExoticComponent<BreadcrumbLinkProps & import("react").RefAttributes<HTMLAnchorElement>>;
export interface BreadcrumbCurrentLinkProps extends HTMLChakraProps<"span"> {
}
export declare const BreadcrumbCurrentLink: import("react").ForwardRefExoticComponent<BreadcrumbCurrentLinkProps & import("react").RefAttributes<HTMLElement>>;
export interface BreadcrumbSeparatorProps extends HTMLChakraProps<"li"> {
}
export declare const BreadcrumbSeparator: import("react").ForwardRefExoticComponent<BreadcrumbSeparatorProps & import("react").RefAttributes<HTMLElement>>;
export interface BreadcrumbEllipsisProps extends HTMLChakraProps<"span"> {
}
export declare const BreadcrumbEllipsis: import("react").ForwardRefExoticComponent<BreadcrumbEllipsisProps & import("react").RefAttributes<HTMLElement>>;
