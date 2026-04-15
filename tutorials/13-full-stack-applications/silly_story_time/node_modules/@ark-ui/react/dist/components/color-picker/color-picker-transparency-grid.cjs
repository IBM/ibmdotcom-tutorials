'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useColorPickerContext = require('./use-color-picker-context.cjs');

const ColorPickerTransparencyGrid = react.forwardRef(
  (props, ref) => {
    const [gridProps, localProps] = createSplitProps.createSplitProps()(props, ["size"]);
    const colorPicker = useColorPickerContext.useColorPickerContext();
    const mergedProps = react$1.mergeProps(colorPicker.getTransparencyGridProps(gridProps), localProps);
    return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
  }
);
ColorPickerTransparencyGrid.displayName = "ColorPickerTransparencyGrid";

exports.ColorPickerTransparencyGrid = ColorPickerTransparencyGrid;
