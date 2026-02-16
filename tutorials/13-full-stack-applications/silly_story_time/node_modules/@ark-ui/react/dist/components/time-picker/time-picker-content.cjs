'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const composeRefs = require('../../utils/compose-refs.cjs');
const factory = require('../factory.cjs');
const usePresenceContext = require('../presence/use-presence-context.cjs');
const useTimePickerContext = require('./use-time-picker-context.cjs');

const TimePickerContent = react.forwardRef((props, ref) => {
  const timePicker = useTimePickerContext.useTimePickerContext();
  const presence = usePresenceContext.usePresenceContext();
  const mergedProps = react$1.mergeProps(timePicker.getContentProps(), presence.getPresenceProps(), props);
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref: composeRefs.composeRefs(presence.ref, ref) });
});
TimePickerContent.displayName = "TimePickerContent";

exports.TimePickerContent = TimePickerContent;
