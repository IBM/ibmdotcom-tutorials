'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useColorPickerContext = require('./use-color-picker-context.cjs');

const ColorPickerChannelInput = react.forwardRef((props, ref) => {
  const [channelProps, localProps] = createSplitProps.createSplitProps()(props, ["channel", "orientation"]);
  const colorPicker = useColorPickerContext.useColorPickerContext();
  const mergedProps = react$1.mergeProps(colorPicker.getChannelInputProps(channelProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.input, { ...mergedProps, ref });
});
ColorPickerChannelInput.displayName = "ColorPickerChannelInput";

exports.ColorPickerChannelInput = ColorPickerChannelInput;
