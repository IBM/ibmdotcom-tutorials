import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useStatusStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useStatusStyles };
export interface StatusRootBaseProps extends SlotRecipeProps<"status">, UnstyledProp {
}
export interface StatusRootProps extends HTMLChakraProps<"div", StatusRootBaseProps> {
}
export declare const StatusRoot: import("react").ForwardRefExoticComponent<StatusRootProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const StatusPropsProvider: React.Provider<StatusRootBaseProps>;
export interface StatusIndicatorProps extends HTMLChakraProps<"div"> {
}
export declare const StatusIndicator: import("react").ForwardRefExoticComponent<StatusIndicatorProps & import("react").RefAttributes<HTMLDivElement>>;
