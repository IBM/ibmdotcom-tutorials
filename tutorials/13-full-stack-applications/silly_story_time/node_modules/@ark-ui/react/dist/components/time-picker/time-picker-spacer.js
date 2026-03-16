'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useTimePickerContext } from './use-time-picker-context.js';

const TimePickerSpacer = forwardRef((props, ref) => {
  const timePicker = useTimePickerContext();
  const mergedProps = mergeProps(timePicker.getSpacerProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
TimePickerSpacer.displayName = "TimePickerSpacer";

export { TimePickerSpacer };
