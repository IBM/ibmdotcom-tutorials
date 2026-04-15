'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { splitPresenceProps } from '../presence/split-presence-props.js';
import { usePresence } from '../presence/use-presence.js';
import { PresenceProvider } from '../presence/use-presence-context.js';
import { DatePickerProvider } from './use-date-picker-context.js';

const DatePickerRootProvider = forwardRef((props, ref) => {
  const [presenceProps, datePickerProps] = splitPresenceProps(props);
  const [{ value: datePicker }, localProps] = createSplitProps()(datePickerProps, ["value"]);
  const presence = usePresence(mergeProps({ present: datePicker.open }, presenceProps));
  const mergedProps = mergeProps(datePicker.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(DatePickerProvider, { value: datePicker, children: /* @__PURE__ */ jsx(PresenceProvider, { value: presence, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) }) });
});
DatePickerRootProvider.displayName = "DatePickerRootProvider";

export { DatePickerRootProvider };
