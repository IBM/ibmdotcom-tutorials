'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useDatePickerContext } from './use-date-picker-context.js';

const DatePickerControl = forwardRef((props, ref) => {
  const datePicker = useDatePickerContext();
  const mergedProps = mergeProps(datePicker.getControlProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
DatePickerControl.displayName = "DatePickerControl";

export { DatePickerControl };
