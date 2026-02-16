'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useColorPickerContext = require('./use-color-picker-context.cjs');

const ColorPickerFormatTrigger = react.forwardRef((props, ref) => {
  const colorPicker = useColorPickerContext.useColorPickerContext();
  const mergedProps = react$1.mergeProps(colorPicker.getFormatTriggerProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
ColorPickerFormatTrigger.displayName = "ColorPickerFormatTrigger";

exports.ColorPickerFormatTrigger = ColorPickerFormatTrigger;
