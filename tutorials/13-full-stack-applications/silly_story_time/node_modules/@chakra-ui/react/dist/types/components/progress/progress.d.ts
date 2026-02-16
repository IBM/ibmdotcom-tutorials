import type { Assign } from "@ark-ui/react";
import { Progress as ArkProgress } from "@ark-ui/react/progress";
import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useProgressStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useProgressStyles };
export interface ProgressRootProviderBaseProps extends Assign<ArkProgress.RootProviderBaseProps, SlotRecipeProps<"progress">>, UnstyledProp {
}
export interface ProgressRootProviderProps extends HTMLChakraProps<"div", ProgressRootProviderBaseProps> {
}
export declare const ProgressRootProvider: import("react").ForwardRefExoticComponent<ProgressRootProviderProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ProgressRootBaseProps extends Assign<ArkProgress.RootBaseProps, SlotRecipeProps<"progress">>, UnstyledProp {
}
export interface ProgressRootProps extends HTMLChakraProps<"div", ProgressRootBaseProps> {
}
export declare const ProgressRoot: import("react").ForwardRefExoticComponent<ProgressRootProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ProgressPropsProvider: React.Provider<ProgressRootBaseProps>;
export interface ProgressLabelProps extends HTMLChakraProps<"div", ArkProgress.LabelBaseProps> {
}
export declare const ProgressLabel: import("react").ForwardRefExoticComponent<ProgressLabelProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ProgressTrackProps extends HTMLChakraProps<"div", ArkProgress.TrackBaseProps> {
}
export declare const ProgressTrack: import("react").ForwardRefExoticComponent<ProgressTrackProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ProgressRangeProps extends HTMLChakraProps<"div", ArkProgress.RangeBaseProps> {
}
export declare const ProgressRange: import("react").ForwardRefExoticComponent<ProgressRangeProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ProgressValueTextProps extends HTMLChakraProps<"div", ArkProgress.ValueTextBaseProps> {
}
export declare const ProgressValueText: import("react").ForwardRefExoticComponent<ProgressValueTextProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ProgressContext: (props: ArkProgress.ContextProps) => import("react").ReactNode;
