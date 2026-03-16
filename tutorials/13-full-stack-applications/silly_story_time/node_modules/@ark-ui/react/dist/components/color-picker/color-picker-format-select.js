'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useColorPickerContext } from './use-color-picker-context.js';

const ColorPickerFormatSelect = forwardRef((props, ref) => {
  const colorPicker = useColorPickerContext();
  const mergedProps = mergeProps(colorPicker.getFormatSelectProps(), props);
  return /* @__PURE__ */ jsx(ark.select, { ...mergedProps, ref, children: ["rgba", "hsla", "hsba"].map((format) => /* @__PURE__ */ jsx(ark.option, { value: format, children: format }, format)) });
});
ColorPickerFormatSelect.displayName = "ColorPickerFormatSelect";

export { ColorPickerFormatSelect };
