'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const colorPicker_anatomy = require('./color-picker.anatomy.cjs');
const useColorPickerContext = require('./use-color-picker-context.cjs');
const useColorPickerFormatContext = require('./use-color-picker-format-context.cjs');

const ColorPickerView = react.forwardRef((props, ref) => {
  const colorPicker = useColorPickerContext.useColorPickerContext();
  const [formatProps, restProps] = createSplitProps.createSplitProps()(props, ["format"]);
  if (colorPicker.format !== formatProps.format) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(useColorPickerFormatContext.ColorPickerFormatPropsProvider, { value: formatProps, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ref, "data-format": props.format, ...colorPicker_anatomy.colorPickerAnatomy.build().view.attrs, ...restProps }) });
});
ColorPickerView.displayName = "ColorPickerView";

exports.ColorPickerView = ColorPickerView;
