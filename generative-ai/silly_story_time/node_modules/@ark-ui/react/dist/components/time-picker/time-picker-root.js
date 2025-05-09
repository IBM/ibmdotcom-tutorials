'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { splitPresenceProps } from '../presence/split-presence-props.js';
import { usePresence } from '../presence/use-presence.js';
import { PresenceProvider } from '../presence/use-presence-context.js';
import { useTimePicker } from './use-time-picker.js';
import { TimePickerProvider } from './use-time-picker-context.js';

const TimePickerRoot = forwardRef((props, ref) => {
  const [presenceProps, timePickerProps] = splitPresenceProps(props);
  const [useTimePickerProps, localProps] = createSplitProps()(timePickerProps, [
    "allowSeconds",
    "defaultOpen",
    "defaultValue",
    "disableLayer",
    "disabled",
    "id",
    "ids",
    "locale",
    "max",
    "min",
    "name",
    "onFocusChange",
    "onOpenChange",
    "onValueChange",
    "open",
    "placeholder",
    "positioning",
    "readOnly",
    "steps",
    "value"
  ]);
  const timePicker = useTimePicker(useTimePickerProps);
  const presence = usePresence(mergeProps({ present: timePicker.open }, presenceProps));
  const mergedProps = mergeProps(timePicker.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(TimePickerProvider, { value: timePicker, children: /* @__PURE__ */ jsx(PresenceProvider, { value: presence, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) }) });
});
TimePickerRoot.displayName = "TimePickerRoot";

export { TimePickerRoot };
