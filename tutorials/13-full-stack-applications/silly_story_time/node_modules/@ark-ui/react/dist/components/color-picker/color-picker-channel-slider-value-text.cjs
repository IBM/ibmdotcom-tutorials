'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const useLocaleContext = require('../../providers/locale/use-locale-context.cjs');
const factory = require('../factory.cjs');
const useColorPickerChannelPropsContext = require('./use-color-picker-channel-props-context.cjs');
const useColorPickerContext = require('./use-color-picker-context.cjs');

const ColorPickerChannelSliderValueText = react.forwardRef(
  (props, ref) => {
    const { locale } = useLocaleContext.useLocaleContext();
    const colorPicker = useColorPickerContext.useColorPickerContext();
    const channelProps = useColorPickerChannelPropsContext.useColorPickerChannelPropsContext();
    const mergedProps = react$1.mergeProps(colorPicker.getChannelSliderValueTextProps(channelProps), props);
    return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.span, { ...mergedProps, ref, children: props.children || colorPicker.getChannelValueText(channelProps.channel, locale) });
  }
);
ColorPickerChannelSliderValueText.displayName = "ColorPickerChannelSliderValueText";

exports.ColorPickerChannelSliderValueText = ColorPickerChannelSliderValueText;
