'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useColorPickerContext } from './use-color-picker-context.js';

const ColorPickerValueText = forwardRef((props, ref) => {
  const { children, format, ...localprops } = props;
  const colorPicker = useColorPickerContext();
  const mergedProps = mergeProps(colorPicker.getValueTextProps(), localprops);
  const valueAsString = format ? colorPicker.value.toString(format) : colorPicker.valueAsString;
  return /* @__PURE__ */ jsx(ark.span, { ...mergedProps, ref, children: props.children || valueAsString });
});
ColorPickerValueText.displayName = "ColorPickerValueText";

export { ColorPickerValueText };
