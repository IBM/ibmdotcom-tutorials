'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useDatePickerContext } from './use-date-picker-context.js';
import { useDatePickerTablePropsContext } from './use-date-picker-table-props-context.js';

const DatePickerTableBody = forwardRef((props, ref) => {
  const datePicker = useDatePickerContext();
  const tableProps = useDatePickerTablePropsContext();
  const mergedProps = mergeProps(datePicker.getTableBodyProps(tableProps), props);
  return /* @__PURE__ */ jsx(ark.tbody, { ...mergedProps, ref });
});
DatePickerTableBody.displayName = "DatePickerTableBody";

export { DatePickerTableBody };
