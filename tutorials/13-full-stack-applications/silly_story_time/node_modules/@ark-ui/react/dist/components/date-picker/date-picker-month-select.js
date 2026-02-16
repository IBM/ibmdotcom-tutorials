'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useDatePickerContext } from './use-date-picker-context.js';

const DatePickerMonthSelect = forwardRef((props, ref) => {
  const datePicker = useDatePickerContext();
  const mergedProps = mergeProps(datePicker.getMonthSelectProps(), props);
  return /* @__PURE__ */ jsx(ark.select, { ...mergedProps, ref, children: datePicker.getMonths().map((month, i) => /* @__PURE__ */ jsx("option", { value: month.value, children: month.label }, i)) });
});
DatePickerMonthSelect.displayName = "DatePickerMonthSelect";

export { DatePickerMonthSelect };
