'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useColorPickerContext } from './use-color-picker-context.js';
import { useColorPickerSwatchPropsContext } from './use-color-picker-swatch-props-context.js';

const ColorPickerSwatchIndicator = forwardRef((props, ref) => {
  const colorPicker = useColorPickerContext();
  const swatchProps = useColorPickerSwatchPropsContext();
  const mergedProps = mergeProps(colorPicker.getSwatchIndicatorProps(swatchProps), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
ColorPickerSwatchIndicator.displayName = "ColorPickerSwatchIndicator";

export { ColorPickerSwatchIndicator };
