import { type ConditionalValue, type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
interface StatusProps {
    status: ConditionalValue<"info" | "warning" | "success" | "error" | "neutral">;
}
export declare const AlertStatusProvider: import("react").Provider<StatusProps>, useAlertStatusContext: () => StatusProps;
declare const useAlertStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useAlertStyles };
export interface AlertRootBaseProps extends SlotRecipeProps<"alert">, UnstyledProp {
}
export interface AlertRootProps extends HTMLChakraProps<"div", AlertRootBaseProps> {
}
export declare const AlertRoot: import("react").ForwardRefExoticComponent<AlertRootProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const AlertPropsProvider: React.Provider<AlertRootBaseProps>;
export interface AlertTitleProps extends HTMLChakraProps<"div"> {
}
export declare const AlertTitle: import("react").ForwardRefExoticComponent<AlertTitleProps & import("react").RefAttributes<HTMLDivElement>>;
export interface AlertDescriptionProps extends HTMLChakraProps<"div"> {
}
export declare const AlertDescription: import("react").ForwardRefExoticComponent<AlertDescriptionProps & import("react").RefAttributes<HTMLDivElement>>;
export interface AlertContentProps extends HTMLChakraProps<"div"> {
}
export declare const AlertContent: import("react").ForwardRefExoticComponent<AlertContentProps & import("react").RefAttributes<HTMLDivElement>>;
export interface AlertIndicatorProps extends HTMLChakraProps<"span"> {
}
export declare const AlertIndicator: import("react").ForwardRefExoticComponent<AlertIndicatorProps & import("react").RefAttributes<SVGSVGElement>>;
