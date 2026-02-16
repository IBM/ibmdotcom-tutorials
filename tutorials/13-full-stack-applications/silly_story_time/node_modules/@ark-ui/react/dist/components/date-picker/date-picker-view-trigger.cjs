'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useDatePickerContext = require('./use-date-picker-context.cjs');
const useDatePickerViewPropsContext = require('./use-date-picker-view-props-context.cjs');

const DatePickerViewTrigger = react.forwardRef((props, ref) => {
  const datePicker = useDatePickerContext.useDatePickerContext();
  const viewProps = useDatePickerViewPropsContext.useDatePickerViewPropsContext();
  const mergedProps = react$1.mergeProps(datePicker.getViewTriggerProps(viewProps), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
DatePickerViewTrigger.displayName = "DatePickerViewTrigger";

exports.DatePickerViewTrigger = DatePickerViewTrigger;
