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
const useTimePickerContext = require('./use-time-picker-context.cjs');

const TimePickerRootProvider = react.forwardRef((props, ref) => {
  const [presenceProps, timePickerProps] = splitPresenceProps.splitPresenceProps(props);
  const [{ value: timePicker }, localProps] = createSplitProps.createSplitProps()(timePickerProps, ["value"]);
  const presence = usePresence.usePresence(react$1.mergeProps({ present: timePicker.open }, presenceProps));
  const mergedProps = react$1.mergeProps(timePicker.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useTimePickerContext.TimePickerProvider, { value: timePicker, children: /* @__PURE__ */ jsxRuntime.jsx(usePresenceContext.PresenceProvider, { value: presence, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) }) });
});
TimePickerRootProvider.displayName = "TimePickerRootProvider";

exports.TimePickerRootProvider = TimePickerRootProvider;
