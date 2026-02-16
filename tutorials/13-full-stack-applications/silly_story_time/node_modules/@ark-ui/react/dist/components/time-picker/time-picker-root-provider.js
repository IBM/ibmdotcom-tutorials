'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { splitPresenceProps } from '../presence/split-presence-props.js';
import { usePresence } from '../presence/use-presence.js';
import { PresenceProvider } from '../presence/use-presence-context.js';
import { TimePickerProvider } from './use-time-picker-context.js';

const TimePickerRootProvider = forwardRef((props, ref) => {
  const [presenceProps, timePickerProps] = splitPresenceProps(props);
  const [{ value: timePicker }, localProps] = createSplitProps()(timePickerProps, ["value"]);
  const presence = usePresence(mergeProps({ present: timePicker.open }, presenceProps));
  const mergedProps = mergeProps(timePicker.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(TimePickerProvider, { value: timePicker, children: /* @__PURE__ */ jsx(PresenceProvider, { value: presence, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) }) });
});
TimePickerRootProvider.displayName = "TimePickerRootProvider";

export { TimePickerRootProvider };
