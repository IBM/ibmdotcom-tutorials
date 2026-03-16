'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { datePickerAnatomy } from './date-picker.anatomy.js';
import { useDatePickerContext } from './use-date-picker-context.js';
import { DatePickerViewPropsProvider } from './use-date-picker-view-props-context.js';

const DatePickerView = forwardRef((props, ref) => {
  const [viewProps, localProps] = createSplitProps()(props, ["view"]);
  const datePicker = useDatePickerContext();
  return /* @__PURE__ */ jsx(DatePickerViewPropsProvider, { value: viewProps, children: /* @__PURE__ */ jsx(
    ark.div,
    {
      hidden: datePicker.view !== viewProps.view,
      ...datePickerAnatomy.build().view.attrs,
      ...localProps,
      ref
    }
  ) });
});
DatePickerView.displayName = "DatePickerView";

export { DatePickerView };
