'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useColorPickerAreaPropsContext = require('./use-color-picker-area-props-context.cjs');
const useColorPickerContext = require('./use-color-picker-context.cjs');

const ColorPickerArea = react.forwardRef((props, ref) => {
  const [areaProps, localProps] = createSplitProps.createSplitProps()(props, ["xChannel", "yChannel"]);
  const colorPicker = useColorPickerContext.useColorPickerContext();
  const mergedProps = react$1.mergeProps(colorPicker.getAreaProps(areaProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useColorPickerAreaPropsContext.ColorPickerAreaPropsProvider, { value: areaProps, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
ColorPickerArea.displayName = "ColorPickerArea";

exports.ColorPickerArea = ColorPickerArea;
