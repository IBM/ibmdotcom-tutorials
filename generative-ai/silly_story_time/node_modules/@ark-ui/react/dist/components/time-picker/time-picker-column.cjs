'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useTimePickerColumnPropsContext = require('./use-time-picker-column-props-context.cjs');
const useTimePickerContext = require('./use-time-picker-context.cjs');

const TimePickerColumn = react.forwardRef((props, ref) => {
  const [columnProps, localProps] = createSplitProps.createSplitProps()(props, ["unit"]);
  const timePicker = useTimePickerContext.useTimePickerContext();
  const mergedProps = react$1.mergeProps(timePicker.getColumnProps(columnProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useTimePickerColumnPropsContext.TimePickerColumnPropsProvider, { value: columnProps, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
TimePickerColumn.displayName = "TimePickerColumn";

exports.TimePickerColumn = TimePickerColumn;
