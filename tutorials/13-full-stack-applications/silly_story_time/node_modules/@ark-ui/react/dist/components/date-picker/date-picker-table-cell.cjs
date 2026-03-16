'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useDatePickerContext = require('./use-date-picker-context.cjs');
const useDatePickerTableCellPropsContext = require('./use-date-picker-table-cell-props-context.cjs');
const useDatePickerViewPropsContext = require('./use-date-picker-view-props-context.cjs');

const DatePickerTableCell = react.forwardRef((props, ref) => {
  const [cellProps, localProps] = createSplitProps.createSplitProps()(props, [
    "disabled",
    "value",
    "visibleRange",
    "columns"
  ]);
  const datePicker = useDatePickerContext.useDatePickerContext();
  const viewProps = useDatePickerViewPropsContext.useDatePickerViewPropsContext();
  const tableCellProps = {
    day: datePicker.getDayTableCellProps,
    month: datePicker.getMonthTableCellProps,
    year: datePicker.getYearTableCellProps
    // @ts-expect-error value is number filter
  }[viewProps.view](cellProps);
  const mergedProps = react$1.mergeProps(tableCellProps, localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useDatePickerTableCellPropsContext.DatePickerTableCellPropsProvider, { value: cellProps, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.td, { ref, ...mergedProps }) });
});
DatePickerTableCell.displayName = "DatePickerTableCell";

exports.DatePickerTableCell = DatePickerTableCell;
