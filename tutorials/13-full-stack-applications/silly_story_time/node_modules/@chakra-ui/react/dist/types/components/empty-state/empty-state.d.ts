import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useEmptyStateStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useEmptyStateStyles };
export interface EmptyStateRootBaseProps extends SlotRecipeProps<"emptyState">, UnstyledProp {
}
export interface EmptyStateRootProps extends HTMLChakraProps<"div", EmptyStateRootBaseProps> {
}
export declare const EmptyStateRoot: import("react").ForwardRefExoticComponent<EmptyStateRootProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const EmptyStatePropsProvider: React.Provider<EmptyStateRootBaseProps>;
export interface EmptyStateContentProps extends HTMLChakraProps<"div"> {
}
export declare const EmptyStateContent: import("react").ForwardRefExoticComponent<EmptyStateContentProps & import("react").RefAttributes<HTMLDivElement>>;
export interface EmptyStateIndicatorProps extends HTMLChakraProps<"div"> {
}
export declare const EmptyStateIndicator: import("react").ForwardRefExoticComponent<EmptyStateIndicatorProps & import("react").RefAttributes<HTMLDivElement>>;
export interface EmptyStateTitleProps extends HTMLChakraProps<"h3"> {
}
export declare const EmptyStateTitle: import("react").ForwardRefExoticComponent<EmptyStateTitleProps & import("react").RefAttributes<HTMLHeadingElement>>;
export interface EmptyStateDescriptionProps extends HTMLChakraProps<"p"> {
}
export declare const EmptyStateDescription: import("react").ForwardRefExoticComponent<EmptyStateDescriptionProps & import("react").RefAttributes<HTMLParagraphElement>>;
