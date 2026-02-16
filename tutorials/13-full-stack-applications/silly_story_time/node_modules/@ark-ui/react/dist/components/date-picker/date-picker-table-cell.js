'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useDatePickerContext } from './use-date-picker-context.js';
import { DatePickerTableCellPropsProvider } from './use-date-picker-table-cell-props-context.js';
import { useDatePickerViewPropsContext } from './use-date-picker-view-props-context.js';

const DatePickerTableCell = forwardRef((props, ref) => {
  const [cellProps, localProps] = createSplitProps()(props, [
    "disabled",
    "value",
    "visibleRange",
    "columns"
  ]);
  const datePicker = useDatePickerContext();
  const viewProps = useDatePickerViewPropsContext();
  const tableCellProps = {
    day: datePicker.getDayTableCellProps,
    month: datePicker.getMonthTableCellProps,
    year: datePicker.getYearTableCellProps
    // @ts-expect-error value is number filter
  }[viewProps.view](cellProps);
  const mergedProps = mergeProps(tableCellProps, localProps);
  return /* @__PURE__ */ jsx(DatePickerTableCellPropsProvider, { value: cellProps, children: /* @__PURE__ */ jsx(ark.td, { ref, ...mergedProps }) });
});
DatePickerTableCell.displayName = "DatePickerTableCell";

export { DatePickerTableCell };
