'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useToastContext = require('./use-toast-context.cjs');

const ToastCloseTrigger = react.forwardRef((props, ref) => {
  const toast = useToastContext.useToastContext();
  const mergedProps = react$1.mergeProps(toast.getCloseTriggerProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
ToastCloseTrigger.displayName = "ToastCloseTrigger";

exports.ToastCloseTrigger = ToastCloseTrigger;
