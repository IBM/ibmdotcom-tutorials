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

const ColorPickerValueSwatch = react.forwardRef((props, ref) => {
  const [{ respectAlpha }, localProps] = createSplitProps.createSplitProps()(props, ["respectAlpha"]);
  const colorPicker = useColorPickerContext.useColorPickerContext();
  const swatchProps = {
    respectAlpha,
    value: colorPicker.valueAsString
  };
  const mergedProps = react$1.mergeProps(colorPicker.getSwatchProps(swatchProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useColorPickerSwatchPropsContext.ColorPickerSwatchPropsProvider, { value: swatchProps, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
ColorPickerValueSwatch.displayName = "ColorPickerValueSwatch";

exports.ColorPickerValueSwatch = ColorPickerValueSwatch;
