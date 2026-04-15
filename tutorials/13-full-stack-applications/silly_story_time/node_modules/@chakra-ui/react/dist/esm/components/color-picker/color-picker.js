"use strict";
"use client";
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { ColorPicker, useColorPickerContext } from '@ark-ui/react/color-picker';
import { forwardRef } from 'react';
import { mergeProps } from '../../merge-props.js';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';
import { PipetteIcon } from '../icons.js';
import { Stack } from '../stack/stack.js';
import { IconButton } from '../button/icon-button.js';

const {
  withProvider,
  withContext,
  useStyles: useColorPickerStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "colorPicker" });
const ColorPickerRootProvider = withProvider(ColorPicker.RootProvider, "root", { forwardAsChild: true });
const ColorPickerRoot = withProvider(ColorPicker.Root, "root", { forwardAsChild: true });
const ColorPickerPropsProvider = PropsProvider;
const ColorPickerLabel = withContext(ColorPicker.Label, "label", { forwardAsChild: true });
const ColorPickerControl = withContext(ColorPicker.Control, "control", { forwardAsChild: true });
const ColorPickerValueSwatch = withContext(ColorPicker.ValueSwatch, "swatch", { forwardAsChild: true });
const ColorPickerTrigger = withContext(ColorPicker.Trigger, "trigger", {
  forwardAsChild: true,
  defaultProps: {
    children: /* @__PURE__ */ jsx(ColorPickerValueSwatch, {})
  }
});
const ColorPickerPositioner = withContext(ColorPicker.Positioner, "positioner", { forwardAsChild: true });
const ColorPickerContent = withContext(ColorPicker.Content, "content", { forwardAsChild: true });
const ColorPickerAreaBackground = withContext(ColorPicker.AreaBackground, "areaBackground", { forwardAsChild: true });
const ColorPickerAreaThumb = withContext(ColorPicker.AreaThumb, "areaThumb", { forwardAsChild: true });
const ColorPickerArea = withContext(ColorPicker.Area, "area", {
  forwardAsChild: true,
  defaultProps: {
    children: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(ColorPickerAreaBackground, {}),
      /* @__PURE__ */ jsx(ColorPickerAreaThumb, {})
    ] })
  }
});
const ColorPickerChannelSliderTrack = withContext(ColorPicker.ChannelSliderTrack, "channelSliderTrack", {
  forwardAsChild: true
});
const ColorPickerChannelSliderThumb = withContext(ColorPicker.ChannelSliderThumb, "channelSliderThumb", {
  forwardAsChild: true
});
const ColorPickerTransparencyGrid = withContext(ColorPicker.TransparencyGrid, "transparencyGrid", { forwardAsChild: true });
const ColorPickerChannelSlider = withContext(ColorPicker.ChannelSlider, "channelSlider", {
  forwardAsChild: true,
  defaultProps: {
    children: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(ColorPickerTransparencyGrid, { size: "0.6rem" }),
      /* @__PURE__ */ jsx(ColorPickerChannelSliderTrack, {}),
      /* @__PURE__ */ jsx(ColorPickerChannelSliderThumb, {})
    ] })
  }
});
const ColorPickerSliders = forwardRef(
  function ColorPickerSliders2(props, ref) {
    return /* @__PURE__ */ jsxs(Stack, { gap: "1", flex: "1", px: "1", ref, ...props, children: [
      /* @__PURE__ */ jsx(ColorPickerChannelSlider, { channel: "hue" }),
      /* @__PURE__ */ jsx(ColorPickerChannelSlider, { channel: "alpha" })
    ] });
  }
);
const ColorPickerChannelInput = withContext(ColorPicker.ChannelInput, "channelInput", { forwardAsChild: true });
const ColorPickerInput = forwardRef(function ColorHexInput(props, ref) {
  return /* @__PURE__ */ jsx(ColorPickerChannelInput, { channel: "hex", ref, ...props });
});
const ColorPickerSwatchGroup = withContext(ColorPicker.SwatchGroup, "swatchGroup", { forwardAsChild: true });
const ColorPickerSwatchTrigger = withContext(ColorPicker.SwatchTrigger, "swatchTrigger", { forwardAsChild: true });
const ColorPickerSwatch = withContext(ColorPicker.Swatch, "swatch", { forwardAsChild: true });
const ColorPickerSwatchIndicator = withContext(ColorPicker.SwatchIndicator, "swatchIndicator", { forwardAsChild: true });
const ColorPickerValueText = withContext(ColorPicker.ValueText, "valueText", { forwardAsChild: true });
const ColorPickerView = withContext(ColorPicker.View, "view", { forwardAsChild: true });
const ColorPickerFormatTrigger = withContext(ColorPicker.FormatTrigger, "formatTrigger", { forwardAsChild: true });
const ColorPickerFormatSelect = withContext(ColorPicker.FormatSelect, "formatSelect", { forwardAsChild: true });
const ColorPickerEyeDropperTrigger = withContext(ColorPicker.EyeDropperTrigger, "eyeDropperTrigger", {
  forwardAsChild: true
});
const ColorPickerEyeDropper = forwardRef(function ColorPickerEyeDropper2(props, ref) {
  const { children = /* @__PURE__ */ jsx(PipetteIcon, {}), ...rest } = props;
  const picker = useColorPickerContext();
  const localProps = mergeProps(picker.getEyeDropperTriggerProps(), rest);
  return /* @__PURE__ */ jsx(IconButton, { ref, ...localProps, children });
});
const ColorPickerChannelSliderValueText = withContext(ColorPicker.ChannelSliderValueText, "channelSliderValueText", {
  forwardAsChild: true
});
const ColorPickerChannelSliderLabel = withContext(ColorPicker.ChannelSliderLabel, "channelSliderLabel", {
  forwardAsChild: true
});
const ColorPickerHiddenInput = forwardRef(function ColorPickerHiddenInput2(props, ref) {
  return /* @__PURE__ */ jsx(ColorPicker.HiddenInput, { tabIndex: -1, ref, ...props });
});
const ColorPickerContext = ColorPicker.Context;
const ColorPickerChannelText = withContext("span", "channelText", {
  forwardAsChild: true
});
const formatMap = {
  rgba: ["red", "green", "blue", "alpha"],
  hsla: ["hue", "saturation", "lightness", "alpha"],
  hsba: ["hue", "saturation", "brightness", "alpha"],
  hexa: ["hex", "alpha"]
};
const getColorChannels = (format) => formatMap[format];

export { ColorPickerArea, ColorPickerAreaBackground, ColorPickerAreaThumb, ColorPickerChannelInput, ColorPickerChannelSlider, ColorPickerChannelSliderLabel, ColorPickerChannelSliderThumb, ColorPickerChannelSliderTrack, ColorPickerChannelSliderValueText, ColorPickerChannelText, ColorPickerContent, ColorPickerContext, ColorPickerControl, ColorPickerEyeDropper, ColorPickerEyeDropperTrigger, ColorPickerFormatSelect, ColorPickerFormatTrigger, ColorPickerHiddenInput, ColorPickerInput, ColorPickerLabel, ColorPickerPositioner, ColorPickerPropsProvider, ColorPickerRoot, ColorPickerRootProvider, ColorPickerSliders, ColorPickerSwatch, ColorPickerSwatchGroup, ColorPickerSwatchIndicator, ColorPickerSwatchTrigger, ColorPickerTransparencyGrid, ColorPickerTrigger, ColorPickerValueSwatch, ColorPickerValueText, ColorPickerView, getColorChannels, useColorPickerStyles };
