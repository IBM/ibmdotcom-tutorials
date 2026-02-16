import type { Assign } from "@ark-ui/react";
import { Progress as ArkProgress } from "@ark-ui/react/progress";
import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useProgressCircleStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useProgressCircleStyles };
export interface ProgressCircleRootProviderBaseProps extends Assign<ArkProgress.RootProviderBaseProps, SlotRecipeProps<"progressCircle">>, UnstyledProp {
}
export interface ProgressCircleRootProviderProps extends HTMLChakraProps<"div", ProgressCircleRootProviderBaseProps> {
}
export declare const ProgressCircleRootProvider: import("react").ForwardRefExoticComponent<ProgressCircleRootProviderProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ProgressCircleRootBaseProps extends Assign<ArkProgress.RootBaseProps, SlotRecipeProps<"progressCircle">>, UnstyledProp {
}
export interface ProgressCircleRootProps extends HTMLChakraProps<"div", ProgressCircleRootBaseProps> {
}
export declare const ProgressCircleRoot: import("react").ForwardRefExoticComponent<ProgressCircleRootProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ProgressCirclePropsProvider: React.Provider<ProgressCircleRootBaseProps>;
export interface ProgressCircleLabelProps extends HTMLChakraProps<"div", ArkProgress.LabelBaseProps> {
}
export declare const ProgressCircleLabel: import("react").ForwardRefExoticComponent<ProgressCircleLabelProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ProgressCircleCircleProps extends HTMLChakraProps<"svg", ArkProgress.CircleBaseProps> {
}
export declare const ProgressCircleCircle: import("react").ForwardRefExoticComponent<ProgressCircleCircleProps & import("react").RefAttributes<SVGSVGElement>>;
export interface ProgressCircleTrackProps extends HTMLChakraProps<"circle", ArkProgress.TrackBaseProps> {
}
export declare const ProgressCircleTrack: import("react").ForwardRefExoticComponent<ProgressCircleTrackProps & import("react").RefAttributes<SVGCircleElement>>;
export interface ProgressCircleRangeProps extends HTMLChakraProps<"circle", ArkProgress.RangeBaseProps> {
}
export declare const ProgressCircleRange: import("react").ForwardRefExoticComponent<ProgressCircleRangeProps & import("react").RefAttributes<SVGCircleElement>>;
export interface ProgressCircleValueTextProps extends HTMLChakraProps<"div", ArkProgress.ValueTextBaseProps> {
}
export declare const ProgressCircleValueText: import("react").ForwardRefExoticComponent<ProgressCircleValueTextProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ProgressCircleContext: (props: ArkProgress.ContextProps) => import("react").ReactNode;
