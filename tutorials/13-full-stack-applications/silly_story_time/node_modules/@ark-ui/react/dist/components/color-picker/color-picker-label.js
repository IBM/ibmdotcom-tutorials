'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useColorPickerContext } from './use-color-picker-context.js';

const ColorPickerLabel = forwardRef((props, ref) => {
  const colorPicker = useColorPickerContext();
  const mergedProps = mergeProps(colorPicker.getLabelProps(), props);
  return /* @__PURE__ */ jsx(ark.label, { ...mergedProps, ref });
});
ColorPickerLabel.displayName = "ColorPickerLabel";

export { ColorPickerLabel };
