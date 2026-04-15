'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useColorPickerChannelPropsContext = require('./use-color-picker-channel-props-context.cjs');
const useColorPickerContext = require('./use-color-picker-context.cjs');
const useColorPickerFormatContext = require('./use-color-picker-format-context.cjs');

const ColorPickerChannelSlider = react.forwardRef((props, ref) => {
  const [channelProps, localProps] = createSplitProps.createSplitProps()(props, ["channel", "orientation"]);
  const colorPicker = useColorPickerContext.useColorPickerContext();
  const formatProps = useColorPickerFormatContext.useColorPickerFormatPropsContext();
  const channelSliderProps = { ...channelProps, ...formatProps };
  const mergedProps = react$1.mergeProps(colorPicker.getChannelSliderProps(channelSliderProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useColorPickerChannelPropsContext.ColorPickerChannelPropsProvider, { value: channelProps, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
ColorPickerChannelSlider.displayName = "ColorPickerChannelSlider";

exports.ColorPickerChannelSlider = ColorPickerChannelSlider;
