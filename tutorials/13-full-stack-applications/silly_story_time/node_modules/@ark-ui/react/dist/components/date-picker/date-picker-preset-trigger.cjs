'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useDatePickerContext = require('./use-date-picker-context.cjs');

const DatePickerPresetTrigger = react.forwardRef((props, ref) => {
  const [presetTriggerProps, localProps] = createSplitProps.createSplitProps()(props, ["value"]);
  const datePicker = useDatePickerContext.useDatePickerContext();
  const mergedProps = react$1.mergeProps(datePicker.getPresetTriggerProps(presetTriggerProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
DatePickerPresetTrigger.displayName = "DatePickerPresetTrigger";

exports.DatePickerPresetTrigger = DatePickerPresetTrigger;
