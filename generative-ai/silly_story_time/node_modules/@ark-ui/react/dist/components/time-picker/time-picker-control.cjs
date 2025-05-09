'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useTimePickerContext = require('./use-time-picker-context.cjs');

const TimePickerControl = react.forwardRef((props, ref) => {
  const timePicker = useTimePickerContext.useTimePickerContext();
  const mergedProps = react$1.mergeProps(timePicker.getControlProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
TimePickerControl.displayName = "TimePickerControl";

exports.TimePickerControl = TimePickerControl;
