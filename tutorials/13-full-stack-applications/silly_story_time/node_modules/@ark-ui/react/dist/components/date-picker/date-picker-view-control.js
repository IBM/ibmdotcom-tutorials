'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useDatePickerContext } from './use-date-picker-context.js';
import { useDatePickerViewPropsContext } from './use-date-picker-view-props-context.js';

const DatePickerViewControl = forwardRef((props, ref) => {
  const datePicker = useDatePickerContext();
  const viewProps = useDatePickerViewPropsContext();
  const mergedProps = mergeProps(datePicker.getViewControlProps(viewProps), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
DatePickerViewControl.displayName = "DatePickerViewControl";

export { DatePickerViewControl };
