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

const TimePickerCell = react.forwardRef((props, ref) => {
  const [cellProps, localProps] = createSplitProps.createSplitProps()(props, ["value"]);
  const timePicker = useTimePickerContext.useTimePickerContext();
  const columnProps = useTimePickerColumnPropsContext.useTimePickerColumnPropsContext();
  const unitToPropsMap = {
    hour: () => timePicker.getHourCellProps(cellProps),
    minute: () => timePicker.getMinuteCellProps(cellProps),
    second: () => timePicker.getSecondCellProps(cellProps),
    period: () => timePicker.getPeriodCellProps(cellProps)
  };
  const mergedProps = react$1.mergeProps(unitToPropsMap[columnProps.unit](), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
TimePickerCell.displayName = "TimePickerCell";

exports.TimePickerCell = TimePickerCell;
