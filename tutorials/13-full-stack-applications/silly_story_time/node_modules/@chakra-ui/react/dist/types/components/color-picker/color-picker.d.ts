import type { Assign } from "@ark-ui/react";
import { ColorPicker as ArkColorPicker } from "@ark-ui/react/color-picker";
import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
import { type IconButtonProps } from "../button";
import type { StackProps } from "../stack";
declare const useColorPickerStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useColorPickerStyles };
export interface ColorPickerRootProviderBaseProps extends Assign<ArkColorPicker.RootProviderBaseProps, SlotRecipeProps<"colorPicker">>, UnstyledProp {
}
export interface ColorPickerRootProviderProps extends HTMLChakraProps<"div", ColorPickerRootProviderBaseProps> {
}
export declare const ColorPickerRootProvider: import("react").ForwardRefExoticComponent<ColorPickerRootProviderProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ColorPickerRootBaseProps extends Assign<ArkColorPicker.RootBaseProps, SlotRecipeProps<"colorPicker">>, UnstyledProp {
}
export interface ColorPickerRootProps extends HTMLChakraProps<"div", ColorPickerRootBaseProps> {
}
export declare const ColorPickerRoot: import("react").ForwardRefExoticComponent<ColorPickerRootProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ColorPickerPropsProvider: React.Provider<ColorPickerRootBaseProps>;
export interface ColorPickerLabelProps extends HTMLChakraProps<"label", ArkColorPicker.LabelBaseProps> {
}
export declare const ColorPickerLabel: import("react").ForwardRefExoticComponent<ColorPickerLabelProps & import("react").RefAttributes<HTMLLabelElement>>;
export interface ColorPickerControlProps extends HTMLChakraProps<"div", ArkColorPicker.ControlBaseProps> {
}
export declare const ColorPickerControl: import("react").ForwardRefExoticComponent<ColorPickerControlProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ColorPickerValueSwatchProps extends HTMLChakraProps<"div", ArkColorPicker.ValueSwatchBaseProps> {
}
export declare const ColorPickerValueSwatch: import("react").ForwardRefExoticComponent<ColorPickerValueSwatchProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ColorPickerTriggerProps extends HTMLChakraProps<"button", ArkColorPicker.TriggerBaseProps> {
}
export declare const ColorPickerTrigger: import("react").ForwardRefExoticComponent<ColorPickerTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface ColorPickerPositionerProps extends HTMLChakraProps<"div", ArkColorPicker.PositionerBaseProps> {
}
export declare const ColorPickerPositioner: import("react").ForwardRefExoticComponent<ColorPickerPositionerProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ColorPickerContentProps extends HTMLChakraProps<"div", ArkColorPicker.ContentBaseProps> {
}
export declare const ColorPickerContent: import("react").ForwardRefExoticComponent<ColorPickerContentProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ColorPickerAreaBackgroundProps extends HTMLChakraProps<"div", ArkColorPicker.AreaBackgroundBaseProps> {
}
export declare const ColorPickerAreaBackground: import("react").ForwardRefExoticComponent<ColorPickerAreaBackgroundProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ColorPickerAreaThumbProps extends HTMLChakraProps<"div", ArkColorPicker.AreaThumbBaseProps> {
}
export declare const ColorPickerAreaThumb: import("react").ForwardRefExoticComponent<ColorPickerAreaThumbProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ColorPickerAreaProps extends HTMLChakraProps<"div", ArkColorPicker.AreaBaseProps> {
}
export declare const ColorPickerArea: import("react").ForwardRefExoticComponent<ColorPickerAreaProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ColorPickerChannelSliderTrackProps extends HTMLChakraProps<"div", ArkColorPicker.ChannelSliderTrackBaseProps> {
}
export declare const ColorPickerChannelSliderTrack: import("react").ForwardRefExoticComponent<ColorPickerChannelSliderTrackProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ColorPickerChannelSliderThumbProps extends HTMLChakraProps<"div", ArkColorPicker.ChannelSliderThumbBaseProps> {
}
export declare const ColorPickerChannelSliderThumb: import("react").ForwardRefExoticComponent<ColorPickerChannelSliderThumbProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ColorPickerTransparencyGridProps extends HTMLChakraProps<"div", ArkColorPicker.TransparencyGridBaseProps> {
}
export declare const ColorPickerTransparencyGrid: import("react").ForwardRefExoticComponent<ColorPickerTransparencyGridProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ColorPickerChannelSliderProps extends HTMLChakraProps<"div", ArkColorPicker.ChannelSliderBaseProps> {
}
export declare const ColorPickerChannelSlider: import("react").ForwardRefExoticComponent<ColorPickerChannelSliderProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ColorPickerSliders: import("react").ForwardRefExoticComponent<StackProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ColorPickerChannelInputProps extends HTMLChakraProps<"input", ArkColorPicker.ChannelInputBaseProps> {
}
export declare const ColorPickerChannelInput: import("react").ForwardRefExoticComponent<ColorPickerChannelInputProps & import("react").RefAttributes<HTMLInputElement>>;
export declare const ColorPickerInput: import("react").ForwardRefExoticComponent<Omit<ColorPickerChannelInputProps, "channel"> & import("react").RefAttributes<HTMLInputElement>>;
export interface ColorPickerSwatchGroupProps extends HTMLChakraProps<"div", ArkColorPicker.SwatchGroupBaseProps> {
}
export declare const ColorPickerSwatchGroup: import("react").ForwardRefExoticComponent<ColorPickerSwatchGroupProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ColorPickerSwatchTriggerProps extends HTMLChakraProps<"button", ArkColorPicker.SwatchTriggerBaseProps> {
}
export declare const ColorPickerSwatchTrigger: import("react").ForwardRefExoticComponent<ColorPickerSwatchTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface ColorPickerSwatchProps extends HTMLChakraProps<"div", ArkColorPicker.SwatchBaseProps> {
}
export declare const ColorPickerSwatch: import("react").ForwardRefExoticComponent<ColorPickerSwatchProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ColorPickerSwatchIndicatorProps extends HTMLChakraProps<"div", ArkColorPicker.SwatchIndicatorBaseProps> {
}
export declare const ColorPickerSwatchIndicator: import("react").ForwardRefExoticComponent<ColorPickerSwatchIndicatorProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ColorPickerValueTextProps extends HTMLChakraProps<"div", ArkColorPicker.ValueTextBaseProps> {
}
export declare const ColorPickerValueText: import("react").ForwardRefExoticComponent<ColorPickerValueTextProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ColorPickerViewProps extends HTMLChakraProps<"div", ArkColorPicker.ViewBaseProps> {
}
export declare const ColorPickerView: import("react").ForwardRefExoticComponent<ColorPickerViewProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ColorPickerFormatTriggerProps extends HTMLChakraProps<"button", ArkColorPicker.FormatTriggerBaseProps> {
}
export declare const ColorPickerFormatTrigger: import("react").ForwardRefExoticComponent<ColorPickerFormatTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface ColorPickerFormatSelectProps extends HTMLChakraProps<"select", ArkColorPicker.FormatSelectBaseProps> {
}
export declare const ColorPickerFormatSelect: import("react").ForwardRefExoticComponent<ColorPickerFormatSelectProps & import("react").RefAttributes<HTMLSelectElement>>;
export interface ColorPickerEyeDropperTriggerProps extends IconButtonProps {
}
export declare const ColorPickerEyeDropperTrigger: import("react").ForwardRefExoticComponent<ColorPickerEyeDropperTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface ColorPickerEyeDropperProps extends IconButtonProps {
}
export declare const ColorPickerEyeDropper: import("react").ForwardRefExoticComponent<ColorPickerEyeDropperProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface ColorPickerChannelSliderValueTextProps extends HTMLChakraProps<"div", ArkColorPicker.ChannelSliderValueTextBaseProps> {
}
export declare const ColorPickerChannelSliderValueText: import("react").ForwardRefExoticComponent<ColorPickerChannelSliderValueTextProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ColorPickerChannelSliderLabelProps extends HTMLChakraProps<"div", ArkColorPicker.ChannelSliderLabelBaseProps> {
}
export declare const ColorPickerChannelSliderLabel: import("react").ForwardRefExoticComponent<ColorPickerChannelSliderLabelProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ColorPickerHiddenInput: import("react").ForwardRefExoticComponent<ArkColorPicker.HiddenInputProps & import("react").RefAttributes<HTMLInputElement>>;
export declare const ColorPickerContext: (props: ArkColorPicker.ContextProps) => import("react").ReactNode;
export interface ColorPickerValueChangeDetails extends ArkColorPicker.ValueChangeDetails {
}
export interface ColorPickerChannelTextProps extends HTMLChakraProps<"span"> {
}
export declare const ColorPickerChannelText: import("react").ForwardRefExoticComponent<ColorPickerChannelTextProps & import("react").RefAttributes<HTMLSpanElement>>;
declare const formatMap: {
    readonly rgba: readonly ["red", "green", "blue", "alpha"];
    readonly hsla: readonly ["hue", "saturation", "lightness", "alpha"];
    readonly hsba: readonly ["hue", "saturation", "brightness", "alpha"];
    readonly hexa: readonly ["hex", "alpha"];
};
type ColorFormatMap = typeof formatMap;
export declare const getColorChannels: <T extends keyof ColorFormatMap>(format: T) => ColorFormatMap[T];
