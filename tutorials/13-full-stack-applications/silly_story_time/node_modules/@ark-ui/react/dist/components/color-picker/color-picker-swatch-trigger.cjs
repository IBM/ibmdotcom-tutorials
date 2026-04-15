'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useColorPickerContext = require('./use-color-picker-context.cjs');

const ColorPickerSwatchTrigger = react.forwardRef((props, ref) => {
  const [triggerProps, localProps] = createSplitProps.createSplitProps()(props, ["value", "disabled"]);
  const colorPicker = useColorPickerContext.useColorPickerContext();
  const mergedProps = react$1.mergeProps(colorPicker.getSwatchTriggerProps(triggerProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
ColorPickerSwatchTrigger.displayName = "ColorPickerSwatchTrigger";

exports.ColorPickerSwatchTrigger = ColorPickerSwatchTrigger;
