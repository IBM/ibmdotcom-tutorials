'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useColorPickerAreaPropsContext = require('./use-color-picker-area-props-context.cjs');
const useColorPickerContext = require('./use-color-picker-context.cjs');

const ColorPickerAreaBackground = react.forwardRef((props, ref) => {
  const colorPicker = useColorPickerContext.useColorPickerContext();
  const areaProps = useColorPickerAreaPropsContext.useColorPickerAreaPropsContext();
  const mergedProps = react$1.mergeProps(colorPicker.getAreaBackgroundProps(areaProps), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
ColorPickerAreaBackground.displayName = "ColorPickerAreaBackground";

exports.ColorPickerAreaBackground = ColorPickerAreaBackground;
