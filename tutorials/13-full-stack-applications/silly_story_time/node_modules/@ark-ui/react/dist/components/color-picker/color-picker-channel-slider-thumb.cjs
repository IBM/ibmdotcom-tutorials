'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useColorPickerChannelPropsContext = require('./use-color-picker-channel-props-context.cjs');
const useColorPickerContext = require('./use-color-picker-context.cjs');
const useColorPickerFormatContext = require('./use-color-picker-format-context.cjs');

const ColorPickerChannelSliderThumb = react.forwardRef(
  (props, ref) => {
    const colorPicker = useColorPickerContext.useColorPickerContext();
    const channelProps = useColorPickerChannelPropsContext.useColorPickerChannelPropsContext();
    const formatProps = useColorPickerFormatContext.useColorPickerFormatPropsContext();
    const channelSliderProps = { ...channelProps, ...formatProps };
    const mergedProps = react$1.mergeProps(colorPicker.getChannelSliderThumbProps(channelSliderProps), props);
    return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
  }
);
ColorPickerChannelSliderThumb.displayName = "ColorPickerChannelSliderThumb";

exports.ColorPickerChannelSliderThumb = ColorPickerChannelSliderThumb;
