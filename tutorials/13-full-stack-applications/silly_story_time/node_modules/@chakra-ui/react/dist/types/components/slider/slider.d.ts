import type { Assign } from "@ark-ui/react";
import { Slider as ArkSlider } from "@ark-ui/react/slider";
import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useSliderStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useSliderStyles };
export interface SliderRootProviderBaseProps extends Assign<ArkSlider.RootProviderBaseProps, SlotRecipeProps<"slider">>, UnstyledProp {
}
export interface SliderRootProviderProps extends HTMLChakraProps<"div", SliderRootProviderBaseProps> {
}
export declare const SliderRootProvider: import("react").ForwardRefExoticComponent<SliderRootProviderProps & import("react").RefAttributes<HTMLDivElement>>;
export interface SliderRootBaseProps extends Assign<ArkSlider.RootBaseProps, SlotRecipeProps<"slider">>, UnstyledProp {
}
export interface SliderRootProps extends HTMLChakraProps<"div", SliderRootBaseProps> {
}
export declare const SliderRoot: import("react").ForwardRefExoticComponent<SliderRootProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const SliderPropsProvider: React.Provider<SliderRootBaseProps>;
export interface SliderTrackProps extends HTMLChakraProps<"div", ArkSlider.TrackBaseProps> {
}
export declare const SliderTrack: import("react").ForwardRefExoticComponent<SliderTrackProps & import("react").RefAttributes<HTMLDivElement>>;
export interface SliderRangeProps extends HTMLChakraProps<"div", ArkSlider.RangeBaseProps> {
}
export declare const SliderRange: import("react").ForwardRefExoticComponent<SliderRangeProps & import("react").RefAttributes<HTMLDivElement>>;
export interface SliderThumbProps extends HTMLChakraProps<"div", ArkSlider.ThumbBaseProps> {
}
export declare const SliderThumb: import("react").ForwardRefExoticComponent<SliderThumbProps & import("react").RefAttributes<HTMLDivElement>>;
export interface SliderValueTextProps extends HTMLChakraProps<"div", ArkSlider.ValueTextBaseProps> {
}
export declare const SliderValueText: import("react").ForwardRefExoticComponent<SliderValueTextProps & import("react").RefAttributes<HTMLDivElement>>;
export interface SliderLabelProps extends HTMLChakraProps<"label", ArkSlider.LabelBaseProps> {
}
export declare const SliderLabel: import("react").ForwardRefExoticComponent<SliderLabelProps & import("react").RefAttributes<HTMLLabelElement>>;
export interface SliderMarkerGroupProps extends HTMLChakraProps<"div", ArkSlider.MarkerGroupBaseProps> {
}
export declare const SliderMarkerGroup: import("react").ForwardRefExoticComponent<SliderMarkerGroupProps & import("react").RefAttributes<HTMLDivElement>>;
export interface SliderMarkerProps extends HTMLChakraProps<"div", ArkSlider.MarkerBaseProps> {
}
export declare const SliderMarker: import("react").ForwardRefExoticComponent<SliderMarkerProps & import("react").RefAttributes<HTMLDivElement>>;
export interface SliderMarkerIndicatorProps extends HTMLChakraProps<"div"> {
}
export declare const SliderMarkerIndicator: import("react").ForwardRefExoticComponent<SliderMarkerIndicatorProps & import("react").RefAttributes<HTMLDivElement>>;
export interface SliderDraggingIndicatorProps extends HTMLChakraProps<"div", ArkSlider.DraggingIndicatorBaseProps> {
}
export declare const SliderDraggingIndicator: import("react").ForwardRefExoticComponent<SliderDraggingIndicatorProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const SliderThumbs: (props: Omit<SliderThumbProps, "index">) => import("react/jsx-runtime").JSX.Element;
export interface SliderMarksProps extends SliderMarkerGroupProps {
    marks?: Array<number | {
        value: number;
        label: React.ReactNode;
    }>;
}
export declare const SliderMarks: import("react").ForwardRefExoticComponent<SliderMarksProps & import("react").RefAttributes<HTMLDivElement>>;
export interface SliderControlProps extends HTMLChakraProps<"div", ArkSlider.ControlBaseProps> {
}
export declare const SliderControl: import("react").ForwardRefExoticComponent<SliderControlProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const SliderContext: (props: ArkSlider.ContextProps) => import("react").ReactNode;
export declare const SliderHiddenInput: import("react").ForwardRefExoticComponent<ArkSlider.HiddenInputProps & import("react").RefAttributes<HTMLInputElement>>;
export interface SliderValueChangeDetails extends ArkSlider.ValueChangeDetails {
}
