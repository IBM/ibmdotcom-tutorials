'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useToastContext = require('./use-toast-context.cjs');

const ToastTitle = react.forwardRef((props, ref) => {
  const toast = useToastContext.useToastContext();
  const mergedProps = react$1.mergeProps(toast.getTitleProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
ToastTitle.displayName = "ToastTitle";

exports.ToastTitle = ToastTitle;
