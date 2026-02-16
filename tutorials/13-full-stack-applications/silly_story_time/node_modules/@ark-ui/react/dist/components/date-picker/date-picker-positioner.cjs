'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const usePresenceContext = require('../presence/use-presence-context.cjs');
const useDatePickerContext = require('./use-date-picker-context.cjs');

const DatePickerPositioner = react.forwardRef((props, ref) => {
  const datePicker = useDatePickerContext.useDatePickerContext();
  const mergedProps = react$1.mergeProps(datePicker.getPositionerProps(), props);
  const presence = usePresenceContext.usePresenceContext();
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
DatePickerPositioner.displayName = "DatePickerPositioner";

exports.DatePickerPositioner = DatePickerPositioner;
