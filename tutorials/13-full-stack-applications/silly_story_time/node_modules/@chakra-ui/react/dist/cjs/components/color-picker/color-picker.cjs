"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var colorPicker = require('@ark-ui/react/color-picker');
var React = require('react');
var mergeProps = require('../../merge-props.cjs');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');
var icons = require('../icons.cjs');
var stack = require('../stack/stack.cjs');
var iconButton = require('../button/icon-button.cjs');

const {
  withProvider,
  withContext,
  useStyles: useColorPickerStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "colorPicker" });
const ColorPickerRootProvider = withProvider(colorPicker.ColorPicker.RootProvider, "root", { forwardAsChild: true });
const ColorPickerRoot = withProvider(colorPicker.ColorPicker.Root, "root", { forwardAsChild: true });
const ColorPickerPropsProvider = PropsProvider;
const ColorPickerLabel = withContext(colorPicker.ColorPicker.Label, "label", { forwardAsChild: true });
const ColorPickerControl = withContext(colorPicker.ColorPicker.Control, "control", { forwardAsChild: true });
const ColorPickerValueSwatch = withContext(colorPicker.ColorPicker.ValueSwatch, "swatch", { forwardAsChild: true });
const ColorPickerTrigger = withContext(colorPicker.ColorPicker.Trigger, "trigger", {
  forwardAsChild: true,
  defaultProps: {
    children: /* @__PURE__ */ jsxRuntime.jsx(ColorPickerValueSwatch, {})
  }
});
const ColorPickerPositioner = withContext(colorPicker.ColorPicker.Positioner, "positioner", { forwardAsChild: true });
const ColorPickerContent = withContext(colorPicker.ColorPicker.Content, "content", { forwardAsChild: true });
const ColorPickerAreaBackground = withContext(colorPicker.ColorPicker.AreaBackground, "areaBackground", { forwardAsChild: true });
const ColorPickerAreaThumb = withContext(colorPicker.ColorPicker.AreaThumb, "areaThumb", { forwardAsChild: true });
const ColorPickerArea = withContext(colorPicker.ColorPicker.Area, "area", {
  forwardAsChild: true,
  defaultProps: {
    children: /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(ColorPickerAreaBackground, {}),
      /* @__PURE__ */ jsxRuntime.jsx(ColorPickerAreaThumb, {})
    ] })
  }
});
const ColorPickerChannelSliderTrack = withContext(colorPicker.ColorPicker.ChannelSliderTrack, "channelSliderTrack", {
  forwardAsChild: true
});
const ColorPickerChannelSliderThumb = withContext(colorPicker.ColorPicker.ChannelSliderThumb, "channelSliderThumb", {
  forwardAsChild: true
});
const ColorPickerTransparencyGrid = withContext(colorPicker.ColorPicker.TransparencyGrid, "transparencyGrid", { forwardAsChild: true });
const ColorPickerChannelSlider = withContext(colorPicker.ColorPicker.ChannelSlider, "channelSlider", {
  forwardAsChild: true,
  defaultProps: {
    children: /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(ColorPickerTransparencyGrid, { size: "0.6rem" }),
      /* @__PURE__ */ jsxRuntime.jsx(ColorPickerChannelSliderTrack, {}),
      /* @__PURE__ */ jsxRuntime.jsx(ColorPickerChannelSliderThumb, {})
    ] })
  }
});
const ColorPickerSliders = React.forwardRef(
  function ColorPickerSliders2(props, ref) {
    return /* @__PURE__ */ jsxRuntime.jsxs(stack.Stack, { gap: "1", flex: "1", px: "1", ref, ...props, children: [
      /* @__PURE__ */ jsxRuntime.jsx(ColorPickerChannelSlider, { channel: "hue" }),
      /* @__PURE__ */ jsxRuntime.jsx(ColorPickerChannelSlider, { channel: "alpha" })
    ] });
  }
);
const ColorPickerChannelInput = withContext(colorPicker.ColorPicker.ChannelInput, "channelInput", { forwardAsChild: true });
const ColorPickerInput = React.forwardRef(function ColorHexInput(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(ColorPickerChannelInput, { channel: "hex", ref, ...props });
});
const ColorPickerSwatchGroup = withContext(colorPicker.ColorPicker.SwatchGroup, "swatchGroup", { forwardAsChild: true });
const ColorPickerSwatchTrigger = withContext(colorPicker.ColorPicker.SwatchTrigger, "swatchTrigger", { forwardAsChild: true });
const ColorPickerSwatch = withContext(colorPicker.ColorPicker.Swatch, "swatch", { forwardAsChild: true });
const ColorPickerSwatchIndicator = withContext(colorPicker.ColorPicker.SwatchIndicator, "swatchIndicator", { forwardAsChild: true });
const ColorPickerValueText = withContext(colorPicker.ColorPicker.ValueText, "valueText", { forwardAsChild: true });
const ColorPickerView = withContext(colorPicker.ColorPicker.View, "view", { forwardAsChild: true });
const ColorPickerFormatTrigger = withContext(colorPicker.ColorPicker.FormatTrigger, "formatTrigger", { forwardAsChild: true });
const ColorPickerFormatSelect = withContext(colorPicker.ColorPicker.FormatSelect, "formatSelect", { forwardAsChild: true });
const ColorPickerEyeDropperTrigger = withContext(colorPicker.ColorPicker.EyeDropperTrigger, "eyeDropperTrigger", {
  forwardAsChild: true
});
const ColorPickerEyeDropper = React.forwardRef(function ColorPickerEyeDropper2(props, ref) {
  const { children = /* @__PURE__ */ jsxRuntime.jsx(icons.PipetteIcon, {}), ...rest } = props;
  const picker = colorPicker.useColorPickerContext();
  const localProps = mergeProps.mergeProps(picker.getEyeDropperTriggerProps(), rest);
  return /* @__PURE__ */ jsxRuntime.jsx(iconButton.IconButton, { ref, ...localProps, children });
});
const ColorPickerChannelSliderValueText = withContext(colorPicker.ColorPicker.ChannelSliderValueText, "channelSliderValueText", {
  forwardAsChild: true
});
const ColorPickerChannelSliderLabel = withContext(colorPicker.ColorPicker.ChannelSliderLabel, "channelSliderLabel", {
  forwardAsChild: true
});
const ColorPickerHiddenInput = React.forwardRef(function ColorPickerHiddenInput2(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(colorPicker.ColorPicker.HiddenInput, { tabIndex: -1, ref, ...props });
});
const ColorPickerContext = colorPicker.ColorPicker.Context;
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

exports.ColorPickerArea = ColorPickerArea;
exports.ColorPickerAreaBackground = ColorPickerAreaBackground;
exports.ColorPickerAreaThumb = ColorPickerAreaThumb;
exports.ColorPickerChannelInput = ColorPickerChannelInput;
exports.ColorPickerChannelSlider = ColorPickerChannelSlider;
exports.ColorPickerChannelSliderLabel = ColorPickerChannelSliderLabel;
exports.ColorPickerChannelSliderThumb = ColorPickerChannelSliderThumb;
exports.ColorPickerChannelSliderTrack = ColorPickerChannelSliderTrack;
exports.ColorPickerChannelSliderValueText = ColorPickerChannelSliderValueText;
exports.ColorPickerChannelText = ColorPickerChannelText;
exports.ColorPickerContent = ColorPickerContent;
exports.ColorPickerContext = ColorPickerContext;
exports.ColorPickerControl = ColorPickerControl;
exports.ColorPickerEyeDropper = ColorPickerEyeDropper;
exports.ColorPickerEyeDropperTrigger = ColorPickerEyeDropperTrigger;
exports.ColorPickerFormatSelect = ColorPickerFormatSelect;
exports.ColorPickerFormatTrigger = ColorPickerFormatTrigger;
exports.ColorPickerHiddenInput = ColorPickerHiddenInput;
exports.ColorPickerInput = ColorPickerInput;
exports.ColorPickerLabel = ColorPickerLabel;
exports.ColorPickerPositioner = ColorPickerPositioner;
exports.ColorPickerPropsProvider = ColorPickerPropsProvider;
exports.ColorPickerRoot = ColorPickerRoot;
exports.ColorPickerRootProvider = ColorPickerRootProvider;
exports.ColorPickerSliders = ColorPickerSliders;
exports.ColorPickerSwatch = ColorPickerSwatch;
exports.ColorPickerSwatchGroup = ColorPickerSwatchGroup;
exports.ColorPickerSwatchIndicator = ColorPickerSwatchIndicator;
exports.ColorPickerSwatchTrigger = ColorPickerSwatchTrigger;
exports.ColorPickerTransparencyGrid = ColorPickerTransparencyGrid;
exports.ColorPickerTrigger = ColorPickerTrigger;
exports.ColorPickerValueSwatch = ColorPickerValueSwatch;
exports.ColorPickerValueText = ColorPickerValueText;
exports.ColorPickerView = ColorPickerView;
exports.getColorChannels = getColorChannels;
exports.useColorPickerStyles = useColorPickerStyles;
