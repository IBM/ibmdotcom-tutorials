'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useDatePickerContext } from './use-date-picker-context.js';
import { useDatePickerViewPropsContext } from './use-date-picker-view-props-context.js';

const DatePickerNextTrigger = forwardRef((props, ref) => {
  const datePicker = useDatePickerContext();
  const viewProps = useDatePickerViewPropsContext();
  const mergedProps = mergeProps(datePicker.getNextTriggerProps(viewProps), props);
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
DatePickerNextTrigger.displayName = "DatePickerNextTrigger";

export { DatePickerNextTrigger };
