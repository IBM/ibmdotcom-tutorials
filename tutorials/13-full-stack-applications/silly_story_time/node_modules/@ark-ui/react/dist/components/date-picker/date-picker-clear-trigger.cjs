'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useDatePickerContext = require('./use-date-picker-context.cjs');

const DatePickerClearTrigger = react.forwardRef((props, ref) => {
  const datePicker = useDatePickerContext.useDatePickerContext();
  const mergedProps = react$1.mergeProps(datePicker.getClearTriggerProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
DatePickerClearTrigger.displayName = "DatePickerClearTrigger";

exports.DatePickerClearTrigger = DatePickerClearTrigger;
