'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useDialogContext = require('./use-dialog-context.cjs');

const DialogTitle = react.forwardRef((props, ref) => {
  const dialog = useDialogContext.useDialogContext();
  const mergedProps = react$1.mergeProps(dialog.getTitleProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.h2, { ...mergedProps, ref });
});
DialogTitle.displayName = "DialogTitle";

exports.DialogTitle = DialogTitle;
