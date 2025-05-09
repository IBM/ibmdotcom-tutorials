'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useDatePickerContext } from './use-date-picker-context.js';

const DatePickerInput = forwardRef((props, ref) => {
  const [inputProps, localProps] = createSplitProps()(props, ["index", "fixOnBlur"]);
  const datePicker = useDatePickerContext();
  const mergedProps = mergeProps(datePicker.getInputProps(inputProps), localProps);
  return /* @__PURE__ */ jsx(ark.input, { ...mergedProps, ref });
});
DatePickerInput.displayName = "DatePickerInput";

export { DatePickerInput };
