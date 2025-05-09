'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const usePresenceContext = require('../presence/use-presence-context.cjs');
const useDialogContext = require('./use-dialog-context.cjs');

const DialogTrigger = react.forwardRef((props, ref) => {
  const dialog = useDialogContext.useDialogContext();
  const presence = usePresenceContext.usePresenceContext();
  const mergedProps = react$1.mergeProps(
    {
      ...dialog.getTriggerProps(),
      "aria-controls": presence.unmounted ? void 0 : dialog.getTriggerProps()["aria-controls"]
    },
    props
  );
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
DialogTrigger.displayName = "DialogTrigger";

exports.DialogTrigger = DialogTrigger;
