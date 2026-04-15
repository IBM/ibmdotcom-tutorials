'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useFieldContext } from '../field/use-field-context.js';
import { useColorPickerContext } from './use-color-picker-context.js';

const ColorPickerHiddenInput = forwardRef((props, ref) => {
  const colorPicker = useColorPickerContext();
  const mergedProps = mergeProps(colorPicker.getHiddenInputProps(), props);
  const field = useFieldContext();
  return /* @__PURE__ */ jsx(ark.input, { "aria-describedby": field?.ariaDescribedby, ...mergedProps, ref });
});
ColorPickerHiddenInput.displayName = "ColorPickerHiddenInput";

export { ColorPickerHiddenInput };
