'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useColorPickerContext = require('./use-color-picker-context.cjs');
const useColorPickerSwatchPropsContext = require('./use-color-picker-swatch-props-context.cjs');

const ColorPickerSwatchIndicator = react.forwardRef((props, ref) => {
  const colorPicker = useColorPickerContext.useColorPickerContext();
  const swatchProps = useColorPickerSwatchPropsContext.useColorPickerSwatchPropsContext();
  const mergedProps = react$1.mergeProps(colorPicker.getSwatchIndicatorProps(swatchProps), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
ColorPickerSwatchIndicator.displayName = "ColorPickerSwatchIndicator";

exports.ColorPickerSwatchIndicator = ColorPickerSwatchIndicator;
