'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useDatePickerContext = require('./use-date-picker-context.cjs');
const useDatePickerTablePropsContext = require('./use-date-picker-table-props-context.cjs');

const DatePickerTableBody = react.forwardRef((props, ref) => {
  const datePicker = useDatePickerContext.useDatePickerContext();
  const tableProps = useDatePickerTablePropsContext.useDatePickerTablePropsContext();
  const mergedProps = react$1.mergeProps(datePicker.getTableBodyProps(tableProps), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.tbody, { ...mergedProps, ref });
});
DatePickerTableBody.displayName = "DatePickerTableBody";

exports.DatePickerTableBody = DatePickerTableBody;
