'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useColorPickerContext } from './use-color-picker-context.js';
import { ColorPickerSwatchPropsProvider } from './use-color-picker-swatch-props-context.js';

const ColorPickerValueSwatch = forwardRef((props, ref) => {
  const [{ respectAlpha }, localProps] = createSplitProps()(props, ["respectAlpha"]);
  const colorPicker = useColorPickerContext();
  const swatchProps = {
    respectAlpha,
    value: colorPicker.valueAsString
  };
  const mergedProps = mergeProps(colorPicker.getSwatchProps(swatchProps), localProps);
  return /* @__PURE__ */ jsx(ColorPickerSwatchPropsProvider, { value: swatchProps, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
ColorPickerValueSwatch.displayName = "ColorPickerValueSwatch";

export { ColorPickerValueSwatch };
