'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { TimePickerColumnPropsProvider } from './use-time-picker-column-props-context.js';
import { useTimePickerContext } from './use-time-picker-context.js';

const TimePickerColumn = forwardRef((props, ref) => {
  const [columnProps, localProps] = createSplitProps()(props, ["unit"]);
  const timePicker = useTimePickerContext();
  const mergedProps = mergeProps(timePicker.getColumnProps(columnProps), localProps);
  return /* @__PURE__ */ jsx(TimePickerColumnPropsProvider, { value: columnProps, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
TimePickerColumn.displayName = "TimePickerColumn";

export { TimePickerColumn };
