'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useDatePickerContext } from './use-date-picker-context.js';

const DatePickerYearSelect = forwardRef((props, ref) => {
  const datePicker = useDatePickerContext();
  const mergedProps = mergeProps(datePicker.getYearSelectProps(), props);
  return /* @__PURE__ */ jsx(ark.select, { ...mergedProps, ref, children: datePicker.getYears().map((year, i) => /* @__PURE__ */ jsx("option", { value: year.value, children: year.label }, i)) });
});
DatePickerYearSelect.displayName = "DatePickerYearSelect";

export { DatePickerYearSelect };
