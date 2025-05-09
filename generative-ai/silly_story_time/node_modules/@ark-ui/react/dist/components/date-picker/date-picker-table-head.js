'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useDatePickerContext } from './use-date-picker-context.js';
import { useDatePickerTablePropsContext } from './use-date-picker-table-props-context.js';

const DatePickerTableHead = forwardRef((props, ref) => {
  const datePicker = useDatePickerContext();
  const tableProps = useDatePickerTablePropsContext();
  const mergedProps = mergeProps(datePicker.getTableHeadProps(tableProps), props);
  return /* @__PURE__ */ jsx(ark.thead, { ...mergedProps, ref });
});
DatePickerTableHead.displayName = "DatePickerTableHead";

export { DatePickerTableHead };
