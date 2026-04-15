import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useStatStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useStatStyles };
export interface StatRootBaseProps extends SlotRecipeProps<"stat">, UnstyledProp {
}
export interface StatRootProps extends HTMLChakraProps<"dl", StatRootBaseProps> {
}
export declare const StatRoot: import("react").ForwardRefExoticComponent<StatRootProps & import("react").RefAttributes<HTMLDListElement>>;
export declare const StatPropsProvider: React.Provider<StatRootBaseProps>;
export interface StatLabelProps extends HTMLChakraProps<"dt"> {
}
export declare const StatLabel: import("react").ForwardRefExoticComponent<StatLabelProps & import("react").RefAttributes<HTMLElement>>;
export interface StatValueTextProps extends HTMLChakraProps<"dd"> {
}
export declare const StatValueText: import("react").ForwardRefExoticComponent<StatValueTextProps & import("react").RefAttributes<HTMLElement>>;
export interface StatHelpTextProps extends HTMLChakraProps<"span"> {
}
export declare const StatHelpText: import("react").ForwardRefExoticComponent<StatHelpTextProps & import("react").RefAttributes<HTMLElement>>;
export interface StatValueUnitProps extends HTMLChakraProps<"span"> {
}
export declare const StatValueUnit: import("react").ForwardRefExoticComponent<StatValueUnitProps & import("react").RefAttributes<HTMLElement>>;
export interface StatUpIndicatorProps extends HTMLChakraProps<"span"> {
}
export declare const StatUpIndicator: import("react").ForwardRefExoticComponent<StatUpIndicatorProps & import("react").RefAttributes<HTMLElement>>;
export interface StatDownIndicatorProps extends HTMLChakraProps<"span"> {
}
export declare const StatDownIndicator: import("react").ForwardRefExoticComponent<StatDownIndicatorProps & import("react").RefAttributes<HTMLElement>>;
export interface StatGroupProps extends SlotRecipeProps<"stat">, HTMLChakraProps<"div"> {
}
export declare const StatGroup: import("react").ForwardRefExoticComponent<StatGroupProps & import("react").RefAttributes<HTMLDivElement>>;
