'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const usePresenceContext = require('../presence/use-presence-context.cjs');
const useDialogContext = require('./use-dialog-context.cjs');

const DialogPositioner = react.forwardRef((props, ref) => {
  const dialog = useDialogContext.useDialogContext();
  const mergedProps = react$1.mergeProps(dialog.getPositionerProps(), props);
  const presence = usePresenceContext.usePresenceContext();
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
DialogPositioner.displayName = "DialogPositioner";

exports.DialogPositioner = DialogPositioner;
