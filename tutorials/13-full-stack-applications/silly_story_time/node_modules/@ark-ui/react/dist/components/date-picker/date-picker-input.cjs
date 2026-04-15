'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useDatePickerContext = require('./use-date-picker-context.cjs');

const DatePickerInput = react.forwardRef((props, ref) => {
  const [inputProps, localProps] = createSplitProps.createSplitProps()(props, ["index", "fixOnBlur"]);
  const datePicker = useDatePickerContext.useDatePickerContext();
  const mergedProps = react$1.mergeProps(datePicker.getInputProps(inputProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.input, { ...mergedProps, ref });
});
DatePickerInput.displayName = "DatePickerInput";

exports.DatePickerInput = DatePickerInput;
