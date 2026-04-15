'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useColorPickerContext = require('./use-color-picker-context.cjs');

const ColorPickerValueText = react.forwardRef((props, ref) => {
  const { children, format, ...localprops } = props;
  const colorPicker = useColorPickerContext.useColorPickerContext();
  const mergedProps = react$1.mergeProps(colorPicker.getValueTextProps(), localprops);
  const valueAsString = format ? colorPicker.value.toString(format) : colorPicker.valueAsString;
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.span, { ...mergedProps, ref, children: props.children || valueAsString });
});
ColorPickerValueText.displayName = "ColorPickerValueText";

exports.ColorPickerValueText = ColorPickerValueText;
