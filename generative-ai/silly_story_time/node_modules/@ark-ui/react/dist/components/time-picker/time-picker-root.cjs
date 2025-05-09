'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const splitPresenceProps = require('../presence/split-presence-props.cjs');
const usePresence = require('../presence/use-presence.cjs');
const usePresenceContext = require('../presence/use-presence-context.cjs');
const useTimePicker = require('./use-time-picker.cjs');
const useTimePickerContext = require('./use-time-picker-context.cjs');

const TimePickerRoot = react.forwardRef((props, ref) => {
  const [presenceProps, timePickerProps] = splitPresenceProps.splitPresenceProps(props);
  const [useTimePickerProps, localProps] = createSplitProps.createSplitProps()(timePickerProps, [
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
  const timePicker = useTimePicker.useTimePicker(useTimePickerProps);
  const presence = usePresence.usePresence(react$1.mergeProps({ present: timePicker.open }, presenceProps));
  const mergedProps = react$1.mergeProps(timePicker.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useTimePickerContext.TimePickerProvider, { value: timePicker, children: /* @__PURE__ */ jsxRuntime.jsx(usePresenceContext.PresenceProvider, { value: presence, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) }) });
});
TimePickerRoot.displayName = "TimePickerRoot";

exports.TimePickerRoot = TimePickerRoot;
