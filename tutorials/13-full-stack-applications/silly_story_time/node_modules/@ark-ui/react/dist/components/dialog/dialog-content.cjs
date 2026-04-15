'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const composeRefs = require('../../utils/compose-refs.cjs');
const factory = require('../factory.cjs');
const usePresenceContext = require('../presence/use-presence-context.cjs');
const useDialogContext = require('./use-dialog-context.cjs');

const DialogContent = react.forwardRef((props, ref) => {
  const dialog = useDialogContext.useDialogContext();
  const presence = usePresenceContext.usePresenceContext();
  const mergedProps = react$1.mergeProps(dialog.getContentProps(), presence.getPresenceProps(), props);
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref: composeRefs.composeRefs(presence.ref, ref) });
});
DialogContent.displayName = "DialogContent";

exports.DialogContent = DialogContent;
