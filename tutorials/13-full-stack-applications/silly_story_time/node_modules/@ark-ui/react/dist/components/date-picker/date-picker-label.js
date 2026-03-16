'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useDatePickerContext } from './use-date-picker-context.js';

const DatePickerLabel = forwardRef((props, ref) => {
  const datePicker = useDatePickerContext();
  const mergedProps = mergeProps(datePicker.getLabelProps(), props);
  return /* @__PURE__ */ jsx(ark.label, { ...mergedProps, ref });
});
DatePickerLabel.displayName = "DatePickerLabel";

export { DatePickerLabel };
