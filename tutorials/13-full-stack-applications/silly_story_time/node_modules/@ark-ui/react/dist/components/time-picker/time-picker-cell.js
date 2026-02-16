'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useTimePickerColumnPropsContext } from './use-time-picker-column-props-context.js';
import { useTimePickerContext } from './use-time-picker-context.js';

const TimePickerCell = forwardRef((props, ref) => {
  const [cellProps, localProps] = createSplitProps()(props, ["value"]);
  const timePicker = useTimePickerContext();
  const columnProps = useTimePickerColumnPropsContext();
  const unitToPropsMap = {
    hour: () => timePicker.getHourCellProps(cellProps),
    minute: () => timePicker.getMinuteCellProps(cellProps),
    second: () => timePicker.getSecondCellProps(cellProps),
    period: () => timePicker.getPeriodCellProps(cellProps)
  };
  const mergedProps = mergeProps(unitToPropsMap[columnProps.unit](), localProps);
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
TimePickerCell.displayName = "TimePickerCell";

export { TimePickerCell };
