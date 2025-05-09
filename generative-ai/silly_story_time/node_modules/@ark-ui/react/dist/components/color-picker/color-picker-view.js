'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { colorPickerAnatomy } from './color-picker.anatomy.js';
import { useColorPickerContext } from './use-color-picker-context.js';
import { ColorPickerFormatPropsProvider } from './use-color-picker-format-context.js';

const ColorPickerView = forwardRef((props, ref) => {
  const colorPicker = useColorPickerContext();
  const [formatProps, restProps] = createSplitProps()(props, ["format"]);
  if (colorPicker.format !== formatProps.format) {
    return null;
  }
  return /* @__PURE__ */ jsx(ColorPickerFormatPropsProvider, { value: formatProps, children: /* @__PURE__ */ jsx(ark.div, { ref, "data-format": props.format, ...colorPickerAnatomy.build().view.attrs, ...restProps }) });
});
ColorPickerView.displayName = "ColorPickerView";

export { ColorPickerView };
