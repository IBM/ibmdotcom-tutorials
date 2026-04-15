'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useDatePickerContext } from './use-date-picker-context.js';
import { useDatePickerTablePropsContext } from './use-date-picker-table-props-context.js';

const DatePickerTableRow = forwardRef((props, ref) => {
  const datePicker = useDatePickerContext();
  const tableProps = useDatePickerTablePropsContext();
  const mergedProps = mergeProps(datePicker.getTableRowProps(tableProps), props);
  return /* @__PURE__ */ jsx(ark.tr, { ...mergedProps, ref });
});
DatePickerTableRow.displayName = "DatePickerTableRow";

export { DatePickerTableRow };
