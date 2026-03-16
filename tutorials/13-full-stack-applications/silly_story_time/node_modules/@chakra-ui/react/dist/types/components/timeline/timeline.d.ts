import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useTimelineStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useTimelineStyles };
export interface TimelineRootBaseProps extends SlotRecipeProps<"timeline">, UnstyledProp {
}
export interface TimelineRootProps extends HTMLChakraProps<"div", TimelineRootBaseProps> {
}
export declare const TimelineRoot: import("react").ForwardRefExoticComponent<TimelineRootProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const TimelineRootPropsProvider: React.Provider<TimelineRootBaseProps>;
export interface TimelineItemProps extends HTMLChakraProps<"div"> {
}
export declare const TimelineItem: import("react").ForwardRefExoticComponent<TimelineItemProps & import("react").RefAttributes<HTMLDivElement>>;
export interface TimelineSeparatorProps extends HTMLChakraProps<"div"> {
}
export declare const TimelineSeparator: import("react").ForwardRefExoticComponent<TimelineSeparatorProps & import("react").RefAttributes<HTMLDivElement>>;
export interface TimelineIndicatorProps extends HTMLChakraProps<"div"> {
}
export declare const TimelineIndicator: import("react").ForwardRefExoticComponent<TimelineIndicatorProps & import("react").RefAttributes<HTMLDivElement>>;
export interface TimelineContentProps extends HTMLChakraProps<"div"> {
}
export declare const TimelineContent: import("react").ForwardRefExoticComponent<TimelineContentProps & import("react").RefAttributes<HTMLDivElement>>;
export interface TimelineTitleProps extends HTMLChakraProps<"div"> {
}
export declare const TimelineTitle: import("react").ForwardRefExoticComponent<TimelineTitleProps & import("react").RefAttributes<HTMLDivElement>>;
export interface TimelineDescriptionProps extends HTMLChakraProps<"div"> {
}
export declare const TimelineDescription: import("react").ForwardRefExoticComponent<TimelineDescriptionProps & import("react").RefAttributes<HTMLDivElement>>;
export interface TimelineConnectorProps extends HTMLChakraProps<"div"> {
}
export declare const TimelineConnector: import("react").ForwardRefExoticComponent<TimelineConnectorProps & import("react").RefAttributes<HTMLDivElement>>;
