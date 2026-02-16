'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useColorPickerChannelPropsContext = require('./use-color-picker-channel-props-context.cjs');
const useColorPickerContext = require('./use-color-picker-context.cjs');

const ColorPickerChannelSliderLabel = react.forwardRef(
  (props, ref) => {
    const colorPicker = useColorPickerContext.useColorPickerContext();
    const channelProps = useColorPickerChannelPropsContext.useColorPickerChannelPropsContext();
    const mergedProps = react$1.mergeProps(colorPicker.getChannelSliderLabelProps(channelProps), props);
    return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.label, { ...mergedProps, ref });
  }
);
ColorPickerChannelSliderLabel.displayName = "ColorPickerChannelSliderLabel";

exports.ColorPickerChannelSliderLabel = ColorPickerChannelSliderLabel;
