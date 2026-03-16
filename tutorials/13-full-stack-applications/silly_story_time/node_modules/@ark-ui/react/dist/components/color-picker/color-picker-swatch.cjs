'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useColorPickerContext = require('./use-color-picker-context.cjs');
const useColorPickerSwatchPropsContext = require('./use-color-picker-swatch-props-context.cjs');

const ColorPickerSwatch = react.forwardRef((props, ref) => {
  const [swatwchProps, localProps] = createSplitProps.createSplitProps()(props, ["respectAlpha", "value"]);
  const colorPicker = useColorPickerContext.useColorPickerContext();
  const mergedProps = react$1.mergeProps(colorPicker.getSwatchProps(swatwchProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useColorPickerSwatchPropsContext.ColorPickerSwatchPropsProvider, { value: swatwchProps, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
ColorPickerSwatch.displayName = "ColorPickerSwatch";

exports.ColorPickerSwatch = ColorPickerSwatch;
