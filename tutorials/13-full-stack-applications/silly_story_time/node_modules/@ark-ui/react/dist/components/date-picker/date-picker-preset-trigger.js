'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useDatePickerContext } from './use-date-picker-context.js';

const DatePickerPresetTrigger = forwardRef((props, ref) => {
  const [presetTriggerProps, localProps] = createSplitProps()(props, ["value"]);
  const datePicker = useDatePickerContext();
  const mergedProps = mergeProps(datePicker.getPresetTriggerProps(presetTriggerProps), localProps);
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
DatePickerPresetTrigger.displayName = "DatePickerPresetTrigger";

export { DatePickerPresetTrigger };
