'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useDatePickerContext = require('./use-date-picker-context.cjs');
const useDatePickerTableCellPropsContext = require('./use-date-picker-table-cell-props-context.cjs');
const useDatePickerViewPropsContext = require('./use-date-picker-view-props-context.cjs');

const DatePickerTableCellTrigger = react.forwardRef((props, ref) => {
  const datePicker = useDatePickerContext.useDatePickerContext();
  const tableCellProps = useDatePickerTableCellPropsContext.useDatePickerTableCellPropsContext();
  const viewProps = useDatePickerViewPropsContext.useDatePickerViewPropsContext();
  const viewMap = {
    day: datePicker.getDayTableCellTriggerProps,
    month: datePicker.getMonthTableCellTriggerProps,
    year: datePicker.getYearTableCellTriggerProps
  };
  const viewFn = viewMap[viewProps.view];
  const triggerProps = viewFn(tableCellProps);
  const mergedProps = react$1.mergeProps(triggerProps, props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ref, ...mergedProps });
});
DatePickerTableCellTrigger.displayName = "DatePickerTableCellTrigger";

exports.DatePickerTableCellTrigger = DatePickerTableCellTrigger;
