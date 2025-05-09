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
const useDatePickerContext = require('./use-date-picker-context.cjs');

const DatePickerRootProvider = react.forwardRef((props, ref) => {
  const [presenceProps, datePickerProps] = splitPresenceProps.splitPresenceProps(props);
  const [{ value: datePicker }, localProps] = createSplitProps.createSplitProps()(datePickerProps, ["value"]);
  const presence = usePresence.usePresence(react$1.mergeProps({ present: datePicker.open }, presenceProps));
  const mergedProps = react$1.mergeProps(datePicker.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useDatePickerContext.DatePickerProvider, { value: datePicker, children: /* @__PURE__ */ jsxRuntime.jsx(usePresenceContext.PresenceProvider, { value: presence, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) }) });
});
DatePickerRootProvider.displayName = "DatePickerRootProvider";

exports.DatePickerRootProvider = DatePickerRootProvider;
