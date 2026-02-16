'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useColorPickerContext = require('./use-color-picker-context.cjs');

const ColorPickerControl = react.forwardRef((props, ref) => {
  const colorPicker = useColorPickerContext.useColorPickerContext();
  const mergedProps = react$1.mergeProps(colorPicker.getControlProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
ColorPickerControl.displayName = "ColorPickerControl";

exports.ColorPickerControl = ColorPickerControl;
