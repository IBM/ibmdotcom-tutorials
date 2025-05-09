'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useDatePickerContext = require('./use-date-picker-context.cjs');

const DatePickerYearSelect = react.forwardRef((props, ref) => {
  const datePicker = useDatePickerContext.useDatePickerContext();
  const mergedProps = react$1.mergeProps(datePicker.getYearSelectProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.select, { ...mergedProps, ref, children: datePicker.getYears().map((year, i) => /* @__PURE__ */ jsxRuntime.jsx("option", { value: year.value, children: year.label }, i)) });
});
DatePickerYearSelect.displayName = "DatePickerYearSelect";

exports.DatePickerYearSelect = DatePickerYearSelect;
