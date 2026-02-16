'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const usePresenceContext = require('../presence/use-presence-context.cjs');
const useComboboxContext = require('./use-combobox-context.cjs');

const ComboboxPositioner = react.forwardRef((props, ref) => {
  const combobox = useComboboxContext.useComboboxContext();
  const presence = usePresenceContext.usePresenceContext();
  const mergedProps = react$1.mergeProps(combobox.getPositionerProps(), props);
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
ComboboxPositioner.displayName = "ComboboxPositioner";

exports.ComboboxPositioner = ComboboxPositioner;
