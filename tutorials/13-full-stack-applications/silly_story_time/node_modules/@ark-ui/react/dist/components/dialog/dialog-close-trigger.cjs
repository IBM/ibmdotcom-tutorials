'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useDialogContext = require('./use-dialog-context.cjs');

const DialogCloseTrigger = react.forwardRef((props, ref) => {
  const dialog = useDialogContext.useDialogContext();
  const mergedProps = react$1.mergeProps(dialog.getCloseTriggerProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
DialogCloseTrigger.displayName = "DialogCloseTrigger";

exports.DialogCloseTrigger = DialogCloseTrigger;
