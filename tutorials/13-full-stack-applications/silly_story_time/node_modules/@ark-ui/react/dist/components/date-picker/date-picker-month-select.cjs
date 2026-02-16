'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useDatePickerContext = require('./use-date-picker-context.cjs');

const DatePickerMonthSelect = react.forwardRef((props, ref) => {
  const datePicker = useDatePickerContext.useDatePickerContext();
  const mergedProps = react$1.mergeProps(datePicker.getMonthSelectProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.select, { ...mergedProps, ref, children: datePicker.getMonths().map((month, i) => /* @__PURE__ */ jsxRuntime.jsx("option", { value: month.value, children: month.label }, i)) });
});
DatePickerMonthSelect.displayName = "DatePickerMonthSelect";

exports.DatePickerMonthSelect = DatePickerMonthSelect;
