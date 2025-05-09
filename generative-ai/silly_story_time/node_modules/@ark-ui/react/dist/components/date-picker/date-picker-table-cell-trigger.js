'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useDatePickerContext } from './use-date-picker-context.js';
import { useDatePickerTableCellPropsContext } from './use-date-picker-table-cell-props-context.js';
import { useDatePickerViewPropsContext } from './use-date-picker-view-props-context.js';

const DatePickerTableCellTrigger = forwardRef((props, ref) => {
  const datePicker = useDatePickerContext();
  const tableCellProps = useDatePickerTableCellPropsContext();
  const viewProps = useDatePickerViewPropsContext();
  const viewMap = {
    day: datePicker.getDayTableCellTriggerProps,
    month: datePicker.getMonthTableCellTriggerProps,
    year: datePicker.getYearTableCellTriggerProps
  };
  const viewFn = viewMap[viewProps.view];
  const triggerProps = viewFn(tableCellProps);
  const mergedProps = mergeProps(triggerProps, props);
  return /* @__PURE__ */ jsx(ark.div, { ref, ...mergedProps });
});
DatePickerTableCellTrigger.displayName = "DatePickerTableCellTrigger";

export { DatePickerTableCellTrigger };
